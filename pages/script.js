const currentModules = document.querySelector(".current-modules");
const targetModules = document.querySelector(".target-modules");

const UserSelect = {
  current: {},
  target: {}
};

function getSumFirst(arr, n) {
  return arr.filter((item, i) => i < n).reduce((acc, item) => acc + +item, 0);
}

function renderResult() {
  const result = document.querySelector(".result");

  let term = 0;
  let money = 0;

  Object.keys(UserSelect.target).forEach(modName => {
    const currentPrice = getSumFirst(
      modulesData[modName].prices,
      UserSelect.current[modName]
    );

    const targetPrice = getSumFirst(
      modulesData[modName].prices,
      UserSelect.target[modName]
    );

    if (targetPrice > currentPrice) {
      money += targetPrice - currentPrice;
    }

    const currentTerm = getSumFirst(
      modulesData[modName].term.map(termItem => parseTerm(termItem)),
      UserSelect.current[modName]
    );

    const targetTerm = getSumFirst(
      modulesData[modName].term.map(termItem => parseTerm(termItem)),
      UserSelect.target[modName]
    );

    if (targetTerm > currentTerm) {
      term += targetTerm - currentTerm;
    }
  });

  const moneyPerDay = money && term ? Math.floor((money / term) * 24 * 60) : 0;

  result.innerHTML = `term ${stringifyTerm(
    term
  )}, money ${money} (${moneyPerDay} money/day)`;
}

initButtons(currentModules, "current");
initButtons(targetModules, "target");

function initButtons(modulesDiv, section /*  current / target */) {
  modulesDiv.querySelectorAll("button").forEach(btn => {
    const moduleName = btn.className;

    if (modulesData[moduleName]) {
      const data = modulesData[moduleName];

      btn.innerHTML =
        data.name + " " + (UserSelect[section][moduleName] || "NO");

      btn.addEventListener("click", () => {
        if (UserSelect[section][moduleName]) {
          UserSelect[section][moduleName]++;
        } else {
          UserSelect[section][moduleName] = 1;
        }
        if (
          UserSelect[section][moduleName] >
          modulesData[moduleName].prices.length
        ) {
          UserSelect[section][moduleName] = 0;
        }

        btn.innerHTML =
          data.name + " " + (UserSelect[section][moduleName] || "NO");

        renderResult();
      });
    } else {
      console.log(`there are no module this name: ${moduleName}`);
    }
  });
}

function parseTerm(term /* 4h / 2d / 5m */) {
  try {
    const [, number, period] = term.match(/(\d+)([hdm])/);

    if (period === `m`) {
      return +number;
    }
    if (period === `h`) {
      return +number * 60;
    }
    if (period === `d`) {
      return +number * 60 * 24;
    }
  } catch (e) {
    throw new Error(`Term must be like '4h' or '2d', not: ${term}`);
  }
}

function stringifyTerm(term /* 600 */) {
  const days = Math.floor(term / (24 * 60));
  const hours = Math.floor((term - days * 24 * 60) / 60);
  const mins = term - days * 24 * 60 - hours * 60;

  let result = ``;

  if (days) {
    result += days + `d`;
  }

  if (hours) {
    result += hours + `h`;
  }

  if (mins) {
    result += mins + `m`;
  }

  console.log(term, result);

  return result;
}
