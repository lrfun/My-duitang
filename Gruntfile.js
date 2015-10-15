module.exports = function(grunt) {

  var lessStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
          files: [{
              expand: true,
              cwd: './less/',
              src: ['**/*.less'],
              dest: './css/',
              ext: '.css'
          }]
      }
    },
    imagemin: {
      /* 压缩图片大小 */
      dist: {
          options: {
              optimizationLevel: 3 //定义 PNG 图片优化水平
          },
          files: [
                 {
              expand: true,
              cwd: 'images/',
              src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
              dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
              }
              ]
          }
    },
    concat: {
      dist: {
        src: ['./js/plugin.js', './js/plugin2.js'],
        dest: './js/global.js',
      },
    },
    uglify: {
      compressjs: {
        files: {
          './js/global.min.js': ['./js/global.js']
        }
      }
    },
    jshint: {
      all: ['./js/global.js']
    },
    watch: {
      scripts: {
        files: ['./js/plugin.js','./js/plugin2.js'],
        tasks: ['concat','jshint','uglify']
      },

      less: {
        files: ['./less/main.less'],
        tasks: ['less']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'index.html',
              'css/main.css',
              'js/global.min.js'
          ]
      }
    },
    connect: {
      options: {
          port: 8080,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 8080,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('outputcss',['less']);
   grunt.registerTask('img', ['imagemin']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs',['concat','jshint','uglify']);
  grunt.registerTask('watchit',['less','concat','jshint','uglify','connect','watch']);
  grunt.registerTask('default');

};