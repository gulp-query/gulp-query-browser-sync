let Plugin = require('gulp-query').Plugin
  , browserSync = require('browser-sync')
  , node_path = require('path')
  , glob = require('glob')
  , gulp = require('gulp')
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

  /**
   * @param task_name
   * @returns {Array}
   */
  watchTaskFiles(task_name)
  {
    return [];
  }

  run(task_name, config, callback) {

    if (!this._GulpQuery.isWatching()) {
      callback();
      return;
    }

    let watch;
    if ('from' in config) {
      watch = config['from'];
    } else {
      watch = config['watch'];
    }

    let injectCSS = 'injectCSS' in config ? config['injectCSS'] : true;

    if (!Array.isArray(watch)) {
      watch = [watch];
    }

    let bsCfg = {
      proxy: null
    };

    if ('to' in config) {

      if (typeof config['to'] === 'object') {
        bsCfg = config['to'];
      } else {
        bsCfg.proxy = config['to'];
      }

    }

    if ('bs' in config) {
      bsCfg = Object.assign({},bsCfg,config['bs']);
    }

    let bs = browserSync.create();

    bs.init(bsCfg);

    gulp.watch(watch)
      .on('change', (event) => {

        let message = 'reload';

        if (injectCSS && event.path.indexOf('.css') !== -1) {
          let file = node_path.basename(event.path);
          message = 'reload ' + file;
          bs.reload(file);
        } else {
          bs.reload();
        }

        this.report(task_name, event.path, bsCfg.proxy, true, [
          message
        ]);

    });

    callback();
  }

}

module.exports = BrowserSyncPlugin;