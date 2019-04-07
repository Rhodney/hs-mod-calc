var modulesData = {
  cargoBayExtension: {
    id: "cargoBayExtension",
    name: "Cargo Bay Extension",
    prices: [
      1000,
      5000,
      25000,
      50000,
      100000,
      250000,
      500000,
      1000000,
      2000000,
      4000000
    ],
    term: ["5m", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },
  shipmentComputer: {
    id: "shipmentComputer",
    name: "Shipment Computer",
    prices: [
      8000,
      12000,
      25000,
      50000,
      100000,
      250000,
      500000,
      1000000,
      2000000,
      4000000
    ],
    term: ["4h", "8h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d"]
  },
  rush: {
    id: "rush",
    name: "Rush",
    prices: [
      15000,
      25000,
      50000,
      100000,
      200000,
      350000,
      550000,
      800000,
      2000000,
      5000000
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },
  tradeBurst: {
    id: "tradeBurst",
    name: "Trade Burst",
    prices: [
      20000,
      35000,
      65000,
      100000,
      200000,
      350000,
      700000,
      1000000,
      2500000,
      5000000
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d"]
  },
  shipmentDrone: {
    id: "shipmentDrone",
    name: "Shipment Drone",
    prices: [
      150000,
      200000,
      350000,
      500000,
      750000,
      1000000,
      2000000,
      3000000,
      5000000,
      8000000
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  offload: {
    id: "offload",
    name: "Offload",
    prices: [
      100000,
      120000,
      140000,
      160000,
      180000,
      200000,
      250000,
      300000,
      400000,
      500000
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "10d"]
  },
  shipmentBeam: {
    id: "shipmentBeam",
    name: "Shipment Beam",
    prices: [
      80000,
      100000,
      120000,
      140000,
      160000,
      180000,
      250000,
      300000,
      350000,
      400000
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },
  entrust: {
    id: "entrust",
    name: "Entrust",
    prices: [
      100000,
      160000,
      250000,
      400000,
      650000,
      1000000,
      1500000,
      2500000,
      4000000,
      6000000
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "10d"]
  },
  dispatch: {
    id: "dispatch",
    name: "Dispatch",
    prices: [
      200000,
      300000,
      400000,
      500000,
      600000,
      800000,
      1000000,
      3500000,
      6000000,
      8000000
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },
  recall: {
    id: "recall",
    name: "Recall",
    prices: [
      200000,
      300000,
      400000,
      500000,
      600000,
      800000,
      1000000,
      3500000,
      6000000,
      8000000
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },
  ////////////////////////////////////////// Mining

  miningBoost: {
    id: "miningBoost",
    name: "Mining Boost",
    prices: [
      8000,
      12000,
      25000,
      50000,
      100000,
      250000,
      500000,
      1000000,
      2000000,
      4000000
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  hydrogenBayExtension: {
    id: "hydrogenBayExtension",
    name: "HydrogenBayExtension",
    prices: [
      2500,
      5000,
      20000,
      50000,
      100000,
      200000,
      500000,
      1000000,
      2000000,
      4000000
    ],
    term: ["2h", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  enrich: {
    id: "enrich",
    name: "Enrich",
    prices: [
      8000,
      12000,
      25000,
      50000,
      100000,
      250000,
      500000,
      1000000,
      2000000,
      4000000
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  remoteMining: {
    id: "remoteMining",
    name: "RemoteMining",
    prices: [
      15000,
      25000,
      50000,
      100000,
      200000,
      500000,
      1000000,
      2000000,
      4000000,
      8000000
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },

  hydrogenUpload: {
    id: "hydrogenUpload",
    name: "HydrogenUpload",
    prices: [
      20000,
      35000,
      65000,
      100000,
      200000,
      350000,
      700000,
      1000000,
      2500000,
      5000000
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },

  miningUnity: {
    id: "miningUnity",
    name: "Mining Unity",
    prices: [
      30000,
      50000,
      75000,
      100000,
      200000,
      350000,
      700000,
      1000000,
      2500000,
      5000000
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },

  crunch: {
    id: "crunch",
    name: "Crunch",
    prices: [
      150000,
      230000,
      360000,
      550000,
      850000,
      1300000,
      2000000,
      3000000,
      5000000,
      8000000
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d", "7d"]
  },

  genesis: {
    id: "genesis",
    name: "Genesis",
    prices: [
      200000,
      250000,
      350000,
      500000,
      800000,
      1500000,
      2000000,
      3000000,
      5000000,
      8000000
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d", "7d"]
  },

  miningDrone: {
    id: "miningDrone",
    name: "Mining Drone",
    prices: [
      1000000,
      2000000,
      3000000,
      4000000,
      5000000,
      6000000,
      7000000,
      8000000,
      8000000,
      8000000
    ],
    term: ["3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d", "7d", "7d"]
  },

  // Weapon
  weakBattery: {
    id: "weakBattery",
    name: "Weak Battery",
    prices: [],
    term: []
  },

  battery: {
    id: "battery",
    name: "Battery",
    prices: [
      "2500",
      "5000",
      "12500",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "750000",
      "1000000"
    ],
    term: ["1h", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  laser: {
    id: "laser",
    name: "Laser",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  massBattery: {
    id: "massBattery",
    name: "Mass Battery",
    prices: [
      "15000",
      "25000",
      "50000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000",
      "2000000",
      "5000000"
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },

  dualLaser: {
    id: "dualLaser",
    name: "Dual Laser",
    prices: [
      "25000",
      "50000",
      "75000",
      "100000",
      "200000",
      "350000",
      "700000",
      "1000000",
      "2500000",
      "5000000"
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },

  barrage: {
    id: "barrage",
    name: "Barrage",
    prices: [
      "120000",
      "300000",
      "400000",
      "500000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  dartLauncher: {
    id: "dartLauncher",
    name: "Dart Launcher",
    prices: [
      "4000000",
      "4500000",
      "5000000",
      "5500000",
      "6000000",
      "6500000",
      "7000000",
      "7500000",
      "8000000",
      "8000000"
    ],
    term: ["5d", "6d", "7d", "8d", "9d", "10d", "10d", "10d", "10d", "10d"]
  },

  //Shield
  alphaShield: {
    id: "alphaShield",
    name: "Alpha Shield",
    prices: [
      "2500", //
      "5000",
      "10000",
      "20000",
      "30000"
    ],
    term: ["2h", "4h", "12h", "1d", "2d"]
  },

  deltaShield: {
    id: "deltaShield",
    name: "Delta Shield",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "150000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  passiveShield: {
    id: "passiveShield",
    name: "Passive Shield",
    prices: [
      "15000",
      "25000",
      "50000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000",
      "2000000",
      "5000000"
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },

  omegaShield: {
    id: "omegaShield",
    name: "Omega Shield",
    prices: [
      "30000",
      "45000",
      "75000",
      "100000",
      "200000",
      "350000",
      "700000",
      "1000000",
      "2500000",
      "5000000"
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },

  mirrorShield: {
    id: "mirrorShield",
    name: "Mirror Shield",
    prices: [
      "50000",
      "100000",
      "200000",
      "400000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  blastShield: {
    id: "blastShield",
    name: "Blast Shield",
    prices: [
      "100000",
      "150000",
      "250000",
      "500000",
      "750000",
      "1000000",
      "2000000",
      "4000000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d"]
  },

  areaShield: {
    id: "areaShield",
    name: "Area Shield",
    prices: [
      "200000",
      "300000",
      "400000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000",
      "8000000"
    ],
    term: ["2d", "3d", "4d", "6d", "7d", "7d", "7d", "7d", "7d", "7d"]
  },

  // Support
  emp: {
    id: "emp",
    name: "EMP",
    prices: [
      "2500",
      "5000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["2h", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  teleport: {
    id: "teleport",
    name: "Teleport",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["2h", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  redStarLifeExtender: {
    id: "redStarLifeExtender",
    name: "Red Star Life Extender",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["2h", "4h", "12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  remoteRepair: {
    id: "remoteRepair",
    name: "Remote Repair",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  timeWarp: {
    id: "timeWarp",
    name: "Time Warp",
    prices: [
      "8000",
      "12000",
      "25000",
      "50000",
      "100000",
      "250000",
      "500000",
      "1000000",
      "2000000",
      "4000000"
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },
  unity: {
    id: "unity",
    name: "Unity",
    prices: [
      "12000",
      "25000",
      "45000",
      "90000",
      "170000",
      "300000",
      "600000",
      "1000000",
      "2500000",
      "5000000"
    ],
    term: ["4h", "8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d"]
  },

  sanctuary: {
    id: "sanctuary",
    name: "Sanctuary",
    prices: [
      "50" /// ?????????
    ],
    term: ["1d"]
  },

  stealth: {
    id: "stealth",
    name: "Stealth",
    prices: [
      "25000",
      "50000",
      "75000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000",
      "2000000",
      "5000000"
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },
  fortify: {
    id: "fortify",
    name: "Fortify",
    prices: [
      "15000",
      "25000",
      "50000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000",
      "2000000",
      "5000000"
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d"]
  },
  impulse: {
    id: "impulse",
    name: "Impulse",
    prices: [
      "30000",
      "60000",
      "80000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000",
      "2000000",
      "5000000"
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },

  alphaRocket: {
    id: "alphaRocket",
    name: "Alpha Rocket",
    prices: [
      "15000",
      "25000",
      "50000",
      "100000",
      "200000",
      "350000",
      "550000",
      "800000"
    ],
    term: ["8h", "16h", "1d", "2d", "3d", "4d", "5d", "6d"]
  },

  salvage: {
    id: "salvage",
    name: "Salvage",
    prices: [
      "30000",
      "50000",
      "75000",
      "100000",
      "200000",
      "350000",
      "700000",
      "1000000",
      "2500000",
      "5000000"
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },
  suppress: {
    id: "suppress",
    name: "Suppress",
    prices: [
      "30000",
      "50000",
      "75000",
      "100000",
      "200000",
      "350000",
      "700000",
      "1000000",
      "2500000",
      "5000000"
    ],
    term: ["12h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d"]
  },
  destiny: {
    id: "destiny",
    name: "Destiny",
    prices: [
      "200000",
      "300000",
      "400000",
      "500000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  barrier: {
    id: "barrier",
    name: "Barrier",
    prices: [
      "150000",
      "300000",
      "400000",
      "500000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  vengeance: {
    id: "vengeance",
    name: "Vengeance",
    prices: [
      "200000",
      "300000",
      "400000",
      "500000",
      "600000",
      "800000",
      "1000000",
      "3500000",
      "6000000",
      "8000000"
    ],
    term: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d"]
  },

  deltaRocket: {
    id: "deltaRocket",
    name: "Delta Rocket",
    prices: [
      "200000",
      "350000",
      "500000",
      "750000",
      "1000000",
      "2000000",
      "3000000",
      "4000000",
      "6000000",
      "8000000"
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "10d"]
  },
  leap: {
    id: "leap",
    name: "Leap",
    prices: [
      "400000",
      "500000",
      "600000",
      "700000",
      "800000",
      "1000000",
      "2000000",
      "4000000",
      "6000000",
      "8000000"
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d", "7d"]
  },
  bond: {
    id: "bond",
    name: "Bond",
    prices: [
      "400000",
      "600000",
      "1000000",
      "1500000",
      "2000000",
      "3000000",
      "4000000",
      "5000000",
      "6000000",
      "8000000"
    ],
    term: ["2d", "3d", "4d", "5d", "6d", "7d", "7d", "7d", "7d", "7d"]
  },
  alphaDrone: {
    id: "alphaDrone",
    name: "Alpha Drone",
    prices: [
      "1000000",
      "2000000",
      "3000000",
      "4000000",
      "5000000",
      "6000000",
      "7000000",
      "8000000"
    ],
    term: ["3d", "5d", "7d", "8d", "9d", "10d", "10d", "10d"]
  },

  omegaRocket: {
    id: "omegaRocket",
    name: "Omega Rocket",
    prices: [
      "2000000",
      "2500000",
      "3000000",
      "3500000",
      "4000000",
      "4500000",
      "5000000",
      "6000000",
      "7000000",
      "8000000"
    ],
    term: ["3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "10d", "10d"]
  }
};

var modulesByTypes = {
  trade: [
    "cargoBayExtension",
    "shipmentComputer",
    "rush",
    "tradeBurst",
    "shipmentDrone",
    "offload",
    "shipmentBeam",
    "entrust",
    "dispatch",
    "recall"
  ],
  mining: [
    "miningBoost",
    "hydrogenBayExtension",
    "enrich",
    "remoteMining",
    "hydrogenUpload",
    "miningUnity",
    "crunch",
    "genesis",
    "miningDrone"
  ],
  weapon: [
    "weakBattery",
    "battery",
    "laser",
    "massBattery",
    "dualLaser",
    "barrage",
    "dartLauncher"
  ],
  shield: [
    "alphaShield",
    "deltaShield",
    "passiveShield",
    "omegaShield",
    "mirrorShield",
    "blastShield",
    "areaShield"
  ],
  support: [
    "emp",
    "teleport",
    "redStarLifeExtender",
    "remoteRepair",
    "timeWarp",
    "unity",
    "sanctuary",
    "stealth",
    "fortify",
    "impulse",
    "alphaRocket",
    "salvage",
    "suppress",
    "destiny",
    "barrier",
    "vengeance",
    "deltaRocket",
    "leap",
    "bond",
    "alphaDrone",
    "omegaRocket"
  ]
};

exports.modulesData = modulesData;
exports.modulesByTypes = modulesByTypes;
