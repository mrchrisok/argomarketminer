"use strict";

module.exports = config => {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha", "chai"],

        // list of files / patterns to load in the browser
        files: [
            "node_modules/angular/angular.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "src/client/app/**/*.module.js",
            "src/client/app/**/*.js",
            "src/test/**/*.js"
        ],

        // list of files / patterns to NOT load in the browser
        exclude: [
        ],

        preprocessors: {
            "src/client/app/**/*.js": ["coverage"]
        },

        // test results reporter to use
        // possible values: "dots", "progress", "coverage"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ["dots"],
        reporters: ["progress", "coverage"],

        coverageReporter: {
            type: "html",
            dir: "coverage/",
            subdir: "."
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // browser launchers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        customLaunchers: {
            Chrome_travis_ci: {
                base: "Chrome",
                flags: ["--no-sandbox"]
            },
            Chrome_NoSandbox: {
                base: "Chrome",
                flags: [
                    "--no-sandbox",
                    "--window-size=400,400",
                    "--window-position=-400,0"
                ]
            },
            IE_NoAddOns: {
                base: "IE",
                flags: [
                    "-extoff"
                ]
            }
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: process.env.TRAVIS ? ["Chrome_travis_ci"] : ["Chrome_NoSandbox", "IE_NoAddOns"],

        captureTimeout: 60000,

        // to avoid DISCONNECTED messages
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        browserNoActivityTimeout: 60000, // default 10000

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
