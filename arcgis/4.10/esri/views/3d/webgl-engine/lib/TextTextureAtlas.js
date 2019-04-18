// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/arrayUtils ../../support/mathUtils ./ModelContentType ./Texture ../../../webgl/Texture".split(" "),function(t,u,n,p,m,q,r){var f={budget:null,repackingEnabled:!0};return function(){function c(a,d){this.dirty=!1;this.elementsToAdd={};this.elementsToRemove={};this.elementsToRender={};this.elements={};this.stageObjects={};this.id=q.idGen.gen(a);this.stage=d._stage;this.controller=d.resourceController;this.canvas=this.create2DCanvas();this.ctx=this.canvas.getContext("2d");
this.stage.add(m.TEXTURE,this);a=this.computeAtlasResolution(d.width,d.height);this.createAtlasRegion(a);this.update2DCanvasSize()}c.prototype.setUnloadFunc=function(a){this.unloadFunc=a};c.prototype.unload=function(){null!=this.unloadFunc&&(this.unloadFunc(this.id),this.unloadFunc=null)};c.prototype.deferredLoading=function(){return!1};c.prototype.getWidth=function(){return this.atlas.size.width};c.prototype.getHeight=function(){return this.atlas.size.height};c.prototype.initializeThroughRender=
function(a,d){var b=this;d.wrapMode=33071;d.samplingMode=9987;d.flipped=!0;d.preMultiplyAlpha=!0;d.hasMipmap=!0;this.glTexture=new r(a,d,this.canvas);this.frameWorker=this.controller.registerFrameWorker(function(a){return b.run(b.makeRunContext(a))},function(){return b.dirty});return this.glTexture};c.prototype.dispose=function(){this.elementsToRender=this.elementsToRemove=this.elementsToAdd=this.elements=null;this.frameWorker&&(this.frameWorker.remove(),this.frameWorker=null);this.glTexture&&(this.glTexture=
null,this.stage.remove(m.TEXTURE,this.id))};c.prototype.create2DCanvas=function(){var a=document.createElement("canvas");a.setAttribute("id","canvas2d");a.setAttribute("style","display:none");a.setAttribute("width",(512).toString());a.setAttribute("height",(512).toString());return a};c.prototype.update2DCanvasSize=function(){this.canvas.setAttribute("width",this.atlas.size.width.toString());this.canvas.setAttribute("height",this.atlas.size.height.toString())};c.prototype.generateTextId=function(a){return JSON.stringify(a.getParams())+
"_"+a.getText()};c.prototype.createAtlasRegion=function(a){void 0===a&&(a=512);this.atlas={size:{width:a,height:a},cursor:{x:0,y:0},lineHeight:0}};c.prototype.computeAtlasResolution=function(a,d){a=Math.max(a,d);a=p.nextHighestPowerOfTwo(a+256);return a=Math.min(a,4096)};c.prototype.resizeAtlas=function(a,d){d=d||a;var b=this.atlas;b.size.width=a;b.size.height=d;this.glTexture&&this.glTexture.resize(a,d);this.update2DCanvasSize()};c.prototype.resetAtlasCursor=function(){var a=this.atlas;a.cursor.x=
0;a.cursor.y=0;a.lineHeight=0};c.prototype.getAtlasUsage=function(){var a=this.atlas;return(a.cursor.x+a.cursor.y*a.size.width)/(a.size.width*a.size.height)};c.prototype.getExpectedAtlasUsage=function(){var a=Object.keys(this.elementsToRemove).length,d=Object.keys(this.elementsToAdd).length,b=Object.keys(this.elements).length;return this.getAtlasUsage()/b*(b+d-a)};c.prototype.addAtlasElement=function(a,d,b,c,g){var e=this.atlas;a.placement.offset.x=e.cursor.x;a.placement.offset.y=e.cursor.y;a.placement.size.width=
d;a.placement.size.height=b;a.placement.uvMinMax=[a.placement.offset.x/e.size.width,1-(a.placement.offset.y+b)/e.size.height,(a.placement.offset.x+d)/e.size.width,1-a.placement.offset.y/e.size.height];e.cursor.x+=c;e.lineHeight=Math.max(e.lineHeight,g)};c.prototype.removeAtlasElement=function(a){if(a&&this.elements[a.textId]){var d=a.placement.offset,b=a.placement.size;this.ctx.clearRect(d.x,d.y,b.width,b.height);delete this.elements[a.textId]}};c.prototype.addStageObject=function(a,d){this.stageObjects[a]||
(this.stageObjects[a]=[]);-1===this.stageObjects[a].indexOf(d)&&this.stageObjects[a].push(d)};c.prototype.removeStageObject=function(a,d){this.stageObjects[a]&&n.removeUnordered(this.stageObjects[a],d)&&(d.geometries[0].data.vertexAttributes.size.data=new Float32Array([0,0]),d.geometryVertexAttrsUpdated(0))};c.prototype.processAdditionRequest=function(a,d){var b=this.atlas,c=a.textId,g=a.textTexture.renderedWidth,e=a.textTexture.renderedHeight,k=g+2,h=e+2+2;d=d.repackingEnabled;if(b.cursor.x+k<b.size.width&&
b.cursor.y+h<b.size.height)this.addAtlasElement(a,g,e,k,h),this.elements[c]=a,this.elementsToRender[c]=a,delete this.elementsToAdd[c];else if(b.cursor.y+h+b.lineHeight<b.size.height)b.cursor.x=2,b.cursor.y+=b.lineHeight,b.lineHeight=0,this.addAtlasElement(a,g,e,k,h),this.elements[c]=a,this.elementsToRender[c]=a,delete this.elementsToAdd[c];else{a=this.getExpectedAtlasUsage();(c=.85<a&&4096>b.size.width)&&this.resizeAtlas(2*b.size.width,2*b.size.height);for(var f in this.elementsToRemove)0===this.stageObjects[f].length&&
this.removeAtlasElement(this.elementsToRemove[f]),delete this.elementsToRemove[f];if(!d||!c&&.95<a&&4096===b.size.width)return 0;for(var l in this.elements)b=this.elements[l],b.rendered=!1,this.elementsToAdd[l]=b,delete this.elements[l];this.resetAtlasCursor();this.elementsToRender={};return 1}return 0};c.prototype.processRenderingRequest=function(a){var d=a.textId;this.ctx.clearRect(a.placement.offset.x,a.placement.offset.y,a.placement.size.width,a.placement.size.height);a.textTexture.renderText(a.placement.size.width,
a.placement.size.height,this.ctx,a.placement.offset.x,a.placement.offset.y);for(var b=0,d=this.stageObjects[d];b<d.length;b++){var c=d[b];c.geometries[0].data.vertexAttributes.uv0.data=new Float32Array(a.placement.uvMinMax);c.geometries[0].data.vertexAttributes.size.data=new Float32Array([a.placement.size.width,a.placement.size.height]);c.geometryVertexAttrsUpdated(0)}a.rendered=!0};c.prototype.run=function(a){if(this.dirty&&this.glTexture){var d=a.budget,b;for(b in this.elementsToAdd)if(this.elements[b]&&
this.elements[b].rendered){for(var c=0,g=this.stageObjects[b];c<g.length;c++){var e=g[c],f=e.geometries[0].data.vertexAttributes;f.uv0.data=new Float32Array(this.elements[b].placement.uvMinMax);f.size.data=new Float32Array([this.elements[b].placement.size.width,this.elements[b].placement.size.height]);e.geometryVertexAttrsUpdated(0)}delete this.elementsToAdd[b]}else if(1===this.processAdditionRequest(this.elementsToAdd[b],a)){a.budget=null;a.repackingEnabled=!1;this.run(a);return}a=!1;for(b in this.elementsToRender){if(d&&
!d.remaining()){a&&this.glTexture.setData(this.canvas);return}this.processRenderingRequest(this.elementsToRender[b]);delete this.elementsToRender[b];a=!0}a&&this.glTexture.setData(this.canvas);this.dirty=!1}};c.prototype.makeRunContext=function(a){void 0===a&&(a=null);f.budget=a;f.repackingEnabled=!0;return f};c.prototype.addTextTexture=function(a,c){var b=this.generateTextId(a);this.elementsToAdd[b]||(this.elementsToAdd[b]={textId:b,placement:{offset:{x:0,y:0},size:{width:0,height:0},uvMinMax:[]},
textTexture:a,rendered:!1});this.addStageObject(b,c);delete this.elementsToRemove[b];this.setDirty()};c.prototype.removeTextTexture=function(a,c){a=this.generateTextId(a);this.elementsToRemove[a]=this.elements[a];this.removeStageObject(a,c)};Object.defineProperty(c.prototype,"textureId",{get:function(){return this.id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"isDirty",{get:function(){return this.dirty},enumerable:!0,configurable:!0});c.prototype.setDirty=function(){this.dirty=
!0};return c}()});