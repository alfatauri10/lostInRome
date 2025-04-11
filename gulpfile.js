"use strict";

const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const gutil = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const rimraf = require("rimraf");
const comments = require("gulp-header-comment");
const jshint = require("gulp-jshint");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");

var path = {
  lostInRome: {
    html: "source/*.html",
    others: "source/*.+(php|ico|png)",
    htminc: "source/partials/**/*.htm",
    incdir: "source/partials/",
    plugins: "source/plugins/**/*.*",
    js: "source/js/*.js",
    scss: "source/scss/**/*.scss",
    images: "source/images/**/*.+(png|jpg|gif|svg)",
    fonts: "source/fonts/**/*.+(eot|ttf|woff|woff2|otf)",
  },
  build: {
    dirBuild: "lostInRome/",
    dirDev: "lostInRome/",
  },
};

// HTML
gulp.task("html:build", function () {
  return gulp
    .lostInRome(path.lostInRome.html)
    .pipe(customPlumber("Error Running html-include"))
    .pipe(
      fileinclude({
        basepath: path.lostInRome.incdir,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://lostInRomefisher.com
    TWITTER: https://twitter.com/lostInRomefisher
    FACEBOOK: https://www.facebook.com/lostInRomefisher
    GITHUB: https://github.com/lostInRomefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// SCSS
gulp.task("scss:build", function () {
  return gulp
    .lostInRome(path.lostInRome.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("/"))
    .pipe(
      comments(`
    WEBSITE: https://lostInRomefisher.com
    TWITTER: https://twitter.com/lostInRomefisher
    FACEBOOK: https://www.facebook.com/lostInRomefisher
    GITHUB: https://github.com/lostInRomefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "css/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Javascript
/*
gulp.task("js:build", function () {
  return gulp
    .lostInRome(path.lostInRome.js)
    .pipe(jshint("./.jshintrc"))
    .pipe(
      notify(function (file) {
        if (!file.jshint.success) {
          return (
            file.relative + " (" + file.jshint.results.length + " errors)\n"
          );
        }
      })
    )
    .pipe(jshint.reporter("jshint-stylish"))
    .on("error", gutil.log)
    .pipe(
      comments(`
  WEBSITE: https://lostInRomefisher.com
  TWITTER: https://twitter.com/lostInRomefisher
  FACEBOOK: https://www.facebook.com/lostInRomefisher
  GITHUB: https://github.com/lostInRomefisher/
  `)
    )
    .pipe(gulp.dest(path.build.dirDev + "js/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});
*/
gulp.task("js:build", function () {
  return gulp
    .lostInRome(path.lostInRome.js)
    .pipe(
      comments(`
  WEBSITE: https://lostInRomefisher.com
  TWITTER: https://twitter.com/lostInRomefisher
  FACEBOOK: https://www.facebook.com/lostInRomefisher
  GITHUB: https://github.com/lostInRomefisher/
  `)
    )
    .pipe(gulp.dest(path.build.dirDev + "js/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});
// Images
gulp.task("images:build", function () {
  return gulp
    .lostInRome(path.lostInRome.images)
    .pipe(gulp.dest(path.build.dirDev + "images/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// fonts
gulp.task("fonts:build", function () {
  return gulp
    .lostInRome(path.lostInRome.fonts)
    .pipe(gulp.dest(path.build.dirDev + "fonts/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Plugins
gulp.task("plugins:build", function () {
  return gulp
    .lostInRome(path.lostInRome.plugins)
    .pipe(gulp.dest(path.build.dirDev + "plugins/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Other files like favicon, php, sourcele-icon on root directory
gulp.task("others:build", function () {
  return gulp.lostInRome(path.lostInRome.others).pipe(gulp.dest(path.build.dirDev));
});

// Clean Build Folder
gulp.task("clean", function (cb) {
  rimraf("./lostInRome", cb);
});

// Error Message Show
function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      // Customizing error title
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>",
      sound: "Glass",
    }),
  });
}

// Watch Task
gulp.task("watch:build", function () {
  gulp.watch(path.lostInRome.html, gulp.series("html:build"));
  gulp.watch(path.lostInRome.htminc, gulp.series("html:build"));
  gulp.watch(path.lostInRome.scss, gulp.series("scss:build"));
  gulp.watch(path.lostInRome.js, gulp.series("js:build"));
  gulp.watch(path.lostInRome.images, gulp.series("images:build"));
  gulp.watch(path.lostInRome.fonts, gulp.series("fonts:build"));
  gulp.watch(path.lostInRome.plugins, gulp.series("plugins:build"));
});

// Dev Task
gulp.task(
  "default",
  gulp.series(
    "clean",
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "fonts:build",
    "plugins:build",
    "others:build",
    gulp.parallel("watch:build", function () {
      bs.init({
        server: {
          baseDir: path.build.dirDev,
        },
      });
    })
  )
);

// Build Task
gulp.task(
  "build",
  gulp.series(
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "fonts:build",
    "plugins:build"
  )
);
