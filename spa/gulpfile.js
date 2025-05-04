const {series, parallel} = require('gulp');
const gulp = require('gulp');

const {appHtml, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorFile, server} = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    server,
    monitorFile
)