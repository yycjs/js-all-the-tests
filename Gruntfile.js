'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    simplemocha: {},

    qunit: {
      blogpost: ['funcunit/index.html']
    },

    testee: {}
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('testee');
};