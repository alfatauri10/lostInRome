"use strict";

const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const rimraf = require("rimraf");
const comments = require("gulp-header-comment");
const jshint = require("gulp-jshint");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");

// Configurazione percorsi (senza /dist)
const path = {
  src: {
    html: "src/*.html",
    others: "src/*.+(php|ico|png)",
    htminc: "src/partials/**/*.htm",
    incdir: "src/partials/",
    plugins: "src/plugins/**/*.*",
    js: "src/js/*.js",
    scss: "src/scss/**/*.scss",
    images: "src/images/**/*.+(png|jpg|gif|svg)",
    fonts: "src/fonts/**/*.+(eot|ttf|woff|woff2|otf)"
  },
  build: {
    dirDev: "./",  // Output diretto nella root
    css: "./css",  // CSS in /css
    js: "./js",    // JS in /js
    images: "./images",
    fonts: "./fonts",
    plugins: "./plugins"
  }
};

// Task Clean (pulisce solo le cartelle di output)
gulp.task("clean", function (cb) {
  rimraf(["./css", "./js", "./images", "./fonts", "./plugins"], cb);
});

// HTML Task
gulp.task("html:build", function() {
  return gulp
    .src(path.src.html)
    .pipe(customPlumber("Error HTML"))
    .pipe(fileinclude({ basepath: path.src.incdir }))
    .pipe(comments(`/* Your comment */`))
    .pipe(gulp.dest(path.build.dirDev))
    .pipe(bs.reload({ stream: true }));
});

// SCSS Task
gulp.task("scss:build", function() {
  return gulp
    .src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.build.css))
    .pipe(bs.reload({ stream: true }));
});

// JS Task
gulp.task("js:build", function() {
  return gulp
    .src(path.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(gulp.dest(path.build.js))
    .pipe(bs.reload({ stream: true }));
});

// Assets
gulp.task("images:build", function() {
  return gulp
    .src(path.src.images)
    .pipe(gulp.dest(path.build.images));
});

gulp.task("fonts:build", function() {
  return gulp
    .src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

gulp.task("plugins:build", function() {
  return gulp
    .src(path.src.plugins)
    .pipe(gulp.dest(path.build.plugins));
});

// Watch Task
gulp.task("watch", function() {
  bs.init({ server: "./" });  // BrowserSync punta alla root
  
  gulp.watch(path.src.html, gulp.series("html:build"));
  gulp.watch(path.src.htminc, gulp.series("html:build"));
  gulp.watch(path.src.scss, gulp.series("scss:build"));
  gulp.watch(path.src.js, gulp.series("js:build"));
  gulp.watch(path.src.images, gulp.series("images:build"));
});

// Build principale
gulp.task("build", gulp.series(
  "clean",
  gulp.parallel(
    "html:build",
    "scss:build",
    "js:build",
    "images:build",
    "fonts:build",
    "plugins:build"
  )
));

// Default task (sviluppo)
gulp.task("default", gulp.series("build", "watch"));

// Helper function
function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || "Error in Gulp",
      message: "Error: <%= error.message %>",
      sound: false
    })
  });
}
