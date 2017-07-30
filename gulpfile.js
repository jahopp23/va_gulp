var gulp = require('gulp');
    connect = require('gulp-connect');
var cssMin = require('gulp-css');




gulp.task('default', function() {
  console.log('hello gulp!');  
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
  });
});

gulp.task('cssMinify', function(){
  return gulp.src('/public/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build/'));
});







gulp.task('default', ['webserver', 'cssMinify']);

