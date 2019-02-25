// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/assignHelper ../../../../core/compilerUtils ../../../../core/lang ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/Version ../../../../core/libs/gl-matrix-2/gl-matrix ./BinaryStreamReader ./fillDefaults ./pathUtils ../../support/buffer/BufferView ../../support/buffer/utils".split(" "),function(w,x,k,n,N,C,y,z,D,A,l,E,B,F,f,q){function G(a){switch(a.componentType){case 5120:return new f.BufferViewVec2i8(a.raw,
a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5121:return new f.BufferViewVec2u8(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5122:return new f.BufferViewVec2i16(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5123:return new f.BufferViewVec2u16(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5125:return new f.BufferViewVec2u32(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*
a.entryCount);case 5126:return new f.BufferViewVec2f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);default:C.neverReached(a.componentType)}}function H(a){return k(this,void 0,void 0,function(){return n(this,function(d){return[2,z.create(function(b,c){var d=new Blob([a]),e=new FileReader;e.onload=function(){b(JSON.parse(e.result))};e.onerror=function(b){c(b)};e.readAsText(d)})]})})}function I(a,d){return k(this,void 0,void 0,function(){return n(this,function(b){return[2,z.create(function(b,
g){var c=new Blob([a],{type:d}),m=URL.createObjectURL(c),h=new Image;h.addEventListener("load",function(){URL.revokeObjectURL(m);b(h)});h.addEventListener("error",function(b){URL.revokeObjectURL(m);g(b)});h.src=m})]})})}Object.defineProperty(x,"__esModule",{value:!0});var p;w=function(){function a(d,b,c,a,e){this.context=d;this.errorContext=b;this.uri=c;this.json=a;this.glbBuffer=e;this.bufferCache=new Map;this.textureCache=new Map;this.materialCache=new Map;this.nodeParentMap=new Map;this.nodeTransformCache=
new Map;this.baseUri=F.splitURI(this.uri).dirPart;this.checkVersionSupported();this.checkRequiredExtensionsSupported();b.errorUnsupportedIf(null==a.scene,"A scene must be defined.");b.errorUnsupportedIf(null==a.scenes,"Scenes must be defined.");b.errorUnsupportedIf(null==a.meshes,"Meshes must be defined");b.errorUnsupportedIf(null==a.nodes,"Nodes must be defined.");this.computeNodeParents()}a.load=function(d,b,c){return k(this,void 0,void 0,function(){var g,e,m;return n(this,function(h){switch(h.label){case 0:return y.endsWith(c,
".gltf")?[4,d.loadJson(c)]:[3,2];case 1:return g=h.sent(),[2,new a(d,b,c,g)];case 2:return y.endsWith(c,".glb")?[4,d.loadBinary(c)]:[3,5];case 3:return e=h.sent(),[4,a.parseGLB(b,e)];case 4:return m=h.sent(),[2,new a(d,b,c,m.json,m.binaryData)];case 5:b.error('URI needs to end in ".gltf" or ".glb"'),h.label=6;case 6:return[2]}})})};a.parseGLB=function(a,b){return k(this,void 0,void 0,function(){var c,d,e,m,h,u,f,r,k;return n(this,function(g){switch(g.label){case 0:c=new E.BinaryStreamReader(b),a.assert(12<=
c.remainingBytes(),"GLB binary data is insufficiently large."),d=c.readUint32(),e=c.readUint32(),m=c.readUint32(),a.assert(1179937895===d,"Magic first 4 bytes do not fit to expected GLB value."),a.assert(b.byteLength>=m,"GLB binary data is smalller than header specifies."),a.errorUnsupportedIf(2!==e,"Only GLB container version 2 is supported."),h=0,g.label=1;case 1:if(!(8<=c.remainingBytes()))return[3,5];r=c.readUint32();k=c.readUint32();if(0!==h)return[3,3];a.assert(1313821514===k,"First GLB chunck must be JSON.");
a.assert(0<=r,"No JSON data found.");return[4,H(c.readUint8Array(r))];case 2:return u=g.sent(),[3,4];case 3:1===h?(a.errorUnsupportedIf(5130562!==k,"Second GLB chunck expected to be BIN."),f=c.readUint8Array(r)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),g.label=4;case 4:return h+=1,[3,1];case 5:return u||a.error("No GLB JSON chunk detected."),[2,{json:u,binaryData:f}]}})})};a.prototype.getBuffer=function(a){return k(this,void 0,void 0,function(){var b,c,d,e;return n(this,function(g){switch(g.label){case 0:return b=
this.json.buffers[a],c=this.errorContext,null==b.uri?(c.assert(null!=this.glbBuffer,"GLB buffer not present"),[2,this.glbBuffer]):(d=this.bufferCache.get(a))?[3,2]:[4,this.context.loadBinary(this.resolveUri(b.uri))];case 1:e=g.sent(),d=new Uint8Array(e),this.bufferCache.set(a,d),c.assert(d.byteLength===b.byteLength,"Buffer byte lengths should match."),g.label=2;case 2:return[2,d]}})})};a.prototype.getAccessor=function(a){return k(this,void 0,void 0,function(){var b,c,d,e,m,h,f,k;return n(this,function(g){switch(g.label){case 0:return b=
this.json.accessors[a],c=this.errorContext,c.errorUnsupportedIf(null==b.bufferView,"An accessor bufferView is required."),c.errorUnsupportedIf(b.type in["MAT2","MAT3","MAT4"],"AttributeType "+b.type+" is not supported"),d=this.json.bufferViews[b.bufferView],[4,this.getBuffer(d.buffer)];case 1:return e=g.sent(),m=J[b.type],h=K[b.componentType],f=m*h,k=d.byteStride||f,[2,{raw:e.buffer,byteStride:k,byteOffset:e.byteOffset+(d.byteOffset||0)+(b.byteOffset||0),entryCount:b.count,isDenselyPacked:k===f,componentCount:m,
componentByteSize:h,componentType:b.componentType,min:b.min,max:b.max,normalized:!!b.normalized}]}})})};a.prototype.getIndexData=function(a){return k(this,void 0,void 0,function(){var b;return n(this,function(c){switch(c.label){case 0:return null==a.indices?[2,null]:[4,this.getAccessor(a.indices)];case 1:b=c.sent();if(b.isDenselyPacked)switch(b.componentType){case 5121:return[2,new Uint8Array(b.raw,b.byteOffset,b.entryCount)];case 5123:return[2,new Uint16Array(b.raw,b.byteOffset,b.entryCount)];case 5125:return[2,
new Uint32Array(b.raw,b.byteOffset,b.entryCount)]}else switch(b.componentType){case 5121:return[2,q.scalar.makeDense(this.wrapAccessor(f.BufferViewUint8,b))];case 5123:return[2,q.scalar.makeDense(this.wrapAccessor(f.BufferViewUint16,b))];case 5125:return[2,q.scalar.makeDense(this.wrapAccessor(f.BufferViewUint32,b))]}return[2]}})})};a.prototype.getPositionData=function(a){return k(this,void 0,void 0,function(){var b,c;return n(this,function(d){switch(d.label){case 0:return b=this.errorContext,b.errorUnsupportedIf(null==
a.attributes.POSITION,"POSITION vertex data is required."),[4,this.getAccessor(a.attributes.POSITION)];case 1:return c=d.sent(),b.errorUnsupportedIf(5126!==c.componentType,"[POSITION attribute] Expected type FLOAT, found "+v[c.componentType]),b.errorUnsupportedIf(3!==c.componentCount,"POSITION attribute must have 3 components."),[2,this.wrapAccessor(f.BufferViewVec3f,c)]}})})};a.prototype.getNormalData=function(a){return k(this,void 0,void 0,function(){var b,c;return n(this,function(d){switch(d.label){case 0:return b=
this.errorContext,b.errorUnsupportedIf(null==a.attributes.NORMAL,"NORMAL vertex data is required."),[4,this.getAccessor(a.attributes.NORMAL)];case 1:return c=d.sent(),b.errorUnsupportedIf(5126!==c.componentType,"[NORMAL attribute] Expected type FLOAT, found "+v[c.componentType]),b.errorUnsupportedIf(3!==c.componentCount,"NORMAL attribute must have 3 components."),[2,this.wrapAccessor(f.BufferViewVec3f,c)]}})})};a.prototype.getTextureCoordinates=function(a){return k(this,void 0,void 0,function(){var b,
c;return n(this,function(d){switch(d.label){case 0:return b=this.errorContext,b.errorUnsupportedIf(null==a.attributes.TEXCOORD_0,"TEXCOORD_0 vertex data is required."),[4,this.getAccessor(a.attributes.TEXCOORD_0)];case 1:c=d.sent();b.errorUnsupportedIf(2!==c.componentCount,"TEXCOORD_0 attribute must have 2 components.");if(5126===c.componentType)return[2,this.wrapAccessor(f.BufferViewVec2f,c)];b.errorUnsupportedIf(!c.normalized,"[TEXCOORD_0 attribute] Integer ComponentTypes are only supported for a normalized accessor.");
return[2,q.vec2.normalizeIntegerBuffer(new f.BufferViewVec2f(new ArrayBuffer(8*c.entryCount)),G(c))]}})})};a.prototype.hasVertexColors=function(a){return!!a.attributes.COLOR_0};a.prototype.getVertexColors=function(a){return k(this,void 0,void 0,function(){var b,c;return n(this,function(d){switch(d.label){case 0:return b=this.errorContext,b.errorUnsupportedIf(null==a.attributes.COLOR_0,"COLOR_0 vertex data is required."),[4,this.getAccessor(a.attributes.COLOR_0)];case 1:c=d.sent();b.errorUnsupportedIf(4!==
c.componentCount,"COLOR_0 attribute must have 4 components.");if(5126===c.componentType)return[2,this.wrapAccessor(f.BufferViewVec4f,c)];if(5121===c.componentType)return[2,this.wrapAccessor(f.BufferViewVec4u8,c)];b.errorUnsupported("[COLOR_0 attribute] Unsupported component type: "+v[c.componentType]);return[2]}})})};a.prototype.getMaterial=function(a){return k(this,void 0,void 0,function(){var b,c,d,e,f,h;return n(this,function(g){switch(g.label){case 0:b=this.errorContext;if(c=this.materialCache.get(a.material))return[3,
3];d=B.material(this.json.materials[a.material]);e=d.pbrMetallicRoughness;f=this.hasVertexColors(a);h=void 0;if(!e.baseColorTexture)return[3,2];b.errorUnsupportedIf(0!==(e.baseColorTexture.texCoord||0),"Only TEXCOORD_0 is supported");return[4,this.getTexture(e.baseColorTexture.index)];case 1:h=g.sent(),g.label=2;case 2:c={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:e.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:h,name:d.name,vertexColors:f,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode},
g.label=3;case 3:return[2,c]}})})};a.prototype.getTexture=function(a){return k(this,void 0,void 0,function(){var b,c,d,e,f,h,k,l;return n(this,function(g){switch(g.label){case 0:b=this.errorContext;c=this.json.textures[a];d=B.textureSampler(null!=c.sampler?this.json.samplers[c.sampler]:{});b.errorUnsupportedIf(null==c.source,"source must be defined for a texture");e=this.json.images[c.source];if(f=this.textureCache.get(a))return[3,6];h=void 0;return e.uri?[4,this.context.loadImage(this.resolveUri(e.uri))]:
[3,2];case 1:return h=g.sent(),[3,5];case 2:return b.errorUnsupportedIf(null==e.bufferView,"Image bufferView must be defined."),b.errorUnsupportedIf(null==e.mimeType,"Image mimeType must be defined."),k=this.json.bufferViews[e.bufferView],[4,this.getBuffer(k.buffer)];case 3:return l=g.sent(),b.errorUnsupportedIf(null!=k.byteStride,"byteStride not supported for image buffer"),[4,I(new Uint8Array(l.buffer,l.byteOffset+(k.byteOffset||0),k.byteLength),e.mimeType)];case 4:h=g.sent(),g.label=5;case 5:f=
{data:h,wrapS:d.wrapS,wrapT:d.wrapT,minFilter:d.minFilter,name:e.name},this.textureCache.set(a,f),g.label=6;case 6:return[2,f]}})})};a.prototype.getNodeTransform=function(a){if(void 0===a)return L;var b=this.nodeTransformCache.get(a);if(!b){var b=this.getNodeTransform(this.getNodeParent(a)),c=this.json.nodes[a];if(c.matrix)b=l.mat4.multiply(l.mat4f64.create(),b,c.matrix);else if(c.translation||c.rotation||c.scale)b=l.mat4f64.clone(b),c.translation&&l.mat4.translate(b,b,c.translation),c.rotation&&
(t[3]=l.quat.getAxisAngle(t,c.rotation),l.mat4.rotate(b,b,t[3],t)),c.scale&&l.mat4.scale(b,b,c.scale);this.nodeTransformCache.set(a,b)}return b};a.prototype.wrapAccessor=function(a,b){return new a(b.raw,b.byteOffset,b.byteStride,b.byteOffset+b.byteStride*(b.entryCount-1)+b.componentByteSize*b.componentCount)};a.prototype.resolveUri=function(a){return D.isDataProtocol(a)?a:this.baseUri+a};a.prototype.getNodeParent=function(a){return this.nodeParentMap.get(a)};a.prototype.checkVersionSupported=function(){A.Version.parse(this.json.asset.version,
"glTF").validate(M)};a.prototype.checkRequiredExtensionsSupported=function(){var a=this.json,b=this.errorContext;a.extensionsRequired&&0!==a.extensionsRequired.length&&b.errorUnsupportedIf(!0,"Extensions: "+a.extensionsRequired.join(", "))};a.prototype.computeNodeParents=function(){var a=this;this.json.nodes.forEach(function(b,c){b.children&&b.children.forEach(function(b){a.nodeParentMap.set(b,c)})})};return a}();x.Resource=w;var M=new A.Version(2,0,"glTF"),L=l.mat4.fromXRotation(l.mat4f64.create(),
Math.PI/2),t=l.quatf64.create(),J={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},K=(p={},p[5120]=1,p[5121]=1,p[5122]=2,p[5123]=2,p[5126]=4,p[5125]=4,p),v={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"}});