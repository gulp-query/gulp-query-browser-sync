## gulp-query-browser-sync
BrowserSync plugin for [gulp-query](https://github.com/gulp-query/gulp-query)

Uses [browser-sync](https://browsersync.io/)

This plugin provides BrowserSync

```
npm install gulp-query gulp-query-browser-sync
```

### Example
Paste the code into your `gulpfile.js` and configure it
```javascript
let build = require('gulp-query')
  , bs = require('gulp-query-browser-sync')
;
build((query) => {
    query.plugins([bs])
      .bs(['src/js/**/*.js'],'example.com')
    ;
});
```
And feel the freedom
```
gulp watch // Watching change
gulp bs watch // Only for bs files
gulp bs:app watch
...
```

### Options
```javascript
.browserSync({
    name: "task_name", // For gulp bs:task_name 
    watch: "src/js/**/*.js", // ["src/js/**/*.js", "views/**/*.php"]
    bs: {
      proxy: "example.com",
      port: 3000,
      ui: 3001,
      ...
      // All options for BrowserSync
    }
})
```