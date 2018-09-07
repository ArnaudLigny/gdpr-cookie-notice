var path = require("path");
var gulp = require("gulp");
var watch = require("gulp-watch");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var browserify = require("gulp-browserify");
var autoprefixer = require("gulp-autoprefixer");
var http = require("http");
var ecstatic = require("ecstatic");
var htmlToJs = require("gulp-html-to-js");
var html2js = require("gulp-html2js");
var eslint = require("gulp-eslint");
var util = require("gulp-util");

var config = {
  javascript: {
    path: {
      src: path.join("src/js"),
      dist: path.join("dist")
    }
  },
  sass: {
    path: {
      src: path.join("src/sass"),
      dist: path.join("dist")
    }
  }
};

var onJSError = function(err) {
  notify({
    message: err
  });
};

gulp.task("styles:sass", function() {
  return gulp
    .src(path.join(config.sass.path.src, "**", "*.scss"))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.sass.path.dist));
});

gulp.task("javascript", function() {
  return gulp
    .src([
      "node_modules/js-cookie/src/js.cookie.js",
      "src/js/templates.js",
      "src/js/script.js",
      "src/langs/*.js"
    ])
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.javascript.path.dist));
});

gulp.task("watch:sass", function() {
  var paths = path.join(config.sass.path.src, "**", "*.scss");
  return gulp.watch(
    paths,
    function() {
      return gulp.start("styles:sass");
    },
    { read: false }
  );
});

gulp.task("watch:javascript", function() {
  return watch(
    path.join(config.javascript.path.src, "**", "*.js"),
    function() {
      return gulp.start("javascript");
    },
    { read: false }
  );
});

gulp.task("views:compile", function() {
  gulp
    .src("src/html/*.html")
    .pipe(
      html2js("templates.js", {
        adapter: "javascript",
        base: "src/html",
        name: "gdpr-cookie-notice-templates"
      })
    )
    .pipe(gulp.dest("src/js/"));
});

gulp.task("lint", () => {
  return gulp
    .src(["src/js/script.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("default", ["lint"], function() {
  http.createServer(ecstatic({ root: __dirname })).listen(3000);
  util.log("Server is runnig: http://localhost:3000");
  gulp.start("watch:sass");
  gulp.start("views:compile");
  gulp.start("watch:javascript");
});
