// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./layerSourceUtils"],function(k,e,g){function h(b,c){function f(d){var b=d.sublayers;a.unshift(d.id);b&&b.forEach(f)}if(!b||!b.length)return!0;var a=[];c.forEach(f);if(b.length>a.length)return!1;c=0;for(var d=a.length,e=0;e<b.length;e++){for(var g=b[e].id;c<d&&a[c]!==g;)c++;if(c>=d)return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0});e.isExportDynamic=function(b,c,f){return b.some(function(a){var d=a.source;return!(!d||d.type===g.MAPLAYER&&d.mapLayerId===
a.id&&(!d.gdbVersion||d.gdbVersion===f.gdbVersion))||null!=a.renderer||null!=a.labelingInfo||a.hasOwnProperty("opacity")&&null!=a.opacity||a.hasOwnProperty("labelsVisible")&&null!=a.labelsVisible})?!0:!h(b,c)};e.sameStructureAsService=function(b,c){return c.flatten(function(b){return(b=b.sublayers)&&b.toArray().reverse()}).toArray().reverse().every(function(c,a){return(a=b[a])&&c.id===a.id&&(null==c.sublayers&&null==a.sublayers||null!=c.sublayers&&null!=a.sublayers&&c.sublayers.map(function(a){return a.id}).join(",")===
a.sublayers.map(function(a){return a.id}).join(","))})}});