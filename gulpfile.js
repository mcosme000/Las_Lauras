const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const GulpClient = require("gulp");

//compile sass function:
function css() {
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
  watch("src/**/*.scss", css);
}

exports.css = css;

exports.default = watchFiles;

gulp.task("default", "css");
