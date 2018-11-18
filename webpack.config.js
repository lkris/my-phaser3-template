'use strict';

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = env => {

    const isProd = env.prod === 'true';
    const runCleanup = isProd ? true : 
      (env.cleanup == undefined ? false : 
        (env.cleanup === 'true' ? true : false));

    return {

        //
        // ENTRY
        //
        entry: './src/game.js',
        //
        // DEV SERVER
        //
        devServer: {
          contentBase: './build'
        },
        //
        // OUTPUT
        //
        output: {
            path: (() => { if (isProd) {
                             return path.resolve(__dirname, 'dist');
                           } else {
                             return path.resolve(__dirname, 'build');
                           }
                         }) (),
  
            filename: 'project.bundle.js'
        },
        //
        // LOADERS
        //
        module: {
            rules: [
              {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
              },
            ]
        },
        //
        // PLUGINS
        //        
        plugins: (() => {

          // CONFIG
          var _WebPackDefinePlugin = new webpack.DefinePlugin({
                      'CANVAS_RENDERER': JSON.stringify(true),
                      'WEBGL_RENDERER': JSON.stringify(true)
                    });

          // HTML
          var _HtmlWebpackPlugin = new HtmlWebpackPlugin({
                      template: 'src/template.html'
                    });            
          
          // ASSETS
          var _CopyWebpackPlugin = new CopyWebpackPlugin([
                      {
                          from: 'assets/*',
                          to: './'
                      }    
                  ], {});

          // CLEAN-UP
          if (isProd) {
            var pathsToClean = [ 'dist' ];

          } else {
            var pathsToClean = [ 'build' ];
          };

          var cleanOptions = {
                root: __dirname
            };

          var _CleanWebpackPlugin = new CleanWebpackPlugin(pathsToClean, cleanOptions);

          if (runCleanup) {
            return [ _WebPackDefinePlugin, _HtmlWebpackPlugin, _CopyWebpackPlugin, _CleanWebpackPlugin ];
          } else {
            return[ _WebPackDefinePlugin, _HtmlWebpackPlugin, _CopyWebpackPlugin ];
          };

        }) ()

    };

};
