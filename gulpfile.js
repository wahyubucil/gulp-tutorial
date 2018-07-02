var gulp = require('gulp');
var minify = require('gulp-minifier');

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