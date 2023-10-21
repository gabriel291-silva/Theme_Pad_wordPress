// require dependecies
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const messager = require("gulp-messenger");
const autoPrefix = require("gulp-autoprefixer");

// compile scss into css
function style() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(
      autoPrefix({
        cascade: false,
      })
    )
    .pipe(gulp.dest("../"))
    .pipe(messager.flush.info("Process CSS Completed Successfully"));
}

// watches files
function watch() {
  gulp.watch("./sass/**/*.scss", style);
}

gulp.task("appCSS", style);
gulp.task("watch", watch);
gulp.task("build", gulp.series("appCSS"));
gulp.task("default", gulp.series("appCSS", "watch"));

exports.style = style;
exports.watch = watch;
