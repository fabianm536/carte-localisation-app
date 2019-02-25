// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../request ../../Viewpoint ../../core/Accessor ../../core/Error ../../core/Handles ../../core/Loadable ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../tasks/PrintTask ../../tasks/support/fileFormat ../../tasks/support/layoutTemplate ../../tasks/support/PrintParameters ../../views/2d/viewpointUtils".split(" "),function(z,A,p,d,q,r,t,g,u,v,h,c,w,k,l,m,x,
y){return function(n){function a(b){b=n.call(this,b)||this;b._handles=new u;b._viewpoint=null;b.view=null;b.printServiceUrl=null;b.updateDelay=1E3;b.templatesInfo=null;b.scaleEnabled=!1;b.error=null;b.print=b.print.bind(b);return b}p(a,n);a.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(a.prototype,"_printTask",{get:function(){return new k(this.printServiceUrl,{updateDelay:this.updateDelay})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"state",{get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"},enumerable:!0,configurable:!0});a.prototype.load=function(){this.addResolvingPromise(this._loadServiceDescription());return this.when()};a.prototype.print=function(b){var a;if(!this.view)return h.reject(new g("print:view-required","view is not set"));this.scaleEnabled?(this._viewpoint||(this._viewpoint=this.view.viewpoint.clone()),
a=this._getExtent(this._viewpoint,b.outScale)):(this._viewpoint=null,a=this._getExtent(this.view.viewpoint));b=new x({view:this.view,template:b,extent:a});return this._printTask.execute(b).catch(function(b){return h.reject(new g("print:export-error","An error occurred while exporting the web map.",{error:b}))})};a.prototype._loadServiceDescription=function(){var b=this;return this._getPrintTemplatesFromService().then(function(a){b._set("templatesInfo",a)})};a.prototype._getPrintTemplatesFromService=
function(){var b=this;return-1===this.printServiceUrl.toLowerCase().split("/").indexOf("gpserver")?(this.error=new g("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.printServiceUrl}),h.reject(this.error)):q(this.printServiceUrl,{query:{f:"json"},timeout:6E4}).then(function(a){a=a&&a.data;var c=null,d=null;(a&&a.parameters).forEach(function(b){var a=b.choiceList&&b.choiceList.slice(),e;a&&a.length&&b.defaultValue&&(e=a.indexOf(b.defaultValue));
-1<e&&(a.splice(e,1),a.unshift(b.defaultValue));if("Format"===b.name)c={defaultValue:l.fromJSON(b.defaultValue),choiceList:a.map(l.fromJSON)};else if("Layout_Template"===b.name){var a=a.filter(function(a){return"map_only"!==a.toLowerCase()}),f;e=void 0;a.some(function(a,b){a=a.toLowerCase();if(-1<a.indexOf("letter")&&-1<a.indexOf("landscape"))return f=b,!0;-1<a.indexOf("a4")&&-1<a.indexOf("landscape")&&(f=b);return!1});f&&(e=a[f],a.splice(f,1),a.unshift(e));d={defaultValue:m.fromJSON(a&&a[0]||b.defaultValue),
choiceList:a.map(m.fromJSON)}}});b.error=null;return{format:c,layout:d}}).catch(function(a){b.error=new g("print:unavailable-service-info","Can't fetch templates info from service",{error:a});return h.reject(b.error)})};a.prototype._getExtent=function(a,c){c=c||this.view.scale;var b=this.get("view.size");a=a?a.targetGeometry:null;return y.getExtent(new w,new r({scale:c,targetGeometry:a}),b)};d([c.property()],a.prototype,"view",void 0);d([c.property()],a.prototype,"printServiceUrl",void 0);d([c.property({dependsOn:["printServiceUrl"],
type:k})],a.prototype,"_printTask",null);d([c.property({dependsOn:["view.ready","error","loadStatus"],readOnly:!0})],a.prototype,"state",null);d([c.property()],a.prototype,"updateDelay",void 0);d([c.property({readOnly:!0})],a.prototype,"templatesInfo",void 0);d([c.property()],a.prototype,"scaleEnabled",void 0);d([c.property()],a.prototype,"error",void 0);return a=d([c.subclass("esri.widgets.Print.PrintViewModel")],a)}(c.declared(t,v))});