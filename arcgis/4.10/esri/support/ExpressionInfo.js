// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){a=e.call(this)||this;a.name=null;a.title=null;a.expression=null;a.returnType=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})};var d;c([b.property({type:String,json:{write:!0}})],
a.prototype,"name",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);c([b.property({type:["string","number"],json:{write:!0}})],a.prototype,"returnType",void 0);return a=d=c([b.subclass("esri.support.ExpressionInfo")],a)}(b.declared(g))});