const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const runSequence = require('run-sequence');
const rimraf = require('rimraf');//DELET FOLDER
const chalk = require('chalk');//TERMINAL STRING

function logDevelopment() {
  const str = `
  ########  ######## ##     ##
  ##     ## ##       ##     ##
  ##     ## ##       ##     ##
  ##     ## ######   ##     ##
  ##     ## ##        ##   ##
  ##     ## ##         ## ##
  ########  ########    ###
  `;
  console.log(chalk.black.bgYellow(str));
}
function logProduction() {
  const str = `
  ########  ########   #######
  ##     ## ##     ## ##     ##
  ##     ## ##     ## ##     ##
  ########  ########  ##     ##
  ##        ##   ##   ##     ##
  ##        ##    ##  ##     ##
  ##        ##     ##  #######   `;
  console.log(chalk.bgCyan.white.bold(str));
}

gulp.task('rimraf', (cb) => {
  console.log('rimraf');
  rimraf('./dist', cb);
});


gulp.task('webpack-dev-server', (cb) => {
  logDevelopment();
  const HOST = 'localhost';
  const PORT = 8080;
  const URI = `http://${HOST}:${PORT}/`;
  process.env.NODE_ENV = 'development';
  process.env.ROOT = '/'
  const config = require('./webpack.config');
  const { entry } = config;
  Object.keys(entry).forEach((key) => {
    console.log(key)
    if (key !== 'vendor') {
      entry[key].unshift(`webpack-dev-server/client?${URI}`, 'webpack/hot/dev-server');
    }
  });
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const server = new WebpackDevServer(webpack(config), config.devServer);
  server.listen(PORT, HOST, (err) => {
    if (err) { console.error(err); }
    gutil.log('[webpack-dev-server]', URI);
    cb();
  });
});

gulp.task('webpack-build', (cb) => {
  logProduction();
  process.env.NODE_ENV = 'production';
  process.env.ROOT = '/'
  const config = require('./webpack.config');
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false },
    }) // eslint-disable-line
  );
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({ colors: true, chunkModules: false }));
    cb();
  });
});


gulp.task('p', () => runSequence('rimraf', 'webpack-build'));
gulp.task('d', ['webpack-dev-server']);
gulp.task('default', ['webpack-dev-server']);
