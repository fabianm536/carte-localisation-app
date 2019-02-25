// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/has ../../core/promiseUtils ../../core/libs/gl-matrix-2/gl-matrix ../2d/engine/Container ../2d/engine/webgl/enums ./GeometryUtils ./renderers/Renderer".split(" "),function(w,x,p,q,r,l,t,n,u,v){return function(m){function h(){var a=null!==m&&m.apply(this,arguments)||this;a._renderer=new v;a._tileCoordinateScale=l.vec3f32.create();a._orientationVec=l.vec3f32.fromValues(0,0,1);a._displayScale=l.vec3f32.create();a._defaultTransform=
l.mat4f32.create();a._displayWidth=0;a._displayHeight=0;a._pointToCallbacks=new Map;return a}p(h,m);h.prototype.initialize=function(a,k,e,b){this._renderer.initialize(a,k);this._tileInfoView=b;this._tileInfo=e};h.prototype.dispose=function(){this._renderer&&this._renderer.dispose();m.prototype.dispose.call(this)};h.prototype.hitTest=function(a,k){var e=this,b=[a,k];return r.create(function(a,c){e._pointToCallbacks.set(b,{resolve:a,reject:c});e.requestRender()},function(){e._pointToCallbacks.has(b)&&
e._pointToCallbacks.delete(b)})};h.prototype.renderChildren=function(a){var k=this;if(0!==this.children.length&&this._tileInfoView&&a&&a.state&&(a.drawPhase===n.WGLDrawPhase.MAP||a.drawPhase===n.WGLDrawPhase.HITTEST)){var e=a.state,b=this.stage.context,f=this._renderer;f.initializeProgramCache(this.stage.context);f.setGlobalOpacity(b,a,this.opacity);b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);b.setClearDepth(1);b.setClearStencil(0);b.clear(b.gl.DEPTH_BUFFER_BIT|b.gl.STENCIL_BUFFER_BIT);
b.setDepthWriteEnabled(!1);a.displayLevel=this._tileInfoView.scaleToLevel(e.scale);a.requiredLevel=this._tileInfoView.getSmallestInfoForScale(e.scale).level;a.renderer=this._renderer;this.sortChildren(function(a,b){return a.key.level-b.key.level});for(var e=this.children.length,c=1;c<=e;c++){var g=this.children[c-1];g.attached&&g.visible&&(g.stencilData.reference=c,g.stencilData.mask=255)}this._updateTilesTransform(a.state,a.requiredLevel,this.children);b.setDepthWriteEnabled(!0);this._renderer.setStateParams(a.state,
a.pixelRatio,a.displayLevel);this._renderer.drawClippingMasks(b,this.children);b.setStencilWriteMask(0);b.setBlendFunctionSeparate(1,771,1,771);b.setStencilOp(7680,7680,7681);b.setDepthFunction(515);b.setBlendingEnabled(!1);b.setStencilTestEnabled(!0);b.setDepthTestEnabled(!0);b.setDepthWriteEnabled(!0);a.drawphase=0;m.prototype.renderChildren.call(this,a);b.setDepthWriteEnabled(!1);b.setBlendingEnabled(!0);a.drawphase=1;m.prototype.renderChildren.call(this,a);a.drawphase=2;m.prototype.renderChildren.call(this,
a);b.setStencilTestEnabled(!1);b.setDepthTestEnabled(!1);f.applyGlobalOpacity(b,a,this.opacity);if(q("esri-vector-tiles-debug"))for(f=0,e=this.children;f<e.length;f++)c=e[f],c.attached&&c.visible&&this._renderer.renderTileInfo(b,c);0<this._pointToCallbacks.size&&(this._pointToCallbacks.forEach(function(b,c){b.resolve(k._hitTest(a,c[0],c[1]))}),this._pointToCallbacks.clear());this._renderer.needsRedraw()&&this.requestRender()}};h.prototype.removeAllChildren=function(){for(var a=0;a<this.children.length;a++)this.children[a].dispose();
m.prototype.removeAllChildren.call(this)};h.prototype._hitTest=function(a,k,e){var b=this._tileInfoView.getSmallestInfoForScale(a.state.scale).level,f=[0,0];a.state.toMap(f,[k,e]);var c=a.state.clone(),g=c.viewpoint.clone(),d=g.targetGeometry;d.x=f[0];d.y=f[1];g.targetGeometry=d;c.viewpoint=g;c.size=[3,3];this._renderer.setStateParams(c,a.pixelRatio,a.displayLevel);return(a=this._renderer.hitTest({context:this.stage.context,drawPhase:0,pixelRatio:a.pixelRatio,stationary:a.stationary,globalOpacity:a.globalOpacity,
displayLevel:a.displayLevel,requiredLevel:a.requiredLevel,renderer:a.renderer,layerOpacity:a.layerOpacity,state:c,drawphase:3},k,e,this.children,b,3,this._updateTilesTransform.bind(this)))&&0!==a.length?a[0]:null};h.prototype._updateTilesTransform=function(a,k,e){var b=1/a.size[0],f=1/a.size[1],c=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lodAt(k).resolution,a.resolution,a.rotation,this._tileInfo.size[1],4096,a.size[0],a.size[1],this._defaultTransform);for(var g=0;g<e.length;g++){var d=
e[g];a.toScreen(c,d.coords);c[1]=a.size[1]-c[1];d.tileTransform.displayCoord[0]=2*c[0]*b-1;d.tileTransform.displayCoord[1]=2*c[1]*f-1;d.key.level===k&&4096===d.coordRange?d.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lodAt(d.key.level).resolution,a.resolution,a.rotation,this._tileInfo.size[1],d.coordRange,a.size[0],a.size[1],d.tileTransform.transform)}};h.prototype._calculateRelativeViewProjMat=function(a,k,e,b,f,c,g,d){var h=.125;512!==b&&
4096!==f&&(h=b/f);a=a/k*h;this._tileCoordinateScale.set([a,a,1]);if(c!==this._displayWidth||g!==this._displayHeight)this._displayScale.set([2/c,-2/g,1]),this._displayWidth=c,this._displayHeight=g;l.mat4.identity(d);l.mat4.scale(d,d,this._tileCoordinateScale);l.mat4.rotate(d,d,-e*u.C_DEG_TO_RAD,this._orientationVec);l.mat4.scale(d,d,this._displayScale);l.mat4.transpose(d,d)};return h}(t.Container)});