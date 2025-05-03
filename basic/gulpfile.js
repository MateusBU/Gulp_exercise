const gulp = require('gulp');
const series = gulp.series; //execute many task in series

const before1 = cb => {
    console.log('Task before 1!!')
    return cb();
}

const before2 = cb => {
    console.log('Task before 2!!')
    return cb();
}

function copy(cb){
    console.log('Task copy!!!');
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
    before1,
    before2,
    copy,
    after1,
    after2,
);