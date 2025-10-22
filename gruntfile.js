module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                "sourceMap": true
            },
            dist: {
                // files:  {
                //     "wp-content/themes/xash_its/js/ES6/compiled/app.js" : "wp-content/themes/xash_its/js/ES6/raw/app.js",   
                // }
                files: [{
                    "expand": true,
                    "cwd": "assets\\js\\ES6\\raw\\",
                    "src": ["**/*.js"],
                    "dest": "assets\\js\\ES6\\compiled\\",
                    // "ext": "-compiled.js"
                    
                }]
            }
        },
        uglify: {
            all_src: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'src/build/sourceMap.map'
                },
                src: 'assets\\js\\main-js.js',
                dest: 'assets\\js\\main-js-min.js'
            }
        },
        browserify: {
            dist: {
                

                files: {
                'assets\\js\\main-js.js': "assets\\js\\ES6\\compiled\\app.js"
                },              
            },
             options: {
                browserifyOptions: {
                    debug: true
                },            
                
            },
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("default", ["babel","browserify"]);

};