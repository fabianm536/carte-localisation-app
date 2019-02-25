// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("../../core/kebabDictionary ../../core/JSONSupport ../../core/lang ../../Graphic ../../layers/support/Field ../../geometry/SpatialReference ../../geometry/support/graphicsUtils ../../geometry/support/jsonUtils".split(" "),function(p,x,v,y,z,w,A,B){p=p({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"});return x.createSubclass({declaredClass:"esri.tasks.support.FeatureSet",getDefaults:function(){return v.mixin(this.inherited(arguments),
{features:[]})},properties:{displayFieldName:null,exceededTransferLimit:null,features:{value:null,json:{read:function(a,b){for(var q=w.fromJSON(b.spatialReference),r=[],t=0;t<a.length;t++){var e=a[t],l=y.fromJSON(e),e=e.geometry&&e.geometry.spatialReference;l.geometry&&!e&&(l.geometry.spatialReference=q);r.push(l)}b.transform&&this._hydrate(b.transform,b.geometryType,r);return r}}},fields:{value:null,type:[z]},geometryType:{value:null,json:{read:p.read}},spatialReference:{type:w}},toJSON:function(a){var b=
{hasZ:this.hasZ,hasM:this.hasM};this.displayFieldName&&(b.displayFieldName=this.displayFieldName);this.fields&&(b.fields=this.fields.map(function(a){return a.toJSON()}));this.spatialReference?b.spatialReference=this.spatialReference.toJSON():this.features[0]&&this.features[0].geometry&&(b.spatialReference=this.features[0].geometry.spatialReference.toJSON());this.features[0]&&(this.features[0].geometry&&(b.geometryType=B.getJsonType(this.features[0].geometry)),b.features=A._encodeGraphics(this.features,
a));b.exceededTransferLimit=this.exceededTransferLimit;b.transform=this.transform;return v.fixJson(b)},quantize:function(a){var b=a.translate[0],q=a.translate[1],r=a.scale[0],t=a.scale[1],e=this.features,l=function(a,m,b){var n,c,h,k,f,d,g=[];n=0;for(c=a.length;n<c;n++)if(h=a[n],0<n){if(d=m(h[0]),h=b(h[1]),d!==k||h!==f)g.push([d-k,h-f]),k=d,f=h}else k=m(h[0]),f=b(h[1]),g.push([k,f]);return 0<g.length?g:null},p=function(a,m,b){if("point"===a)return function(a){a.x=m(a.x);a.y=b(a.y);return a};if("polyline"===
a||"polygon"===a)return function(a){var c,d,n,f,g;n=a.rings||a.paths;g=[];c=0;for(d=n.length;c<d;c++)f=n[c],(f=l(f,m,b))&&g.push(f);return 0<g.length?(a.rings?a.rings=g:a.paths=g,a):null};if("multipoint"===a)return function(a){var c;c=l(a.points,m,b);return 0<c.length?(a.points=c,a):null};if("extent"===a)return function(a){return a}}(this.geometryType,function(a){return Math.round((a-b)/r)},function(a){return Math.round((q-a)/t)}),d,u;d=0;for(u=e.length;d<u;d++)p(e[d].geometry)||(e.splice(d,1),d--,
u--);this.transform=a;return this},_hydrate:function(a,b,q){if(a){var r=a.translate[0],t=a.translate[1],e=a.scale[0],l=a.scale[1],p=function(a,b,g){if("esriGeometryPoint"===a)return function(a){a.x=b(a.x);a.y=g(a.y)};if("esriGeometryPolyline"===a||"esriGeometryPolygon"===a)return function(a){a=a.rings||a.paths;var m,d,c,h,k,f,e,l;m=0;for(d=a.length;m<d;m++)for(k=a[m],c=0,h=k.length;c<h;c++)f=k[c],0<c?(e+=f[0],l+=f[1]):(e=f[0],l=f[1]),f[0]=b(e),f[1]=g(l)};if("esriGeometryEnvelope"===a)return function(a){a.xmin=
b(a.xmin);a.ymin=g(a.ymin);a.xmax=b(a.xmax);a.ymax=g(a.ymax)};if("esriGeometryMultipoint"===a)return function(a){a=a.points;var d,e,c,h,k;d=0;for(e=a.length;d<e;d++)c=a[d],0<d?(h+=c[0],k+=c[1]):(h=c[0],k=c[1]),c[0]=b(h),c[1]=g(k)}}(b,function(a){return a*e+r},function(a){return t-a*l});a=0;for(b=q.length;a<b;a++)q[a].geometry&&p(q[a].geometry)}}})});