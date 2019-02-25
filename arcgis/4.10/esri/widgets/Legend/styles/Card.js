// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper dojo/i18n!../../../nls/common dojo/i18n!../../Legend/nls/Legend dojox/gfx ../../../core/Handles ../../../core/lang ../../../core/screenUtils ../../../core/accessorSupport/decorators ../../Widget ./support/utils ../support/styleUtils ../../support/colorUtils ../../support/widget".split(" "),function(I,J,A,t,K,B,x,C,D,E,y,p,F,G,u,H,e){var w;(function(e){e.Auto=
"auto";e.Stack="stack";e.SideBySide="side-by-side"})(w||(w={}));var v=window.devicePixelRatio;return function(z){function g(a){a=z.call(this)||this;a._handles=new D;a._hasIndicators=!1;a._selectedSectionName=null;a._sectionNames=[];a._sectionMap=new Map;a.activeLayerInfos=null;a.layout=w.Stack;a.type="card";a.view=null;return a}A(g,z);g.prototype.postInitialize=function(){var a=this;this.own([this.watch("activeLayerInfos",function(d){a._handles.removeAll();a._watchForSectionChanges(d)})])};g.prototype.destroy=
function(){this._handles.destroy();this._handles=null};g.prototype.render=function(){var a=this,d;this._hasIndicators=this.layout===w.Auto&&768>=this.view.container.clientWidth||this.layout===w.Stack;var c=this.activeLayerInfos,b=c&&c.toArray().map(function(c){return a._renderLegendForLayer(c)}).filter(function(a){return!!a});this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):
this._selectedSectionName=null;var f=this._sectionNames.length,c=this._sectionNames.map(function(c,b){var d;b=E.substitute({index:b+1,total:f},B.pagination.pageText);return e.tsx("div",{key:c,"aria-label":b,title:b,tabIndex:0,onclick:a._selectSection,onkeydown:a._selectSection,bind:a,class:a.classes("esri-legend--card__carousel-indicator",(d={},d["esri-legend--card__carousel-indicator--activated"]=a._selectedSectionName===c,d)),"data-section-name":c})}),c=this._hasIndicators&&1<f?e.tsx("div",{class:"esri-legend--card__carousel-indicator-container",
key:"carousel-navigation"},c):null,b=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):b&&b.length?b:null,m=(d={},d["esri-legend--stacked"]=this._hasIndicators,d);return e.tsx("div",{class:this.classes("esri-legend--card esri-widget",m)},c,b?b:e.tsx("div",{class:"esri-legend--card__message"},x.noLegend))};g.prototype._selectSection=function(a){if(a=a.target.getAttribute("data-section-name"))this._selectedSectionName=a};g.prototype._watchForSectionChanges=function(a){var d=this;this._generateSectionNames();
a&&(a.forEach(function(a){var b="activeLayerInfo-"+a.layer.uid+"-version-change";d._handles.remove(b);d._watchForSectionChanges(a.children);d._handles.add(a.watch("version",function(){return d._generateSectionNames()}),b)}),this._handles.add(a.on("change",function(){return d._watchForSectionChanges(a)})))};g.prototype._generateSectionNames=function(){this._sectionNames.length=0;this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)};g.prototype._generateSectionNamesForActiveLayerInfo=
function(a){var d=this;a.children.forEach(this._generateSectionNamesForActiveLayerInfo,this);a.legendElements&&a.legendElements.forEach(function(c,b){d._sectionNames.push("esri-legend--card__"+a.layer.uid+"-type-"+c.type+"-"+b)})};g.prototype._renderLegendForLayer=function(a){var d=this,c;if(!a.ready)return null;if(a.children.length)return c=a.children.map(function(a){return d._renderLegendForLayer(a)}).toArray(),e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service","esri-legend--card__group-layer")},
e.tsx("div",{class:"esri-legend--card__service-caption-container"},a.title),c);var b=a.legendElements;if(b&&!b.length)return null;var f=b.some(function(a){return"relationship-ramp"===a.type}),b=b.map(function(b,c){return d._renderLegendForElement(b,a,c,f)}).filter(function(a){return!!a});if(!b.length)return null;var m=(c={},c["esri-legend--card__group-layer-child"]=!!a.parent,c);return e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service",m)},e.tsx("div",{class:"esri-legend--card__service-caption-container"},
e.tsx("div",{class:"esri-legend--card__service-caption-text"},a.title)),e.tsx("div",{class:"esri-legend--card__service-content"},b))};g.prototype._renderLegendForElement=function(a,d,c,b){var f=this;void 0===b&&(b=!1);var m,n="color-ramp"===a.type,h="opacity-ramp"===a.type,l="size-ramp"===a.type,g=d.layer,k=a.title,r=null;"string"===typeof k?r=k:k&&(r=u.getTitle(k,n||h),r=k.title?k.title+" ("+r+")":r);c="esri-legend--card__"+g.uid+"-type-"+a.type+"-"+c;g=this._hasIndicators?e.tsx("div",null,e.tsx("h3",
{class:this.classes("esri-widget__heading","esri-legend--card__carousel-title")},d.title),e.tsx("h4",{class:this.classes("esri-widget__heading","esri-legend--card__layer-caption")},r)):r?e.tsx("h4",{class:this.classes("esri-widget__heading","esri-legend--card__layer-caption")},r):null;k=null;"symbol-table"===a.type?(l=a.infos.map(function(b,c){return f._renderLegendForElementInfo(b,d,a.legendType,c)}).filter(function(a){return!!a}),l.length&&(k=l[0].properties.classes&&l[0].properties.classes["esri-legend--card__symbol-row"],
b=(m={},m["esri-legend--card__label-container"]=!k&&!b,m["esri-legend--card__relationship-label-container"]=b,m),k=e.tsx("div",{key:c,class:"esri-legend--card__section"},g,e.tsx("div",{class:this.classes(b)},l)))):"color-ramp"===a.type||"opacity-ramp"===a.type||"heatmap-ramp"===a.type?k=e.tsx("div",{key:c,class:"esri-legend--card__section"},g,this._renderLegendForRamp(a)):l?k=e.tsx("div",{key:c,class:"esri-legend--card__section"},g,this._renderSizeRamps(a)):"relationship-ramp"===a.type&&(k=e.tsx("div",
{key:c,class:this.classes("esri-legend--card__section","esri-legend--card__relationship-section")},g,G.renderRelationshipRamp(a,this.id)));if(!k)return null;this._sectionMap.set(c,k);return k};g.prototype._renderLegendForElementInfo=function(a,d,c,b){var f,m,n,h=d.layer;if(a.type)return this._renderLegendForElement(a,d,b);d=u.isImageryStretchedLegend(h,c);if(a.symbol&&a.preview){if(-1===a.symbol.type.indexOf("simple-fill")){if(!a.label)return e.tsx("div",{key:b,bind:a.preview,afterCreate:u.attachToNode});
h=(f={},f["esri-legend--card__symbol-cell"]=this._hasIndicators,f);return e.tsx("div",{key:b,class:this.classes("esri-legend--card__layer-row",(m={},m["esri-legend--card__symbol-row"]=this._hasIndicators,m))},e.tsx("div",{class:this.classes(h),bind:a.preview,afterCreate:u.attachToNode}),e.tsx("div",{class:this.classes("esri-legend--card__image-label",(n={},n["esri-legend--card__label-cell"]=this._hasIndicators,n))},u.getTitle(a.label,!1)||""))}n=m=f=255;var h=0,g=c=d=255,q=0,k=a.symbol.color&&a.symbol.color.a,
r=a.symbol.outline&&a.symbol.outline.color.a;k&&(f=a.symbol.color.r,m=a.symbol.color.g,n=a.symbol.color.b,h=a.symbol.color.a);r&&(d=a.symbol.outline.color.r,c=a.symbol.outline.color.g,g=a.symbol.outline.color.b,q=a.symbol.outline.color.a);var t=H.isBright(a.symbol.color),p=t?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)";return e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},e.tsx("div",{class:"esri-legend--card__label-element",styles:{background:k?"rgba("+f+", "+m+", "+n+", "+h+")":"none",
color:t?"black":"white",textShadow:"-1px -1px 0 "+p+",\n                                              1px -1px 0 "+p+",\n                                              -1px 1px 0 "+p+",\n                                              1px 1px 0 "+p,border:r?"1px solid rgba("+d+", "+c+", "+g+", "+q+")":"none"}}," ",a.label," "))}if(a.src)return f=this._renderImage(a,h,d),e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},f,e.tsx("div",{class:"esri-legend--card__image-label"},a.label||""))};g.prototype._renderImage=
function(a,d,c){var b,f=a.label,m=a.src,g=a.opacity;c=(b={},b["esri-legend--card__imagery-layer-image--stretched"]=c,b["esri-legend--card__symbol"]=!c,b);d={opacity:""+(null!=g?g:d.opacity)};return e.tsx("img",{alt:f,src:m,border:0,width:a.width,height:a.height,class:this.classes(c),styles:d})};g.prototype._drawImageOnSizeRamp=function(a,d,c){var b=c.x,f=c.y,e=c.width,g=c.height,h=new Image;h.src=d;h.onload=function(){a.drawImage(h,b,f,e,g);URL.revokeObjectURL(d)}};g.prototype._attachSizeRampToNode=
function(a){var d=a["data-legend-element"].infos,c=d[0],b=d[d.length-1],f=c.symbol,e=b.symbol,g="picture-marker"===f.type;a:{if(f)if(-1<f.type.indexOf("3d")){if(d=f.symbolLayers&&f.symbolLayers.length){d=f.symbolLayers.getItemAt(d-1).get("resource.primitive");d="triangle"===d||"cone"===d||"tetrahedron"===d;break a}}else{d="triangle"===f.style;break a}d=void 0}var h;a:{if(f)if(-1<f.type.indexOf("3d")){if(h=f.symbolLayers&&f.symbolLayers.length){h=f.symbolLayers.getItemAt(h-1);h=h.resource&&h.resource.primitive;
h="circle"===h||"cross"===h||"kite"===h||"sphere"===h||"cube"===h||"diamond"===h;break a}}else{h=f.style;h="circle"===h||"diamond"===h||"cross"===h;break a}h=void 0}var l,q;g?(l=f.url,q=e.url):(c.preview&&(c.preview.firstChild.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns","http://www.w3.org/2000/svg"),l=new Blob([c.preview.innerHTML],{type:"image/svg+xml"}),l=URL.createObjectURL(l)),b.preview&&(b.preview.firstChild.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns","http://www.w3.org/2000/svg"),
q=new Blob([b.preview.innerHTML],{type:"image/svg+xml"}),q=URL.createObjectURL(q)));var k=y.pt2px(c.size+c.outlineSize)*v,f=y.pt2px(b.size+b.outlineSize)*v,e=this._hasIndicators?k:k+100*v,g=this._hasIndicators?e+50*v:k,c=document.createElement("canvas");c.width=e;c.height=g;c.style.width=c.width/v+"px";c.style.height=c.height/v+"px";b=c.getContext("2d");this._hasIndicators?(this._drawImageOnSizeRamp(b,l,{x:0,y:0,width:k,height:k}),this._drawImageOnSizeRamp(b,q,{x:e/2-f/2,y:g-f,width:f,height:f}),
b.beginPath(),l=e/2-f/2,q=g-(d?0:h?f/2:f),b.moveTo(0,h?e/2:e),b.lineTo(l,q),l=e/2+f/2,d=g-(d?0:h?f/2:f),b.moveTo(e,h?e/2:e),b.lineTo(l,d)):(this._drawImageOnSizeRamp(b,l,{x:e-k,y:0,width:k,height:k}),this._drawImageOnSizeRamp(b,q,{x:0,y:g/2-f/2,width:f,height:f}),b.beginPath(),l=e-(h||d?k/2:k),b.moveTo(f-(h||d?f/2:0),g/2-f/2),b.lineTo(l,0),d=e-(h?k/2:k),b.moveTo(f-(h?f/2:0),g/2+f/2),b.lineTo(d,g));b.strokeStyle="#ddd";b.stroke();a.appendChild(c)};g.prototype._renderSizeRamps=function(a){var d,c=a.infos,
b=c[0].label,c=c[c.length-1].label;return e.tsx("div",{class:this.classes("esri-legend--card__layer-row",(d={},d["esri-legend--card__size-ramp-row"]=this._hasIndicators,d))},e.tsx("div",{class:"esri-legend--card__ramp-label"},this._hasIndicators?b:c),e.tsx("div",{class:"esri-legend--card__size-ramp-container"},e.tsx("div",{bind:this,"data-legend-element":a,afterCreate:this._attachSizeRampToNode})),e.tsx("div",{class:"esri-legend--card__ramp-label"},this._hasIndicators?c:b))};g.prototype._renderLegendForRamp=
function(a){var d=a.infos,c="heatmap-ramp"===a.type,b=d.length-1,f=2<b&&!c?25*b:100,g=f+20;a=document.createElement("div");a.style.width=g+"px";var n=C.createSurface(a,g,25),h=d.slice(0).reverse();try{h.forEach(function(a,d){a.offset=c?a.ratio:d/b}),c||n.createPath("M0 12.5 L10 0 L10 25 Z").setFill(h[0].color).setStroke(null),n.createRect({x:10,y:0,width:f,height:25}).setFill({type:"linear",x1:10,y1:0,x2:f+10,y2:0,colors:h}).setStroke(null),c||n.createPath("M"+(f+10)+" 0 L"+g+" 12.5 L"+(f+10)+" 25 Z").setFill(h[h.length-
1].color).setStroke(null)}catch(l){n.clear(),n.destroy()}if(!n)return null;f=h.filter(function(a,b){return!!a.label&&0!==b&&b!==h.length-1}).map(function(a){return e.tsx("div",{class:"esri-legend--card__interval-separators-container"},e.tsx("div",{class:"esri-legend--card__interval-separator"},"|"),e.tsx("div",{class:"esri-legend--card__ramp-label"},a.label))});g=d[d.length-1].label;d=d[0].label;return e.tsx("div",{class:"esri-legend--card__layer-row"},e.tsx("div",{class:"esri-legend--card__ramp-label"},
c?x[g]:g),e.tsx("div",{class:"esri-legend--card__symbol-container"},e.tsx("div",{bind:a,afterCreate:u.attachToNode}),f),e.tsx("div",{class:"esri-legend--card__ramp-label"},c?x[d]:d))};t([e.renderable(),p.property()],g.prototype,"activeLayerInfos",void 0);t([p.property()],g.prototype,"layout",void 0);t([p.property({readOnly:!0})],g.prototype,"type",void 0);t([p.property()],g.prototype,"view",void 0);t([e.accessibleHandler()],g.prototype,"_selectSection",null);return g=t([p.subclass("esri.widgets.Legend.styles.Card")],
g)}(p.declared(F))});