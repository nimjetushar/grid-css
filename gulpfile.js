const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso"),
  del = require("del"),
  rename = require("gulp-rename");

const sassFiles = "src/grid.scss",
  cssDest = "dist/",
  delDest = ["dist/**", "docs/grid.css"],
  docDest = "docs/";

function clean() {
  return del(delDest, {
    force: true
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

function addLicense() {
  return gulp.src('./LICENSE').pipe(gulp.dest('./dist/'));
}

const defaultTask = gulp.series(clean, styles, addLicense);

exports.default = defaultTask;