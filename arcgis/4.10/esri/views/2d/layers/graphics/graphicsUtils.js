// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/Polygon ../../../../geometry/Polyline ../../../../geometry/SpatialReference ../../../../geometry/support/boundsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtils ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/support/spatialReferenceUtils ../../engine/webgl/definitions ../../engine/webgl/fontUtils ../../engine/webgl/GeometryUtils ../../engine/webgl/TextShapingNew ../../engine/webgl/TileClipper ../../engine/webgl/util/BidiText".split(" "),
function(aa,q,y,p,n,S,z,A,T,E,B,U,L,C,V,v,F,W,X){function G(a){switch(a){case "left":return 1;case "right":return-1;case "center":case "justify":return 0}}function H(a){switch(a){case "top":return-1;case "middle":return 0;case "baseline":case "bottom":return 1}}function M(a){switch(a){case "left":return 0;case "right":return 1;case "center":case "justify":return.5}}function N(a,d,c){if(!c)return a;var b=X.bidiText(d.text),e=b[0],b=b[1],g=M(d.horizontalAlignment||"center"),f=G(d.horizontalAlignment||
"center");c=(new F([c.glyphMosaicItems],C.TEXT_MAX_WIDTH,C.TEXT_LINE_HEIGHT,C.TEXT_SPACING,[0,.5*-C.TEXT_LINE_HEIGHT],.5*(1-f),0,g)).getShaping(e,b);e=V.getFontDecorationTop(d.font);isNaN(e)||F.addDecoration(c,e);c=F.getBox(c);d=p.pt2px(d.font.size)/Y;a[0]=d*c.x;a[1]=d*c.y;a[2]=d*c.width;a[3]=d*c.height;return a}function w(a,d){return Math.ceil((a-d)/(2*d))}function Z(a,d){var c;c=E.isPolygon(a)?a.rings:a.paths;for(var b=0;b<c.length;b++)for(var e=0,g=c[b];e<g.length;e++)g[e][0]+=d;return a}function O(a,
d,c){if(Array.isArray(a)){var b=a[0];if(b>d){var e=w(b,d);a[0]=b+-2*e*d}else b<c&&(e=w(b,c),a[0]=b+-2*e*c)}else b=a.x,b>d?(e=w(b,d),a=a.clone().offset(-2*e*d,0)):b<c&&(e=w(b,c),a=a.clone().offset(-2*e*c,0));return a}Object.defineProperty(q,"__esModule",{value:!0});q.ensureClosedRings=function(a){if(E.isPolygon(a)){var d=0;for(a=a.rings;d<a.length;d++){var c=a[d];3>c.length||c[0][0]===c[c.length-1][0]&&c[0][1]===c[c.length-1][1]||c.push(c[0])}}};q.getBounds=function(a,d,c,b,e,g,f,h,k){if(!b)return a[0]=
a[1]=a[2]=a[3]=0,d[0]=d[1]=d[2]=d[3]=0,a;var l=c.symbol;!l&&g&&(l=g.getSymbol(c,{scale:h}));if(!l)return a;if(E.isPoint(b))switch(c=b.x,b=b.y,l.type){case "simple-marker":case "picture-marker":g=l;var m,r;e=p.pt2px(g.xoffset);d=p.pt2px(g.yoffset);l=v.C_DEG_TO_RAD*g.angle;switch(g.type){case "simple-marker":m=r=p.pt2px(g.size);break;case "picture-marker":m=p.pt2px(g.width),r=p.pt2px(g.height)}m*=.5;r*=.5;0!==l&&(g=Math.cos(l),l=Math.sin(l),h=m*l+r*g,m=m*g+r*l,r=h);m=f*(e+m);f*=d+r;f=Math.sqrt(m*m+
f*f);d=B.normalizeMapX(c-f,k);c=B.normalizeMapX(c+f,k);d>c&&(k=L.getInfo(k))&&(c=k.valid,k=c[1],d=c[0],c=k);a[0]=d;a[1]=b-f;a[2]=c;a[3]=b+f;break;case "text":0===d[2]&&0===d[3]&&N(d,l,e);g=l;e=G(g.horizontalAlignment||"center");r=H(g.verticalAlignment||"middle");l=f*p.pt2px(g.xoffset);m=f*p.pt2px(g.yoffset);h=v.C_DEG_TO_RAD*g.angle;g=f*d[2];f*=d[3];if(0!==h){d=Math.cos(h);h=Math.sin(h);var n=g*h+f*d;g=g*d+f*h;f=n}d=l+e*g+g;f=m+r*f+f;f=Math.sqrt(d*d+f*f);d=B.normalizeMapX(c-f,k);c=B.normalizeMapX(c+
f,k);d>c&&(k=L.getInfo(k))&&(c=k.valid,k=c[1],d=c[0],c=k);a[0]=d;a[1]=b-f;a[2]=c;a[3]=b+f}else{T.getBoundsXY(a,b);b=d[0];if(0===b){a:switch(b=0,l.type){case "simple-fill":case "picture-fill":b=l.outline;if(!b){b=0;break a}b=b.width;break;case "simple-line":b=l.width;break;case "simple-marker":b=l.size;break;case "picture-marker":b=Math.max(l.width,l.height);break;case "text":b=[0,0,0,0],N(b,l,e),b=Math.max(b[0],b[1])}d[0]=b}b=f*b/2;a[0]-=b;a[1]-=b;a[2]+=b;a[3]+=b}return a};q.isMarkerSymbol=function(a){return"simple-marker"===
a||"picture-marker"===a||"text"===a};q.graphicGeometryToNumber=function(a){switch(a.geometry.type){case "polyline":return 1;case "polygon":case "extent":return 2}return 0};q.getXAnchorDirection=G;q.getYAnchorDirection=H;q.getJustification=M;var I=n.vec2f32.create(),P=n.vec2f32.create(),Q=n.vec2f32.create(),x=n.vec2f32.create(),J=n.vec2f32.create(),R=n.vec2f32.create(),K=n.vec2f32.create();q.isPointOnPolyline=function(a,d,c,b){n.vec2.set(Q,d,c);a=a.paths;for(var e,g,f,h,k,l,m,r,p=Infinity,q=0;q<a.length;q++){var t=
a[q];if(!(2>t.length))for(var u=1;u<t.length;u++)e=t[u-1][0],f=t[u-1][1],g=t[u][0],h=t[u][1],k=Math.min(e,g)-b,l=Math.min(f,h)-b,m=Math.max(e,g)+b,r=Math.max(f,h)+b,d<k||d>m||c<l||c>r||(n.vec2.set(I,e,f),n.vec2.set(P,g,h),n.vec2.subtract(x,P,I),n.vec2.subtract(J,I,Q),n.vec2.scale(R,x,n.vec2.dot(x,J)/n.vec2.dot(x,x)),n.vec2.subtract(K,J,R),e=n.vec2.dot(K,K),p>e&&(p=e))}return Math.sqrt(p)<=b};q.getMarkerSymbolBounds=function(a,d,c,b,e,g){var f,h,k=e*p.pt2px(b.xoffset),l=e*p.pt2px(b.yoffset),m=v.C_DEG_TO_RAD*
b.angle;switch(b.type){case "simple-marker":f=h=.5*e*p.pt2px(b.size);break;case "picture-marker":f=.5*e*p.pt2px(b.width),h=.5*e*p.pt2px(b.height)}e=v.C_DEG_TO_RAD*g;b=Math.cos(e);e=Math.sin(e);d+=k*b-l*e;c+=k*e+l*b;0!==m&&(k=Math.cos(m),m=Math.sin(m),l=f*m+h*k,f=f*k+h*m,h=l);a[0]=d-f;a[1]=c-h;a[2]=d+f;a[3]=c+h;return a};q.getTextSymbolBounds=function(a,d,c,b,e,g,f){var h=H(b.verticalAlignment||"baseline"),k="baseline"===(b.verticalAlignment||"baseline"),l=g*p.pt2px(b.xoffset),m=g*p.pt2px(b.yoffset);
b=p.pt2px(b.font.size)/24;var n=v.C_DEG_TO_RAD*f;f=Math.cos(n);n=Math.sin(n);d=d+(l*f-m*n)+g*e[0];c=c+(l*n+m*f)+g*((k?25*b:e[1]+(1-h)*e[3]*.5)+4*b);a[0]=d;a[1]=c-g*e[3];a[2]=d+g*e[2];a[3]=c;return a};q.normalizeCentralMeridian=function(a){var d,c,b,e,g,f=null;if(!a)return y.resolve(null);d=a.spatialReference;c=U.getInfo(d);g=d.isWebMercator?102100:4326;b=D[g].maxX;e=D[g].minX;d=D[g].plus180Line;g=D[g].minus180Line;var h;if(c)if("mesh"===a.type)h=a;else if("point"===a.type)h=O(a.clone(),b,e);else if("multipoint"===
a.type)h=a.clone(),h.points=h.points.map(function(a){return O(a,b,e)});else if("extent"===a.type){var k=a.clone();h=k._normalize(!1,!1,c);h=h.rings?new S(h):h}else a.extent?(k=a.extent,c=2*w(k.xmin,e)*b,a=0===c?a.clone():Z(a.clone(),c),k.offset(c,0),k.intersects(d)&&k.xmax!==b?f=a:k.intersects(g)&&k.xmin!==e?f=a:h=a):h=a.clone();else return y.resolve(a);return null!==f?(f=(new W.CutVertical).cut(f,b),y.resolve(f)):y.resolve(h)};var Y=24,D={102100:{maxX:2.0037508342788905E7,minX:-2.0037508342788905E7,
plus180Line:new z({paths:[[[2.0037508342788905E7,-2.0037508342788905E7],[2.0037508342788905E7,2.0037508342788905E7]]],spatialReference:A.WebMercator}),minus180Line:new z({paths:[[[-2.0037508342788905E7,-2.0037508342788905E7],[-2.0037508342788905E7,2.0037508342788905E7]]],spatialReference:A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new z({paths:[[[180,-180],[180,180]]],spatialReference:A.WebMercator}),minus180Line:new z({paths:[[[-180,-180],[-180,180]]],spatialReference:A.WebMercator})}}});