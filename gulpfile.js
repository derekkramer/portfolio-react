const gulp = require('gulp'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence');

gulp.task('sass', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', () => {
    runSequence(['sass', 'watch']);
});
