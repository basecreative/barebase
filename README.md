# barebase
Flat boilerplate we use on every build. Work in continuous progress.

## How to make it work
You'll need node.js for Grunt and Ruby for Sass. To install any other dependencies, use

```
npm install
```

Once it's done you won't need to do it again in the same project. To start developing, use `grunt`.
Then work on the `src` folder and all your compiled files will go to `dist`.

When you're ready to deploy, use: 
```
grunt deploy
```

This will optimise and minify everything for production.


## What is included?
Barebase includes some core markup and styles besides some useful libraries.

### Sass
- [Harry Robert's file structure](http://cssguidelin.es/): Specificity matters!
- [normalize.css](http://necolas.github.io/normalize.css/): CSS reset
- [sass-mq](https://github.com/sass-mq/sass-mq): Fantastic media query mixin from theguardian
- [ext()](http://jaicab.com/ext/): Sass' @extend on a budget

### JavaScript
- [Modernizr](http://modernizr.com/) (mandatory)
- [picturefill](https://github.com/scottjehl/picturefill) (mandatory)
- [Swipe.js](https://github.com/thebird/Swipe): Vanilla JS touch slider
- [Webshims](http://afarkas.github.io/webshim/demos/) for HTML5 form validation support

## Grunt tasks
All out grunt tasks can be found on out [dependencies file](https://github.com/basecreative/barebase/blob/master/package.json).

## License
barebase is curated by The Base Creative team and is released under the MIT license