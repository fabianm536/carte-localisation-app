//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define(["require","exports"],b)})(function(b,d){function f(c){return g.test(c)}Object.defineProperty(d,"__esModule",{value:!0});var g=/^[a-z]{2,3}(-[a-z0-9\-\_]+)?$/i;d.generateLocales=function(c){c=d.normalizeLocale(c).split("-");for(var a=c[0],b=[a],e=0;e<c.length-1;e+=1)a+="-"+c[e+1],b.push(a);return b};d.normalizeLocale=function(){function b(a){return-1===
a.indexOf(".")?a.replace(/(\-|_)$/,""):a.split(".").slice(0,-1).map(function(a){return a.replace(/(\-|_)$/,"").replace(/_/g,"-")}).join("-")}return function(a){a=b(a);if(!f(a))throw Error(a+" is not a valid locale.");return a}}();d.validateLocale=f});