// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("dojo/Deferred ../../request ../../core/lang ../../geometry/Polygon ../../geometry/Multipoint ./WMBaseTask ./support/Enum ./support/JSONUtil ./support/Util".split(" "),function(q,e,g,t,u,v,w,x,y){var h=new w,k=new x,d=new y;return v.createSubclass({declaredClass:"esri.tasks.workflow.JobTask",properties:{url:{}},getJobIds:function(a){var b=this.parsedUrl.path+"/jobs",c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));a=this._generateOptions(c,a);return e(b,a).then(function(a){return a.data.jobIds})},
getJob:function(a,b){a=this.parsedUrl.path+"/jobs/"+a;var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){if((a=a.data)&&0==Object.keys(a).length)return null;a.assignedType=h.jobAssignmentTypeJsonDict.fromJSON(a.assignedType);a.stage=h.jobStageJsonDict.fromJSON(a.stage);a.relationshipType&&(a.relationshipType=h.tableRelationshipTypeJsonDict.fromJSON(a.relationshipType));null!=a.createdDate&&(a.createdDate=new Date(a.createdDate));
null!=a.startDate&&(a.startDate=new Date(a.startDate));null!=a.startedDate&&(a.startedDate=new Date(a.startedDate));null!=a.dueDate&&(a.dueDate=new Date(a.dueDate));null!=a.endDate&&(a.endDate=new Date(a.endDate));a.loi=a.aoi||a.poi?a.aoi?new t(a.aoi):new u(a.poi):null;delete a.aoi;delete a.poi;return a})},searchJobs:function(a,b){a={text:a.text,user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/search",b)},queryJobs:function(a,b){a={id:a.queryId,user:d._formatDomainUsername(a.user)};
return this._sendRequest(a,"/jobs/query",b)},queryJobsAdHoc:function(a,b){var c=k._jobQueryParametersToJSON(a);c.user=a.user;return this._sendRequest(c,"/jobs/query",b)},createJobs:function(a,b){var c=this.parsedUrl.path+"/jobs/create",f=k._jobCreationParametersToJSON(a);f.user=a.user;a=this._encode(g.mixin({},this.parsedUrl.query,f));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.jobIds})},assignJobs:function(a,b){a={jobs:d._convertIdsToString(a.jobIds),assignedType:h.jobAssignmentTypeJsonDict.toJSON(a.assignedType),
assignedTo:d._formatDomainUsername(a.assignedTo),user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/assign",b)},unassignJobs:function(a,b){a={jobs:d._convertIdsToString(a.jobIds),user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/unassign",b)},closeJobs:function(a,b){a={jobs:d._convertIdsToString(a.jobIds),user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/close",b)},reopenClosedJobs:function(a,b){a={jobs:d._convertIdsToString(a.jobIds),
user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/reopen",b)},deleteJobs:function(a,b){a.deleteHistory=a.deleteHistory?a.deleteHistory:!1;a={jobs:d._convertIdsToString(a.jobIds),deleteHistory:a.deleteHistory,user:d._formatDomainUsername(a.user)};return this._sendRequest(a,"/jobs/delete",b)},updateJob:function(a,b){var c=k._jobUpdateParametersToJSON(a);c.user=d._formatDomainUsername(a.user);return this._sendRequest(c,"/jobs/"+a.jobId+"/update",b)},createJobVersion:function(a,
b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/createVersion";a={name:a.name,parent:a.parent,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.versionName})},getNotes:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/notes";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){return a.data.notes})},updateNotes:function(a,
b){var c={notes:a.notes,user:d._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/notes/update",b)},getAttachments:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/attachments";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){a=a.data.attachments;for(var b=0;b<a.length;b++)a[b].storageType=h.jobAttachmentTypeJsonDict.fromJSON(a[b].storageType);return a})},addLinkedAttachment:function(a,b){var c=this.parsedUrl.path+
"/jobs/"+a.jobId+"/attachments/add";a={storageType:h.jobAttachmentTypeJsonDict.toJSON(a.attachmentType),filePath:a.path,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.attachmentId})},addEmbeddedAttachment:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/attachments/add";a={storageType:2,form:a.form,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},
this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data})},deleteAttachment:function(a,b){var c={user:d._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/attachments/"+a.attachmentId+"/delete",b)},getAttachmentContentUrl:function(a){a=this.parsedUrl.path+"/jobs/"+a.jobId+"/attachments/"+a.attachmentId+"/content?f\x3dfile";a+="\x26_ts\x3d"+Date.now();if(this.requestOptions&&this.requestOptions.query){var b=this.requestOptions.query,
c=Object.keys(b).map(function(a){return a+"\x3d"+b[a]}).join("\x26");c&&(a+="\x26"+c)}return a},getHolds:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/holds";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){a=a.data.holds;for(var b=0;b<a.length;b++)a[b].holdDate=d._convertToDate(a[b].holdDate),a[b].releaseDate=d._convertToDate(a[b].releaseDate);return a})},createHold:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+
"/holds/create",f={type:a.holdTypeId,user:d._formatDomainUsername(a.user),f:"json"};a.comments&&(f.comments=a.comments);a=this._encode(g.mixin({},this.parsedUrl.query,f));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.holdId})},releaseHold:function(a,b){var c={user:d._formatDomainUsername(a.user)};a.comments&&(c.comments=a.comments);return this._sendRequest(c,"/jobs/"+a.jobId+"/holds/"+a.holdId+"/release",b)},getDependencies:function(a,b){a=this.parsedUrl.path+"/jobs/"+
a+"/dependencies";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){a=a.data.dependencies;for(var b=0;b<a.length;b++)a[b].heldOnType=h.jobDependencyTypeJsonDict.fromJSON(a[b].heldOnType),a[b].depOnType=h.jobDependencyTypeJsonDict.fromJSON(a[b].depOnType);return a})},createDependency:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/dependencies/create",f=k._jobDependencyParametersToJSON(a);f.user=a.user;a=this._encode(g.mixin({},
this.parsedUrl.query,f));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.dependencyId})},deleteDependency:function(a,b){var c={user:d._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/dependencies/"+a.dependencyId+"/delete",b)},getActivityLog:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/activity";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){a=a.data.activity;for(var b=
0;b<a.length;b++)a[b].date=d._convertToDate(a[b].date);return a})},logAction:function(a,b){var c={type:a.activityTypeId,user:d._formatDomainUsername(a.user)};a.comments&&(c.comments=a.comments);return this._sendRequest(c,"/jobs/"+a.jobId+"/activity/logAction",b)},getExtendedProperties:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/extendedProperties";var c=this._encode(g.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return e(a,b).then(function(a){a=a.data.containers;for(var b=
0;b<a.length;b++){var c=a[b];c.relationshipType=h.tableRelationshipTypeJsonDict.fromJSON(c.relationshipType);for(var c=c.records,d=0;d<c.length;d++)for(var f=c[d].recordValues,e=0;e<f.length;e++)f[e].dataType=h.fieldTypeJsonDict.fromJSON(f[e].dataType),f[e].displayType=h.extendedPropertyDisplayTypeJsonDict.fromJSON(f[e].displayType)}return a})},addLinkedRecord:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/extendedProperties"+a.tableName+"/add";a={user:d._formatDomainUsername(a.user),
f:"json"};a=this._encode(g.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.recordId})},deleteLinkedRecord:function(a,b){var c={user:d._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/extendedProperties/"+a.tableName+"/"+a.recordId+"/delete",b)},updateRecord:function(a,b){var c=a.record,f={properties:c.properties,user:d._formatDomainUsername(a.user)};return this._sendRequest(f,"/jobs/"+a.jobId+"/extendedProperties/"+
c.tableName+"/"+c.recordId+"/update",b)},listFieldValues:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/extendedProperties/"+a.tableName+"/listValues";a={field:a.field,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(c,b).then(function(a){return a.data.values})},listMultiLevelFieldValues:function(a,b){var c=!1,f=a.field,h=a.previousSelectedValues;if(null!=f&&"multi-level-table-list"==f.displayType){var n=
f.tableListDisplayField.split(","),p=n.length,k=h?h.length:0;if(k>=p)return b=new q,b.then(function(a){return[]}),b;c=k==p-1;p=n[k];c&&(p+=","+f.tableListStoreField);for(var l="",m=0;m<k;m++)var r=h[m],l=null==r||0==r.length?l+("("+n[m]+" IS NULL OR "+n[m]+" \x3d '') AND "):l+("("+n[m]+" \x3d '"+r+"') AND ");0<l.length&&(l=l.substring(0,l.length-5));h=this.parsedUrl.path+"/jobs/query";a={tables:f.tableListClass,fields:p,where:l,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},
this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(h,b).then(function(a){a=a.data;for(var b={},d=[],e,f,g=0;g<a.rows.length;g++)f=a.rows[g],c?(e={},e.description=f[0],e.value=f[1],d.push(e)):(f=f[0],null==b[f]&&(e={},e.description=f,e.value=f,d.push(e),b[f]=e));d.sort(function(a,b){a=a.description;b=b.description;if(null==a)return null==b?0:1;if(null==b)return-1;a=a.toLowerCase();b=b.toLowerCase();return a.localeCompare(b)});return d})}b=new q;b.then(function(a){return[]});return b},queryMultiLevelSelectedValues:function(a,
b){var c=a.field;if(null!=c.data&&"multi-level-table-list"==c.displayType){var f="string"==c.dataType||"global-id"==c.dataType||"guid"==c.dataType?"'":"",h=this.parsedUrl.path+"/jobs/query";a={tables:c.tableListClass,fields:c.tableListDisplayField,where:c.tableListStoreField+" \x3d "+f+c.data+f,user:d._formatDomainUsername(a.user),f:"json"};a=this._encode(g.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return e(h,b).then(function(a){a=a.data;var b=[];a&&a.rows&&0<a.rows.length&&(b=
a.rows[0]);return b})}h=new q;h.then(function(a){return[]});return h}})});