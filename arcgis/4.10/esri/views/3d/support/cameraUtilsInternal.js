// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","./mathUtils"],function(p,d,a,h){Object.defineProperty(d,"__esModule",{value:!0});var m=a.vec3f64.create(),k=a.vec3f64.create();d.createDirectionUp=function(){return{direction:a.vec3f64.create(),up:a.vec3f64.create()}};d.directionToHeadingTilt=function(e,c,l,f,d){var b=m;a.vec3.normalize(b,e);var g=a.vec3.dot(b,f),n=0<g,g=Math.abs(g);.99<g&&(g=Math.abs(a.vec3.dot(c,f)),.99>g?(a.vec3.copy(b,c),n&&a.vec3.scale(b,b,-1)):b=null);c=
0;b&&(a.vec3.scale(k,f,a.vec3.dot(f,b)),a.vec3.subtract(b,b,k),c=a.vec3.dot(b,d)/(a.vec3.length(b)*a.vec3.length(d)),a.vec3.cross(k,b,d),c=(0<a.vec3.dot(k,f)?1:-1)*h.rad2deg(h.acos(c)));e=h.rad2deg(h.acos(-a.vec3.dot(f,e)/a.vec3.length(e)));return l?(l.heading=c,l.tilt=e,l):{heading:c,tilt:e}}});