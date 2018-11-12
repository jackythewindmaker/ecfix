var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');


elixir.config.assetsPath = '';
elixir.config.publicPath = '';

elixir(function(mix){

    mix.sass([
        'bootstrap.min.css',
        'bootstrap_limitless.min.css',
        'app.scss'
    ]);

    mix.scripts([
        'function.js',
        'jquery.min.js',
        'masonry.pkgd.min.js',
        'init.js',
    ], 'js/app.js');

    mix.scripts([
        'register.js'
    ], 'js/compiled.register.js');

    mix.scripts([
        'panel.js'
    ], 'js/compiled.panel.js');
})