// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/gl-matrix ../../../camera/constraintUtils ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils ../../../webgl-engine/lib/Camera ../../../../animation/easing".split(" "),function(h,k,p,c,l,q,r,m,n,t){Object.defineProperty(k,"__esModule",{value:!0});h=function(h){function d(a,e){var b=h.call(this,a.state,a.sceneIntersectionHelper,"interaction"===e?null:void 0)||
this;b.view=a;b.mode=e;b.zoomLocation=c.vec3f64.create();b.tmpCamera=new n;b.tmpViewDir=c.vec3f64.create();b.targetOnSphere=c.vec3f64.create();b.tmpCenter=c.vec3f64.create();b.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new n,interactionDirection:null,tiltMode:0};b.sphere=m.sphere.create();return b}p(d,h);Object.defineProperty(d.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});d.prototype.zoomStep=
function(a,e){if(this.active){var b=this.view.state,f=this.constraintOptions.interactionStartCamera;this.animation.finished?f.copyFrom(b.camera):this.animation.cameraAt(1,f);f=!1;0<a&&this.intersectionHelper.intersectScreen(e,this.zoomLocation)&&(f=!0);this.tmpCamera.copyFrom(b.camera);f?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:
c.vec3.copy(this.zoomLocation,this.tmpCamera.center);this.updateCamera(this.tmpCamera,Math.pow(.6,a),this.zoomLocation,e);this.begin(this.tmpCamera)}};d.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:t.outExpo}};d.prototype.updateCamera=function(a,e,b,f){this.sphere.radius=c.vec3.length(b);c.vec3.subtract(this.tmpViewDir,a.center,a.eye);var g=c.vec3.length(this.tmpViewDir),d=g*e;1>=e&&4>d&&(d=4,e=d/g);1E-6>Math.abs(g-d)||(g=c.vec3.length(a.center),this.sphere.radius!==
g&&c.vec3.scale(a.center,a.center,(this.sphere.radius+e*(g-this.sphere.radius))/g),c.vec3.scale(this.tmpViewDir,this.tmpViewDir,-e),c.vec3.add(a.eye,a.center,this.tmpViewDir),l.applyAll(this.view,a,this.constraintOptions),1E-12<c.vec3.squaredDistance(b,a.center)&&m.sphere.intersectScreen(this.sphere,a,f,this.targetOnSphere)&&r.panToPosition(this.sphere,a,b,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),l.applySurfaceCollision(this.view,a))};return d}(q.PointToPointAnimationController);
k.ZoomStepController=h});