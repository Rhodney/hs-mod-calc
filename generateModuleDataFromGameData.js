var fs = require('fs');
var someHumanData = require('./someHumanData').someHumanData;
var modulesByTypes = require('./someHumanData').modulesByTypes;
var specialModuleData = require('./someHumanData').specialModuleData;
var prettier = require('prettier');
var csv2json = require('csv2json');

const tempJsonFileName = './raw_data/modules.json';
const outputFileName = './data/moduleData.js';

fs.createReadStream('./raw_data/modules.csv')
  .pipe(csv2json({}))
  .pipe(fs.createWriteStream(tempJsonFileName))
  .on('finish', function() {
    const file = fs.readFileSync(tempJsonFileName).toString();

    const modulesDataRaw = JSON.parse(file);

    let modulesData = getModuleInfo(modulesDataRaw);
    let fullModulesData = addSpecialModulesData(modulesData, specialModuleData);

    saveToFile(outputFileName, fullModulesData);
    fs.unlinkSync(tempJsonFileName);
  });

function saveToFile(filePath, modulesData) {
  const content = `
// generated by ${__filename} 
// at ${new Date().toString()}

var modulesData = ${JSON.stringify(modulesData, true, 2)}

var modulesByTypes = ${JSON.stringify(modulesByTypes, true, 2)}

const allModuleKeys = [
  ...modulesByTypes.trade,
  ...modulesByTypes.mining,
  ...modulesByTypes.weapon,
  ...modulesByTypes.shield,
  ...modulesByTypes.support
];

module.exports = {
  modulesData,
  allModuleKeys,
  modulesByTypes
};
`;

  fs.writeFileSync(
    filePath,
    prettier.format(content, {
      parser: 'babel',
      trailingComma: 'es5',
      tabWidth: 2,
      semi: true,
      printWidth: 500, // чтоб массивы выстраивались в одну линию
      jsxSingleQuote: true,
      jsxBracketSameLine: false,
      arrowParens: 'always',
      bracketSpacing: true,
      singleQuote: true,
    })
  );
}

function removeFields(obj, fields) {
  const cleanObj = {};

  for (let key in obj) {
    if (fields.indexOf(key) === -1) {
      cleanObj[key] = obj[key];
    }
  }

  return cleanObj;
}

function getNonEmptyString(obj) {
  const cleanObj = {};

  for (let key in obj) {
    if (obj[key] !== '') {
      cleanObj[key] = obj[key];
    }
  }

  return cleanObj;
}

function squooshNonArrays(moduleData) {
  const newModuleData = {};

  Object.keys(moduleData).forEach((key) => {
    if (moduleData[key][1] === '' || moduleData[key].length === 1) {
      newModuleData[key] = moduleData[key][0];
    } else {
      newModuleData[key] = moduleData[key];
    }
  });

  return newModuleData;
}

function addSpecialModulesData(modulesData, specData) {
  modulesData = { ...modulesData };

  Object.keys(specData).forEach((key) => {
    modulesData[key] = specData[key];
  });

  return modulesData;
}

function getModuleInfo(modulesData) {
  let modulesInfo = {};

  let currentName = null;
  let currentMatterKeys = null;

  const trash = [
    'ActivationType',
    'ExtraTradeSlots',
    'ShowWSInfo',
    'HideSelection',
    'SlotType',
    'ClientActivationFx',
    'SustainedFX',
    'WeaponFx',
    'ActivateFX',
    'ActivateFXStaysInPlace',
    'WeaponEffectType',
    'ScaleEffectsWithZoom',
    'AllowedStarTypes',
    'DoNotAward',
    'TeleportToTradeStation',
    'MaxImpulse',
  ];

  modulesData.forEach((modData) => {
    if (+modData.Hide) {
      return;
    }

    if (modData.Name && currentName !== modData.Name) {
      currentName = modData.Name;
      currentMatterKeys = Object.keys(removeFields(getNonEmptyString(modData), trash));

      modulesInfo[currentName] = {
        eng: someHumanData[currentName].eng,
        id: currentName,
        maxLevel: 0,
      };

      currentMatterKeys.forEach((key) => {
        modulesInfo[currentName][key] = [];
      });
    }

    modulesInfo[currentName].maxLevel++;

    currentMatterKeys.forEach((key) => {
      modulesInfo[currentName][key].push(modData[key]);
    });
  });

  Object.keys(modulesInfo).forEach((key) => {
    modulesInfo[key] = squooshNonArrays(modulesInfo[key]);
  });

  return modulesInfo;
}
