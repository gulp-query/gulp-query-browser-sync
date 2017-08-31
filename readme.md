## gulp-query-browser-sync
BrowserSync plugin for [gulp-query](https://github.com/gulp-query/gulp-query)

Uses [browser-sync](https://browsersync.io/)

This plugin provides BrowserSync with a single line of code

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
      .bs(['src/js/**/*.js'],'example.com') // Be sure to read the Attention below
      .bs(['src/js/**/*.js'],'example2.com',{bs:{port:3010,ui:{port:3011}}})
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
    injectCSS: true, // For reloading only css, if css file was changed
    bs: {
      proxy: "example.com",
      port: 3000,
      ui: 3001,
      ...
      // All options for BrowserSync
    }
})

// short
.browserSync([watch], proxy, task_name);

// short with config
.browserSync([watch], proxy, {config});
```


### *Attention

In some cases, you need to change the `/etc/hosts` to work proxy
```
127.0.0.1 localhost
127.0.0.1 example.com ## insert proxy host
...
```

If you are working through the VirtualBox/Vagrant, you need to turn off `sendfile`.  
For NGINX (`/etc/nginx/nginx.conf`) add `sendfile off;`  
For Apache `EnableSendfile off`