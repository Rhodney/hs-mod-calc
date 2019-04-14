export function parseModules(modules, url) {
  const userSelect = {};

  url.split("").forEach((level, i) => {
    if (level === "A") {
      userSelect[modules[i]] = 10;
    } else if (+level == level) {
      userSelect[modules[i]] = +level;
    }
  });

  return userSelect;
}

export function stringifyModules(modules, userSelect) {
  let url = "";

  modules.forEach((moduleName, i) => {
    if (userSelect[moduleName] === 10) {
      url += "A";
    } else if (userSelect[moduleName]) {
      url += userSelect[moduleName];
    } else {
      url += "0";
    }
  });

  return url;
}
