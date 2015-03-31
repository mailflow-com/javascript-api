module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('config/hosts.json'),
    includereplace: {
      dist: {
        options: {
          globals: {
            host: '<%= pkg[BUILD_ENV] %>'
          }
        },
        src: 'src/mailflow.js',
        dest: 'dist/mailflow.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/mailflow.min.js': ['dist/mailflow.js']
        }
      }
    }
  });

  grunt.config('BUILD_ENV', process.env.ENV)

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.registerTask("default", ["includereplace", "uglify"]);
};
