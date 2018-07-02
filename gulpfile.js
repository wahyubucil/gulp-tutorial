var gulp = require('gulp');
var minify = require('gulp-minifier');
var imagemin = require('gulp-imagemin');

gulp.task('minify', function() {
    return gulp.src('src/**/*').pipe(minify({
        minify: true,
        minifyHTML: {
            collapseWhitespace: true,
            conservativeCollapse: true,
        },
        minifyJS: {
            sourceMap: false
        },
        minifyCSS: true
    })).pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});