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

    let parent_folder = 'parent_folder' in config ? config.parent_folder : null;

    let watch;
    if ('from' in config) {
      watch = config['from'];
    } else {
      watch = config['watch'];
    }

    if (!Array.isArray(watch)) {
      watch = [watch];
    }

    let bsCfg = {
      proxy: null
    };

    if ('to' in config) {
      bsCfg.proxy = config['to'];
    } else {
      bsCfg = config['bs'];
    }

    let bs = browserSync.create();

    this._GulpQuery.provideBrowserSync(bs);

    bs.init(bsCfg);

    gulp.watch(watch)
      .on('change', (event) => {
        this.report(task_name, event.path, bsCfg.proxy, true, [
          'reload'
        ]);

        bs.reload();
    });
  }

}

module.exports = BrowserSyncPlugin;