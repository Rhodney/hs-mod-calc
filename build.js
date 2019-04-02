const gulp = require("gulp");
const pug = require("gulp-pug");

function buildHTML() {
  return gulp
    .src("pages/*.pug")
    .pipe(
      pug({
        pretty: true,
        data: {
          insertData: "insert string",
          css: "class-name",
          modules: ["cargo", "batery"]
        }
      })
    )
    .pipe(gulp.dest("static/"));
}

gulp.task("views", buildHTML);

exports.default = buildHTML;
