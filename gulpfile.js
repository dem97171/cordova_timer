'use strict';
var async = require('async');
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var stripDebug = require('gulp-strip-debug');

// babel
var babel = require("gulp-babel");

// src dir
var srcDirJs = 'src/m';
var srcDirScss = 'src/scss';

// compile dir
var compileDirJs = 'compile/m';
var compileDirScss = 'compile/scss';

// dest dir
var dstDir = 'www';
var dstDirJs = dstDir + '/js';
var dstDirCss = dstDir + '/css';


// css
gulp.task('scssConcat', function() {
    return gulp.src([
        // srcDirScss + '/*scss',
        srcDirScss + '/vendor/*css',
        srcDirScss + '/setting/*css',
        srcDirScss + '/tool/*css',
        srcDirScss + '/base/*css',
        srcDirScss + '/layout/*css',
        srcDirScss + '/module/*css',
        srcDirScss + '/state/*css',
        srcDirScss + '/theme/*css'
    ])
    .pipe( plumber() )
    .pipe( concat('style.scss') )
    .pipe( gulp.dest( compileDirScss ) );
});

gulp.task('sass', ['scssConcat'], function() {
    gulp.src(compileDirScss + "/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(dstDirCss))
        .pipe(uglifycss({
            "uglyComments": false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(dstDirCss))
});

// compile mithril jsx
gulp.task('jsx', function() {
    return gulp.src([
        srcDirJs + '/**/**/*.js',
        srcDirJs + '/**/*.js',
        srcDirJs + '/*.js'
    ])
    .pipe(plumber())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest( compileDirJs ));
});

gulp.task("browserify", ['jsx'], function(){
    console.log( "start browserify" );
    // browserify
    var entryTargets = [
        {
            srcPath: compileDirJs + "/entries/app.js",
            dstFileName: 'app.js'
        }
    ];
    async.each( entryTargets, function( entrypoint, callback ){
        console.log( "browserify loop : " + entrypoint.srcPath );
        browserify({ entries: [ entrypoint.srcPath ] })
        .bundle()
        .pipe(source( entrypoint.dstFileName ))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest( dstDirJs ))
        .pipe(uglify())
        .pipe(stripDebug())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest( dstDirJs ))
    },function(err){
        if(err){
            throw err;
        }

        console.log( "end browserify" );
        return true;
    });
})

gulp.task("mithrilCompile", ['browserify'], function(){
})

// ファイルの編集を監視してjavascript,cssの更新を実行
gulp.task("watch", function() {
    var jstargets = [
        srcDirJs + '/*.js',
        srcDirJs + '/**/*.js',
        srcDirJs + '/**/**/*.js'
    ];
    gulp.watch(jstargets, ["mithrilCompile"]);

    var csstargets = [
        // srcDirScss + '/*.scss',
        srcDirScss + '/**/*.scss'
    ];
    gulp.watch(csstargets, ["sass"]);
});

// main build
gulp.task("default", ["watch"]);
