const gulp = require('gulp');
const {series, parallel} = require('gulp'); //execute many task sequential and parallel

const before1 = cb => {
    console.log('Task before 1!!')
    return cb();
}

const before2 = cb => {
    console.log('Task before 2!!')
    return cb();
}

function copy(cb){

    //gulp.src(['folderA/file1.txt', 'folderA/file2.txt'])    //select which file I will work with
    gulp.src('folderA/**/*.txt') //any file '.txt' inside folderA
        .pipe(gulp.dest('folderB')) //transform the file (e.g, change the color of an image to black & white)
    return cb();
}

const after1 = cb => {
    console.log('Task after 1!!')
    return cb();
}

const after2 = cb => {
    console.log('Task after 2!!')
    return cb();
}


//default is necessary to execute the task
module.exports.default = series(
    parallel(before1, before2),
    copy,
    after1,
    after2,
);