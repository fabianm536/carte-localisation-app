// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/promiseUtils ../../../core/urlUtils ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/Util".split(" "),function(n,p,g,h,k,e,l,m){return function(){function a(c,b,f){this._textureRecords=new Map;this._streamDataSupplier=c;this._stage=b;this._textureOptions=f||{}}a.prototype.acquire=function(c,b){var f=this,d=this._textureRecords.get(c);if(d)return d.referenceCount++,d.texture||d.loadTexture;if("number"===
typeof b){var a=this._streamDataSupplier.request(c,"image"),d=h.create(function(d,e){a.then(function(a,e){a=f.createTexture(a,e,b);f.registerTexture(a);f._textureRecords.get(c).texture=a;d(a)},function(b){e()})},function(){a.cancel()});this._textureRecords.set(c,{referenceCount:1,texture:null,loadTexture:d});return d}d=b(c);this.registerTexture(d);this._textureRecords.set(c,{texture:d,referenceCount:1});return d};a.prototype.release=function(c){var b=this._textureRecords.get(c);b?(1>b.referenceCount&&
console.warn("TextureCollection: reference count is \x3c 1 for "+c),b.referenceCount--,1>b.referenceCount&&(b.texture?this.unregisterTexture(b.texture):b.loadTexture.cancel(),this._textureRecords.delete(c))):console.warn("TextureCollection: texture doesn't exist: "+c)};a.prototype.createTexture=function(c,b,a){var d=this._textureRecords.get(c);m.assert(d&&!d.texture);k.isSVG(c)&&(a||0===b.width&&0===b.height)&&(c=b.width?b.height/b.width:1,a=a||64,1<c?(b.width=Math.round(a/c),b.height=a):(b.width=
a,b.height=Math.round(a*c)));a=g({},this._textureOptions,{width:b.width,height:b.height});return new l(b,"symbol",a)};a.prototype.registerTexture=function(a){this._stage.add(e.ModelContentType.TEXTURE,a)};a.prototype.unregisterTexture=function(a){this._stage.remove(e.ModelContentType.TEXTURE,a.id)};return a}()});