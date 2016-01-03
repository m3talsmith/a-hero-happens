var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat');

gulp.task('transpileModels', function () {
    return gulp.src('app/models/*.es6')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
              'es2015',
              'transform-runtime'
            ]
        }))
        .pipe(concat('models.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/js'));
});

gulp.task('transpileScenes', function () {
    return gulp.src('app/scenes/**/*.es6')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
              'es2015',
              'transform-runtime'
            ]
        }))
        .pipe(concat('scenes.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/js'));
});

gulp.task('default', ['transpileModels', 'transpileScenes']);