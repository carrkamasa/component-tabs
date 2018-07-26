let mix = require('laravel-mix');

mix
    .babel(['src/jquery.js', 'src/app.js'], 'dist/app.js')
    .sass('src/app.scss', 'dist/')
    .options({
        processCssUrls: false
    });