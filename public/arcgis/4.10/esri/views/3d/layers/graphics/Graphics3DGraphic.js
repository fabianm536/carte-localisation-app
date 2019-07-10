// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/ObjectPool ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ./featureExpressionInfoUtils ../../support/projectionUtils".split(" "),function(y,z,m,n,r,t,u,g,h,p,v,w){var q=new t(Array,function(b){return g.set(b,g.ZERO)},
null,10,5),x=h.create();return function(){function b(a,d,c,e){this.addedToSpatialIndex=!1;this._labelGraphics=[];this._auxiliaryGraphics=[];for(var b=Array(2),f=0;f<b.length;f++)b[f]=Array(3);this._visibilityFlags=b;this.extent=this._featureExpressionFeature=null;++d.referenced;this.graphics3DSymbol=d;this.graphic=a;this._graphics=c;this._featureExpressionFeature=v.createFeature(a,e)}b.prototype.initialize=function(a,d){var c=this;this._layer=a;this._stage=d;this.forEachSymbolLayerGraphic(function(e){e.initialize(a,
d);e.setVisibility(c.isVisible())})};b.prototype.destroy=function(){this.forEachSymbolLayerGraphic(function(a){return a.destroy()});this._auxiliaryGraphics=this._graphics=null;--this.graphics3DSymbol.referenced;this.graphics3DSymbol=null};Object.defineProperty(b.prototype,"destroyed",{get:function(){return null==this._graphics},enumerable:!0,configurable:!0});b.prototype.clearLabelGraphics=function(){this.forEachLabelGraphic(function(a){return a.destroy()});this._labelGraphics.length=0};b.prototype.addLabelGraphic=
function(a,d,c){this._labelGraphics.push(a);a.initialize(d,c);a.setVisibility(this.isVisible(1))};b.prototype.addAuxiliaryGraphic=function(a){this._auxiliaryGraphics.push(a);this._layer&&(a.initialize(this._layer,this._stage),a.setVisibility(this.isVisible()))};b.prototype.isDraped=function(){var a=!1;this.forEachSymbolLayerGraphic(function(d){"draped"===d.type&&(a=!0)});return a};b.prototype.areVisibilityFlagsSet=function(a,d,c){void 0===c&&(c=0);c=this._visibilityFlags[c];if(null!=a)return c[a];
a=!0;for(var e=0;e<c.length;e++)if(e!==d){var b=c[e];a=a&&(null==b||!0===b)}return a};b.prototype.isVisible=function(a){void 0===a&&(a=0);for(var d=0;d<=a;d++)for(var c=this._visibilityFlags[d],e=0;e<c.length;e++){var b=c[e];if(null!==b&&!1===b)return!1}return!0};b.prototype.setVisibilityFlag=function(a,d,c){void 0===c&&(c=0);var e=this.isVisible(c);this._visibilityFlags[c][a]=d;var b=this.isVisible(c);if(e===b)return!1;if(1===c)this.forEachLabelGraphic(function(a){return a.setVisibility(b)});else{this.forEachSymbolLayerGraphic(function(a){return a.setVisibility(b)});
var f=this.isVisible(1);this.forEachLabelGraphic(function(a){return a.setVisibility(f)})}return!0};b.prototype.getBSRadius=function(){var a=0;this.forEachSymbolLayerGraphic(function(d){a=Math.max(a,d.getBSRadius())});return a};b.prototype.getCenterObjectSpace=function(a){void 0===a&&(a=u.vec3f64.create());return this._graphics[0].getCenterObjectSpace(a)};b.prototype.computeExtent=function(a){if(!this.extent){this.extent=h.create();var d=this.graphic.geometry,c=d.spatialReference;p.computeAABR(d,this.extent);
if(!c.equals(a)&&!w.boundingRectToBoundingRect(this.extent,c,this.extent,a))return this.extent=null,!1}return!0};Object.defineProperty(b.prototype,"usedMemory",{get:function(){var a=this,d=0;this.forEachSymbolLayerGraphic(function(c){var b=c.graphics3DSymbolLayer.complexity;c="draped"===c.type?b.memory.draped:b.memory;d+=c.bytesPerFeature;c.bytesPerCoordinate&&(d+=p.numVertices(a.graphic.geometry)*c.bytesPerCoordinate)});return d},enumerable:!0,configurable:!0});b.prototype.getProjectedBoundingBox=
function(a,b,c,e){return n(this,void 0,void 0,function(){var d=this;return m(this,function(f){switch(f.label){case 0:return e||(e={boundingBox:null,requiresDrapedElevation:!1,screenSpaceObjects:[]}),e.boundingBox?g.empty(e.boundingBox):e.boundingBox=g.empty(),e.requiresDrapedElevation=!1,[4,r.forEach(this._graphics,function(f){return n(d,void 0,void 0,function(){var d,k,l;return m(this,function(h){switch(h.label){case 0:if(!f)return[2];d="draped"===f.type?b:a;k=q.acquire();return[4,f.getProjectedBoundingBox(d,
c,e.screenSpaceObjects,k)];case 1:return l=h.sent(),isFinite(l[2])&&isFinite(l[5])||(e.requiresDrapedElevation=!0),l&&g.expand(e.boundingBox,k),q.release(k),[2]}})})})];case 1:return f.sent(),g.allFinite(e.boundingBox)||h.allFinite(g.toRect(e.boundingBox,x))?[2,e]:[2,null]}})})};b.prototype.needsElevationUpdates=function(){for(var a=0,b=this._graphics;a<b.length;a++){var c=b[a];if(c&&("object3d"===c.type||"lod-instance"===c.type)&&c.needsElevationUpdates)return!0}a=0;for(b=this._labelGraphics;a<b.length;a++)if((c=
b[a])&&c.needsElevationUpdates)return!0;return!1};b.prototype.alignWithElevation=function(a,b){var c=this;this.forEachRenderedGraphic(function(d){"object3d"!==d.type&&"lod-instance"!==d.type||d.alignWithElevation(a,b,c._featureExpressionFeature)})};b.prototype.addHighlight=function(a,b){this.forEachSymbolLayerGraphic(function(c){return c.addHighlight(a,b)})};b.prototype.removeHighlight=function(a){this.forEachSymbolLayerGraphic(function(b){return b.removeHighlight(a)})};b.prototype.forEachGraphicList=
function(a,b){a.forEach(function(a,d){return a&&b(a,d)})};b.prototype.forEachSymbolLayerGraphic=function(a){this.forEachGraphicList(this._graphics,a);this.forEachGraphicList(this._auxiliaryGraphics,a)};b.prototype.forEachLabelGraphic=function(a){this.forEachGraphicList(this._labelGraphics,a)};b.prototype.forEachRenderedGraphic=function(a){this.forEachSymbolLayerGraphic(a);this.forEachLabelGraphic(a)};return b}()});