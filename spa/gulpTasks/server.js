const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function monitorFile(cb){
    watch('src/**/*.html', () => gulp.series('appHtml')()); //monitor only html, when this file changes, it is loaded
    watch('src/**/*.scss', () => gulp.series('appCSS')());
    watch('src/**/*.js', () => gulp.series('appJS')());
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')());
    
    return cb()
}

function server(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, //open browser
            livereload: true,
        }));
}

module.exports = {
    monitorFile,
    server
}