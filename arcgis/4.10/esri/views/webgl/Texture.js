// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/has"],function(m,n,p){return function(){function c(a,b,k){this._glName=this._context=null;this._id=-1;this._desc=void 0;this._wrapModeDirty=this._samplingModeDirty=!1;this._boundToUnits=new Set;this._context=a;this._desc={pixelFormat:b.pixelFormat,internalFormat:b.internalFormat,dataType:b.dataType,target:b.target?b.target:3553,samplingMode:b.samplingMode?b.samplingMode:9729,wrapMode:b.wrapMode?b.wrapMode:10497,maxAnisotropy:b.maxAnisotropy,flipped:void 0!==
b.flipped?b.flipped:!1,hasMipmap:void 0!==b.hasMipmap?b.hasMipmap:!1,unpackAlignment:b.unpackAlignment?b.unpackAlignment:4,width:b.width,height:b.height,preMultiplyAlpha:void 0!==b.preMultiplyAlpha?b.preMultiplyAlpha:!1};this._id=++c._nextId;this.setData(k)}Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0});c.prototype.dispose=function(){var a=this;if(this._context){if(this._glName){var b=this._context.gl;this._boundToUnits.forEach(function(b){a._context.bindTexture(null,b)});b.deleteTexture(this._glName);this._glName=null}this._context=null}};c.prototype.resize=function(a,b){var c=this._desc;if(c.width!==a||c.height!==b)c.width=a,c.height=b,this.setData(null)};c.prototype.setData=function(a){var b=this._context.gl;this._glName||
(this._glName=b.createTexture());void 0===a&&(a=null);null===a&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var k=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var d=this._desc;c._validateTexture(d);b.pixelStorei(b.UNPACK_ALIGNMENT,d.unpackAlignment);b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,d.flipped?1:0);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.preMultiplyAlpha?1:0);var g=d.pixelFormat,f=d.internalFormat?d.internalFormat:g;if(a instanceof
ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement)d.width&&d.height&&console.assert(a.width===d.width&&a.height===d.height),b.texImage2D(b.TEXTURE_2D,0,f,g,d.dataType,a),d.hasMipmap&&this.generateMipmap(),void 0===this._desc.width&&(this._desc.width=a.width),void 0===this._desc.height&&(this._desc.height=a.height);else{null!=d.width&&null!=d.height||console.error("Width and height must be specified!");b.DEPTH24_STENCIL8&&f===b.DEPTH_STENCIL&&(f=
b.DEPTH24_STENCIL8);var h=d.width,e=d.height;if(null!=a&&"type"in a&&"compressed"===a.type)for(var l=0;;++l){b.compressedTexImage2D(b.TEXTURE_2D,l,f,h,e,0,a.levels[Math.min(l,a.levels.length-1)]);if(1===h&&1===e||!d.hasMipmap)break;h=Math.max(1,h>>1);e=Math.max(1,e>>1)}else if(a)b.texImage2D(b.TEXTURE_2D,0,f,h,e,0,g,d.dataType,a),d.hasMipmap&&this.generateMipmap();else for(l=0;;++l){b.texImage2D(b.TEXTURE_2D,l,f,h,e,0,g,d.dataType,null);if(1===h&&1===e||!d.hasMipmap)break;h=Math.max(1,h>>1);e=Math.max(1,
e>>1)}}c._applySamplingMode(b,this._desc);c._applyWrapMode(b,this._desc);c._applyAnisotropicFilteringParameters(this._context,this._desc);this._context.bindTexture(k,0)};c.prototype.updateData=function(a,b,c,d,g,f){f||console.error("An attempt to use uninitialized data!");this._glName||console.error("An attempt to update uninitialized texture!");var k=this._context.gl,e=this._desc,l=this._context.getBoundTexture(0);this._context.bindTexture(this,0);(0>b||0>c||d>e.width||g>e.height||b+d>e.width||c+
g>e.height)&&console.error("An attempt to update out of bounds of the texture!");f instanceof ImageData||f instanceof HTMLImageElement||f instanceof HTMLCanvasElement||f instanceof HTMLVideoElement?(console.assert(f.width===d&&f.height===g),k.texSubImage2D(k.TEXTURE_2D,a,b,c,e.pixelFormat,e.dataType,f)):k.texSubImage2D(k.TEXTURE_2D,a,b,c,d,g,e.pixelFormat,e.dataType,f);this._context.bindTexture(l,0)};c.prototype.generateMipmap=function(){var a=this._desc;a.hasMipmap||(a.hasMipmap=!0,c._validateTexture(a));
9729===a.samplingMode?(this._samplingModeDirty=!0,a.samplingMode=9985):9728===a.samplingMode&&(this._samplingModeDirty=!0,a.samplingMode=9984);a=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var b=this._context.gl;b.generateMipmap(b.TEXTURE_2D);this._context.bindTexture(a,0)};c.prototype.setSamplingMode=function(a){a!==this._desc.samplingMode&&(this._desc.samplingMode=a,c._validateTexture(this._desc),this._samplingModeDirty=!0)};c.prototype.setWrapMode=function(a){a!==this._desc.wrapMode&&
(this._desc.wrapMode=a,c._validateTexture(this._desc),this._wrapModeDirty=!0)};c.prototype.applyChanges=function(){var a=this._context.gl,b=this._desc;this._samplingModeDirty&&(c._applySamplingMode(a,b),this._samplingModeDirty=!1);this._wrapModeDirty&&(c._applyWrapMode(a,b),this._wrapModeDirty=!1)};c.prototype.setBoundToUnit=function(a,b){b?this._boundToUnits.add(a):this._boundToUnits.delete(a)};c._isPowerOfTwo=function(a){return 0===(a&a-1)};c._validateTexture=function(a){(0>a.width||0>a.height)&&
console.error("Negative dimension parameters are not allowed!");c._isPowerOfTwo(a.width)&&c._isPowerOfTwo(a.height)||("number"===typeof a.wrapMode?33071!==a.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===a.wrapMode.s&&33071===a.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),a.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))};c._applySamplingMode=function(a,b){var c=b.samplingMode;
if(9985===c||9987===c)c=9729;else if(9984===c||9986===c)c=9728;a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,c);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,b.samplingMode)};c._applyWrapMode=function(a,b){"number"===typeof b.wrapMode?(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,b.wrapMode),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,b.wrapMode)):(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,b.wrapMode.s),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,b.wrapMode.t))};c._applyAnisotropicFilteringParameters=
function(a,b){if(null!=b.maxAnisotropy){var c=a.capabilities.textureFilterAnisotropic;c&&(a=a.gl,a.texParameterf(a.TEXTURE_2D,c.TEXTURE_MAX_ANISOTROPY,b.maxAnisotropy))}};c._nextId=0;return c}()});