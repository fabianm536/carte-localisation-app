// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./nextTick"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(a,b){void 0===b&&(b=8);var c=this;this.allocator=a;this.items=[];this.itemsPtr=0;this.tickHandle=e.before(function(){return c.reset()});this.grow(b)}a.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null)};a.prototype.get=function(){0===this.itemsPtr&&e(function(){});this.itemsPtr===this.items.length&&this.grow();return this.items[this.itemsPtr++]};
a.prototype.reset=function(){this.itemsPtr=0};a.prototype.grow=function(a){void 0===a&&(a=this.items.length);for(var b=0;b<Math.max(8,Math.min(a,f));b++)this.items.push(this.allocator())};return a}();d.ObjectStack=c;var f=1024;d.default=c});