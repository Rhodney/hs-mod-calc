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

// --Blueprints Required
// --Unlock Price
// --Research Time
// --Additional Hydrogen Use
// --Activation Cost
// --Install Price
const paramsNames = {
  TransportCapacity: [
    // Additional Slots
  ],
  ShipmentComputer: [
    // Bonus Reward
  ],
  Trader: [
    // Trade Boost
    // Effect Duration
    // Shipment Reward Bonus
  ],
  Rush: [
    // Speed Increase Per Shipment
  ],
  TradeBurst: [
    // Threshold
    // Bonus Reward
    // Effect Duration
  ],
  ShipmentDrone: [
    // Total Cargo Slots
    // Bonus Per Additional Shipment
    // Max Bonus
  ],
  Offload: [
    // Payoff
    // Effect Duration
  ],
  ShipmentBeam: [
    // Max Shipments
  ],
  Entrust: [
    // Effect Range
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
    // Effect Duration (White Star)
    // Mining Speed
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
    // Effect Duration
    // Effect Duration (White Star)
  ],
  Crunch: [
    // Max Amount
  ],
  Genesis: [
    // Max New Asteroids
    // Max New Hydrogen
  ],
  HydroRocket: [
    // Required Hydrogen
    // Hull Strength
    // Explosion Damage
    // Explosion Range
  ],
  MiningDrone: [
    // Hull Strength
    // Mining Speed
    // Total Hydrogen Capacity
  ],
  /////////////// weapons
  WeakBattery: [
    // Damage Per Second
    // Damage Per Hour (White Star)
  ],
  Battery: [
    // Damage Per Second
    // Damage Per Hour (White Star)
  ],
  Laser: [
    // Damage Per Second
    // Maximum Damage Per Second
    // Time to Maximum Damage (Red Star)
    // Damage Per Hour (White Star)
    // Maximum Damage Per Hour (White Star)
    // Time to Maximum Damage (White Star)
    // Time to Maximum Damage (Blue Star)
  ],
  MassBattery: [
    // Damage Per Second
    // Damage Per Hour (White Star)
    // Max Targets
  ],
  DualLaser: [
    // Damage Per Second
    // Maximum Damage Per Second
    // Time to Maximum Damage
    // Damage Per Hour (White Star)
    // Maximum Damage Per Hour (White Star)
    // Time to Maximum Damage (White Star)
    // Time to Maximum Damage (Blue Star)
    // Max Targets
  ],
  Barrage: [
    // Damage Per Second
    // Additional Damage Per Enemy
    // Maximum Damage
    // Damage Per Hour (White Star)
    // Additional Damage Per Enemy (White Star)
    // Maximum Damage (White Star)
  ],
  DartLauncher: [
    // Hull Strength
    // Explosion Damage
    // Explosion Range
    // Effect Range
  ],
  /////////////////   shield
  WeakShield: [
    // Shield Strength
  ],
  StandardShield: [
    // Shield Strength
    // Speed Increase
  ],
  PassiveShield: [
    // Shield Strength
  ],
  StrongShield: [
    // Shield Strength
  ],
  MirrorShield: [
    // Shield Strength
    // Damage Mirrored
  ],
  BlastShield: [
    // Shield Strength
    // Effect Range
  ],
  AreaShield: [
    // Shield Strength
    // Effect Range
  ],
  /////////////////   support
  EMP: [
    // Effect Range
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Duration (Blue Star)
  ],
  Teleport: [
    // Effect Range
    // Effect Range (White Star)
    // Effect Range (Blue Star)
    // Maximum Travel Efficiency (Red Star)
  ],
  RedStarExtender: [
    // Life Extension
  ],
  Repair: [
    // Effect Range
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Duration (Blue Star)
    // HP Repair Rate
    // HP Repair Rate (White Star)
    // Total HP Repaired
    // Total HP Repaired (Blue Star)
  ],
  TimeWarp: [
    // Effect Range
    // Real Time Effect Duration
    // Listed Effect Duration
    // Real Time Effect Duration (White Star)
    // Listed Effect Duration (White Star)
    // Time Factor
  ],
  Unity: [
    // Damage Increase Per Player
    // Effect Duration
    // Effect Duration (White Star)
  ],
  Sanctuary: [],
  Stealth: [
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Duration (Blue Star)
  ],
  Fortify: [
    // Damage Reduction
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Duration (Blue Star)
  ],
  Impulse: [
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Duration (Blue Star)
  ],
  AlphaRocket: [
    // Hull Strength
    // Explosion Damage
    // Explosion Range
  ],
  Salvage: [
    // Hull Repaired Per Destroyed Ship
    // Hull Repaired Per Destroyed Ship (White Star)
  ],
  Supress: [
    // Effect Range
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Range (Blue Star)
  ],
  Destiny: [
    // Effect Range
    // Area Damage
    // Area Damage (White Star)
    // Area Damage (Blue Star)
  ],
  Barrier: [
    // Effect Range
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Range (Blue Star)
    // Effect Duration (Blue Star)
  ],
  Vengeance: [
    // Hull Strength Threshold
    // Effect Range
    // Area Damage
    // Area Damage (White Star)
    // Area Damage (Blue Star)
  ],
  DeltaRocket: [
    // Hull Strength
    // Explosion Damage
    // Explosion Range
  ],
  Leap: [
    // Activation Delay
    // Activation Delay (White Star)
    // Disable Time
    // Disable Time (White Star)
  ],
  Bond: [
    // Effect Range
    // Effect Duration
    // Effect Duration (White Star)
    // Effect Range
    // Effect Duration (Blue Star)
  ],
  AlphaDrone: [
    // Damage Per Second
    // Damage Per Hour (White Star)
    // Hull Strength
  ],
  Suspend: [
    // Effect Range
    // Real Time Effect Duration
    // Listed Effect Duration
    // Real Time Effect Duration (White Star)
    // Listed Effect Duration (White Star)
    // Time Factor
  ],
  OmegaRocket: [
    // Hull Strength
    // Explosion Damage
    // Explosion Range
    // Neutralized Damage
    // Neutralized Damage Range
  ],
};

module.exports = {
  modulesByTypes,
};
