// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports @dojo/framework/shim/Set ../../../core/Error ../../../core/ItemCache ../../../core/sql/WhereClause".split(" "),function(w,c,u,f,r,n){function h(b){if(!b)return null;var a=c.invalidClauseCache.get(b);if(void 0!==a)return a;a=c.whereClausesCache.get(b);if(void 0!==a)return a;a=n.create(b);c.whereClausesCache.put(b,a);return a}function l(b,a,c,e){void 0===e&&(e=!0);for(var d=[],m=0;m<a.length;m++){var k=a[m];if("*"!==k&&!b.has(k))if(e){var g=t(k);try{var p=h(g);if(!p.isStandardized())throw new f("feature-store:unsupported-query",
"expression is not standard",{clause:p});l(b,p.getFields(),"expression contains missing fields")}catch(q){if((g=q&&q.details)&&g.clause)throw q;g&&g.missingFields?Array.prototype.push.apply(d,g.missingFields):d.push(k)}}else d.push(k)}if(d.length)throw new f("feature-store:unsupported-query",c,{missingFields:d});}function t(b){return b.split(" as ")[0]}Object.defineProperty(c,"__esModule",{value:!0});c.invalidClauseCache=new r(500);c.whereClausesCache=new r(50);var v=new u.default("esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeLong esriFieldTypeDate".split(" "));
c.validateWhere=function(b,a){if(!a)return!0;var d;try{d=n.create(a),c.whereClausesCache.put(a,d)}catch(e){throw c.invalidClauseCache.put(a,null),new f("feature-store:unsupported-query","invalid SQL expression",{where:a});}if(!d.isStandardized())throw new f("feature-store:unsupported-query","where clause is not standard",{where:a});a=d.getFields();l(b,a,"where clause contains missing fields");return!0};c.validateHaving=function(b,a,d){if(!a)return!0;var e;try{e=n.create(a),c.whereClausesCache.put(a,
e)}catch(m){throw c.invalidClauseCache.put(a,null),new f("feature-store:unsupported-query","invalid SQL expression",{having:a});}if(!e.isAggregate())throw new f("feature-store:unsupported-query","having does not contain a valid aggregate function",{having:a});var h=e.getFields();l(b,h,"having contains missing fields");if(!e.getExpressions().every(function(a){var c=a.aggregateType;a=a.field;var e=b.has(a)&&b.get(a).name;return d.some(function(a){var d=a.statisticType;a=a.onStatisticField.toLowerCase().trim();
return(b.has(a)&&b.get(a).name)===e&&d.toLowerCase().trim()===c})}))throw new f("feature-store:unsupported-query","expressions in having should also exist in outStatistics",{having:a});return!0};c.getWhereClause=h;c.validateFields=l;c.getExpressionFromFieldName=t;c.getAliasFromFieldName=function(b){return b.split(" as ")[1]};c.hasInvalidFieldType=function(b,a){var c=!1;-1!==h(b).getFields().indexOf(b)&&(b=a.get(b),c=!v.has(b.type));return c}});