
/**
 * reference const objects
 */
const gulp = require("gulp");
const less = require("gulp-less");
const browserSync = require("browser-sync").create();

/**
 * Task: Compile LESS files to css
 */
gulp.task("less", function () {
    return gulp.src(["src/less/*.less"])
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

/**
 * Task: Serve files to browser...
 */
gulp.task("serve", ["less"], function () {
    
    /**
     * Set the config
     */
    browserSync.init({
        server: "./src"
    });

    /**
     * Watch the changes - LESS, HTML
     */
    gulp.watch(["src/less/**/*.less"], ['less']);
    gulp.watch(["src/*.html"]).on("change", browserSync.reload);
});

/**
 * Task: Default
 */
gulp.task("default", ["serve"]);
