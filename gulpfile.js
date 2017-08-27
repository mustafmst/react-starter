const gulp = require('gulp')
        webpack = require('webpack-stream');

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