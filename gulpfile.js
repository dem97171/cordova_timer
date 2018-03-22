'use strict';
var async = require('async');
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
// var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var frontnote = require("gulp-frontnote");
// var jsx = require("gulp-jsx");
// var browser = require("browser-sync").create();  //live reload
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
        // .pipe(plumber())
        .pipe(sass())
        // .pipe(autoprefixer())
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
        // if(err){
        //     throw err;
        // }

        console.log( "end browserify" );
        // electron.reload();
        return true;
    });
})

gulp.task("mithrilCompile", ['browserify'], function(){
    // setTimeout(function(){
    //     // browser.reload();
    //     electron.reload();
    // } , 1000);
})


// browser sync
// gulp.task("server", function() {
//     // Start browser process
//     electron.start();
// });


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

    // electron reload
    // gulp.watch([
    //     dstDirJs + '/*.js',
    //     dstDirCss + '/*.css'
    // ],electron.reload);
});


// main build
gulp.task("default", ["watch"]);

// style guide
// gulp.task("genGuide",function() {
//     return gulp.src([
//         // srcDirScss + '/*.scss',
//         srcDirScss + '/**/*.scss'
//     ])
//     .pipe(frontnote({
//         // css: "css/style.css",
//         cache: false,   // こっちはキャッシュの無効
//         // clean: true,    // こっちで毎回削除→生成
//         // verbose: true,
//         // includeAssetPath: 'www/css/*'
//     }))
//     .pipe(debug({title: "debug:"}))
// });


// //frontnoteのスタイルガイドを作成してブラウザリロード
// gulp.task("docs", ["genGuide","sass"],function() {

//     // frontnoteでなぜか作成されないcssファイルをsassタスクのやつからコピー
//     gulp.src([
//         dstDirCss + "/*.css"
//     ])
//     .pipe(gulp.dest("guide"))
//     .pipe(browser.reload({stream:true}))
// });

// gulp.task("reload", function(){
//     browser.reload();
// });

// gulp.task("serverTemplate", function() {
//     // Start browser process
//     // electron.start();
//     browser.init({
//         server: {
//             baseDir: templates,
//             startPath: './index.html',
//         }
//     });
// });

// gulp.task("watchTemplate", function() {

//     var csstargets = [
//         // srcDirScss + '/*.scss',
//         srcDirScss + '/**/*.scss'
//     ];
//     gulp.watch(csstargets,["sass"]);

//     var templateTargets = [
//         templates + '/*.html'
//     ];
//     gulp.watch( templateTargets, ["reload"] );
// });

// gulp.task("template", ["serverTemplate", "watchTemplate"]);
