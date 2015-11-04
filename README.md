# barebase
Flat and theme frontend engine we use on every build. Work in continuous progress.

## How to make it work
You'll need to have [node.js](https://nodejs.org/download/) and [Sass](http://sass-lang.com/install) installed to make this work. To install barebase and all its dependencies, just go to the project folder and do:

```
npm install basecreative/barebase
```

Once it's done you won't need to do it again in the same project. Your project folder is the one called barebase, inside `node_modules`.
 
To start developing, use `grunt work:dev:project_name`. Then work on the `src` folder and all your compiled files will go to `build`.
When you're ready to deploy, use `grunt work:build:project_name`.

This will optimise and minify everything for production.

## Updating barebase
To update the npm modules for a project, you will need npm-check-updates. To install it globally:

```
npm install -g npm-check-updates
```

Then run `ncu -u` to update your `package.json` file. Then to update your modules, run this on the project:

```
npm update
npm upgrade
```

And now all your modules are up to date!

## Updating node
Run these commands to update node and npm.
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## What's in the box?
Barebase includes some core markup, grunt setup and styles besides some useful libraries.

### Sass
- [Harry Robert's file structure](http://cssguidelin.es/): Specificity matters!
- [normalize.css](http://necolas.github.io/normalize.css/): CSS reset
- [sass-mq](https://github.com/sass-mq/sass-mq): Fantastic media query mixin from theguardian
- [sass-vary](http://jaicab.com/sass-vary/): Create module variations in no time
- [sass-ext](http://jaicab.com/sass-ext/): Sass' @extend on a budget

### JavaScript
- [Modernizr](http://modernizr.com/) (mandatory)
- [picturefill](https://github.com/scottjehl/picturefill) (mandatory)
- [Respond.js](https://github.com/scottjehl/Respond): A fast & lightweight polyfill for min/max-width CSS3 Media Queries
- [Swipe.js](https://github.com/thebird/Swipe): Vanilla JS touch slider
- [Webshims](http://afarkas.github.io/webshim/demos/) for HTML5 form validation support

## Grunt tasks
All our grunt tasks can be found on out [dependencies file](https://github.com/basecreative/barebase/blob/master/package.json).

## License
barebase is curated by The Base Creative team and is released under the MIT license