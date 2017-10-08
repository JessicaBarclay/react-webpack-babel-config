Create `package.json`

```
{
  "name": "project-name"
}
```

Install Webpack to transpile and bundle JavaScript files

`npm install --save-dev webpack`

Create `src` directory, with `js` directory within it
add `app.js` file to `src/js`

Add `console.log('Hello, world!');` to `src/js/app.js`


Create a Webpack configurtion file:
`webpack.config.js`

Now we need to add a build script to package.json, to run Webpack from the commmand line:

```
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

Try running Webpack from the command line:
`npm run build`

