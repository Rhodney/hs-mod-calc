import { stringifyTerm } from '../pages/utils';
import Result from 'result-js';

Result.registerGlobals();

function arrayOfNumber(paramName) {
  return (moduleData, level) => {
    return isIn(paramName, moduleData).andThen((paramData) => +paramData[level - 1]);
  };
}

function singleNumber(paramName) {
  return (moduleData) => {
    return isIn(paramName, moduleData).andThen((paramData) => +paramData);
  };
}

const UnlockBlueprints = createParam('Unlock blueprints', arrayOfNumber('UnlockBlueprints'));
const FuelUseIncrease = createParam('FuelUse increase', arrayOfNumber('FuelUseIncrease'));
const ExtraTradeSlots = createParam('Extra trade slots', arrayOfNumber('ExtraTradeSlots'));
const BCCost = createParam('Instal cost', arrayOfNumber('BCCost'), (val) => `${val} credits`);
const ActivationDelay = createParam('Cooldown', arrayOfNumber('ActivationDelay'), stringifyTerm);
const HP = createParam('HP', arrayOfNumber('HP'));
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
  arrayOfNumber('SpawnLifetime_WS'),
  (_) => stringifyTerm((_ * 60 * 60) / 6) // sixHours
);

function withCommon(specific) {
  return [UnlockBlueprints, ...specific, FuelUseIncrease, BCCost];
}
export const ModuleParamsByName = {
  // TransportCapacity: moduleParamsTable('TransportCapacity', withCommon([ExtraTradeSlots])),
  // ShipmentComputer: moduleParamsTable('ShipmentComputer', withCommon([WaypointShipmentRewardBonus])),
  // Trader: moduleParamsTable(
  //   'Trader',
  //   withCommon([ActivationDelay, EffectDurationx10, JobPayoutIncreasePercent, ActivationFuelCost])
  // ),
  // Rush: moduleParamsTable('Rush', withCommon([SpeedIncreasePerShipment])),
  // TradeBurst: moduleParamsTable(
  //   'TradeBurst',
  //   withCommon([
  //     ActivationDelay,
  //     EffectDurationx10,
  //     TradeBurstShipmentsStart,
  //     TradeBurstShipmentBonus,
  //     ActivationFuelCost,
  //   ])
  // ),
  // ShipmentDrone: moduleParamsTable(
  //   'ShipmentDrone',
  //   withCommon([
  //     ActivationDelay,
  //     SpawnLifetime,
  //     SpawnLifetime_WS,
  //     SpawnCapacity,
  //     DroneShipmentBonus,
  //     ActivationFuelCost,
  //   ])
  // ),
  // Offload: moduleParamsTable(
  //   'Offload',
  //   withCommon([ActivationDelay, EffectDurationx10, TradeStationDeliverReward, ActivationFuelCost])
  // ),
  // ShipmentBeam: moduleParamsTable('ShipmentBeam', withCommon([ActivationDelay, TeleportShipments, ActivationFuelCost])),
  // Entrust: moduleParamsTable('Entrust', withCommon([ActivationDelay, EffectRadius, ActivationFuelCost])),
  // Dispatch: moduleParamsTable('Dispatch', withCommon([APTPIOTTP, ActivationDelay, ActivationFuelCost])),
  // Recall: moduleParamsTable('Recall', withCommon([])),
  // MiningBoost: moduleParamsTable(
  //   'MiningBoost',
  //   withCommon([ActivationDelay, EffectDurationx10, MiningSpeedModifierPct, ActivationFuelCost])
  // ),
  // MineralStorageCapacity: moduleParamsTable('MineralStorageCapacity', withCommon([ExtraMineralStorage])),
  // Enrich: moduleParamsTable('Enrich', withCommon([ActivationDelay, IncreaseSectorHydroPct])),
  // MassMining: moduleParamsTable('MassMining', withCommon([MiningSpeedModifierPct])),
  // HydrogenUpload: moduleParamsTable('HydrogenUpload', withCommon([ActivationDelay, HydroUploadPct])),
  // MiningUnity: moduleParamsTable(
  //   'MiningUnity',
  //   withCommon([ActivationDelay, EffectDurationx10, UnityBoostPercent, ActivationFuelCost])
  // ),
  // Crunch: moduleParamsTable('Crunch', withCommon([ActivationDelay, InstantHydrogenCollected])),
  // Genesis: moduleParamsTable('Genesis', withCommon([ActivationDelay, MaxNewAsteroids, HydroPerNewAsteroid])),
  // HydroRocket: moduleParamsTable('HydroRocket', withCommon([HP, Damage, DamageRange, ActivationDelay])),
  // MiningDrone: moduleParamsTable(
  //   'MiningDrone',
  //   withCommon([
  //     HP,
  //     HydrogenCapacity,
  //     MiningPeriod,
  //     ActivationDelay,
  //     EffectRadius,
  //     EffectRadiusWS,
  //     SpawnLifetime,
  //     SpawnLifetime_WS,
  //   ])
  // ),
  // WeakBattery: moduleParamsTable('WeakBattery', withCommon([])),
  // Battery: moduleParamsTable('Battery', withCommon([EffectRadius, DPS])),
  // Laser: moduleParamsTable('Laser', withCommon([EffectRadius, DPS, MaxDPS])),
  // MassBattery: moduleParamsTable('MassBattery', withCommon([EffectRadius, DPS, MaxTargets])),
  // DualLaser: moduleParamsTable('DualLaser', withCommon([EffectRadius, DPS, MaxDPS, MaxTargets])),
  // Barrage: moduleParamsTable('Barrage', withCommon([EffectRadius, DPS, AdditionalDPSPerTargetInRange])),
  // DartLauncher: moduleParamsTable('DartLauncher', withCommon([HP, Damage, DamageRange, ActivationDelay, EffectRadius])),
  // WeakShield: moduleParamsTable(
  //   'WeakShield',
  //   withCommon([ActivationDelay, EffectDurationx10, ShieldStrength, ActivationFuelCost])
  // ),
  // StandardShield: moduleParamsTable(
  //   'StandardShield',
  //   withCommon([ActivationDelay, SpeedIncrDuringActivation, EffectDurationx10, ShieldStrength, ActivationFuelCost])
  // ),
  // PassiveShield: moduleParamsTable('PassiveShield', withCommon([ShieldStrength])),
  // StrongShield: moduleParamsTable(
  //   'StrongShield',
  //   withCommon([ActivationDelay, EffectDurationx10, ShieldStrength, ActivationFuelCost])
  // ),
  // MirrorShield: moduleParamsTable(
  //   'MirrorShield',
  //   withCommon([ActivationDelay, EffectDurationx10, ShieldStrength, MirrorDamagePct, ActivationFuelCost])
  // ),
  // BlastShield: moduleParamsTable(
  //   'BlastShield',
  //   withCommon([ActivationDelay, EffectRadius, EffectDurationx10, ShieldStrength, ActivationFuelCost])
  // ),
  // AreaShield: moduleParamsTable(
  //   'AreaShield',
  //   withCommon([ActivationDelay, EffectRadius, EffectDurationx10, ShieldStrength, ActivationFuelCost])
  // ),
  // EMP: moduleParamsTable(
  //   'EMP',
  //   withCommon([ActivationDelay, EffectRadius, EffectDurationx10, EffectDurationx10BS, ActivationFuelCost])
  // ),
  // Teleport: moduleParamsTable(
  //   'Teleport',
  //   withCommon([ActivationDelay, EffectRadius, EffectRadiusWS, EffectRadiusBS, ActivationFuelCost])
  // ),
  // RedStarExtender: moduleParamsTable(
  //   'RedStarExtender',
  //   withCommon([ActivationDelay, EffectRadius, RedStarLifeExtention, ActivationFuelCost])
  // ),
  // Repair: moduleParamsTable(
  //   'Repair',
  //   withCommon([
  //     ActivationDelay,
  //     EffectRadius,
  //     EffectDurationx10,
  //     EffectDurationx10BS,
  //     RepairHullPointsPerSecond,
  //     ActivationFuelCost,
  //   ])
  // ),
  // TimeWarp: moduleParamsTable(
  //   'TimeWarp',
  //   withCommon([ActivationDelay, EffectRadius, EffectDurationx10, TimeWarpFactor, ActivationFuelCost])
  // ),
  // Unity: moduleParamsTable(
  //   'Unity',
  //   withCommon([ActivationDelay, EffectDurationx10, UnityBoostPercent, ActivationFuelCost])
  // ),
  // Sanctuary: moduleParamsTable('Sanctuary', withCommon([])),
  // Stealth: moduleParamsTable(
  //   'Stealth',
  //   withCommon([ActivationDelay, EffectDurationx10, EffectDurationx10WS, EffectDurationx10BS, ActivationFuelCost])
  // ),
  // Fortify: moduleParamsTable(
  //   'Fortify',
  //   withCommon([ActivationDelay, EffectDurationx10, EffectDurationx10BS, DamageReductionPct, ActivationFuelCost])
  // ),
  // Impulse: moduleParamsTable(
  //   'Impulse',
  //   withCommon([ActivationDelay, EffectDurationx10, EffectDurationx10BS, MaxImpulse, ActivationFuelCost])
  // ),
  // AlphaRocket: moduleParamsTable(
  //   'AlphaRocket',
  //   withCommon([HP, Damage, DamageRange, ActivationDelay, ActivationFuelCost])
  // ),
  // Salvage: moduleParamsTable('Salvage', withCommon([SalvageHullPercent])),
  // Supress: moduleParamsTable(
  //   'Supress',
  //   withCommon([
  //     ActivationDelay,
  //     EffectRadius,
  //     EffectRadiusBS,
  //     EffectDurationx10,
  //     EffectDurationx10WS,
  //     ActivationFuelCost,
  //   ])
  // ),
  // Destiny: moduleParamsTable(
  //   'Destiny',
  //   withCommon([ActivationDelay, EffectRadius, AOEDamage, AOEDamage_WS, AOEDamage_BS, ActivationFuelCost])
  // ),
  // Barrier: moduleParamsTable(
  //   'Barrier',
  //   withCommon([
  //     ActivationDelay,
  //     EffectRadius,
  //     EffectRadiusBS,
  //     EffectDurationx10,
  //     EffectDurationx10BS,
  //     ActivationFuelCost,
  //   ])
  // ),
  // Vengeance: moduleParamsTable(
  //   'Vengeance',
  //   withCommon([ActivationDelay, EffectRadius, EffectRadiusWS, AOEDamage, AOEDamage_WS, AOEDamage_BS])
  // ),
  // DeltaRocket: moduleParamsTable(
  //   'DeltaRocket',
  //   withCommon([HP, Damage, DamageRange, ActivationDelay, ActivationFuelCost])
  // ),
  // Leap: moduleParamsTable(
  //   'Leap',
  //   withCommon([ActivationPrepWS, ActivationDelay, EffectDurationx10, ActivationFuelCost])
  // ),
  // Bond: moduleParamsTable(
  //   'Bond',
  //   withCommon([
  //     ActivationDelay,
  //     EffectRadius,
  //     EffectRadiusWS,
  //     EffectRadiusBS,
  //     EffectDurationx10,
  //     EffectDurationx10BS,
  //     ActivationFuelCost,
  //   ])
  // ),
  // AlphaDrone: moduleParamsTable(
  //   'AlphaDrone',
  //   withCommon([HP, ActivationDelay, SpawnLifetime, SpawnLifetime_WS, ActivationFuelCost])
  // ),
  // Suspend: moduleParamsTable(
  //   'Suspend',
  //   withCommon([ActivationDelay, EffectRadius, EffectDurationx10, TimeWarpFactor, ActivationFuelCost])
  // ),
  // OmegaRocket: moduleParamsTable(
  //   'OmegaRocket',
  //   withCommon([
  //     HP,
  //     Damage,
  //     DamageWhenNeutralized,
  //     DamageRange,
  //     DamageRangeWhenNeutralized,
  //     ActivationDelay,
  //     EffectRadius,
  //     ActivationFuelCost,
  //   ])
  // ),
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

function moduleParamsTable(moduleId) {
  let params = [];

  function getterParams(moduleData, level) {
    let result = [];

    params.forEach((getFunc) => {
      getFunc(moduleData, level)
        .andThen((moduleParamInfo) => {
          result.push(moduleParamInfo);
        })
        .orElse(({ key }) => {
          console.warn(`Param "${key}" is not found in module "${moduleId}"`);
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
