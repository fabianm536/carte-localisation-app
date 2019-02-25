// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/buffer/typedArrayUtil","../../webgl-engine/lib/geometryDataUtils"],function(n,f,k,m){function l(a){return m.generateDefaultIndexArray(a)}Object.defineProperty(f,"__esModule",{value:!0});f.linearIndexArray=l;f.trianglesToTriangles=function(a){return"number"===typeof a?l(a):k.isUint16Array(a)||k.isUint8Array(a)?new Uint32Array(a):a};f.triangleStripToTriangles=function(a){var e="number"===typeof a?a:a.length;if(3>e)return new Uint32Array(0);var e=e-2,c=new Uint32Array(3*
e);if("number"===typeof a)for(var d=0,b=0;b<e;++b)c[d++]=b,c[d++]=b+1,c[d++]=b+2;else for(var f=a[0],g=a[1],b=d=0;b<e;++b){var h=a[b+2];c[d++]=f;c[d++]=g;c[d++]=h;f=g;g=h}return c};f.triangleFanToTriangles=function(a){var e="number"===typeof a?a:a.length;if(3>e)return new Uint32Array(0);var e=e-2,c=new Uint32Array(3*e);if("number"===typeof a)for(var d=0,b=0;b<e;++b)c[d++]=0,c[d++]=b+1,c[d++]=b+2;else for(var f=a[0],g=a[1],b=d=0;b<e;++b){var h=a[b+2];c[d++]=f;c[d++]=g;g=c[d++]=h}return c}});