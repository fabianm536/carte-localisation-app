// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./mathUtils"],function(x,u,w){Object.defineProperty(u,"__esModule",{value:!0});u.computeNeighbors=function(k,n){for(var c=k.length/3,l=new Uint32Array(n+1),m=new Uint32Array(n+1),b=function(a,d){a<d?l[a+1]++:m[d+1]++},a=0;a<c;a++){var f=k[3*a],e=k[3*a+1],h=k[3*a+2];b(f,e);b(e,h);b(h,f)}for(a=e=f=0;a<n;a++)h=l[a+1],b=m[a+1],l[a+1]=f,m[a+1]=e,f+=h,e+=b;for(var d=new Uint32Array(6*c),g=l[n],b=function(a,b,f){if(a<b){var c=l[a+1]++;d[2*c]=b;d[2*c+1]=f}else c=m[b+1]++,d[2*
g+2*c]=a,d[2*g+2*c+1]=f},a=0;a<c;a++)f=k[3*a],e=k[3*a+1],h=k[3*a+2],b(f,e,a),b(e,h,a),b(h,f,a);f=function(a,b){var c=2*a;a=b-a;for(b=1;b<a;b++){var f=d[c+2*b],g=d[c+2*b+1],e=b-1;for(e;0<=e&&d[c+2*e]>f;e--)d[c+2*e+2]=d[c+2*e],d[c+2*e+3]=d[c+2*e+1];d[c+2*e+2]=f;d[c+2*e+3]=g}};for(a=0;a<n;a++)f(l[a],l[a+1]),f(g+m[a],g+m[a+1]);for(var p=new Int32Array(3*c),q=function(a,b){return a===k[3*b]?0:a===k[3*b+1]?1:a===k[3*b+2]?2:-1},c=function(a,b){a=q(a,b);p[3*b+a]=-1},f=function(a,b,c,d){a=q(a,b);p[3*b+a]=
d;c=q(c,d);p[3*d+c]=b},a=0;a<n;a++){for(var e=l[a],h=l[a+1],b=m[a],r=m[a+1];e<h&&b<r;){var t=d[2*e],v=d[2*g+2*b];t===v?(f(a,d[2*e+1],v,d[2*g+2*b+1]),e++,b++):t<v?(c(a,d[2*e+1]),e++):(c(v,d[2*g+2*b+1]),b++)}for(;e<h;)c(a,d[2*e+1]),e++;for(;b<r;)v=d[2*g+2*b],c(v,d[2*g+2*b+1]),b++}return p};var q=null;u.deduplicate=function(k,n,c,l,m){void 0===c&&(c=0);void 0===l&&(l=0);void 0===m&&(m=k.byteLength/(4*n));k=new Uint32Array(k,l,m*n);l=new Uint32Array(m);var b=Math.floor(1.1*m)+1;if(null==q||q.length<2*
b)q=new Uint32Array(w.nextHighestPowerOfTwo(2*b));for(var a=0;a<2*b;a++)q[a]=0;for(var f=0,e=0!==c?Math.ceil(7.84*1.96/(c*c)*c*(1-c)):m,a=0;a<m;a++){if(a===e){var h=1-f/a;if(h+1.96*Math.sqrt(h*(1-h)/a)<c)return null;e*=2}for(var h=a*n,d,g=d=0;g<n;g++)d=k[h+g]+d|0,d=d+(d<<11)+(d>>>2)|0;d>>>=0;for(var g=d%b,p=f;0!==q[2*g+1];){if(q[2*g]===d){var u=q[2*g+1]-1,r=u*n;a:{for(var t=0;t<n;t++)if(k[h+t]!==k[r+t]){r=!1;break a}r=!0}if(r){p=l[u];break}}g++;g>=b&&(g-=b)}p===f&&(q[2*g]=d,q[2*g+1]=a+1,f++);l[a]=
p}if(0!==c&&1-f/m<c)return null;c=new Uint32Array(n*f);for(a=f=0;a<m;a++)if(l[a]===f){b=k;e=a*n;h=c;d=f*n;g=n;for(p=0;p<g;p++)h[d+p]=b[e+p];f++}return{buffer:c.buffer,indices:l,uniqueCount:f}}});