import { stringifyTerm } from '../pages/utils';

function justNumber(paramName) {
  return (moduleData, level) => {
    if (!(paramName in moduleData)) {
      return;
    }

    const params = moduleData[paramName];

    if (level === 0) {
      return 0;
    }

    if (Array.isArray(params)) {
      return +moduleData[paramName][level - 1];
    }

    return +params;
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
    if (level === 0) {
      return 0;
    }

    let [rsValue] = moduleData.SalvageHullPercent[level - 1].split('!');
    return +rsValue;
  },
  (val) => `${val}%`
);
const SalvageHullPercentWS = createParam(
  'Salvage Hull Percent (WS)',
  (moduleData, level) => {
    if (level === 0) {
      return 0;
    }

    let [, wsValue] = moduleData.SalvageHullPercent[level - 1].split('!');
    return +wsValue;
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
    let value = getter(moduleData, level);

    if (value == null) {
      console.warn(`Module ${moduleData.Name} does not have some param`);
      return;
    }

    return {
      label,
      value,
      formatted: format(value),
    };
  };
}

function createModuleParamsGetter(moduleId) {
  let params = [];

  function getterParams(moduleData, level) {
    let result = [];

    params.forEach((getFunc) => {
      let moduleParamInfo = getFunc(moduleData, level);
      if (moduleParamInfo) {
        result.push(moduleParamInfo);
      }
    });

    return result;
  }

  getterParams.add = function(getFunc) {
    params.push(getFunc);
    return getterParams;
  };

  return getterParams;
}
