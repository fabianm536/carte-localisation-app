// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/promiseUtils"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._action=null;this._queue=[];this._refs=1}b.prototype.up=function(){this._refs++};b.prototype.down=function(){this._refs--;return 0===this._refs};b.prototype.destroy=function(){this._queue.length=0;this._action&&(this._action.cancel(),this._action=null)};b.prototype.enqueue=function(a){this._action?this._queue.push(a):this._setAction(a)};
b.prototype.flush=function(){var a=this._action;if(!a)return e.resolve();a=this._queue.reduce(function(a,b){return a.then(b)},a);this._action=a.then(this._handleNext.bind(this));this._queue.length=0;return a};b.prototype.hasAction=function(){return!!this._action};b.prototype._setAction=function(a){this._action=a().then(this._handleNext.bind(this))};b.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null};return b}();d.default=c});