const gulp = require('gulp')
        webpack = require('webpack-stream')
        sass = require('gulp-sass');

gulp.task('webpack', function () {
    return gulp.src([
        './src/app/**/*.jsx'
    ])
    .pipe(webpack({
        module:{
            loaders:[{
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015','react']
                }
            }]
        },
        output: {
            filename: 'bundle.js'
        }
    }))
    .pipe(gulp.dest('./src/public'));
});

gulp.task('sass', function () {
    return gulp.src([
        './node_modules/bootstrap/scss/bootstrap.scss',
        './src/scss/**/*.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('./src/public/js'));
});

gulp.task('fonts', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('./src/public/fonts'));
});

gulp.task('fa', function () {
    return gulp.src([
        './node_modules/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('default',['webpack','sass','js','fonts','fa']);

