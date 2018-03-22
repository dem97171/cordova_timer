"use strict";
const async = require("async");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const rename = require("gulp-rename");
// const debug = require("gulp-debug");
const stripDebug = require("gulp-strip-debug");

// babel
const babel = require("gulp-babel");

// src dir
const srcDirJs = "src/m";
const srcDirScss = "src/scss";

// compile dir
const compileDirJs = "compile/m";
const compileDirScss = "compile/scss";

// dest dir
const dstDir = "www";
const dstDirJs = dstDir + "/js";
const dstDirCss = dstDir + "/css";


// css
gulp.task("scssConcat", function() {
    return gulp.src([
        // srcDirScss + "/*scss",
        srcDirScss + "/vendor/*css",
        srcDirScss + "/setting/*css",
        srcDirScss + "/tool/*css",
        srcDirScss + "/base/*css",
        srcDirScss + "/layout/*css",
        srcDirScss + "/module/*css",
        srcDirScss + "/state/*css",
        srcDirScss + "/theme/*css"
    ])
        .pipe( plumber() )
        .pipe( concat("style.scss") )
        .pipe( gulp.dest( compileDirScss ) );
});

gulp.task("sass", ["scssConcat"], function() {
    gulp.src(compileDirScss + "/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(dstDirCss))
        .pipe(uglifycss({
            "uglyComments": false
        }))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest(dstDirCss));
});

// compile mithril jsx
gulp.task("jsx", function() {
    return gulp.src([
        srcDirJs + "/**/**/*.js",
        srcDirJs + "/**/*.js",
        srcDirJs + "/*.js"
    ])
        .pipe(plumber())
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest( compileDirJs ));
});

gulp.task("browserify", ["jsx"], function(){
    console.log( "start browserify" );
    // browserify
    const entryTargets = [
        {
            srcPath: compileDirJs + "/entries/app.js",
            dstFileName: "app.js"
        }
    ];
    async.each( entryTargets, function( entrypoint ){
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
                extname: ".min.js"
            }))
            .pipe(gulp.dest( dstDirJs ));
    },function(err){
        if(err){
            throw err;
        }

        console.log( "end browserify" );
        return true;
    });
});

gulp.task("mithrilCompile", ["browserify"], function(){
});

// ファイルの編集を監視してjavascript,cssの更新を実行
gulp.task("watch", function() {
    const jstargets = [
        srcDirJs + "/*.js",
        srcDirJs + "/**/*.js",
        srcDirJs + "/**/**/*.js"
    ];
    gulp.watch(jstargets, ["mithrilCompile"]);

    const csstargets = [
        // srcDirScss + "/*.scss",
        srcDirScss + "/**/*.scss"
    ];
    gulp.watch(csstargets, ["sass"]);
});

// main build
gulp.task("default", ["watch"]);
