// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports dojo/i18n dojo/i18n!../nls/CoordinateConversion dojo/number dojo/_base/config ./Format".split(" "),function(y,t,v,b,u,w,f){function c(a){var b=a.match(x),b=b?b[0]:"",c=0<=a.indexOf(".")?a.split(".")[1].length:0;return b+u.format(Number(a),{pattern:"###0.###",places:c,round:-1})}function d(a){return u.parse(a)}Object.defineProperty(t,"__esModule",{value:!0});var m=v.getLocalization("dojo.cldr","number",w.locale).decimal,g=b.abbreviatedDirections.north,h=b.abbreviatedDirections.south,
k=b.abbreviatedDirections.east,l=b.abbreviatedDirections.west,n={N:"north",S:"south",E:"east",W:"west"},e={};e[g]="N";e[h]="S";e[k]="E";e[l]="W";var p=new RegExp("-?\\d+[\\.|\\"+m+"]?\\d*"),q=new RegExp("N|S|"+g+"|"+h,"i"),r=new RegExp("E|W|"+k+"|"+l,"i"),x=/^[\\0]+(?=\d)/;t.generateDefaultFormats=function(){return[new f({name:"basemap",coordinateSegments:[{alias:"X",description:"easting",searchPattern:p,substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"Y",description:"northing",
searchPattern:p,substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}}],defaultPattern:"X, Y",viewModel:null}),new f({name:"dd",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp("\\d{1,2}[\\.|\\"+m+"]?\\d*(?\x3d\\D*?[N|S|"+g+"|"+h+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.north,description:"north/south indicator",searchPattern:q,substitution:{input:function(a){return e[a]},
output:function(a){return b.abbreviatedDirections[n[a]]}}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp("\\d{1,3}[\\.|\\"+m+"]?\\d*(?\x3d\\D*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:r,substitution:{input:function(a){return e[a]},output:function(a){return b.abbreviatedDirections[n[a]]}}}],defaultPattern:"Y\u00b0"+b.abbreviatedDirections.north+
", X\u00b0"+b.abbreviatedDirections.east,viewModel:null}),new f({name:"ddm",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S|"+g+"|"+h+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp("\\d{1,2}[\\.\\"+m+"]?\\d*(?\x3d.*?[N|S|"+g+"||"+h+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.north,
description:"north/south indicator",searchPattern:q,substitution:{input:function(a){return e[a]},output:function(a){return b.abbreviatedDirections[n[a]]}}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp("\\d{1,3}(?\x3d\\D*?\\s+.*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"B",description:"minutes longitude",searchPattern:new RegExp("\\d{1,2}[\\.|\\|"+m+"]?\\d*(?\x3d.*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},
output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:r,substitution:{input:function(a){return e[a]},output:function(a){return b.abbreviatedDirections[n[a]]}}}],defaultPattern:"Y\u00b0 A'"+b.abbreviatedDirections.north+", X\u00b0 B'"+b.abbreviatedDirections.east,viewModel:null}),new f({name:"dms",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp("\\d{1,2}(?\x3d.*?\\s+.*?[N|S|"+g+"|"+h+"])","i"),substitution:{input:function(a){return d(a)},
output:function(a){return c(a)}}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp("\\d{1,2}(?\x3d.*?[N|S|"+g+"|"+h+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"B",description:"seconds latitude",searchPattern:new RegExp("\\d{1,2}[\\.|\\"+m+"]?\\d*(?\x3d.*?[N|S|"+g+"|"+h+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.north,description:"north/south indicator",
searchPattern:q,substitution:{input:function(a){return e[a]},output:function(a){return b.abbreviatedDirections[n[a]]}}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp("\\d{1,3}(?\x3d.*?\\s+.*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"C",description:"minutes longitude",searchPattern:new RegExp("\\d{1,2}(?\x3d.*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},
{alias:"D",description:"seconds longitude",searchPattern:new RegExp("\\d{1,2}[\\.|\\"+m+"]?\\d*(?\x3d.*?[E|W|"+k+"|"+l+"])","i"),substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:r,substitution:{input:function(a){return e[a]},output:function(a){return b.abbreviatedDirections[n[a]]}}}],defaultPattern:"Y\u00b0 A' B\""+b.abbreviatedDirections.north+", X\u00b0 C' D\""+b.abbreviatedDirections.east,
viewModel:null}),new f({name:"xy",coordinateSegments:[{alias:"X",description:"longitude",searchPattern:p,substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}},{alias:"Y",description:"latitude",searchPattern:p,substitution:{input:function(a){return d(a)},output:function(a){return c(a)}}}],defaultPattern:"X\u00b0, Y\u00b0",viewModel:null}),new f({name:"mgrs",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",
searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new f({name:"usng",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},
{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new f({name:"utm",coordinateSegments:[{alias:"Z",description:"zone number",searchPattern:/\d{1,2}|[abyz]/i},{alias:"B",description:"latitude band",searchPattern:/^\D/},{alias:"X",description:"easting",searchPattern:/\d{1,7}(?=\s*\d{7}$)/},{alias:"Y",description:"northing",searchPattern:/\d{1,7}/}],defaultPattern:"ZB X Y",viewModel:null})]}});