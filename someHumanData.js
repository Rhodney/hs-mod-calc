var modulesByTypes = {
  trade: [
    'TransportCapacity',
    'ShipmentComputer',
    'Trader',
    'Rush',
    'TradeBurst',
    'ShipmentDrone',
    'Offload',
    'ShipmentBeam',
    'Entrust',
    'Dispatch',
    'Recall',
  ],
  mining: [
    'MiningBoost',
    'MineralStorageCapacity',
    'Enrich',
    'MassMining',
    'HydrogenUpload',
    'MiningUnity',
    'Crunch',
    'Genesis',
    'HydroRocket',
    'MiningDrone',
  ],
  support: [
    'EMP',
    'Teleport',
    'RedStarExtender',
    'Repair',
    'TimeWarp',
    'Unity',
    'Sanctuary',
    'Stealth',
    'Fortify',
    'Impulse',
    'AlphaRocket',
    'Salvage',
    'Supress',
    'Destiny',
    'Barrier',
    'Vengeance',
    'DeltaRocket',
    'Leap',
    'Bond',
    'AlphaDrone',
    'Suspend',
    'OmegaRocket',
  ],
  shield: [
    'WeakShield',
    'StandardShield',
    'PassiveShield',
    'StrongShield',
    'MirrorShield',
    'BlastShield',
    'AreaShield',
  ],
  weapon: ['WeakBattery', 'Battery', 'Laser', 'MassBattery', 'DualLaser', 'Barrage', 'DartLauncher'],
};

// All

// Blueprints Required
// Unlock Price
// Research Time
// Additional Hydrogen Use
// Activation Cost

const paramsNames = {
  TransportCapacity: [
    // Additional Slots
    // Additional Hydrogen Use
  ],
  ShipmentComputer: [
    // Bonus Reward
    // Additional Hydrogen Use
  ],
  Trader: [
    // Trade Boost
    // Effect Duration
    // Shipment Reward Bonus
    // Activation Cost
  ],
  Rush: [
    // Speed Increase Per Shipment
    // Additional Hydrogen Use
  ],
  TradeBurst: [
    // Threshold
    // Bonus Reward
    // Effect Duration
    // Activation Cost
  ],
  ShipmentDrone: [
    // Total Cargo Slots
    // Bonus Per Additional Shipment
    // Max Bonus
    // Activation Cost
  ],
  Offload: [
    // Payoff
    // Effect Duration
    // Activation Cost
  ],
  ShipmentBeam: [
    // Max Shipments
    // Activation Cost
  ],
  Entrust: [
    // Effect Range
    // Activation Cost
  ],
  Dispatch: [
    // Preparation Time Per Item
    // Preparation Time Per Item (White Star)
  ],
  Recall: [
    // -
  ],
  /////////////////////////////////////////////
  MiningBoost: [
    // Effect Duration
    //Effect Duration (White Star)
    //Mining Speed
  ],
  MineralStorageCapacity: [
    // Additional Storage
  ],
  Enrich: [
    // Hydrogen Increase
    //Max Enrich Amount
  ],
  MassMining: [
    // Mining Speed
  ],
  HydrogenUpload: [
    // Percent Uploaded
  ],
  MiningUnity: [
    // Speed Increase Per Player
    //Effect Duration
    //Effect Duration (White Star)
  ],
  Crunch: [
    // Max Amount
  ],
  Genesis: [
    // Max New Asteroids
    //Max New Hydrogen
  ],
  HydroRocket: [
    // Required Hydrogen
    //Hull Strength
    //Explosion Damage
    //Explosion Range
  ],
  MiningDrone: [
    // Hull Strength
    // Mining Speed
    // Total Hydrogen Capacity
  ],
  /////////////////
};

module.exports = {
  modulesByTypes,
};
