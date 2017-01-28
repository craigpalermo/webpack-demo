# Webpack & ES6 Demo

This is a simple CommonJS application made of three files that are interdependent.

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
Fluffykins the cat meooowwwwwsss
Mittens the kitten mews in the color black
```