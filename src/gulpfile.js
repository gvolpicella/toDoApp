// Include gulp
var gulp = require('gulp');

// Include plugins
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-ruby-sass');
var jshint       = require('gulp-jshint');
var stylish      = require('jshint-stylish');
var autoprefixer = require('gulp-autoprefixer');
var livereload   = require('gulp-livereload');
var jasmine      = require('gulp-jasmine');
var notify       = require('gulp-notify');
var reporters    = require('jasmine-reporters');
var sourcemaps   = require('gulp-sourcemaps');
var removeCode   = require('gulp-remove-code');
var Reporter = require('jasmine-terminal-reporter'); 

// Paths
var PATH_DEV   = '';
var PATH_BUILD = '../';
var PATH_TESTS = 'tests/';

// Build & Minify CSS
gulp.task('sass', function() {
  return sass(PATH_DEV + 'sass/todoer.scss', { sourcemap: true, style: 'compressed', precision: 6, stopOnError: true }) // compact
        .on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH_BUILD + 'assets/styles'))
        .on('error', notify.onError({
          title: 'SASS',
          message: 'SASS build failed, see the cli for details.'
        }))
        .pipe(livereload());
});

// Lint dev Javascript
gulp.task('lint', function() {
    return gulp.src([ PATH_DEV + 'js/**/*.js' ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))
        .on('error', notify.onError({
          title: 'Scripts',
          message: 'One or more scripts linting failed, see the cli for details.'
        }));
});

// Build & Minify scripts
gulp.task('scripts', ['lint','test'], function() {
  return gulp.src([ PATH_DEV + 'js/modules/todoList.js',
                    PATH_DEV + 'js/modules/todoController.js',
                    PATH_DEV + 'js/modules/todoView.js',
                    PATH_DEV + 'js/todoer.js'])
      .pipe(sourcemaps.init())
      .pipe(concat({ path: 'todoer.js', stat: { mode: 0666 }}))
      .pipe(gulp.dest( PATH_TESTS ))
      .pipe(removeCode({ production: true }))
      .pipe(uglify({compress:{sequences:false}}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(PATH_BUILD + 'assets/scripts/'));
});

gulp.task('test', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine({
        reporter: new Reporter()
    }))
    .on('error', notify.onError({
      title: 'Jasmine Test Failed',
      message: 'One or more tests failed, see the cli for details.'
    }));
});

// Watch for changes
gulp.task('watch', function() {
    // enable livereload
    livereload.listen();
	  // watch .js files
    gulp.watch(PATH_DEV + 'js/**/*.js', ['scripts']);
    // watch .scss files
    gulp.watch(PATH_DEV + 'sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', [ 'scripts', 'sass' ]);