'use strict';

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-masonry/angular-masonry.js',
      'app/bower_components/angular-growl/build/angular-growl.js',
      'app/bower_components/d3/d3.js',
      'app/bower_components/angular-dragdrop/src/angular-dragdrop.js',
      'app/bower_components/angular-ui-utils/modules/mask/mask.js',
      'app/bower_components/angular-ui-utils/modules/validate/validate.js',
      'test/helpers/**/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js',

      'app/template/**/*.html',
      'app/views/partials/*.html',
    ],

    // list of files / patterns to exclude
    exclude: [
      'app/scripts/directives/form.js',
    ],

    // web server port
    port: 8081,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    coverageReporter: {
      type: 'html',
      dir : 'target/coverage/'
    },
    junitReporter: {
      outputFile: 'target/surefire-reports/angular-test-results.xml'
    },
    reporters: ['junit', 'progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': 'coverage',
      'app/template/**/*.html': 'html2js',
      'app/views/partials/*.html': 'html2js',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app',
      //prependPrefix: '/ang',
      moduleName: 'templates'
    },


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
