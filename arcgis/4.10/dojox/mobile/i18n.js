//>>built
define(["dojo/_base/lang","dojo/i18n","dijit/_WidgetBase"],function(b,e,d){var a={};b.setObject("dojox.mobile.i18n",a);a.load=function(c,b,d){return a.registerBundle(e.getLocalization(c,b,d))};a.registerBundle=function(c){a.bundle||(a.bundle=[]);return b.mixin(a.bundle,c)};a.I18NProperties={mblNoConv:!1};b.extend(d,a.I18NProperties);b.extend(d,{_cv:function(c){return this.mblNoConv||!a.bundle?c:a.bundle[b.trim(c)]||c}});return a});