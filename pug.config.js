const modulesData = require('./pages/module-calc/moduleData').modulesData;
const modulesByTypes = require('./pages/module-calc/moduleData').modulesByTypes;

function getModuleByType(modulesData, moduleIds) {
  return moduleIds.map((moduleId) => modulesData[moduleId]);
}

module.exports = {
  locals: {
    tradeModules: getModuleByType(modulesData, modulesByTypes.trade),
    miningModules: getModuleByType(modulesData, modulesByTypes.mining),
    weaponModules: getModuleByType(modulesData, modulesByTypes.weapon),
    shieldModules: getModuleByType(modulesData, modulesByTypes.shield),
    supportModules: getModuleByType(modulesData, modulesByTypes.support),
  },
};
