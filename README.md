### React Webpack Babel configuration

First create a `package.json` and add the following

```js
{
  "name": "project-name"
}
```
### Webpack

Install Webpack to transpile and bundle JavaScript files

`npm install --save-dev webpack`

Create a `src` directory, with a `js` directory within it. Then add a `app.js` file within `src/js`

Add `console.log('Hello, world!');` to `src/js/app.js`

Create a Webpack configuration file in the root of the project

`webpack.config.js`

Now we need to add a build script to the `package.json`, to run Webpack from the command line

```js
{
  "name": "project-name",
  "devDependencies": {
    "webpack": "^3.6.0"
  },
  "scripts": {
    "build": "webpack"
  }
}
```

Try running Webpack from the command line
`npm run build`


### Add a dev server. We can do this with Webpack


`npm install -save-dev webpack-dev-server`

And lets add a new script to our `package.json`:

```js
{
  "name": "project-name",
  "devDependencies": {
    "webpack": "^3.6.0"
  },
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
  }
}
```

The server will now run at [http://localhost:8080/](http://localhost:8080/) when running `npm run dev` from the command line

Create a `index.html` in `src`:

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <title>React configuration</title>
  </head>
  <body>
  </body>
</html>
```

Add this HTML plugin to serve our Webpack bundles

`npm install --save-dev html-webpack-plugin`

Lets add this to our `webpack.config.js` and add the following

```js
const path = require('path');
// Import the HTML plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Tell Webpack to use html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
};
```

Run `npm run dev` and you should see Hello, world! in the console.

## Babel

We need to installing the following four Babel packages

`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react`

And lets add Babels default config file to root of our project

`.babelrc`

Then add the following
```js
{
  "presets": ["env", "react"]
}
```

Update `webpack.config.js` to use Babel loader for `.js` and `.jsx` files.

```js
// Babel loader config below
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    },
  ],
},
resolve: {
  extensions: ['.js', '.jsx'],
},
```
