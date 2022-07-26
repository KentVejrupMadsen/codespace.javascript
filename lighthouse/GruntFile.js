module.exports = function ( grunt )
{
    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'automatedTasks.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon'])
}