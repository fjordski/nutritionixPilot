module.exports = function(grunt) {
  var jsFiles = [
    'index.js',
    'Gruntfile.js',
    'client/app/**/*.js',
    'server/**/*.js',
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      build: {
        src: 'client/main.js',
        dest: 'client/build.js'
      }
    },
    jscs: {
      src: jsFiles,
      options: {
        config: './config/.jscsrc',
          }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: jsFiles
    },
    watch: {
      files: 'client/app/**/*.js',
      tasks: ['browserify']
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['jshint', 'jscs', 'browserify']);
  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('test', ['jshint', 'jscs']);
};
