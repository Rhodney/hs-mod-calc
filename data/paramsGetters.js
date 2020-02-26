import { stringifyTerm } from '../pages/utils';
import Result from 'result-js';

Result.registerGlobals();

function justNumber(paramName) {
  return (moduleData, level) => {
    return isIn(paramName, moduleData)
      .andThen((paramData) => {
        if (level === 0) {
          return 0;
        }

        if (Array.isArray(paramData)) {
          return +paramData[level - 1];
        }

        return +paramData;
      })
      .mapErr(({ key }) => key);
  };
}

const UnlockBlueprints = createParam('Unlock blueprints', justNumber('UnlockBlueprints'));
const FuelUseIncrease = createParam('FuelUse increase', justNumber('FuelUseIncrease'));
const ExtraTradeSlots = createParam('Extra trade slots', justNumber('ExtraTradeSlots'));
const BCCost = createParam('Instal cost', justNumber('BCCost'), (val) => `${val} credits`);
const ActivationDelay = createParam('Cooldown', justNumber('ActivationDelay'), stringifyTerm);
const HP = createParam('HP', justNumber('HP'));
const SalvageHullPercentRS = createParam(
  'Salvage Hull Percent (RS + BS)',
  (moduleData, level) => {
    return isIn('SalvageHullPercent', moduleData)
      .andThen((paramData) => {
        if (level === 0) {
          return 0;
        }

        let [rsValue] = paramData[level - 1].split('!');
        return +rsValue;
      })
      .mapErr(({ key }) => key);
  },
  (val) => `${val}%`
);
const SalvageHullPercentWS = createParam(
  'Salvage Hull Percent (WS)',
  (moduleData, level) => {
    return isIn('SalvageHullPercent', moduleData)
      .andThen((paramData) => {
        if (level === 0) {
          return 0;
        }

        let [, wsValue] = paramData[level - 1].split('!');
        return +wsValue;
      })
      .mapErr(({ key }) => key);
  },
  (val) => `${val}%`
);
const SpawnLifetime_WS = createParam(
  'Lifetime WS',
  justNumber('SpawnLifetime_WS'),
  (_) => stringifyTerm((_ * 60 * 60) / 6) // sixHours
);

export const ModuleParamsByName = {
  TransportCapacity: createModuleParamsGetter('TransportCapacity')
    .add(UnlockBlueprints)
    .add(ExtraTradeSlots)
    .add(FuelUseIncrease)
    .add(HP) // его нет
    .add(BCCost),
  Recall: createModuleParamsGetter('Recall'),
  MiningDrone: createModuleParamsGetter('MiningDrone').add(HP),
  Sanctuary: createModuleParamsGetter('Sanctuary').add(UnlockBlueprints),
  ShipmentDrone: createModuleParamsGetter('ShipmentDrone') // ["UnlockBlueprints","ActivationDelay","SpawnLifetime","SpawnLifetime_WS","SpawnCapacity","DroneShipmentBonus","ActivationFuelCost","BCCost"]
    .add(UnlockBlueprints)
    .add(ActivationDelay)
    .add(SalvageHullPercentRS) // его нет
    .add(SpawnLifetime_WS)
    .add(BCCost),
  Salvage: createModuleParamsGetter('Salvage')
    .add(UnlockBlueprints)
    .add(SalvageHullPercentRS)
    .add(SalvageHullPercentWS)
    .add(BCCost),
};

function createParam(label, getter, format = (_) => `${_}`) {
  return (moduleData, level) => {
    return getter(moduleData, level).andThen((value) => {
      return {
        label,
        value,
        formatted: format(value),
      };
    });
  };
}

function createModuleParamsGetter(moduleId) {
  let params = [];

  function getterParams(moduleData, level) {
    let result = [];

    params.forEach((getFunc) => {
      getFunc(moduleData, level)
        .andThen((moduleParamInfo) => {
          result.push(moduleParamInfo);
        })
        .orElse((err) => {
          console.warn(`Param "${err}" is not found in module "${moduleId}"`);
        });
    });

    return result;
  }

  getterParams.add = function(getFunc) {
    params.push(getFunc);
    return getterParams;
  };

  return getterParams;
}

function isIn(key, obj) {
  if (key in obj) {
    return Ok(obj[key]);
  }

  return Err({ key, obj });
}
