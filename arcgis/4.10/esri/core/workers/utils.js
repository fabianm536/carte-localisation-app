// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../has"],function(k,b,g){function e(a){return a&&"object"===typeof a&&("result"in a||"transferList"in a)}function f(a){return a instanceof ArrayBuffer||a&&a.constructor&&"ArrayBuffer"===a.constructor.name}Object.defineProperty(b,"__esModule",{value:!0});(function(a){a[a.HANDSHAKE=0]="HANDSHAKE";a[a.CONFIGURE=1]="CONFIGURE";a[a.CONFIGURED=2]="CONFIGURED";a[a.OPEN=3]="OPEN";a[a.OPENED=4]="OPENED";a[a.RESPONSE=5]="RESPONSE";a[a.INVOKE=6]="INVOKE";a[a.ABORT=7]="ABORT";a[a.CLOSE=
8]="CLOSE";a[a.OPEN_PORT=9]="OPEN_PORT"})(b.MessageType||(b.MessageType={}));var h=0;b.newJobId=function(){return h++};b.isTranferableResult=e;b.toInvokeError=function(a){return a?a.toJSON?JSON.stringify(a):JSON.stringify({name:a.name,message:a.message,details:a.details,stack:a.stack}):null};b.postMessage=function(a,b,c,d){2===arguments.length||void 0===c&&void 0===d?a.postMessage(b):(g("esri-workers-arraybuffer-transfer")||(d?(d=d.filter(function(a){return!f(a)}),d.length||(d=null)):e(c)&&c.transferList&&
(c.transferList=c.transferList.filter(function(a){return!f(a)}),c.transferList.length||(c.transferList=null))),d?(b.data=c,a.postMessage(b,d)):e(c)?(b.data=c.result,c.transferList?a.postMessage(b,c.transferList):a.postMessage(b)):(b.data=c,a.postMessage(b)))};b.receiveMessage=function(a){return a?(a=a.data)?"string"===typeof a?JSON.parse(a):a:null:null}});