module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('config/hosts.json'),
    concat: {
      dist: {
        src: ['vendor/*.js', 'src/mailflow.js'],
        dest: 'dist/mailflow.js'
      }
    },
    includereplace: {
      dist: {
        options: {
          globals: {
            host: '<%= pkg[BUILD_ENV] || pkg.development %>'
          }
        },
        src: 'dist/mailflow.js',
        dest: 'dist/mailflow.js'
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/mailflow.min.js': 'dist/mailflow.js',
          'dist/snippet.min.js' : 'src/snippet.js'
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/mailflow.js',
        tasks: 'default'
      }
    }
  });

  grunt.config('BUILD_ENV', process.env.ENV)

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("develop", "watch");
  grunt.registerTask("default", ["concat", "includereplace", "uglify"]);
};
