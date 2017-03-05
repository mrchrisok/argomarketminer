
// DEPENDENCIES
// *****************************************************************************
import * as gulp from "gulp";
import * as browserify from "browserify";
import * as source from "vinyl-source-stream";
import * as buffer from "vinyl-buffer";
import * as eslint from "gulp-eslint";
import tslint from "gulp-tslint";
import * as tsc from "gulp-typescript";
import * as sourcemaps from "gulp-sourcemaps";
import * as uglify from "gulp-uglify";
import * as runSequence from "run-sequence";
import * as open from "gulp-open";
import * as path from "path";
import * as karma from "karma";
import * as browserSync from "browser-sync";
// import File = require("vinyl");

// LINT
// *****************************************************************************
gulp.task("lintTS", () => {

    const config = { formatter: "verbose", emitError: typeof process.env.CI !== "undefined" };

    return gulp.src([
        "src/**/**.ts",
        "test/**/**.spec.ts",
        "gulpfile.ts"
    ])
        .pipe(tslint(config))
        .pipe(tslint.report());

});

gulp.task("lintES", () => {

    const config = { formatter: "verbose", emitError: typeof process.env.CI !== "undefined" };

    return gulp.src([
        "karma.conf.js"
    ])
        .pipe(eslint(config))
        .pipe(eslint.format());
});

gulp.task("lint", callback => {
    runSequence(["lintTS", "lintES"], callback);
});


// BUILD
// *****************************************************************************
const tsSolution = tsc.createProject("tsconfig.json");

gulp.task("build-solution", () =>
    gulp.src([
        "main.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tsSolution()).js
        .on("error", err => {
            throw new Error(`Build failed for solution .ts files: ${err}`);
        })
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "" }))
        .pipe(gulp.dest("."))
);

const tsClient = tsc.createProject("src/client/tsconfig.json");

gulp.task("build-client", () =>
    gulp.src([
        "typings/**.ts",
        "src/client/**/**.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tsClient()).js
        .on("error", err => {
            throw new Error(`Build failed for client .ts files: ${err}`);
        })
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("src/client"))
);

const tsServer = tsc.createProject("src/server/tsconfig.json");

gulp.task("build-server", () =>
    gulp.src([
        "typings/**.ts",
        "src/server/**/**.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tsServer()).js
        .on("error", err => {
            throw new Error(`Build failed for server .ts files: ${err}`);
        })
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "" }))
        .pipe(gulp.dest("src/server"))
);

const tsTest = tsc.createProject("src/test/tsconfig.json");

gulp.task("build-test", () =>
    gulp.src([
        "src/test/**/*.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tsTest()).js
        .on("error", err => {
            throw new Error(`Build failed for test .ts files: ${err}`);
        })
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "" }))
        .pipe(gulp.dest("src/test/"))
);

gulp.task("build", callback => {
    runSequence(["build-solution", "build-client", "build-server", "build-test"], callback);
});


// TEST
// *****************************************************************************
/**
 * @name test
 * @description Runs unit tests with karma/chrome/mocha and generates code coverage report in coverage/
 */
gulp.task("test", done =>
    new karma.Server({
        configFile: path.join(__dirname, "/karma.conf.js"),
        singleRun: true
    }, err => {
        let error = err;

        if (typeof err !== "undefined" && err !== 0) {
            error = new Error(`Karma returned with the error code: ${err}`);
        }
        done(error);
    }).start()
);

/**
 * @name coverage
 * @description Generates and shows the code coverage report
 */
gulp.task("coverage", ["test"], () =>
    gulp.src("./coverage/index.html")
        .pipe(open())
);


// BUNDLE
// *****************************************************************************
gulp.task("bundle", () => {

    const libraryName = "client";
    const mainTsFilePath = "src/client/app/root.module.js";
    const outputFolder = "dist/";
    const outputFileName = `${libraryName}.min.js`;

    const bundler = browserify({
        debug: true,
        standalone: libraryName
    });

    return bundler.add(mainTsFilePath)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(outputFolder));
});


// CONTINUOUS INTEGRATION
// *****************************************************************************
const sync = browserSync.create();
gulp.task("watch", ["default"], () => {

    sync.init({
        server: "."
    });

    gulp.watch(["src/**/**.ts", "test/**/*.ts"], ["default"]);
    gulp.watch("dist/*.js", browserSync.reload);
    // gulp.watch("dist/*.js").on("change", browserSync.reload);
});


// DEFAULT
// *****************************************************************************
gulp.task("default", callback => {
    runSequence("lint", "build", "test", "bundle", callback);
});
