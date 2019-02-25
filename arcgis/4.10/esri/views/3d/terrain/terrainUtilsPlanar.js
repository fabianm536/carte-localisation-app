// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/libs/gl-matrix-2/gl-matrix ../../../geometry/support/aaBoundingRect ./TerrainConst ./TilingScheme".split(" "),function(u,l,p,e,n,q,r){function m(a,b,d,c){e.vec3.copy(k,d);k[c]=b[c];c=e.vec3.subtract(k,k,b);var g=e.vec3.subtract(t,a,b),g=e.vec3.dot(g,c),h=e.vec3.dot(c,c);b=0>=g?b:h<=g?d:e.vec3.add(k,b,e.vec3.scale(c,c,g/h));a=e.vec3.subtract(k,a,b);return Math.PI/2-Math.atan(a[2]/Math.sqrt(a[0]*a[0]+a[1]*a[1]))}Object.defineProperty(l,"__esModule",
{value:!0});var k=e.vec3f64.create(),t=e.vec3f64.create(),h=e.vec3f64.create(),f=e.vec3f64.create();l.isInsideExtent=function(a,b,d){void 0===d&&(d=0);a=a.extent;return 0===d?n.containsPoint(a,b):n.containsPointWithMargin(a,b,d*Math.min(a[2]-a[0],a[3]-a[1]))};l.tiltOnEdge=m;l.tiltToExtentEdge=function(a,b){var d=a.getElevationBounds();a=a.extent;d=.5*(d[0]+d[1]);h[0]=a[0];h[1]=a[1];h[2]=d;f[0]=a[2];f[1]=a[3];f[2]=d;a=d=Infinity;b[0]<h[0]?d=m(b,h,f,0):b[0]>f[0]&&(d=m(b,f,h,0));b[1]<h[1]?a=m(b,h,f,
1):b[1]>f[1]&&(a=m(b,f,h,1));return Math.min(d,a)};l.checkIfTileInfoSupportedForViewSR=function(a,b,d){if(a.spatialReference.isGeographic)return new p("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var c=r.checkUnsupported(a);if(c)return c;var g=a.lods,c=g[0].resolution*Math.pow(2,g[0].level),e=[c*a.size[0],c*a.size[1]],h=[a.origin.x,a.origin.y];b=n.fromExtent(b);var f=n.create();r.computeRowColExtent(b,e,h,f);e=(f[2]-f[0])*(f[3]-f[1]);e>
q.MAX_ROOT_TILES?(g=g[0].scale*Math.pow(2,g[0].level),c=Math.max((b[3]-b[1])/a.size[1],(b[2]-b[0])/a.size[0])*g/c,b=Math.floor(Math.log(c)/Math.log(10)),c=Math.ceil(c/Math.pow(10,b))*Math.pow(10,b),c=new p("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(g).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+c.toLocaleString()+".",{level0Scale:g,suggestedLevel0Scale:c,requiredNumRootTiles:e,allowedNumRootTiles:q.MAX_ROOT_TILES})):
c=null;return c?c:d&&!a.spatialReference.equals(d)?new p("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null}});