# Webpack & ES6 Demo

This is a stupidly simple CommonJS application made of two files, `main.js`, and its dependency
 `cat.js`.

## Try it out

Bundle JS files with webpack by running this command. Check out `webpack.config.js` to 
see exactly what's webpack is doing. 
```
webpack
```

Then, run the bundled JS in node to confirm that the modules were loaded correctly.
```
node bundled-cats.js
```

You should see:
```
Fluffykins meooowwwwwsss
```