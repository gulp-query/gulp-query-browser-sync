let Plugin = require('gulp-query').Plugin
  , node_path = require('path')
  , glob = require('glob')
  , babel = require('gulp-babel')
  , uglify = require('gulp-uglify')
  , gulp = require('gulp')
  , gulpif = require('gulp-if')
  , concat = require("gulp-concat")
  , sourcemaps = require('gulp-sourcemaps')
;

class BrowserSyncPlugin extends Plugin {

  static method() {
    return 'bs';
  }

  /**
   *
   * @param {GulpQuery} GulpQuery
   * @param configs
   */
  constructor(GulpQuery, configs) {
    super(GulpQuery, configs);

    this.isExtension = true;
  }
}

module.exports = BrowserSyncPlugin;