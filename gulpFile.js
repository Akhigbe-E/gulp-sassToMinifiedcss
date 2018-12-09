const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss =  require('gulp-uglifycss')

//Get the sass file, compile it, and save it in the dest folder
gulp.task('sass', ()=>{
    return gulp.src('./[directory of your sass file]/*.sass')// *.sass accesses every sass file in the specified directory
    .pipe(sass().on('error', sass.logError))//If there are errors, they'll be logged.
    .pipe(gulp.dest('./css'))//If there are no errors, it'll run and save your file in the specified directory.
});

//Get the css file, compile it, and save it in the dest folder 
gulp.task('css', function(){
    gulp.src('./[directory of your css file]/*.css')// to access all files with the css format in the dir
    .pipe(uglifycss({
        "uglyComments":true
    }))
    .pipe(gulp.dest('./dist'));
});

//This runs 'gulp css' and 'gulp sass'
gulp.task('run', ['sass', 'css']);

gulp.task('watch', function(){
    gulp.watch('./[directory of your sass file]/*.sass'); //This watches the sass files for changes.
    gulp.watch('./[directory of your css file]/*.css'); //This watches the sass files for changes.
});

gulp.task('default', ['run', 'watch']); /*This runs both gulp run and gulp watch. To
run this line type 'gulp'*/