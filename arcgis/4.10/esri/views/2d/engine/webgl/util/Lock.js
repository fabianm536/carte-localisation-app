// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/promiseUtils"],function(c,b,d){Object.defineProperty(b,"__esModule",{value:!0});c=function(){function a(){this._resolver=null}a.prototype.isHeld=function(){return!!this._resolver};a.prototype.acquire=function(){var a=this;if(this._resolver)return this._resolver.promise.then(function(){return a.acquire()});this._resolver=d.createResolver();return d.resolve()};a.prototype.release=function(){var a=this._resolver;this._resolver=null;a.resolve()};return a}();
b.default=c;b.withLock=function(a,b){return a.acquire().then(function(){return b()}).then(function(){return a.release()}).catch(function(b){a.release();throw b;})}});