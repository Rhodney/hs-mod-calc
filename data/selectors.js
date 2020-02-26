import { modulesData, projectilesData, capitalShipsData } from './moduleData';
import { ModuleParamsByName } from './paramsGetters';

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
  const moduleInfo = modulesData[key];
  const rocketsInfo = projectilesData[projectileKeys[key]] || null;
  const dronesInfo = capitalShipsData[droneKeys[key]] || null;

  let allModuleInfo = { ...dronesInfo, ...rocketsInfo, ...moduleInfo };

  if (ModuleParamsByName[key]) {
    const a = {
      MODULE: key,
      PARAMS: ModuleParamsByName[key]({ ...dronesInfo, ...rocketsInfo, ...moduleInfo }, level),
    };
    console.log(JSON.stringify(a, true, 2));
  }

  console.log(allModuleInfo);

  Object.entries(allModuleInfo)
    .filter(([, paramValue]) => Array.isArray(paramValue))
    .forEach(([paramKey, paramValue]) => {
      if (level === 0) {
        levelParams[paramKey] = 0;
      } else {
        levelParams[paramKey] = paramValue[level - 1];
      }
    });

  const trash = ['UnlockPrice', 'UnlockTime', 'WhiteStarScore', 'BSScore'];

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
