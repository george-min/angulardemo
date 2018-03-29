var gulp = require("gulp");
var browsersync = require("browser-sync");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var htmlmin = require("gulp-htmlmin");

/*编译、压缩、复制less文件*/
gulp.task("style",function () {
   gulp.src(["src/style/*.less","!src/style/_*.less"])
       .pipe(less())
       .pipe(cssnano())
       .pipe(gulp.dest("dist/style"))
       .pipe(browsersync.reload({stream:true}));
});

/*合并、压缩、复制script文件*/
gulp.task("script",function () {
    gulp.src("src/script/*.js")
        .pipe(concat("all.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("dist/script"))
        .pipe(browsersync.reload({stream:true}));
})

/*压缩、复制html文件*/
gulp.task("html",function () {
    gulp.src("src/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"))
        .pipe(browsersync.reload({stream:true}));
});

/*启动服务器：并监视文件的执行*/
gulp.task("serve",function () {
    browsersync.init({server: {
            baseDir:'./'
        }}, function(err, bs) {
        console.log("成功获取一次连接!");
        console.log(bs.options.getIn(["urls", "local"]));
    });
    console.log("服务器启动了，请访问page吧....");
    gulp.watch("src/*.html",["html"]);
    gulp.watch("src/style/*.less",["style"]);
    gulp.watch("src/script/*.js",["script"]);
})