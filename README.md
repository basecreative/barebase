# barebase
Flat boilerplate we use on every build. Work in continuous progress.

## How to make it work
You'll need to have [node.js](https://nodejs.org/download/) and [Sass](http://sass-lang.com/install) installed to make this work. To install all the node dependencies, use this on the project folder (should have a package.json):

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


## What's in the box?
Barebase includes some core markup, grunt setup and styles besides some useful libraries.

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