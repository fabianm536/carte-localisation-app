// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ./MeshMaterial ./MeshVertexAttributes".split(" "),function(p,q,g,c,h,e,k,b,l,m){var n=k.getLogger("esri.geometry.support.MeshComponent");return function(f){function a(a){a=f.call(this)||this;a.faces=null;a.material=null;a.shading="source";return a}g(a,f);d=a;a.prototype.castFaces=function(a){return m.castArray(a,
Uint32Array,[Uint16Array],{loggerTag:".faces\x3d",stride:3},n)};a.prototype.clone=function(){return new d({faces:e.clone(this.faces),shading:this.shading,material:e.clone(this.material)})};var d;c([b.property({json:{write:!0}})],a.prototype,"faces",void 0);c([b.cast("faces")],a.prototype,"castFaces",null);c([b.property({type:l.MeshMaterial,json:{write:!0}})],a.prototype,"material",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"shading",void 0);return a=d=c([b.subclass("esri.geometry.support.MeshComponent")],
a)}(b.declared(h))});