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
    if (userSelect[moduleName] == 10) {
      url += "A";
    } else if (userSelect[moduleName]) {
      url += userSelect[moduleName];
    } else {
      url += "0";
    }
  });

  return url;
}

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, options = {}) {
  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  });
}

export function parseQueryString(query) {
  var vars = query.split("&");
  var params = {};

  vars.forEach(variable => {
    var [key, value] = variable.split("=");

    if (key) {
      if (value === undefined) {
        value = true;
      }
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });

  return params;
}
