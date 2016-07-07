module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    csslint: {
      lax: {
        options: {
          import: false
        },
        src: ['css/*.css']
      }
    },
    jasmine: {
      pivotal: {
        src: 'js/*.js',
        options: {
          specs: 'spec/*.js',
          helpers: 'spec/*Helper.js'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'csslint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint'], ['csslint']);

};