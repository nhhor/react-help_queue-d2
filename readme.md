## Walkthrough

* Create project directory.
  * (Note: If your project directory name includes any capital letters, some versions of npm may throw errors.)
* $ `mkdir src`
* $ `touch src/index.jsx`
* $ `touch index.html`
* $ `apm install react@0.18.0`
* $ `npm init`
  * hit `enter` through terminal prompts.
* $ `touch .gitignore`
  * .DS_STORE
  * node_modules
  * build
* $ `npm install react@15.5.4 react-dom@15.5.4 --save `
* $ `npm install webpack@3.4.0 --save-dev`
* $ `npm install webpack@3.4.0 -g`
* $ `touch webpack.config.js`
* $ `npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev`
* $ ADD to `WEBPACK.CONFIG.JS`:

    `const webpack = require('webpack');
    const { resolve } = require('path');

    module.exports = {

      entry: [
        resolve(__dirname, "src") + "/index.jsx"
      ],

      output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
      },

      resolve: {
        extensions: [ '.js', '.jsx' ]
      },

      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: [
                "es2015",
                "react"
              ]
            }
          },
        ],`
* $ `ADD - import React from "react";
import ReactDOM from "react-dom";` to `index.js`
* $ `$ webpack`
* $ `npm install prop-types@15.5.10 --save`
* $ `npm install webpack-dev-server@2.5.0 -g`
* $ `npm install webpack-dev-server@2.5.0 --save-dev`
* $ `webpack`
* $ `webpack-dev-server`
* [http://localhost:8080/](http://localhost:8080/)
* $`npm install react-hot-loader@3.0.0-beta.7 --save-dev`
* $`npm install html-webpack-plugin@2.29.0 --save-dev`
* $`webpack-dev-server`
* $``
* $``
* $``
* $``
* $``

## PropTypes:
MyExampleComponent.propTypes = {
  * exampleArray: PropTypes.array,
  * exampleBoolean: PropTypes.bool,
  * exampleFunction: PropTypes.func,
  * exampleNumber: PropTypes.number,
  * exampleObject: PropTypes.object,
  * exampleString: PropTypes.string,
  * exampleSymbol: PropTypes.symbol,
  * exampleReactElement: PropTypes.element,

  * exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  * exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

  * exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),

  * optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),

}

## Pure Functions
* Pure functions' return values are determined using only provided input values.
* Pure functions do not ever alter external state or application data.

[Components and Props
](https://reactjs.org/docs/components-and-props.html)
