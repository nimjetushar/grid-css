const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso"),
  del = require("del"),
  rename = require("gulp-rename");

const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

const sassFiles = "src/grid.scss",
  cssDest = "dist/",
  delDest = ["dist/**", "docs/grid.css"],
  docDest = "docs/";

function clean() {
  return del(delDest, {
    force: true
  });
};

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
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