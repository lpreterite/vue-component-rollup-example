import pkg from './package.json'

import gulp from "gulp"
import rollup from "gulp-better-rollup"
import sourcemaps from "gulp-sourcemaps"
import mocha from "gulp-mocha"
import shell from "gulp-shell"

import r_resolve from 'rollup-plugin-node-resolve'
import r_commonjs from 'rollup-plugin-commonjs'
import r_vue from 'rollup-plugin-vue'
import r_css from 'rollup-plugin-css-only'

function _build(sources){
    return () =>gulp.src(sources)
    .pipe(sourcemaps.init())
    .pipe(rollup(
        //input set
        {
            plugins: [
                r_css(),
                r_vue({ css: false }),
                r_resolve(),
                r_commonjs(),
            ]
        },
        //output set
        [
            { name: 'vpin', file: pkg.browser, format: 'umd', exports: 'named' },
			{ name: 'vpin', file: pkg.main, format: 'cjs', exports: 'named' },
			{ name: 'vpin', file: pkg.module, format: 'es', exports: 'named' }
        ]
    ))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist'))
}
function _test(){
    return shell.task(['nyc mocha'], {cwd:process.cwd()})
}
function _watch(paths, ...cbs){
    return () => paths.forEach(src=>gulp.watch(src, gulp.series(...cbs)))
}

const sources = ['src/main.js']
const watchPaths = ['src/**/*','test/**/*']

export default _build(sources)
export const build = _build(sources)
export const watch = _watch(watchPaths, _build(sources)) // has bug
export const test = _test()