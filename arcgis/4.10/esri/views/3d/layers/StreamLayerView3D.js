// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../core/Collection ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./FeatureLikeLayerView3D ../../layers/StreamLayerView".split(" "),function(f,r,g,b,h,k,l,m,n,c,p,q){return function(e){function a(){return e.call(this)||this}g(a,e);a.prototype.createController=function(){return k(this,
void 0,void 0,function(){var a,c,b;return h(this,function(d){switch(d.label){case 0:return a=m.ofType(l),[4,n.create(function(a){f(["../../../layers/graphics/controllers/StreamController"],a)})];case 1:return c=d.sent(),b=new c({layer:this.layer,layerView:this,graphics:new a}),[4,b.when()];case 2:return d.sent(),[2,b]}})})};b([c.property()],a.prototype,"controller",void 0);b([c.property({aliasOf:"controller.graphics",readOnly:!0})],a.prototype,"graphics",void 0);return a=b([c.subclass("esri.views.3d.layers.StreamLayerView3D")],
a)}(c.declared(p,q))});