const gulp = require("gulp"),
  sass = require("gulp-sass")(require('sass')),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso"),
  rename = require("gulp-rename");

const sassFiles = "src/grid.scss",
  cssDest = "dist/",
  delDest = ["dist/**", "docs/grid.css"],
  docDest = "docs/";

function clean() {
  return import('del').then(del => {
   return del.deleteSync (delDest, {
      force: true
    })
  });
}

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest))
    .pipe(gulp.dest(docDest))
    .pipe(csso())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulp.dest(cssDest));
}

const defaultTask = gulp.series(clean, styles);

exports.default = defaultTask;