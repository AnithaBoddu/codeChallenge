var gulp=require('gulp');
var sass=require('gulp-sass');


gulp.task('sass', function(){
	return gulp.src('./src/sass/*.scss')
	        .pipe(sass())
	        .pipe(gulp.dest('./src/css'));
});

//Defining task to run whenever there is some changes in the SCSS file

gulp.task('watch', function(){
	gulp.watch('./src/sass/*.scss', ['sass']);
});

//Defining default task

gulp.task('default', ['sass','watch']);