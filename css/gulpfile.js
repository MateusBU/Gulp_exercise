const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // 
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformCSS(){
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError)) //sass transforms to css
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'));
}


function copyHTML(cb){

    gulp.src('src/index.html') //any file '.html' inside folderA
        .pipe(gulp.dest('build'))
    return cb();
}

exports.default = parallel(transformCSS, copyHTML);