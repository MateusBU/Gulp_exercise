const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

//ts files are transformed in .js files, but the type is still important

function transformTS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformTS)