// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/boundsUtils","../../../../geometry/support/coordsUtils"],function(v,q,t,u,r){Object.defineProperty(q,"__esModule",{value:!0});q.move=function(b,f,h,c,a){if("point"===b.type){var d=b.clone();if(a)a=c.resolution,d.x=b.x+f*a,d.y=b.y-h*a;else{a=c.state.transform;c=c.state.inverseTransform;var e=a[0]*b.x+a[2]*b.y+a[4],g=a[1]*b.x+a[3]*b.y+a[5];d.x=c[0]*(e+f)+c[2]*(g+h)+c[4];d.y=c[1]*(e+f)+c[3]*(g+h)+
c[5]}return d}if("multipoint"===b.type){var k=b.clone(),l=k.points;if(a)for(d in a=c.resolution,l)c=l[d],e=c[0],g=c[1],l[d]=[e+f*a,g-h*a];else for(d in a=c.state.transform,c=c.state.inverseTransform,l){var e=l[d],g=a[0]*e[0]+a[2]*e[1]+a[4],m=a[1]*e[0]+a[3]*e[1]+a[5],e=c[0]*(g+f)+c[2]*(m+h)+c[4],g=c[1]*(g+f)+c[3]*(m+h)+c[5];l[d]=[e,g]}return k}if("extent"===b.type)return d=b.clone(),a?(a=c.resolution,d.xmin=b.xmin+f*a,d.xmax=b.xmax+f*a,d.ymin=b.ymin-h*a,d.ymax=b.ymax-h*a):(a=c.state.transform,c=c.state.inverseTransform,
e=a[0]*b.xmin+a[2]*b.ymin+a[4],k=a[1]*b.xmin+a[3]*b.ymin+a[5],l=a[0]*b.xmax+a[2]*b.ymax+a[4],a=a[1]*b.xmax+a[3]*b.ymax+a[5],d.xmin=c[0]*(e+f)+c[2]*(k+h)+c[4],d.ymin=c[1]*(e+f)+c[3]*(k+h)+c[5],d.xmax=c[0]*(l+f)+c[2]*(a+h)+c[4],d.ymax=c[1]*(l+f)+c[3]*(a+h)+c[5]),d;k=b.clone();b=r.geometryToCoordinates(b);var n="polyline"===k.type?k.paths:k.rings;if(a)for(l in a=c.resolution,b){var p=b[l];for(d in p)c=p[d],e=c[0],g=c[1],n[l][d]=[e+f*a,g-h*a]}else for(l in a=c.state.transform,c=c.state.inverseTransform,
b)for(d in p=b[l],p)e=p[d],g=a[0]*e[0]+a[2]*e[1]+a[4],m=a[1]*e[0]+a[3]*e[1]+a[5],e=c[0]*(g+f)+c[2]*(m+h)+c[4],g=c[1]*(g+f)+c[3]*(m+h)+c[5],n[l][d]=[e,g];"paths"in k?k.paths=n:k.rings=n;return k};q.scale=function(b,f,h,c,a){if("point"===b.type){c=b.x;var d=b.y,e=a?a[0]:c;a=a?a[1]:d;b=b.clone();b.x=(c-e)*f+e;b.y=(d-a)*h+a;return b}if("multipoint"===b.type){var g=r.geometryToCoordinates(b);c=t.create();d=u.getRingsOrPathsBounds(c,[g]);g=d[0];c=d[1];var k=d[2],d=d[3],g=a?a[0]:(g+k)/2,k=a?a[1]:(d+c)/2,
l=b.clone(),m=l.points;for(e in m)b=m[e],c=b[0],d=b[1],b=(c-g)*f+g,a=(d-k)*h+k,m[e]=[b,a];return l}if("extent"===b.type)return e=b.xmin,g=b.xmax,c=b.ymin,k=b.ymax,d=a?a[0]:(e+g)/2,a=a?a[1]:(k+c)/2,b=b.clone(),b.xmin=(e-d)*f+d,b.ymax=(k-a)*h+a,b.xmax=(g-d)*f+d,b.ymin=(c-a)*h+a,b.xmin>b.xmax&&(f=b.xmin,b.xmin=b.xmax,b.xmax=f),b.ymin>b.ymax&&(f=b.ymin,b.ymin=b.ymax,b.ymax=f),b;k=r.geometryToCoordinates(b);c=t.create();m=u.getRingsOrPathsBounds(c,k);d=m[0];c=m[1];var l=m[2],m=m[3],l=a?a[0]:(d+l)/2,m=
a?a[1]:(m+c)/2,n=b.clone(),p="polyline"===n.type?n.paths:n.rings;for(g in k){var q=k[g];for(e in q)b=q[e],c=b[0],d=b[1],b=(c-l)*f+l,a=(d-m)*h+m,p[g][e]=[b,a]}"paths"in n?n.paths=p:n.rings=p;return n};q.getScaleRatio=function(b,f,h,c,a,d){return Math.sqrt((a-b)*(a-b)+(d-f)*(d-f))/Math.sqrt((h-b)*(h-b)+(c-f)*(c-f))};q.getRotationAngle=function(b,f,h,c,a,d){return 180*Math.atan2(f-d,b-a)/Math.PI-180*Math.atan2(f-c,b-h)/Math.PI}});