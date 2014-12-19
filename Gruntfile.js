/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({

        // https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            options: {
                port       : 8000,
                hostname   : 'localhost',
                base       : 'src',
                open       : true,
                livereload : true,
                keepalive  : false
            },
            dev: {
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            options: {
                livereload: true
            },
            files: {
                files: 'src/{,**/}*'
            }
        }

    });

    // These plugins provide necessary tasks.
    Object.keys(pkg.devDependencies).forEach(function(devDependency) {
        if (devDependency.match(/^grunt\-/)) {
            grunt.loadNpmTasks(devDependency);
        }
    });

    grunt.registerTask('default', [
        'connect:dev',
        'watch'
    ]);

};
