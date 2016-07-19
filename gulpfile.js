var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
});

gulp.task('pranie', function() {
console.log('robię pranie');
});

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sass({
		outputStyle: 'expanded'}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
})


gulp.task("pranie", function(){
	console.log("robie pranie");
});