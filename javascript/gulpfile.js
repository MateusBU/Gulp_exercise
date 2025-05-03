const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function standard(cb) {
    gulp.src('src/**/*.js') //any .js fil in src folder
        .pipe(babel({   //config files
            comments: false,
            presets: ["@babel/preset-env"] //get latest JS
        }))
        .pipe(uglify()) //simplifier the code
        .on('error', err => console.log(err))
        .pipe(concat('code.min.js')) //combining multiple files into a single file
        .pipe(gulp.dest('build')) //destination of file code.min.js
    return cb()
}

function end(cb) {
    console.log('End');
    return cb();
}

exports.default = series(standard, end);