const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

//compile sass function:
function build() {
  //looking for the scss file
  return (
    src("src/app.scss")
      //apply the sass function
      .pipe(sass())
      //new css file destination
      .pipe(dest("./build/css"))
  );
}

//watchfiles function
function watchFiles() {
  watch("src/**/*.scss", build);
}

exports.build = build;

exports.default = series(watchFiles);
