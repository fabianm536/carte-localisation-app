// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./Collection ./Handles ./accessorSupport/decorators".split(" "),function(l,m,h,e,f,k,d){return function(g){function b(a){a=g.call(this)||this;a._handles=new k;a.root=null;a.refresh=a.refresh.bind(a);a.updateCollections=a.updateCollections.bind(a);return a}h(b,g);b.prototype.initialize=function(){var a=this;this._handles.add(this.rootCollectionNames.map(function(b){return a.watch("root."+b,a.updateCollections,!0)}));
this.updateCollections()};b.prototype.destroy=function(){this.root=null;this.refresh();this._handles.destroy();this._handles=null};b.prototype.updateCollections=function(){var a=this;this._collections=this.rootCollectionNames.map(function(b){return a.get("root."+b)}).filter(function(a){return null!=a});this.refresh()};b.prototype.refresh=function(){var a=this._handles;a.remove("collections");this.removeAll();for(var b=this._collections.slice(),c=0,d=this._collections;c<d.length;c++)this._processCollection(b,
this,d[c]);for(c=0;c<b.length;c++)a.add(b[c].on("after-changes",this.refresh),"collections")};b.prototype._createNewInstance=function(a){return new f(a)};b.prototype._processCollection=function(a,b,c){var d=this;c&&(a.push(c),c.forEach(function(c){c&&(b.push(c),d._processCollection(a,b,d.getChildrenFunction(c)))}))};e([d.property()],b.prototype,"rootCollectionNames",void 0);e([d.property()],b.prototype,"root",void 0);e([d.property()],b.prototype,"getChildrenFunction",void 0);return b=e([d.subclass("esri.core.CollectionFlattener")],
b)}(d.declared(f))});