module.exports = function(grunt) {
  
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/mailflow.min.js': ['src/mailflow.js']
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", "uglify");
};
