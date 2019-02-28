// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/Logger ../../core/unitUtils ../../core/accessorSupport/decorators ../../geometry/support/scaleUtils ./AreaMeasurement2DTool ../support/InteractiveToolViewModel".split(" "),function(t,u,k,d,l,m,e,c,n,p,q){var f="metric imperial square-inches square-feet square-yards square-miles square-us-feet square-meters square-kilometers acres ares hectares".split(" "),r={handleWidth:8,
handleColor:[255,128,0,.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]},g=m.getLogger("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel");return function(h){function b(a){a=h.call(this,a)||this;a.supportedViewType="2d";a.geodesicDistanceThreshold=1E5;a.measurement=null;a.mode="auto";a.modes=["auto","planar","geodesic"];a.palette=r;a.tool=null;return a}k(b,h);Object.defineProperty(b.prototype,"defaultUnit",{get:function(){var a=this.get("view.map.portalItem.portal");if(a)switch(a.get("user.units")||
a.units){case "metric":return"metric";case "english":return"imperial"}return n.getDefaultUnitSystem(this.get("view.spatialReference"))||"metric"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"measurementLabel",{get:function(){if(!this.measurement)return null;var a={area:null,perimeter:null},b=this.measurement,c=b.area,b=b.perimeter;switch(this.unit){case "metric":a.area=e.formatMetricArea(c,"square-meters");break;case "imperial":a.area=e.formatImperialArea(c,"square-meters");
break;default:c=e.convertUnit(c,"square-meters",this.unit),a.area=e.formatDecimal(c,this.unit)}c=this._deriveLengthUnitFromAreaUnit(this.unit);switch(c){case "metric":a.perimeter=e.formatMetricLength(b,"meters");break;case "imperial":a.perimeter=e.formatImperialLength(b,"meters");break;default:b=e.convertUnit(b,"meters",c),a.perimeter=e.formatDecimal(b,c)}return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.isDisabled||this.tool.projectionEngineRequired&&
!this.tool.projectionEngineSupported?"disabled":this.measurement?"measuring":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){void 0===a?this._clearOverride("unit"):this._override("unit",this._validateUnit(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unitOptions",{get:function(){return f},set:function(a){void 0===a?this._clearOverride("unitOptions"):this._override("unitOptions",
this._validateUnits(a))},enumerable:!0,configurable:!0});b.prototype.newMeasurement=function(){this.tool&&this.tool.newMeasurement()};b.prototype.clearMeasurement=function(){this.tool&&this.tool.clearMeasurement()};b.prototype.createTool=function(a){return new p({viewModel:this,view:a})};b.prototype.logUnsupportedError=function(){g.error("AreaMeasurement2D widget is not implemented for SceneView")};b.prototype.logError=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];g.error.apply(g,
a)};b.prototype._deriveLengthUnitFromAreaUnit=function(a){switch(a){case "metric":return"metric";case "imperial":return"imperial";case "square-inches":return"inches";case "square-feet":return"feet";case "square-yards":return"yards";case "square-miles":return"miles";case "square-us-feet":return"us-feet";case "square-meters":return"meters";case "square-kilometers":return"kilometers";case "acres":return"imperial";case "ares":case "hectares":return"metric"}throw new l("area-measurement-2d-viewmodel:unhandled-area-unit",
"Unexpected area unit encountered.");};b.prototype._validateUnit=function(a){return-1!==this.unitOptions.indexOf(a)?a:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]};b.prototype._validateUnits=function(a){void 0===a&&(a=[]);a=a.filter(function(a){return-1!==f.indexOf(a)});return 0===a.length?f.slice():a};d([c.property({readOnly:!0,dependsOn:["view.map.portalItem.portal.units","view.map.portalItem.portal.user.units","view.spatialReference"]})],b.prototype,"defaultUnit",
null);d([c.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);d([c.property()],b.prototype,"measurement",void 0);d([c.property({dependsOn:["measurement","unit","mode","geodesicDistanceThreshold"],readOnly:!0})],b.prototype,"measurementLabel",null);d([c.property()],b.prototype,"mode",void 0);d([c.property({readOnly:!0,type:[String]})],b.prototype,"modes",void 0);d([c.property()],b.prototype,"palette",void 0);d([c.property({dependsOn:["isDisabled","measurement","tool.projectionEngineRequired"],
readOnly:!0})],b.prototype,"state",null);d([c.property({constructOnly:!0,readOnly:!0})],b.prototype,"tool",void 0);d([c.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],b.prototype,"unit",null);d([c.property({type:[String]})],b.prototype,"unitOptions",null);return b=d([c.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],b)}(c.declared(q))});