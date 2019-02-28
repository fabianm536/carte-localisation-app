// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/support/aaBoundingBox"],function(e,f,c,g){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(){this.overlayTexOffset=c.vec2f64.create();this.texOffsetAndScale=c.vec4f64.create();this.geometryInfo={indices:null,vertexAttributes:null,boundingBox:g.empty(),numSurfaceIndices:0,numSkirtIndices:0,numWithoutSkirtIndices:0,numVertsPerRow:0,skirtLength:0,uvOffsetAndScale:c.vec4f64.create()};this.init()}
b.prototype.init=function(){var a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;g.empty(a.boundingBox);a.numSurfaceIndices=0;a.numSkirtIndices=0;a.numWithoutSkirtIndices=0;a.numVertsPerRow=0;this.textureReference=this.texture=this.vao=this.geometryState=null;c.vec4.set(this.texOffsetAndScale,0,0,1,1);this.opacity=1;if(this.overlays)for(var a=0,b=this.overlays;a<b.length;a++){var d=b[a];d.renderTargetId=null;d.highlightRenderTargetId=null;c.vec2.set(d.texScale,1,1);c.vec2.set(d.texOffset,
0,0)}else for(this.overlays=[null,null],a=0;2>a;a++)this.overlays[a]={renderTargetId:null,highlightRenderTargetId:null,texScale:[1,1],texOffset:[0,0]};this.overlayOpacity=1;this.localOrigin=null};b.prototype.updateGeometryState=function(a){return this.geometryState=a.geometryState(this.geometryState)};b.prototype.estimateGeometryMemoryUsage=function(){var a=this.geometryInfo;return a.indices.byteLength+a.vertexAttributes.byteLength};return b}();f.TileRenderData=e});