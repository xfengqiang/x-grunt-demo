module.exports = function (grunt) {
    var transport = require('grunt-cmd-transport');
    var style = transport.style.init(grunt);
    var text = transport.text.init(grunt);
    var script = transport.script.init(grunt);

    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),

        transport : {
            options : {
                paths : ['./js/'],
                alias: '<%= pkg.spm.alias %>',
                parsers : {
                    '.js' : [script.jsParser],
                    '.css' : [style.css2jsParser],
                    '.html' : [text.html2jsParser]
                }
            },

            common : {
                options : {
                    idleading : 'dist/common/'
                },

                files : [
                    {
                        cwd : 'js/src/common',
                        src : '**/*',
                        filter : 'isFile',
                        dest : '.build/common'
                    }
                ]
            },

            app : {
                options : {
                    idleading : 'dist/app/'
                },

                files : [
                    {
                        cwd : 'js/src/app',
                        src : '**/*',
                        filter : 'isFile',
                        dest : '.build/app'
                    }
                ]
            }
        },
        concat : {
            options : {
                paths : ['./js/'],
                include : 'relative'
            },
            common : {
                files: [
                    {
                        src: ['.build/common/**/*.js', '!.build/common/**/*-debug.js'],
                        dest: 'js/dist/common/comb.js'
                    }
                ]
            },
            app : {
                options : {
                    include : 'all'
                },
                files: [
                    {
                        expand: true,
                        cwd: '.build/',
                        src: ['app/**/*.js'],
                        dest: 'js/dist/',
                        ext: '.js'
                    }
                ]
            }
        },

        uglify : {
            styles : {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['styles/**/*.js', '!styles/**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            },
            app1 : {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['app/**/*.js', '!app/**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },

        clean : {
            spm : ['.build']
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build-app', ['transport:app', 'concat:app', 'uglify:app', 'clean']);
//    grunt.registerTask('default', ['clean']);
};