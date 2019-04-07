const gulp = require("gulp");
const pug = require("gulp-pug");
const modulesData = require("./pages/moduleData").modulesData;
const modulesByTypes = require("./pages/moduleData").modulesByTypes;

function getModuleByType(modulesData, moduleIds) {
  return moduleIds.map(moduleId => modulesData[moduleId]);
}

function buildHTML() {
  return gulp
    .src("pages/*.pug")
    .pipe(
      pug({
        pretty: true,
        data: {
          insertData: "insert string",
          css: "class-name",
          tradeModules: getModuleByType(modulesData, modulesByTypes.trade),
          miningModules: getModuleByType(modulesData, modulesByTypes.mining),
          weaponModules: getModuleByType(modulesData, modulesByTypes.weapon),
          shieldModules: getModuleByType(modulesData, modulesByTypes.shield),
          supportModules: getModuleByType(modulesData, modulesByTypes.support),
        }
      })
    )
    .pipe(gulp.dest("static/"));
}

gulp.task("views", buildHTML);

exports.default = buildHTML;
