'use strict';
const gulp = require('gulp');
const gulp_plumber = require('gulp-plumber');
const gulp_notify = require('gulp-notify');

const srcDir = '../_src/';
const deployDir = '../deploy/';
const config = {
    mapDir: '../_maps/',
    cssSrc: [srcDir + 'sass/**/*.scss'],
    jsSrc: [srcDir + 'js/**/*.js'],
    scriptName: 'app.js'
};

let isDevelop = true;

// CSS
const gulp_sass = require('gulp-sass');
const gulp_autoprefixer = require('gulp-autoprefixer');
function css() {
    return gulp
        .src(config.cssSrc, {sourcemaps: isDevelop})
        .pipe(gulp_plumber({
            errorHandler: gulp_notify.onError('Error: <%= error.message %>')
        }))
        .pipe(gulp_sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp_autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(deployDir + 'css', {sourcemaps: config.mapDir}));
}

// JavaScript
const gulp_concat = require('gulp-concat');
const gulp_terser = require('gulp-terser');
function js() {
    return gulp
        .src(config.jsSrc, {sourcemaps: isDevelop})
        .pipe(gulp_plumber({
            errorHandler: gulp_notify.onError('Error: <%= error.message %>')
        }))
        .pipe(gulp_plumber())
        .pipe(gulp_concat(config.scriptName))
        .pipe(gulp_terser())
        .pipe(gulp.dest(deployDir + 'js', {sourcemaps: config.mapDir}));
}

// サーバーの立ち上げ
const gulp_browserSync = require('browser-sync');
function browserSync(done) {
    gulp_browserSync({
        server: {
            baseDir: deployDir,
            index: 'index.html'
        },
        notify: false
    });
    done();
}

// リロード
function bsReload(done) {
    gulp_browserSync.reload();
    // done();
}

// Watch
function watchFiles(done) {
    gulp.watch(config.cssSrc, css);
    gulp.watch(config.jsSrc, js);
    done();
}

// Watch + リロード
function watchSync(done) {
    gulp.watch(config.cssSrc).on('change', gulp.series(css, bsReload));
    gulp.watch(config.jsSrc).on('change', gulp.series(js, bsReload));
    gulp.watch(deployDir + 'index.html').on('change', bsReload);
    done();
}

exports.css = css;
exports.js = js;

// 納品
exports.release = gulp.series((callback) => {
        isDevelop = false;
        return callback();
    }, gulp.series(
    gulp.parallel(css, js))
);

// 監視
exports.default = gulp.series(
    gulp.parallel(css, js),
    watchFiles
);

// 監視 + リロード
exports.browserSync = gulp.series(
    gulp.parallel(css, js),
    gulp.parallel(browserSync, watchSync)
);
