const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const gcmq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin') 
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/index.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(gcmq())
        .pipe(dest('dist'))

}

function js() {
    return src('src/js/index.js')
        .pipe(include())
        .pipe(dest('dist'))
}

function clear() {
    return del('dest')
}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/index.html', series(html)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
    watch('src/js/index.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, scss, html, js)
exports.serve = series(clear, scss, html, js, serve)