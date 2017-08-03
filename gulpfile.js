var gulp = require('gulp');
    connect = require('gulp-connect');
var cssMin = require('gulp-css');
var about = require('gulp-about');
var imageop = require('gulp-image-optimization');




gulp.task('default', function() {
  console.log('hello gulp!');  
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
  });
});

gulp.task('images', function(cb) {
    gulp.src(['/public/images/*.jpg', '/public/images/*.png']).pipe(imageop({
       optimizationLevel: 5,
       progressive: true,
       interlaced: true
    })).pipe(gulp.dest('/build/images')).on('end', cb)
});
        

gulp.task('cssMinify', function(){
  return gulp.src('/public/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build/'));
});

gulp.task('about', function() {
    return gulp.src('package.json')
        .pipe(about({
            keys: ['name', 'version', 'author'],
            inject: {
                buildDate: Date.now()
            }
    }))
        .pipe(gulp.dest('dist'));
});







gulp.task('default', ['webserver', 'images', 'cssMinify', 'about']);
