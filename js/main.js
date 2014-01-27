;(function(){
    requirejs.config({
        "paths": {
            "jquery": "vendor/jquery-2.0.2.min",
            "underscore": "vendor/underscore-min",
            "backbone": "vendor/backbone-min"
        },
        shim: {
            'backbone': {
                //These script dependencies should be loaded before loading
                //backbone.js
                deps: ['underscore', 'jquery'],
                //Once loaded, use the global 'Backbone' as the
                //module value.
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            }
        }
    });


    require(["js/app.js"],
    function(App){
        App.start();
    });
})();