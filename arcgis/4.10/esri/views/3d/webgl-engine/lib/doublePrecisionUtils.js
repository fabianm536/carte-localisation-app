// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,e){function f(c,d,b){for(var a=0;a<b;++a)d[2*a]=c[a],d[2*a+1]=c[a]-d[2*a]}Object.defineProperty(e,"__esModule",{value:!0});e.encodeDouble=function(c,d){b[0]=c;b[1]=c-b[0];d[0]=b[0];d[1]=b[1]};e.encodeDoubleArray=f;e.decodeDoubleArray=function(b,d,e){for(var a=0;a<e;++a)d[a]=b[2*a]+b[2*a+1]};e.encodeDoubleArraySplit=function(e,d,h,a){for(var c=0;c<a;++c)g[0]=e[c],f(g,b,1),d[c]=b[0],h[c]=b[1]};var g=new Float64Array(1),b=new Float32Array(2)});