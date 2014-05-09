var clean, concat, connect, gulp, paths, sass, tenzing;

clean = require('gulp-clean');
concat = require('gulp-concat');
connect = require('gulp-connect');
gulp = require('gulp');
sass = require('gulp-sass');
tenzing = require('gulp-tenzing');

paths = {
    styles: ['./layouts/styles/main.scss', './components/styles/*.scss'],
    scripts: ['./layouts/scripts/*.js'],
    tenzing: {
        layouts: './layouts/templates/',
        components: './components/templates/**/*.html'
    }
};

gulp.task('styles', ['clean'], function () {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/styles'))
        .pipe(connect.reload());
});

gulp.task('scripts', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/scripts'));
});

gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('tenzing', ['clean'], function () {
    return gulp.src(paths.tenzing.components)
        .pipe(tenzing())
        .pipe(gulp.dest('./build'));
});

gulp.task('connect', function() {
    return connect.server({
        root: './build',
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.tenzing.layouts, ['tenzing']);
});


gulp.task('default', ['styles', 'scripts', 'tenzing', 'connect', 'watch']);
