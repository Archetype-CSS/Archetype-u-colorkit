module.exports = function(grunt) {
 
  grunt.initConfig({
    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['test/css/*.css']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', 'csslint');
 
};
