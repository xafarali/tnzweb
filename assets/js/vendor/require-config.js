/**
 * Created by xafaR
 * Copyrights XashLabs
 * Require JS configuration
 */


/**
 * Shim Example
 * requirejs.config({
    shim: {
        'jquery.colorize': {
            deps: ['jquery'],
            exports: 'jQuery.fn.colorize'
        },
        'jquery.scroll': {
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        },
        'backbone.layoutmanager': {
            deps: ['backbone']
            exports: 'Backbone.LayoutManager'
        }
    }
});
 * */

/**
 *  Importing Jquery as Module, it is already enqued by WP so,
 *  Injecting it as AMD module.
*/




requirejs.config({
	// By default load any module IDs from js/lib
	//baseUrl: '../js/',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.

	paths: {
		//jquery_src : 'http://local.xash/wp-includes/js/jquery/jquery',
		//jquery_migrate: 'http://local.xash/wp-includes/js/jquery/jquery-migrate.min',
		jqueryVanilla :	'vendor/jquery-wrapper',
		bootstrap: 		'vendor/bootstrap.min',
		fullpage: 		'vendor/jquery.fullpage.min',
		jquery: 		'modules/jquery.plugins',
		utils: 			'modules/utilities',
	},

	shim: {
		bootstrap: {
			deps : ['jquery']
		}
	}
});


