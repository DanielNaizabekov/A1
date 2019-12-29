let gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	del = require('del');
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(autoprefixer({
			browsers: ['last 8 versions']
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('html', function() {
	return gulp.src('app/*.html')
		.pipe(browserSync.stream())
});

gulp.task('script', function() {
	return gulp.src('app/js/script.js')
		.pipe(browserSync.stream())
});

gulp.task('js', function() {
	return gulp.src(['node_modules/jquery/dist/jquery.js'])
	.pipe(concat('bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'))
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('clean', async function() {
	del.sync('dist')
});

gulp.task('export', function() {
	let buildHtml = gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist'))

	let builCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('dist/css'))

	let builJs = gulp.src('app/js/**/*.js')
	.pipe(gulp.dest('dist/js'))

	let builFonts = gulp.src('app/fonts/**/*.*')
	.pipe(gulp.dest('dist/fonts'))

	let builImg = gulp.src('app/img/**/*.*')
	.pipe(gulp.dest('dist/img'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('sass', 'js', 'browser-sync', 'watch'));