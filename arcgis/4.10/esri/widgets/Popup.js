// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper dojo/dom-geometry dojo/i18n!../nls/common dojo/i18n!./Popup/nls/Popup dojo/keys ../core/Handles ../core/lang ../core/Logger ../core/watchUtils ../core/accessorSupport/decorators ./Feature ./Spinner ./Widget ./Popup/PopupViewModel ./support/widget ./support/widgetUtils".split(" "),function(ba,ca,U,e,A,P,m,w,h,V,J,W,l,f,X,Y,Z,Q,d,M){function x(d,b){return void 0===b?"esri-popup__"+
d:"esri-popup__"+d+"-"+b}var S={buttonEnabled:!0,position:"auto",breakpoint:{width:544}},T=W.getLogger("esri.widgets.Popup");return function(R){function b(a){var c=R.call(this)||this;c._blurContainer=!1;c._containerNode=null;c._mainContainerNode=null;c._featureMenuNode=null;c._actionsMenuNode=null;c._focusContainer=!1;c._focusDockButton=!1;c._focusFeatureMenuButton=!1;c._focusActionsMenuButton=!1;c._focusFirstFeature=!1;c._focusFirstAction=!1;c._handles=new V;c._pointerOffsetInPx=16;c._spinner=null;
c.actions=null;c.alignment="auto";c.autoCloseEnabled=null;c.autoOpenEnabled=null;c.content=null;c.collapsed=!1;c.collapseEnabled=!0;c.dockEnabled=!1;c.featureCount=null;c.features=null;c.featureNavigationEnabled=!0;c.goToOverride=null;c.highlightEnabled=null;c.location=null;c.featureWidgets=[];c.promises=null;c.selectedFeature=null;c.selectedFeatureIndex=null;c.selectedFeatureWidget=null;c.spinnerEnabled=!0;c.title=null;c.updateLocationEnabled=null;c.view=null;c.viewModel=new Q;c.visible=null;c._addSelectedFeatureIndexHandle();
c.own([l.watch(c,"viewModel.screenLocation",function(){return c._positionContainer()}),l.watch(c,["viewModel.visible","dockEnabled"],function(){return c._toggleScreenLocationEnabled()}),l.watch(c,"viewModel.screenLocation",function(a,b){!!a!==!!b&&c.reposition()}),l.watch(c,"viewModel.features",function(a){return c._createFeatureWidgets(a)}),l.watch(c,"viewModel.view.padding viewModel.view.size viewModel.visible viewModel.waitingForResult viewModel.location alignment".split(" "),function(){return c.reposition()}),
l.watch(c,"spinnerEnabled",function(a){return c._spinnerEnabledChange(a)}),l.watch(c,"viewModel.view.size",function(a,b){return c._updateDockEnabledForViewSize(a,b)}),l.watch(c,"viewModel.view",function(a,b){return c._viewChange(a,b)}),l.watch(c,"viewModel.view.ready",function(a,b){return c._viewReadyChange(a,b)}),l.watch(c,["viewModel.waitingForResult","viewModel.location"],function(){return c._displaySpinner()}),l.watch(c,["featureWidgets","viewModel.selectedFeatureIndex"],function(){return c._updateFeatureWidget()}),
l.watch(c,"selectedFeatureWidget.viewModel.title",function(a){return c._setTitleFromFeatureWidget(a)}),l.watch(c,["selectedFeatureWidget.viewModel.content","selectedFeatureWidget.viewModel.waitingForContent"],function(){return c._setContentFromFeatureWidget()}),l.whenFalse(c,"collapsed",function(){"xsmall"===c.get("viewModel.view.widthBreakpoint")&&c.visible&&c.collapseEnabled&&c.viewModel.centerAtLocation()})]);return c}U(b,R);b.prototype.destroy=function(){this._destroyFeatureWidgets();this._destroySpinner();
this._handles&&this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"actionsMenuOpen",{get:function(){return this.viewModel.visible?this._get("actionsMenuOpen"):!1},set:function(a){this._set("actionsMenuOpen",!!a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"currentAlignment",{get:function(){return this._getCurrentAlignment()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"currentDockPosition",{get:function(){return this._getCurrentDockPosition()},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"dockOptions",{get:function(){return this._get("dockOptions")||S},set:function(a){var c=A({},S),b=this.get("viewModel.view.breakpoints"),d={};b&&(d.width=b.xsmall,d.height=b.xsmall);a=A({},c,a);c=A({},c.breakpoint,d);d=a.breakpoint;!0===d?a.breakpoint=c:"object"===typeof d&&(a.breakpoint=A({},c,d));this._set("dockOptions",a);this._setCurrentDockPosition();this.reposition()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"featureMenuOpen",{get:function(){return this.viewModel.visible?this._get("featureMenuOpen"):!1},set:function(a){this._set("featureMenuOpen",!!a)},enumerable:!0,configurable:!0});b.prototype.blur=function(){this.visible||T.warn("Popup cannot be blurred while visible is false");this._blurContainer=!0;this.scheduleRender()};b.prototype.clear=function(){};b.prototype.close=function(){this.visible=!1};b.prototype.focus=function(){this.visible||T.warn("Popup cannot be focused while visible is false");
this._focusContainer=!0;this.scheduleRender()};b.prototype.next=function(){return null};b.prototype.open=function(a){this._handles.remove("selected-index");var c={collapsed:a?!!a.collapsed:!1,actionsMenuOpen:a?!!a.actionsMenuOpen:!1,featureMenuOpen:a?!!a.featureMenuOpen:!1};"xsmall"===this.get("viewModel.view.widthBreakpoint")&&(c.collapsed=!0,a.updateLocationEnabled=!0);this.set(c);this.viewModel.open(a);this._addSelectedFeatureIndexHandle()};b.prototype.previous=function(){return null};b.prototype.reposition=
function(){this.renderNow();this._positionContainer();this._setCurrentAlignment()};b.prototype.triggerAction=function(a){return null};b.prototype.render=function(){var a,c,b,p,g,v,k,e=this.actionsMenuOpen,f=this.collapsed,l=this.collapseEnabled,r=this.dockEnabled,h=this.featureMenuOpen,F=this.featureNavigationEnabled,G=this.featureWidgets,t=this.visible,n=this.viewModel,H=n.allActions,A=n.content,u=n.featureCount,N=n.pendingPromisesCount,I=n.selectedFeatureIndex,D=n.title,C=H&&H.length,E=1<u&&F,F=
1<u&&h,H=1<C&&e,f=l&&!F&&f,q=E&&this._getPageText(u,I),K=this._renderContent(),y=M.isRTL(),L=this.get("selectedFeatureWidget")?this.get("selectedFeatureWidget.viewModel.waitingForContent")||this.get("selectedFeatureWidget.viewModel.content"):K,z=this.get("viewModel.view.widthBreakpoint"),B=r?w.undock:w.dock,u=this.currentAlignment,n=this.currentDockPosition,N=N?d.tsx("div",{key:x("loading-container"),role:"presentation",class:"esri-popup__loading-container","aria-label":m.loading,title:m.loading},
d.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon","esri-icon-loading-indicator","esri-rotating")})):null,O=(a={},a["esri-icon-right-triangle-arrow"]=y,a["esri-popup__pagination-previous-icon--rtl"]=y,a["esri-icon-left-triangle-arrow"]=!y,a["esri-popup__pagination-previous-icon"]=!y,a);a=d.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon",O)});O=d.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._previous,onkeydown:this._previous,class:this.classes("esri-popup__button",
"esri-popup__pagination-previous"),"aria-label":w.previous,title:w.previous},a);a=(c={},c["esri-icon-left-triangle-arrow"]=y,c["esri-popup__pagination-next-icon--rtl"]=y,c["esri-icon-right-triangle-arrow"]=!y,c["esri-popup__pagination-next-icon"]=!y,c);c=d.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon",a)});y=d.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._next,onkeydown:this._next,class:this.classes("esri-popup__button","esri-popup__pagination-next"),"aria-label":w.next,
title:w.next},c);a=M.cssTransition("enter","esri-popup--feature-updated");c=this.id+"-feature-menu";h=d.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._toggleFeatureMenu,onkeydown:this._toggleFeatureMenu,afterCreate:this._focusFeatureMenuButtonNode,afterUpdate:this._focusFeatureMenuButtonNode,class:this.classes("esri-popup__button","esri-popup__feature-menu-button"),"aria-haspopup":"true","aria-controls":c,"aria-expanded":h,"aria-label":m.menu,title:m.menu},q);h=E?[O,N||h,y]:null;q=this._wouldDockTo();
q=(b={},b["esri-icon-minimize"]=r,b["esri-popup__icon--dock-icon"]=!r,b["esri-icon-dock-right"]=!r&&("top-right"===q||"bottom-right"===q),b["esri-icon-dock-left"]=!r&&("top-left"===q||"bottom-left"===q),b["esri-icon-maximize"]=!r&&"top-center"===q,b["esri-icon-dock-bottom"]=!r&&"bottom-center"===q,b);b=d.tsx("span",{"aria-hidden":"true",class:this.classes(q,"esri-popup__icon")});b="xsmall"!==z&&this.get("dockOptions.buttonEnabled")?d.tsx("div",{role:"button","aria-label":B,title:B,tabIndex:0,bind:this,
onclick:this._toggleDockEnabled,onkeydown:this._toggleDockEnabled,afterCreate:this._focusDockButtonNode,afterUpdate:this._focusDockButtonNode,class:this.classes("esri-popup__button","esri-popup__button--dock")},b):null;l=!!(l&&D&&(L||C||E));z=(p={},p["esri-popup__header-container--button"]=l,p);B=l?"button":"heading";q=l?f?m.expand:m.collapse:"";p=this.id+"-popup-title";D=D?d.tsx("div",{class:this.classes("esri-popup__header-container",z),key:D,enterAnimation:a,id:p,role:B,"aria-label":q,title:q,
tabIndex:l?0:-1,bind:this,onclick:this._toggleCollapsed,onkeydown:this._toggleCollapsed},d.tsx("h2",{class:"esri-popup__header-title",innerHTML:D})):null;z=d.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon","esri-icon-close")});z=d.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._close,onkeydown:this._close,class:"esri-popup__button","aria-label":m.close,title:m.close},z);b=d.tsx("header",{class:"esri-popup__header"},D,d.tsx("div",{class:"esri-popup__header-buttons"},
b,z));z=this.id+"-popup-content";A=L&&!f?d.tsx("article",{key:A,enterAnimation:a,id:z,class:"esri-popup__content"},K):null;L="bottom-left"===u||"bottom-center"===u||"bottom-right"===u||"top-left"===n||"top-center"===n||"top-right"===n;K="top-left"===u||"top-center"===u||"top-right"===u||"bottom-left"===n||"bottom-center"===n||"bottom-right"===n;B=e?m.close:m.open;a=(q=(a=this._getSingleAction())&&this._renderAction({action:a,index:0,key:"actions",singleButton:!0}))?d.tsx("div",{key:"single-action-container",
class:"esri-popup__single-action-container"},q):null;B=!q&&C?d.tsx("div",{key:x("actions-menu-button"),class:this.classes("esri-popup__button","esri-popup__actions-menu-button"),role:"button",id:this.id+"-actions-menu-button","aria-haspopup":"true","aria-controls":e?this.id+"-actions-menu":null,tabIndex:0,bind:this,onclick:this._toggleActionsMenu,onkeydown:this._toggleActionsMenu,afterCreate:this._focusActionsMenuButtonNode,afterUpdate:this._focusActionsMenuButtonNode,"aria-label":B,title:B},d.tsx("span",
{"aria-hidden":"true",class:"esri-icon-handle-horizontal"})):null;q=(g={},g["esri-popup__navigation--with-single-action"]=1===C,g);g=d.tsx("section",{key:x("navigation"),class:this.classes("esri-popup__navigation",q)},h);g=E||C?d.tsx("div",{key:x("feature-buttons"),class:"esri-popup__footer"},g,B,a):null;e=C&&e?d.tsx("ul",{id:this.id+"-actions-menu",role:"menu","aria-labelledby":this.id+"-actions-menu-button",key:x("actions"),class:"esri-popup__actions",bind:this,onkeyup:this._handleActionMenuKeyup,
afterCreate:this._actionsMenuNodeUpdated,afterUpdate:this._actionsMenuNodeUpdated},this._renderActions()):null;I=this._renderFeatureMenuNode(G,I,c);G=J.substitute({total:G.length},w.selectedFeatures);E=d.tsx("section",{key:x("menu"),class:"esri-popup__feature-menu"},d.tsx("h2",{class:"esri-popup__feature-menu-header"},G),d.tsx("nav",{class:"esri-popup__feature-menu-viewport",afterCreate:this._featureMenuViewportNodeUpdated,afterUpdate:this._featureMenuViewportNodeUpdated},I));G=r?null:d.tsx("div",
{key:x("pointer"),class:"esri-popup__pointer",role:"presentation"},d.tsx("div",{class:this.classes("esri-popup__pointer-direction","esri-popup--shadow")}));I=this.get("selectedFeature.layer.title");C=this.get("selectedFeature.layer.id");f=(v={},v["esri-popup--shadow"]=r,v["esri-popup--is-collapsible"]=l,v["esri-popup--is-collapsed"]=f,v);v=(k={},k["esri-popup--aligned-top-center"]=t&&"top-center"===u,k["esri-popup--aligned-bottom-center"]=t&&"bottom-center"===u,k["esri-popup--aligned-top-left"]=t&&
"top-left"===u,k["esri-popup--aligned-bottom-left"]=t&&"bottom-left"===u,k["esri-popup--aligned-top-right"]=t&&"top-right"===u,k["esri-popup--aligned-bottom-right"]="bottom-right"===u,k["esri-popup--is-docked"]=t&&r,k["esri-popup--shadow"]=t&&!r,k["esri-popup--is-docked-top-left"]=t&&"top-left"===n,k["esri-popup--is-docked-top-center"]=t&&"top-center"===n,k["esri-popup--is-docked-top-right"]=t&&"top-right"===n,k["esri-popup--is-docked-bottom-left"]=t&&"bottom-left"===n,k["esri-popup--is-docked-bottom-center"]=
t&&"bottom-center"===n,k["esri-popup--is-docked-bottom-right"]=t&&"bottom-right"===n,k["esri-popup--feature-menu-open"]=t&&F,k["esri-popup--actions-menu-open"]=t&&H,k);k=L?[E,e]:null;r=K?[E,e]:null;F=L?g:null;H=K?g:null;k=d.tsx("div",{class:this.classes("esri-popup__main-container","esri-widget",f),tabIndex:-1,role:"dialog","aria-labelledby":D?p:"","aria-describedby":A?z:"",bind:this,onkeyup:this._handleMainKeyup,afterCreate:this._mainContainerNodeUpdated,afterUpdate:this._mainContainerNodeUpdated},
F,k,b,A,H,r);return d.tsx("div",{key:x("base"),class:this.classes("esri-popup",v),role:"presentation","data-layer-title":I,"data-layer-id":C,bind:this,afterCreate:this._positionContainer,afterUpdate:this._positionContainer},t?[k,G]:null)};b.prototype._getSingleAction=function(){var a=this.viewModel.allActions;if(1===a.length)return a.find(function(a){return"button"===a.type})};b.prototype._featureMenuOpenChanged=function(a){a?this._focusFirstFeature=!0:this._focusFeatureMenuButton=!0};b.prototype._actionsMenuOpenChanged=
function(a){a?this._focusFirstAction=!0:this._focusActionsMenuButton=!0};b.prototype._setTitleFromFeatureWidget=function(a){this.selectedFeatureWidget&&(this.viewModel.title=a||"")};b.prototype._setContentFromFeatureWidget=function(){var a=this.selectedFeatureWidget;a&&(this.viewModel.content=a)};b.prototype._handleFeatureMenuKeyup=function(a){a.keyCode===h.ESCAPE&&(a.stopPropagation(),this._focusFeatureMenuButton=!0,this.featureMenuOpen=!1,this.scheduleRender())};b.prototype._handleActionMenuKeyup=
function(a){a.keyCode===h.ESCAPE&&(a.stopPropagation(),this._focusActionsMenuButton=!0,this.actionsMenuOpen=!1,this.scheduleRender())};b.prototype._handleFeatureMenuItemKeyup=function(a){var c=a.keyCode,b=this._featureMenuNode,d=a.currentTarget["data-feature-index"];if(b){var b=b.querySelectorAll("li"),g=b.length;c===h.UP_ARROW?(a.stopPropagation(),b[(d-1+g)%g].focus()):c===h.DOWN_ARROW?(a.stopPropagation(),b[(d+1+g)%g].focus()):c===h.HOME?(a.stopPropagation(),b[0].focus()):c===h.END&&(a.stopPropagation(),
b[b.length-1].focus())}};b.prototype._handleActionMenuItemKeyup=function(a){var c=a.keyCode,b=this._actionsMenuNode,d=a.currentTarget["data-action-index"];if(b){var b=b.querySelectorAll("li"),g=b.length;c===h.UP_ARROW?(a.stopPropagation(),b[(d-1+g)%g].focus()):c===h.DOWN_ARROW?(a.stopPropagation(),b[(d+1+g)%g].focus()):c===h.HOME?(a.stopPropagation(),b[0].focus()):c===h.END&&(a.stopPropagation(),b[b.length-1].focus())}};b.prototype._handleMainKeyup=function(a){var c=a.keyCode;c===h.LEFT_ARROW&&(a.stopPropagation(),
this.previous());c===h.RIGHT_ARROW&&(a.stopPropagation(),this.next())};b.prototype._spinnerEnabledChange=function(a){this._destroySpinner();a&&(a=this.get("viewModel.view"),this._createSpinner(a))};b.prototype._displaySpinner=function(){var a=this._spinner;if(a){var c=this.viewModel,b=c.location;c.waitingForResult?a.show({location:b}):a.hide()}};b.prototype._getIconStyles=function(a){return{"background-image":a?"url("+a+")":""}};b.prototype._renderAction=function(a){var c=this,b,p,g=a.action,v=a.index,
e=a.key;a=a.singleButton;var f=l.watch(g,"active className disabled id title image visible".split(" "),function(){return c.scheduleRender()});this._handles.add(f,e);var f=this.get("selectedFeature.attributes"),e=g.title,h=g.className,m=g.image,h=m||h?h:"esri-icon-default-action",e=e&&f?J.substitute(f,e):e,r=h&&f?J.substitute(f,h):h,f=m&&f?J.substitute(f,m):m,m=(b={},b["esri-icon-loading-indicator"]=g.active,b["esri-rotating"]=g.active,b["esri-popup__icon"]=!!h,b["esri-popup__action-image"]=!g.active&&
!!f,b);r&&(m[r]=!g.active);b=(p={},p["esri-popup__action"]="toggle"!==g.type,p["esri-popup__action-toggle"]="toggle"===g.type,p["esri-popup__action-toggle--on"]="toggle"===g.type&&g.value,p["esri-popup__button--disabled"]=g.disabled,p);p=d.tsx("span",{key:"text",class:"esri-popup__action-text"},e);p=[d.tsx("span",{key:"icon","aria-hidden":"true",class:this.classes("esri-popup__icon",m),styles:this._getIconStyles(f)}),p];v=a?d.tsx("div",{key:g,role:"button",tabIndex:0,title:e,"aria-label":e,class:this.classes("esri-popup__button",
b),onkeyup:this._handleActionMenuItemKeyup,bind:this,"data-action-index":v,onclick:this._triggerAction,onkeydown:this._triggerAction},p):d.tsx("li",{key:g,role:"menuitem",tabIndex:0,title:e,"aria-label":e,class:this.classes("esri-popup__button",b),onkeyup:this._handleActionMenuItemKeyup,bind:this,"data-action-index":v,onclick:this._triggerAction,onkeydown:this._triggerAction},p);return g.visible?v:null};b.prototype._renderActions=function(){var a=this;this._handles.remove("actions");var c=this.viewModel.allActions;
if(c)return c.map(function(c,b){return a._renderAction({action:c,index:b,key:"actions"})}).toArray()};b.prototype._addSelectedFeatureIndexHandle=function(){var a=this,c=l.watch(this,"viewModel.selectedFeatureIndex",function(c,b){return a._selectedFeatureIndexUpdated(c,b)});this._handles.add(c,"selected-index")};b.prototype._selectedFeatureIndexUpdated=function(a,c){this.featureCount&&a!==c&&-1!==a&&(this.featureMenuOpen=this.actionsMenuOpen=!1)};b.prototype._updateFeatureWidget=function(){var a=this.featureWidgets[this.viewModel.selectedFeatureIndex]||
null;a&&!a.contentEnabled&&(a.contentEnabled=!0);this._set("selectedFeatureWidget",a)};b.prototype._destroyFeatureWidgets=function(){this.featureWidgets.forEach(function(a){return a.destroy()});this._set("featureWidgets",[])};b.prototype._createFeatureWidgets=function(a){var c=this.featureWidgets.slice(0),b=this.get("viewModel.view"),d=[];a.forEach(function(a,e){if(a){var g=null;c.some(function(b,d){b&&b.graphic===a&&(g=b,c.splice(d,1));return!!g});d[e]=g||new X({contentEnabled:!1,graphic:a,view:b})}});
c.forEach(function(a){return a&&a.destroy()});this._set("featureWidgets",d)};b.prototype._isScreenLocationWithinView=function(a,c){return-1<a.x&&-1<a.y&&a.x<=c.width&&a.y<=c.height};b.prototype._isOutsideView=function(a){var c=a.popupHeight,b=a.popupWidth,d=a.screenLocation,g=a.side;a=a.view;if(isNaN(b)||isNaN(c)||!a||!d)return!1;var e=a.padding;return"right"===g&&d.x+b/2>a.width-e.right||"left"===g&&d.x-b/2<e.left||"top"===g&&d.y-c<e.top||"bottom"===g&&d.y+c>a.height-e.bottom?!0:!1};b.prototype._determineCurrentAlignment=
function(){var a=this._pointerOffsetInPx,c=this._containerNode,b=this._mainContainerNode,d=this.viewModel,e=d.screenLocation,d=d.view;if(!e||!d||!c)return"top-center";if(!this._isScreenLocationWithinView(e,d))return this._get("currentAlignment")||"top-center";var f=b?window.getComputedStyle(b,null):null,b=f?parseInt(f.getPropertyValue("max-height").replace(/[^-\d\.]/g,""),10):0,f=f?parseInt(f.getPropertyValue("height").replace(/[^-\d\.]/g,""),10):0,k=P.getContentBox(c),c=k.w+a,k=Math.max(k.h,b,f)+
a,a=this._isOutsideView({popupHeight:k,popupWidth:c,screenLocation:e,side:"right",view:d}),b=this._isOutsideView({popupHeight:k,popupWidth:c,screenLocation:e,side:"left",view:d}),f=this._isOutsideView({popupHeight:k,popupWidth:c,screenLocation:e,side:"top",view:d}),e=this._isOutsideView({popupHeight:k,popupWidth:c,screenLocation:e,side:"bottom",view:d});return b?f?"bottom-right":"top-right":a?f?"bottom-left":"top-left":f?e?"top-center":"bottom-center":"top-center"};b.prototype._getCurrentAlignment=
function(){var a=this.alignment;return this.dockEnabled?null:"auto"===a?this._determineCurrentAlignment():"function"===typeof a?a.call(this):a};b.prototype._setCurrentAlignment=function(){this._set("currentAlignment",this._getCurrentAlignment())};b.prototype._setCurrentDockPosition=function(){this._set("currentDockPosition",this._getCurrentDockPosition())};b.prototype._getDockPosition=function(){var a=this.get("dockOptions.position");return"auto"===a?this._determineCurrentDockPosition():"function"===
typeof a?a.call(this):a};b.prototype._getCurrentDockPosition=function(){return this.dockEnabled?this._getDockPosition():null};b.prototype._wouldDockTo=function(){return this.dockEnabled?null:this._getDockPosition()};b.prototype._renderFeatureMenuItemNode=function(a,b,e){var c,f=b===e,aa=(c={},c["esri-popup__feature-menu-item--selected"]=f,c);c=f?d.tsx("span",{key:x("feature-menu-selected-feature-"+e),title:w.selectedFeature,"aria-label":w.selectedFeature,class:"esri-icon-check-mark"}):null;a=d.tsx("span",
{innerHTML:a.title||m.untitled});return d.tsx("li",{role:"menuitem",tabIndex:-1,key:x("feature-menu-feature-"+e),class:this.classes(aa,"esri-popup__feature-menu-item"),bind:this,"data-feature-index":b,onkeyup:this._handleFeatureMenuItemKeyup,onclick:this._selectFeature,onkeydown:this._selectFeature},d.tsx("span",{class:"esri-popup__feature-menu-title"},a,c))};b.prototype._renderFeatureMenuNode=function(a,b,e){var c=this;return 1<a.length?d.tsx("ol",{class:"esri-popup__feature-menu-list",id:e,bind:this,
afterCreate:this._featureMenuNodeUpdated,afterUpdate:this._featureMenuNodeUpdated,onkeyup:this._handleFeatureMenuKeyup,role:"menu"},a.map(function(a,d){return c._renderFeatureMenuItemNode(a,d,b)})):null};b.prototype._determineCurrentDockPosition=function(){var a=this.get("viewModel.view"),b=M.isRTL()?"top-left":"top-right";if(!a)return b;var d=a.padding||{left:0,right:0,top:0,bottom:0},d=a.width-d.left-d.right;return(a=a.get("breakpoints"))&&d<=a.xsmall?"bottom-center":b};b.prototype._renderContent=
function(){var a=this.get("viewModel.content");if("string"===typeof a)return d.tsx("div",{key:a,innerHTML:a});if(d.isWidget(a))return d.tsx("div",{key:a},a.render());if(a instanceof HTMLElement)return d.tsx("div",{key:a,bind:a,afterCreate:this._attachToNode});if(d.isWidgetBase(a))return d.tsx("div",{key:a,bind:a.domNode,afterCreate:this._attachToNode})};b.prototype._attachToNode=function(a){a.appendChild(this)};b.prototype._positionContainer=function(a){void 0===a&&(a=this._containerNode);a&&(this._containerNode=
a);if(a){var b=this.viewModel.screenLocation,d=P.getContentBox(a);if(b=this._calculatePositionStyle(b,d))a.style.top=b.top,a.style.left=b.left,a.style.bottom=b.bottom,a.style.right=b.right}};b.prototype._calculateFullWidth=function(a){var b=this.currentAlignment,d=this._pointerOffsetInPx;return"top-left"===b||"bottom-left"===b||"top-right"===b||"bottom-right"===b?a+d:a};b.prototype._calculateAlignmentPosition=function(a,b,d,e){var c=this.currentAlignment,f=this._pointerOffsetInPx;e/=2;var k=d.height-
b;d=d.width-a;var h=this.view.padding;if("bottom-center"===c)return{top:b+f-h.top,left:a-e-h.left};if("top-left"===c)return{bottom:k+f-h.bottom,right:d+f-h.right};if("bottom-left"===c)return{top:b+f-h.top,right:d+f-h.right};if("top-right"===c)return{bottom:k+f-h.bottom,left:a+f-h.left};if("bottom-right"===c)return{top:b+f-h.top,left:a+f-h.left};if("top-center"===c)return{bottom:k+f-h.bottom,left:a-e-h.left}};b.prototype._calculatePositionStyle=function(a,b){var c=this.view;if(c){if(this.dockEnabled)return{left:"",
top:"",right:"",bottom:""};if(a&&b&&(b=this._calculateFullWidth(b.w),a=this._calculateAlignmentPosition(a.x,a.y,c,b)))return{top:void 0!==a.top?a.top+"px":"auto",left:void 0!==a.left?a.left+"px":"auto",bottom:void 0!==a.bottom?a.bottom+"px":"auto",right:void 0!==a.right?a.right+"px":"auto"}}};b.prototype._viewChange=function(a,b){a&&b&&(this.close(),this.clear())};b.prototype._viewReadyChange=function(a,b){a?(a=this.get("viewModel.view"),this._wireUpView(a)):b&&(this.close(),this.clear())};b.prototype._wireUpView=
function(a){this._destroySpinner();a&&(this.spinnerEnabled&&this._createSpinner(a),this._setDockEnabledForViewSize(this.dockOptions))};b.prototype._dockingThresholdCrossed=function(a,b,d){var c=a[0];a=a[1];var e=b[0];b=b[1];var f=d.width;d=d.height;return c<=f&&e>f||c>f&&e<=f||a<=d&&b>d||a>d&&b<=d};b.prototype._updateDockEnabledForViewSize=function(a,b){if(a&&b){var c=this.get("viewModel.view.padding")||{left:0,right:0,top:0,bottom:0},d=c.left+c.right,e=c.top+c.bottom,c=[],f=[];c[0]=a[0]-d;c[1]=a[1]-
e;f[0]=b[0]-d;f[1]=b[1]-e;a=this.dockOptions;this._dockingThresholdCrossed(c,f,a.breakpoint)&&this._setDockEnabledForViewSize(a);this._setCurrentDockPosition()}};b.prototype._focusDockButtonNode=function(a){this._focusDockButton&&(this._focusDockButton=!1,a.focus())};b.prototype._mainContainerNodeUpdated=function(a){this._mainContainerNode=a;this._focusContainer?(this._focusContainer=!1,a.focus()):this._blurContainer&&(this._blurContainer=!1,a.blur())};b.prototype._featureMenuNodeUpdated=function(a){(this._featureMenuNode=
a)&&this._focusFirstFeature&&(this._focusFirstFeature=!1,a=a.querySelectorAll("li"),a.length&&a[0].focus())};b.prototype._actionsMenuNodeUpdated=function(a){(this._actionsMenuNode=a)&&this._focusFirstAction&&(this._focusFirstAction=!1,a=a.querySelectorAll("li"),a.length&&a[0].focus())};b.prototype._focusFeatureMenuButtonNode=function(a){this._focusFeatureMenuButton&&(this._focusFeatureMenuButton=!1,a.focus())};b.prototype._focusActionsMenuButtonNode=function(a){this._focusActionsMenuButton&&(this._focusActionsMenuButton=
!1,a.focus())};b.prototype._featureMenuViewportNodeUpdated=function(a){a&&(a.scrollTop=0)};b.prototype._toggleScreenLocationEnabled=function(){var a=this.dockEnabled,b=this.viewModel;b&&(b.screenLocationEnabled=this.visible&&!a)};b.prototype._shouldDockAtCurrentViewSize=function(a){a=a.breakpoint;var b=this.get("viewModel.view.ui"),d=b.width,b=b.height;if(isNaN(d)||isNaN(b))return!1;d=a.hasOwnProperty("width")&&d<=a.width;a=a.hasOwnProperty("height")&&b<=a.height;return d||a};b.prototype._setDockEnabledForViewSize=
function(a){a.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(a))};b.prototype._getPageText=function(a,b){return J.substitute({index:b+1,total:a},w.pageText)};b.prototype._destroySpinner=function(){var a=this._spinner,b=this.view;a&&(b&&b.ui.remove(this._spinner,"popup-spinner"),a.destroy(),this._spinner=null)};b.prototype._createSpinner=function(a){a&&(this._spinner=new Y({view:a}),a.ui.add(this._spinner,{key:"popup-spinner",position:"manual"}))};b.prototype._toggleCollapsed=function(){this.collapsed=
!this.collapsed};b.prototype._close=function(){this.close();this.view&&this.view.focus()};b.prototype._toggleDockEnabled=function(){this.dockEnabled=!this.dockEnabled;this._focusDockButton=!0;this.scheduleRender()};b.prototype._toggleFeatureMenu=function(){var a=!this.featureMenuOpen;this._featureMenuOpenChanged(a);this.actionsMenuOpen=!1;this.featureMenuOpen=a};b.prototype._toggleActionsMenu=function(){var a=!this.actionsMenuOpen;this._actionsMenuOpenChanged(a);this.featureMenuOpen=!1;this.actionsMenuOpen=
a};b.prototype._triggerAction=function(a){a=a.currentTarget["data-action-index"];var b=this.viewModel.allActions.getItemAt(a);b&&"toggle"===b.type&&(b.value=!b.value);this.actionsMenuOpen=!1;this.viewModel.triggerAction(a)};b.prototype._selectFeature=function(a){a=a.currentTarget["data-feature-index"];isNaN(a)||(this.viewModel.selectedFeatureIndex=a);this._focusFeatureMenuButton=!0;this.scheduleRender()};b.prototype._next=function(){this.next()};b.prototype._previous=function(){this.previous()};e([f.aliasOf("viewModel.actions"),
d.renderable()],b.prototype,"actions",void 0);e([f.property({dependsOn:["viewModel.visible"]}),d.renderable()],b.prototype,"actionsMenuOpen",null);e([f.property()],b.prototype,"alignment",void 0);e([f.aliasOf("viewModel.autoCloseEnabled")],b.prototype,"autoCloseEnabled",void 0);e([f.aliasOf("viewModel.autoOpenEnabled")],b.prototype,"autoOpenEnabled",void 0);e([f.aliasOf("viewModel.content"),d.renderable()],b.prototype,"content",void 0);e([f.property(),d.renderable()],b.prototype,"collapsed",void 0);
e([f.property(),d.renderable()],b.prototype,"collapseEnabled",void 0);e([f.property({readOnly:!0,dependsOn:["dockEnabled","alignment"]}),d.renderable()],b.prototype,"currentAlignment",null);e([f.property({readOnly:!0,dependsOn:["viewModel.view.ready","dockEnabled","dockOptions"]}),d.renderable()],b.prototype,"currentDockPosition",null);e([f.property(),d.renderable()],b.prototype,"dockOptions",null);e([f.property(),d.renderable()],b.prototype,"dockEnabled",void 0);e([f.aliasOf("viewModel.featureCount"),
d.renderable()],b.prototype,"featureCount",void 0);e([f.property({dependsOn:["viewModel.visible"]}),d.renderable()],b.prototype,"featureMenuOpen",null);e([f.aliasOf("viewModel.features"),d.renderable()],b.prototype,"features",void 0);e([f.property(),d.renderable()],b.prototype,"featureNavigationEnabled",void 0);e([f.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);e([f.aliasOf("viewModel.highlightEnabled")],b.prototype,"highlightEnabled",void 0);e([f.aliasOf("viewModel.location"),
d.renderable()],b.prototype,"location",void 0);e([f.property({readOnly:!0}),d.renderable()],b.prototype,"featureWidgets",void 0);e([f.aliasOf("viewModel.promises")],b.prototype,"promises",void 0);e([f.aliasOf("viewModel.selectedFeature"),d.renderable()],b.prototype,"selectedFeature",void 0);e([f.aliasOf("viewModel.selectedFeatureIndex"),d.renderable()],b.prototype,"selectedFeatureIndex",void 0);e([f.property({readOnly:!0}),d.renderable()],b.prototype,"selectedFeatureWidget",void 0);e([f.property()],
b.prototype,"spinnerEnabled",void 0);e([f.aliasOf("viewModel.title"),d.renderable()],b.prototype,"title",void 0);e([f.aliasOf("viewModel.updateLocationEnabled")],b.prototype,"updateLocationEnabled",void 0);e([f.aliasOf("viewModel.view")],b.prototype,"view",void 0);e([f.property({type:Q}),d.renderable("viewModel.view.widthBreakpoint viewModel.allActions viewModel.screenLocation viewModel.screenLocationEnabled viewModel.state viewModel.pendingPromisesCount viewModel.promiseCount viewModel.waitingForResult".split(" ")),
d.vmEvent(["triggerAction","trigger-action"])],b.prototype,"viewModel",void 0);e([f.aliasOf("viewModel.visible"),d.renderable()],b.prototype,"visible",void 0);e([f.aliasOf("viewModel.clear")],b.prototype,"clear",null);e([f.aliasOf("viewModel.next")],b.prototype,"next",null);e([f.aliasOf("viewModel.previous")],b.prototype,"previous",null);e([f.aliasOf("viewModel.triggerAction")],b.prototype,"triggerAction",null);e([d.accessibleHandler()],b.prototype,"_toggleCollapsed",null);e([d.accessibleHandler()],
b.prototype,"_close",null);e([d.accessibleHandler()],b.prototype,"_toggleDockEnabled",null);e([d.accessibleHandler()],b.prototype,"_toggleFeatureMenu",null);e([d.accessibleHandler()],b.prototype,"_toggleActionsMenu",null);e([d.accessibleHandler()],b.prototype,"_triggerAction",null);e([d.accessibleHandler()],b.prototype,"_selectFeature",null);e([d.accessibleHandler()],b.prototype,"_next",null);e([d.accessibleHandler()],b.prototype,"_previous",null);return b=e([f.subclass("esri.widgets.Popup")],b)}(f.declared(Z))});