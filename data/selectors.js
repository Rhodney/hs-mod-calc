import { modulesData, projectilesData, capitalShipsData } from './moduleData';
import { stringifyTerm } from '../pages/utils';

export function getModulePrices(key) {
  const raw = modulesData[key].UnlockPrice;

  if (Array.isArray(raw)) {
    return raw.map((price) => +price);
  }

  return [+raw];
}

export function getModuleTerms(key) {
  const raw = modulesData[key].UnlockTime;

  if (Array.isArray(raw)) {
    return raw.map((time) => +time);
  }

  return [+raw];
}

export function getModuleParamLabel(key) {
  const trKey = {
    UnlockBlueprints: `Unlock blueprints`,
    FuelUseIncrease: `Additional hydrogen use`,
    BCCost: `Install price`,
    BSScore: `Blue Star score`,
    WhiteStarScore: `White Star score`,
    ActivationDelay: `Cooldown`,
    ActivationPrep: `Activation delay`,
    ActivationPrepWS: `Activation delay (WS)`,
    ActivationPrepBS: `Activation delay (BS)`,
    EffectRadius: `Effect Range`,
    ActivationFuelCost: `Activation cost`,
    SpawnLifetime: `Lifetime`,
    SpawnLifetime_WS: `Lifetime (WS)`,
    EffectRadiusWS: `Effect range (WS)`,
    EffectRadiusBS: `Effect range (BS)`,
    WaypointShipmentRewardBonus: `Reward bonus`,
    EffectDurationx10: `Effect duration`,
    EffectDurationx10BS: `Effect duration (BS)`,
    EffectDurationx10WS: `Effect duration (WS)`,
    JobPayoutIncreasePercent: `Shipment reward bonus`,
    SpeedIncreasePerShipment: `Speed increase`,
    TradeBurstShipmentsStart: `Threshold`,
    TradeBurstShipmentBonus: `Bonus reward`,
    SpawnCapacity: `Total cargo slots`,
    DroneShipmentBonus: `Bonus per additional shipment`,
    TradeStationDeliverReward: `Payoff`,
    TeleportShipments: `Max shipments`,
    APTPIOTTP: null,
    ExtraTradeSlots: `Additional slots`,
    MiningSpeedModifierPct: `Mining speed`,
    ExtraMineralStorage: `Activation storage`,
    IncreaseSectorHydroPct: `Hydro increase`,
    HydroUploadPct: `Hydro upload`,
    UnityBoostPercent: `Damage increase per player`,
    InstantHydrogenCollected: `Max amount`,
    MaxNewAsteroids: `Max new asteroids`,
    HydroPerNewAsteroid: `Hydro per new asteroid`,
    HydrogenCapacity: `Hydrogen capacity`,
    InitialBlueprints: ``,
    MiningSpeed: `Mining speed`,
    DPS: `Damage per second`,
    MaxDPS: `Max damage per second`,
    MaxTargets: `Max targets`,
    AdditionalDPSPerTargetInRange: `Additional damage`,
    ShieldStrength: `Shield strength`,
    SpeedIncrDuringActivation: `Speed increase`,
    MirrorDamagePct: `Damage mirrored`,
    RedStarLifeExtention: `Life extention`,
    RepairHullPointsPerSecond: `HP repaired per second`,
    TimeWarpFactor: `Time factor`,
    DamageReductionPct: `Damage reduction`,
    SalvageHullPercent: `Hull repaired per ship`,
    AOEDamage: `Area damage`,
    AOEDamage_WS: `Area damage (WS)`,
    AOEDamage_BS: `Area damage (BS)`,
    Speed: `Speed`,
    HP: `Hull strength`,
    Damage: `Explosion damage`,
    DamageRange: `Explosion range`,
    DamageWhenNeutralized: `Damage when neutralized`,
    DamageRangeWhenNeutralized: `Damage range when neutralized`,
  }[key];

  return trKey || key;
}

export function getModuleName(key) {
  return modulesData[key].eng.name;
}

function justNumber(paramName) {
  return (moduleData, level) => {
    if (level === 0) {
      return 0;
    }

    return +moduleData[paramName][level - 1];
  };
}

const UnlockBlueprints = createParam('Unlock blueprints', justNumber('UnlockBlueprints'));
const ExtraTradeSlots = createParam('Extra trade slots', justNumber('ExtraTradeSlots'));
const BCCost = createParam('Instal cost', justNumber('BCCost'), (val) => `${val} credits`);
const ActivationDelay = createParam('Cooldown', justNumber('ActivationDelay'), stringifyTerm);
const HP = createParam('HP', justNumber('HP'));
const SpawnLifetime_WS = createParam(
  'Lifetime WS',
  justNumber('SpawnLifetime_WS'),
  (_) => stringifyTerm((_ * 60 * 60) / 6) // sixHours
);

const ModuleParamsByName = {
  TransportCapacity: createModuleParamsGetter('TransportCapacity')
    .add(UnlockBlueprints)
    .add(ExtraTradeSlots)
    .add(BCCost),
  Recall: createModuleParamsGetter('Recall'),
  MiningDrone: createModuleParamsGetter('MiningDrone').add(HP),
  ShipmentDrone: createModuleParamsGetter('ShipmentDrone') // ["UnlockBlueprints","ActivationDelay","SpawnLifetime","SpawnLifetime_WS","SpawnCapacity","DroneShipmentBonus","ActivationFuelCost","BCCost"]
    .add(UnlockBlueprints)
    .add(ActivationDelay)
    .add(SpawnLifetime_WS)
    .add(BCCost),
};

export function getModuleLevelParams(key, level) {
  const projectileKeys = {
    AlphaRocket: 'Alpha',
    DeltaRocket: 'Delta',
    OmegaRocket: 'Omega',
    DartLauncher: 'Dart',
    HydroRocket: 'HydroRocket',
  };

  const droneKeys = {
    MiningDrone: 'MiningDrone',
    ShipmentDrone: 'ShipmentDrone',
    AlphaDrone: 'AlphaDrone',
  };

  const levelParams = {};
  const allModuleInfo = modulesData[key];
  const rocketsInfo = projectilesData[projectileKeys[key]] || null;
  const dronesInfo = capitalShipsData[droneKeys[key]] || null;

  if (ModuleParamsByName[key]) {
    const a = {
      PARAMS: ModuleParamsByName[key].params({ ...dronesInfo, ...rocketsInfo, ...allModuleInfo }, level),
    };

    console.log(JSON.stringify(a, true, 2));
  }

  console.log({ ...dronesInfo, ...rocketsInfo, ...allModuleInfo });

  Object.entries({ ...dronesInfo, ...rocketsInfo, ...allModuleInfo })
    .filter(([, paramValue]) => Array.isArray(paramValue))
    .forEach(([paramKey, paramValue]) => {
      if (level === 0) {
        levelParams[paramKey] = 0;
      } else {
        levelParams[paramKey] = paramValue[level - 1];
      }
    });

  const trash = ['UnlockPrice', 'UnlockTime', 'WhiteStarScore', 'FuelUseIncrease'];

  console.log('-------------------------');
  console.log(key);
  console.log(levelParams);
  console.log(
    JSON.stringify(
      Object.keys(levelParams).filter((key) => !trash.includes(key)) //
    )
  );

  return levelParams;
}

export function getModuleMaxLevel(key) {
  if (Array.isArray(modulesData[key].UnlockBlueprints)) {
    return modulesData[key].UnlockBlueprints.length;
  }

  return 1;
}

function createParam(label, getter, format = (_) => `${_}`) {
  return (moduleData, level) => {
    return {
      label,
      value: getter(moduleData, level),
      formatted: format(getter(moduleData, level)),
    };
  };
}

function createModuleParamsGetter(moduleId) {
  let params = [];

  let getter = {};

  getter.add = function(getFunc) {
    params.push(getFunc);
    return getter;
  };
  getter.params = function(moduleData, level) {
    let result = [];

    params.forEach((getFunc) => {
      result.push(getFunc(moduleData, level));
    });

    return result;
  };

  return getter;
}
