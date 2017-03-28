module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	  	concat: {
		    // options: {
		    //   separator: ';',
		    // },
		    js: {
		      src: ['js/index.js', 'js/main.js'],
		      dest: 'build/js/scripts.js',
		    },
		    css: {
		      src: ['css/style.css', 'css/theme.css'],
		      dest: 'build/css/styles.css',
		    },
		 },
	  	watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat:js'],
				// options: {
				//   spawn: false,
				// },
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['concat:css'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);


	// grunt.registerTask('speak', function() {
	// 	console.log('i am speaking');
	// });
	// grunt.registerTask('yell', function() {
	// 	console.log('i am YELLING');
	// });

	// // to call both functions
	// grunt.registerTask('both',['speak','yell']);

	// // to call default functions
	// grunt.registerTask('default',['speak','yell']);

};