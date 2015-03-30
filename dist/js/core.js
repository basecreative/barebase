/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-load-mq-cssclasses-input-inputtypes-touch-backgroundsize
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },

    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };
    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };
    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className+=" " + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
                var version = '3.7.0';

            var options = window.html5 || {};

            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

            var supportsHtml5Styles;

            var expando = '_html5shiv';

            var expanID = 0;

            var expandoData = {};

            var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
                    supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

            function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

            function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

            function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

            function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

            function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

            function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                                                                                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

            function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                                                    'mark{background:#FF0;color:#000}' +
                                                                                    'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

            var html5 = {

                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

                'version': version,

                'shivCSS': (options.shivCSS !== false),

                'supportsUnknownElements': supportsUnknownElements,

                'shivMethods': (options.shivMethods !== false),

                'type': 'default',

                'shivDocument': shivDocument,

                createElement: createElement,

                createDocumentFragment: createDocumentFragment
        };

            window.html5 = html5;

            shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;

    Modernizr.mq            = testMediaQuery;


    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js '+classes.join(' ') : '');

    return Modernizr;

})(this, this.document);

(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/*! Picturefill - v2.1.0 - 2014-07-25
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h=a||{};b=h.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,f=void 0,g=void 0,c[e.ns]||(c[e.ns]={}),h.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(e.removeVideoShim(d),f=e.getMatch(c,d),f===!1)continue}else f=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!e.srcsetSupported||!e.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&e.dodgeSrcset(c),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,c)):(g=e.processSourceSet(c),(void 0===c.srcset||c[e.ns].srcset)&&e.applyBestCandidate(g,c)),c[e.ns].evaluated=!0}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported="srcset"in b.createElement("img"),e.sizesSupported=a.HTMLImageElement.sizes,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth<=0&&(e.lengthEl.style.cssText="width: 100%;"),e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=e.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),i=h.length+1;i>=0;i--)if(void 0!==h[i]){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||e.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}f&&!e.endsWith(b.src,f.url)&&(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,f=c.length;f>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[e.ns]&&null!==g[e.ns].srcset)&&a.push(g)}return a},e.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||e.matchesMedia(i))){var j=e.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}(this,this.document);
!function(a){var b=function(){window.asyncWebshims||(window.asyncWebshims={cfg:[],ready:[]})},c=function(){window.jQuery&&(a(jQuery),a=function(){return window.webshims})};window.webshims={setOptions:function(){b(),window.asyncWebshims.cfg.push(arguments)},ready:function(){b(),window.asyncWebshims.ready.push(arguments)},activeLang:function(a){b(),window.asyncWebshims.lang=a},polyfill:function(a){b(),window.asyncWebshims.polyfill=a},_curScript:function(){var a,b,c,d,e,f=document.currentScript;if(!f){try{throw new Error("")}catch(g){for(c=(g.sourceURL||g.stack||"").split("\n"),e=/(?:fil|htt|wid|abo|app|res)(.)+/i,b=0;b<c.length;b++)if(d=c[b].match(e)){c=d[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/,"");break}}for(a=document.scripts||document.getElementsByTagName("script"),b=0;b<a.length&&(!a[b].getAttribute("src")||(f=a[b],"interactive"!=a[b].readyState&&c!=a[b].src));b++);}return f}()},window.webshim=window.webshims,window.webshims.timer=setInterval(c,0),c(),"function"==typeof define&&define.amd&&define("polyfiller",["jquery"],a)}(function(a){"use strict";function b(a){return document.createElement(a)}var c,d,e=window.navigator,f=window.webshims,g="dom-support",h=a.event.special,i=a([]),j=window.asyncWebshims,k={},l=window.Object,m=function(a){return a+"\n//# sourceURL="+this.url},n=function(a){return p.enhanceAuto||"auto"!=a?a:!1},o={matchmedia:"matchMedia",xhr2:"filereader",promise:"es6",URL:"url"};clearInterval(f.timer),k.advancedObjectProperties=k.objectAccessor=k.ES5=!!("create"in l&&"seal"in l),!k.ES5||"toJSON"in Date.prototype||(k.ES5=!1),d=a.support.hrefNormalized===!1?f._curScript.getAttribute("src",4):f._curScript.src,d=d.split("?")[0].slice(0,d.lastIndexOf("/")+1)+"shims/",a.extend(f,{version:"1.15.3",cfg:{enhanceAuto:window.Audio&&(!window.matchMedia||matchMedia("(min-device-width: 721px)").matches),waitReady:!0,loadStyles:!0,wsdoc:document,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{},loadScript:function(b,c){a.ajax(a.extend({},p.ajax,{url:b,success:c,dataType:"script",cache:!0,global:!1,dataFilter:m}))},basePath:d},support:k,bugs:{},modules:{},features:{},featureList:[],setOptions:function(b,c){"string"==typeof b&&arguments.length>1?p[b]=a.isPlainObject(c)?a.extend(!0,p[b]||{},c):c:"object"==typeof b&&a.extend(!0,p,b)},_getAutoEnhance:n,addPolyfill:function(b,c){c=c||{};var d=c.f||b;q[d]||(q[d]=[],f.featureList.push(d),p[d]={}),q[d].push(b),c.options=a.extend(p[d],c.options),x(b,c),c.methodNames&&a.each(c.methodNames,function(a,b){f.addMethodName(b)})},polyfill:function(){return function(a){a||(a=f.featureList),"string"==typeof a&&(a=a.split(" "));return f._polyfill(a)}}(),_polyfill:function(b){var d,e=[];c.run||(d=-1!==a.inArray("forms-ext",b),c(),d&&-1==a.inArray("forms",b)&&b.push("forms"),p.loadStyles&&v.loadCSS("styles/shim"+(d&&!u["form-number-date-ui"].test()?"-ext":"")+".css")),p.waitReady&&(a.readyWait++,s(b,function(){a.ready(!0)})),a.each(b,function(a,b){return b=o[b]||b,q[b]?(b!==q[b][0]&&s(q[b],function(){r(b,!0)}),void(e=e.concat(q[b]))):void r(b,!0)}),w(e),a.each(b,function(a,b){var c=p[b];c&&("mediaelement"==b&&(c.replaceUI=n(c.replaceUI))&&c.plugins.unshift("mediacontrols"),c.plugins&&c.plugins.length&&w(p[b].plugins))})},reTest:function(){var b,c=function(c,d){var e=u[d],f=d+"Ready";!e||e.loaded||(e.test&&a.isFunction(e.test)?e.test([]):e.test)||(h[f]&&delete h[f],q[e.f],b.push(d))};return function(d){"string"==typeof d&&(d=d.split(" ")),b=[],a.each(d,c),w(b)}}(),isReady:function(b,c){if(b+="Ready",c){if(h[b]&&h[b].add)return!0;h[b]=a.extend(h[b]||{},{add:function(a){a.handler.call(this,b)}}),a(document).triggerHandler(b)}return!(!h[b]||!h[b].add)||!1},ready:function(b,c){var d=arguments[2];if("string"==typeof b&&(b=b.split(" ")),d||(b=a.map(a.grep(b,function(a){return!r(a)}),function(a){return a+"Ready"})),!b.length)return void c(a,f,window,document);var e=b.shift(),g=function(){s(b,c,!0)};a(document).one(e,g)},capturingEvents:function(b,c){document.addEventListener&&("string"==typeof b&&(b=[b]),a.each(b,function(b,d){var e=function(b){return b=a.event.fix(b),c&&f.capturingEventPrevented&&f.capturingEventPrevented(b),a.event.dispatch.call(this,b)};h[d]=h[d]||{},h[d].setup||h[d].teardown||a.extend(h[d],{setup:function(){this.addEventListener(d,e,!0)},teardown:function(){this.removeEventListener(d,e,!0)}})}))},register:function(b,c){var d=u[b];if(!d)return void f.error("can't find module: "+b);d.loaded=!0;var e=function(){c(a,f,window,document,void 0,d.options),r(b,!0)};d.d&&d.d.length?s(d.d,e):e()},c:{},loader:{addModule:function(b,c){u[b]=c,c.name=c.name||b,c.c||(c.c=[]),a.each(c.c,function(a,c){f.c[c]||(f.c[c]=[]),f.c[c].push(b)})},loadList:function(){var b=[],c=function(c,d){"string"==typeof d&&(d=[d]),a.merge(b,d),v.loadScript(c,!1,d)},d=function(c,d){if(r(c)||-1!=a.inArray(c,b))return!0;var e,f=u[c];return f?(e=f.test&&a.isFunction(f.test)?f.test(d):f.test,e?(r(c,!0),!0):!1):!0},e=function(b,c){if(b.d&&b.d.length){var e=function(b,e){d(e,c)||-1!=a.inArray(e,c)||c.push(e)};a.each(b.d,function(b,c){u[c]?u[c].loaded||e(b,c):q[c]&&(a.each(q[c],e),s(q[c],function(){r(c,!0)}))}),b.noAutoCallback||(b.noAutoCallback=!0)}};return function(g){var h,i,j,k,l=[],m=function(d,e){return k=e,a.each(f.c[e],function(c,d){return-1==a.inArray(d,l)||-1!=a.inArray(d,b)?(k=!1,!1):void 0}),k?(c("combos/"+k,f.c[k]),!1):void 0};for(i=0;i<g.length;i++)h=u[g[i]],h&&!d(h.name,g)&&(h.css&&p.loadStyles&&v.loadCSS(h.css),h.loadInit&&h.loadInit(),e(h,g),h.loaded||l.push(h.name),h.loaded=!0);for(i=0,j=l.length;j>i;i++)k=!1,h=l[i],-1==a.inArray(h,b)&&("noCombo"!=p.debug&&a.each(u[h].c,m),k||c(u[h].src||h,h))}}(),makePath:function(a){return-1!=a.indexOf("//")||0===a.indexOf("/")?a:(-1==a.indexOf(".")&&(a+=".js"),p.addCacheBuster&&(a+=p.addCacheBuster),p.basePath+a)},loadCSS:function(){var b,c={};return function(d){d=this.makePath(d),c[d]||(b=b||a("link, style")[0]||a("script")[0],c[d]=1,a('<link rel="stylesheet" />').insertBefore(b).attr({href:d}))}}(),loadScript:function(){var b={};return function(c,d,e,f){if(f||(c=v.makePath(c)),!b[c]){var g=function(){d&&d(),e&&("string"==typeof e&&(e=e.split(" ")),a.each(e,function(a,b){u[b]&&(u[b].afterLoad&&u[b].afterLoad(),r(u[b].noAutoCallback?b+"FileLoaded":b,!0))}))};b[c]=1,p.loadScript(c,g,a.noop)}}}()}});var p=f.cfg,q=f.features,r=f.isReady,s=f.ready,t=f.addPolyfill,u=f.modules,v=f.loader,w=v.loadList,x=v.addModule,y=f.bugs,z=[],A={warn:1,error:1},B=a.fn,C=b("video");f.addMethodName=function(a){a=a.split(":");var b=a[1];1==a.length?(b=a[0],a=a[0]):a=a[0],B[a]=function(){return this.callProp(b,arguments)}},B.callProp=function(b,c){var d;return c||(c=[]),this.each(function(){var e=a.prop(this,b);if(e&&e.apply){if(d=e.apply(this,c),void 0!==d)return!1}else f.warn(b+" is not a method of "+this)}),void 0!==d?d:this},f.activeLang=function(){"language"in e||(e.language=e.browserLanguage||"");var b=a.attr(document.documentElement,"lang")||e.language;return s("webshimLocalization",function(){f.activeLang(b)}),function(a){if(a)if("string"==typeof a)b=a;else if("object"==typeof a){var c=arguments,d=this;s("webshimLocalization",function(){f.activeLang.apply(d,c)})}return b}}(),f.errorLog=[],a.each(["log","error","warn","info"],function(a,b){f[b]=function(a){(A[b]&&p.debug!==!1||p.debug)&&(f.errorLog.push(a),window.console&&console.log&&console[console[b]?b:"log"](a))}}),function(){a.isDOMReady=a.isReady;var b=function(){a.isDOMReady=!0,r("DOM",!0),setTimeout(function(){r("WINDOWLOAD",!0)},9999)};c=function(){if(!c.run){if((p.debug||!("crossDomain"in p.ajax)&&location.protocol.indexOf("http"))&&(p.ajax.crossDomain=!0),!a.isDOMReady&&p.waitReady){var d=a.ready;a.ready=function(a){return a!==!0&&document.body&&b(),d.apply(this,arguments)},a.ready.promise=d.promise}p.readyEvt?a(document).one(p.readyEvt,b):a(b)}c.run=!0},a(window).on("load",function(){b(),setTimeout(function(){r("WINDOWLOAD",!0)},9)});var d=[],e=function(){1==this.nodeType&&f.triggerDomUpdate(this)};a.extend(f,{addReady:function(a){var b=function(b,c){f.ready("DOM",function(){a(b,c)})};d.push(b),p.wsdoc&&b(p.wsdoc,i)},triggerDomUpdate:function(b){if(!b||!b.nodeType)return void(b&&b.jquery&&b.each(function(){f.triggerDomUpdate(this)}));var c=b.nodeType;if(1==c||9==c){var e=b!==document?a(b):i;a.each(d,function(a,c){c(b,e)})}}}),B.clonePolyfill=B.clone,B.htmlPolyfill=function(b){if(!arguments.length)return a(this.clonePolyfill()).html();var c=B.html.call(this,b);return c===this&&a.isDOMReady&&this.each(e),c},B.jProp=function(){return this.pushStack(a(B.prop.apply(this,arguments)||[]))},a.each(["after","before","append","prepend","replaceWith"],function(b,c){B[c+"Polyfill"]=function(b){return b=a(b),B[c].call(this,b),a.isDOMReady&&b.each(e),this}}),a.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(b,c){B[c.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){return B[c].apply(this,arguments),a.isDOMReady&&f.triggerDomUpdate(this),this}}),B.updatePolyfill=function(){return a.isDOMReady&&f.triggerDomUpdate(this),this},a.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,b){B[b]=function(){return this.pushStack(this)}})}(),l.create&&(f.objectCreate=function(b,c,d){var e=l.create(b);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),x("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,23]}),u.swfmini.test(),x("sizzle",{test:a.expr.filters}),t("es5",{test:!(!k.ES5||!Function.prototype.bind),d:["sizzle"]}),t("dom-extend",{f:g,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,31,34]}),b("picture"),t("picture",{test:"picturefill"in window||!!window.HTMLPictureElement,d:["matchMedia"],c:[18],loadInit:function(){r("picture",!0)}}),t("matchMedia",{test:!(!window.matchMedia||!matchMedia("all").addListener),c:[18]}),t("sticky",{test:-1!=(a(b("b")).attr("style","position: -webkit-sticky; position: sticky").css("position")||"").indexOf("sticky"),d:["es5","matchMedia"]}),t("es6",{test:!!(Math.imul&&Number.MIN_SAFE_INTEGER&&l.is&&window.Promise&&Promise.all),d:["es5"]}),t("geolocation",{test:"geolocation"in e,options:{destroyWrite:!0},c:[21]});var D="getUserMedia"in e;t("usermedia-core",{f:"usermedia",test:D&&window.URL,d:["url",g]}),t("usermedia-shim",{f:"usermedia",test:!!(D||e.webkitGetUserMedia||e.mozGetUserMedia||e.msGetUserMedia),d:["url","mediaelement",g]}),function(){t("canvas",{src:"excanvas",test:"getContext"in b("canvas"),options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var a=this.options.type;!a||-1===a.indexOf("flash")||u.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==a?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[g]})}(),function(){var c,d,h="form-shim-extend",i="formvalidation",j="form-number-date-api",l=!1,m=!1,o=!1,q={},r=b("progress"),s=b("output"),v=function(){var d,f,g="1(",j=b("input");if(f=a('<fieldset><textarea required="" /></fieldset>')[0],k.inputtypes=q,a.each(["range","date","datetime-local","month","color","number"],function(a,b){j.setAttribute("type",b),q[b]=j.type==b&&(j.value=g)&&j.value!=g}),k.datalist=!!("options"in b("datalist")&&window.HTMLDataListElement),k[i]="checkValidity"in j,k.fieldsetelements="elements"in f,k.fieldsetdisabled="disabled"in f){try{f.querySelector(":invalid")&&(f.disabled=!0,d=!f.querySelector(":invalid")&&f.querySelector(":disabled"))}catch(n){}k.fieldsetdisabled=!!d}if(k[i]&&(m=!(k.fieldsetdisabled&&k.fieldsetelements&&"value"in r&&"value"in s),o=m&&/Android/i.test(e.userAgent),l=window.opera||y.bustedValidity||m||!k.datalist,!l&&q.number)){l=!0;try{j.type="number",j.value="",j.stepUp(),l="1"!=j.value}catch(p){}}return y.bustedValidity=l,c=k[i]&&!l?"form-native-extend":h,v=a.noop,!1},w=function(b){var c=!0;return b._types||(b._types=b.types.split(" ")),a.each(b._types,function(a,b){return b in q&&!q[b]?(c=!1,!1):void 0}),c};f.validationMessages=f.validityMessages={langSrc:"i18n/formcfg-",availableLangs:"ar cs el es fa fr he hi hu it ja lt nl pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")},f.formcfg=a.extend({},f.validationMessages),f.inputTypes={},t("form-core",{f:"forms",test:v,d:["es5"],options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{sel:".ws-validate",handleBubble:"hide",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31]}),d=p.forms,t("form-native-extend",{f:"forms",test:function(b){return v(),!k[i]||l||-1==a.inArray(j,b||[])||u[j].test()},d:["form-core",g,"form-message"],c:[6,5,14,29]}),t(h,{f:"forms",test:function(){return v(),k[i]&&!l},d:["form-core",g,"sizzle"],c:[16,15,28]}),t(h+"2",{f:"forms",test:function(){return v(),k[i]&&!m},d:[h],c:[27]}),t("form-message",{f:"forms",test:function(a){return v(),!(d.customMessages||!k[i]||l||!u[c].test(a))},d:[g],c:[16,7,15,30,3,8,4,14,28]}),t(j,{f:"forms-ext",options:{types:"date time range number"},test:function(){v();var a=!l;return a&&(a=w(this.options)),a},methodNames:["stepUp","stepDown"],d:["forms",g],c:[6,5,17,14,28,29,33]}),x("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!B.rangeUI},d:["es5"],c:[6,5,9,10,17,11]}),t("form-number-date-ui",{f:"forms-ext",test:function(){var a=this.options;return a.replaceUI=n(a.replaceUI),v(),!a.replaceUI&&o&&(a.replaceUI=!0),!a.replaceUI&&w(a)},d:["forms",g,j,"range-ui"],options:{widgets:{calculateWidth:!0,animate:!0}},c:[6,5,9,10,17,11]}),t("form-datalist",{f:"forms",test:function(){return v(),o&&(d.customDatalist=!0),k.datalist&&!d.fD},d:["form-core",g],c:[16,7,6,2,9,15,30,31,28,33]})}();var E="FileReader"in window&&"FormData"in window;return t("filereader-xhr",{f:"filereader",test:E,d:[g,"swfmini"],c:[25,27]}),t("canvas-blob",{f:"filereader",methodNames:["toBlob"],test:!(E&&!b("canvas").toBlob)}),t("details",{test:"open"in b("details"),d:[g],options:{text:"Details"},c:[21,22]}),t("url",{test:function(){var a=!1;try{a=new URL("b","http://a"),a=!(!a.searchParams||"http://a/b"!=a.href)}catch(b){}return a},d:["es5"]}),function(){f.mediaelement={};var c=b("track");if(k.mediaelement="canPlayType"in C,k.texttrackapi="addTextTrack"in C,k.track="kind"in c,b("audio"),!(y.track=!k.texttrackapi))try{y.track=!("oncuechange"in C.addTextTrack("metadata"))}catch(d){}t("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{jme:{},plugins:[],vars:{},params:{},attrs:{},changeSWF:a.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,23]}),t("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core",g],test:function(){var a=this.options;return!k.mediaelement||f.mediaelement.loadSwf?!1:(a.preferFlash&&!u.swfmini.test()&&(a.preferFlash=!1),!(a.preferFlash&&swfmini.hasFlashPlayerVersion("11.3")))},c:[21,25]}),t("track",{options:{positionDisplay:!0,override:y.track},test:function(){var a=this.options;return a.override=n(a.override),!a.override&&!y.track},d:["mediaelement",g],methodNames:["addTextTrack"],c:[21,12,13,22,34]}),x("jmebase",{src:"jme/base",c:[98,99,97]}),a.each([["mediacontrols",{c:[98,99],css:"jme/controls.css"}],["playlist",{c:[98,97]}],["alternate-media"]],function(b,c){x(c[0],a.extend({src:"jme/"+c[0],d:["jmebase"]},c[1]))}),x("track-ui",{d:["track",g]})}(),t("feature-dummy",{test:!0,loaded:!0,c:z}),f.$=a,a.webshims=f,a.webshim=webshim,f.callAsync=function(){f.callAsync=a.noop,j&&(j.cfg&&(j.cfg.length||(j.cfg=[[j.cfg]]),a.each(j.cfg,function(a,b){f.setOptions.apply(f,b)})),j.ready&&a.each(j.ready,function(a,b){f.ready.apply(f,b)}),j.lang&&f.activeLang(j.lang),"polyfill"in j&&f.polyfill(j.polyfill)),f.isReady("jquery",!0)},f.callAsync(),f});


// Respond - Uncomment this if you want extra support for media queries
// yepnope({
// 	test : Modernizr.mq('only all'),
// 	nope : ['/wp-content/themes/basecreative/js/vendor/respond.js']
// });



// ready(function(){		

// 	// Toggle nav
// 	document.querySelector(".nav-toggle-menu").addEventListener("click", function(event){
// 		(event.preventDefault) ? event.preventDefault() : event.returnValue = false; 
// 		var theTarget = document.querySelector(".nav-target-menu");

// 		if(theTarget !== undefined){
// 			// Use the active classes to change the style of both elements with CSS
// 			this.classList.toggle('active');
// 			theTarget.classList.toggle('active');
// 		}
// 	});

// });



$(function(){

	//Activate form validation (polyfiller.js)
	webshim.activeLang('en-GB');
 	webshim.polyfill('forms forms-ext');


 	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav-target-menu').toggleClass('active');
	});

});