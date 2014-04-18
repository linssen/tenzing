var clean, concat, gulp, sass, tensig;

clean = require('gulp-clean');
concat = require('gulp-concat');
gulp = require('gulp');
sass = require('gulp-sass');
tensig = require('gulp-tensig');

gulp.task('styles', ['clean'], function () {
    return gulp.src(['./layouts/styles/main.scss', './components/styles/*.scss'])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('scripts', ['clean'], function () {
    return gulp.src(['./layouts/scripts/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/scripts'));
});

gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('tensig', ['clean'], function () {
    return gulp.src('./layouts/templates/*.html')
        .pipe(tensig())
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['styles', 'scripts', 'tensig']);
