

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    reporters: ['junit', 'mocha', 'coverage'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['rollup'],
      'test/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        require('rollup-plugin-istanbul')({exclude: ['test/*']}),
        require('rollup-plugin-buble')(),
      ],
      'globals': {
        'chai':  'chai'
      },
      'onwarn':  (message) => { // Hiding treating 'chai' as external dependency logs
        if ( /external dependency/.test( message ) )  {
          return;
        }
        console.error(message);
      },
      format: 'iife',  // Helps prevent naming collisions.
      moduleName: 'wisp.ad.AdLoader', // Required for 'iife' format.
      sourceMap: 'inline', // Sensible for testing.
    },
    coverageReporter: {
      reporters: [
        {type: 'text-summary'},
        {
          type: 'cobertura',
          dir: 'coverage/',
          subdir: (browser) => { return browser.toLowerCase().split(/[ /-]/)[0]}
        }
      ],
    },
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'red'
      },
      symbols: {
        success: '✔',
        info: 'ⓘ',
        warning: '⚠',
        error: '✘'
      }
    },
    junitReporter: {
      outputDir: './junit',
      outputFile: 'test_result.xml',
      suite: '',
      useBrowserName: true,
    },
    port: 3456,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
