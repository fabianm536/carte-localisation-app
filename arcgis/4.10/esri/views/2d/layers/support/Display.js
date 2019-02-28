// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../ViewState ../../engine/DisplayObject ../../engine/webgl/enums ../../../webgl/Texture".split(" "),function(g,d,m,n,p,q,r){Object.defineProperty(d,"__esModule",{value:!0});g=function(e){function b(c){var a=e.call(this)||this;a.layerView=c;a._childrenRenderParameters={context:document.createElement("canvas").getContext("2d"),pixelRatio:1,state:new n,stationary:!0};a.requestRender=a.requestRender.bind(a);return a}m(b,e);b.prototype.attach=
function(){this._texture=new r(this.stage.context,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0});return e.prototype.attach.call(this)};b.prototype.detach=function(){this._texture.dispose();this._texture=null;e.prototype.detach.call(this)};b.prototype.doRender=function(c){if(c.drawPhase===q.WGLDrawPhase.MAP){var a=window.devicePixelRatio,f=this.stage,b=f.context,f=f.painter,e=c.drawPhase,g=c.state,h=c.state.size,d=h[0],h=h[1],k=this._childrenRenderParameters.context.canvas,
l=this._childrenRenderParameters;k.width=d*a;k.height=h*a;l.state.copy(g);l.state.pixelRatio=a;l.stationary=c.stationary;this.layerView.render(l);this._texture.resize(k.width,k.height);this._texture.setData(k);f.startStencilDraw();f.drawImage(b,this._texture,0,0,d,h,0,0,this.opacity,a,e);f.endStencilDraw()}};return b}(p.DisplayObject);d.Display=g;d.default=g});