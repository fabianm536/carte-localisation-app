// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function c(a){return a instanceof Float32Array&&2<=a.length}function d(a){return Array.isArray(a)&&2<=a.length}Object.defineProperty(b,"__esModule",{value:!0});b.isVec2f32=c;b.isVec2f64=d;b.isVec2=function(a){return c(a)||d(a)}});