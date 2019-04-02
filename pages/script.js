const modules_data = window.modules_data;

const currentModules = document.querySelector(".current-modules");
const targetModules = document.querySelector(".target-modules");

const UserSelect = {
  current: {},
  target: {}
};

function getSumFirst(arr, n) {
  return arr.filter((item, i) => i < n).reduce((acc, item) => acc + item, 0);
}

function renderResult() {
  const result = document.querySelector(".result");

  let hours = 0;
  let money = 0;
  console.log("renderResult");

  Object.keys(UserSelect.target).forEach(modName => {
    const currentPrice = getSumFirst(
      modules_data[modName].prices,
      UserSelect.current[modName]
    );

    const targetPrice = getSumFirst(
      modules_data[modName].prices,
      UserSelect.target[modName]
    );

    if (targetPrice > currentPrice) {
      money += targetPrice - currentPrice;
    }

    const currentTerm = getSumFirst(
      modules_data[modName].term,
      UserSelect.current[modName]
    );

    const targetTerm = getSumFirst(
      modules_data[modName].term,
      UserSelect.target[modName]
    );

    if (targetTerm > currentTerm) {
      hours += targetTerm - currentTerm;
    }
  });

  result.innerHTML = `hours ${hours}, money ${money}`;
}

initButtons(currentModules, "current");
initButtons(targetModules, "target");

function initButtons(modulesDiv, section /*  current / target */) {
  modulesDiv.querySelectorAll("button").forEach(btn => {
    const moduleName = btn.className;

    if (modules_data[moduleName]) {
      const data = modules_data[moduleName];

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
          modules_data[moduleName].prices.length
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
