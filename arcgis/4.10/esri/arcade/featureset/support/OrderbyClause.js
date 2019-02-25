// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){return function(){function d(b){b=b.split(",");this._fields=[];this._directions=[];for(var a=0;a<b.length;a++){var e=b[a].match(/\S+/g);this._fields.push(e[0]);2===e.length?"asc"===e[1].toLowerCase()?this._directions.push(1):this._directions.push(0):this._directions.push(1)}}d.prototype.constructClause=function(){for(var b="",a=0;a<this._fields.length;a++)0!==a&&(b+=","),b+=this._fields[a],b=1===this._directions[a]?b+" ASC":b+" DESC";return b};d.prototype.order=
function(b){var a=this;b.sort(function(b,d){for(var c=0;c<a._fields.length;c++){var e=a.featureValue(b.feature,a._fields[c],c),f=a.featureValue(d.feature,a._fields[c],c),g=0,g=1===a._directions[c]?e===f?0:e<f?-1:1:-1*(e===f?0:e<f?-1:1);if(0!==g)return g}return 0})};d.prototype.scanForField=function(b){for(var a=0;a<this._fields.length;a++)if(this._fields[a].toLowerCase().trim()===b.toLowerCase().trim())return!0;return!1};d.prototype.featureValue=function(b,a,e){var d=b.attributes[a];if(void 0!==d)return d;
for(var c in b.attributes)if(a.toLowerCase()===c.toLowerCase())return this._fields[e]=c,b.attributes[c];return null};return d}()});