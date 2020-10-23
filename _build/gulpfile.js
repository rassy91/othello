'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');

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
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
gulp.task('css', () => {
    return gulp.src(config.cssSrc, {sourcemaps: isDevelop})
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err.messageFormatted);
                this.emit('end');
            }
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'ie 11'],
            cascade: false
        }))
        .pipe(gulp.dest(deployDir + 'css', {sourcemaps: config.mapDir}));
});

// JavaScript
const concat = require('gulp-concat');
const uglifyES = require('uglify-es');
const uglifyComposer = require('gulp-uglify/composer');
const minify = uglifyComposer(uglifyES, console);
gulp.task('js', () => {
    return gulp.src(config.jsSrc, {sourcemaps: isDevelop})
        .pipe(plumber())
        .pipe(concat(config.scriptName))
        // .pipe(minify({
        //     mangle: {
        //         safari10: true
        //     }
        // }))
        .pipe(gulp.dest(deployDir + 'js', {sourcemaps: isDevelop}));
});

// Watch
gulp.task('watch', () => {
    gulp.watch(config.cssSrc, gulp.task('css'));
    gulp.watch(config.jsSrc, gulp.task('js'));
});

// release
gulp.task('release', gulp.series((callback) => {
    isDevelop = false;
    return callback();
}, gulp.parallel('css', 'js')));

// default
gulp.task('default', gulp.series(gulp.parallel('css', 'js'), 'watch'));
