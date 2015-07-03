var gulp = require('gulp');
var closureDeps = require('gulp-closure-deps');


gulp.task('manifest', function() {
  return gulp.src(['js/*.js', 'js/*.jsx', 'bower_components/closure-library/closure/goog/**/*.js'])
    .pipe(closureDeps({
      fileName: 'deps.js',
      prefix: '../../../../'
    }))
    .pipe(gulp.dest('.'));
});


gulp.task('default', ['manifest']);
