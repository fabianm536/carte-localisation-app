//>>built
define("dojo/_base/array dojo/_base/lang dojo/_base/event dojo/_base/declare dojo/on dojo/keys dojo/dom-attr ./_utils dijit/_FocusMixin".split(" "),function(k,l,m,p,g,b,q,r,t){return p("dojox.treemap.Keyboard",t,{tabIndex:"0",_setTabIndexAttr:"domNode",constructor:function(){},postCreate:function(){this.inherited(arguments);this.own(g(this.domNode,"keydown",l.hitch(this,this._onKeyDown)));this.own(g(this.domNode,"mousedown",l.hitch(this,this._onMouseDown)))},createRenderer:function(b,d,h){var a=this.inherited(arguments);
q.set(a,"tabindex","-1");return a},_onMouseDown:function(a){this.domNode.focus()},_onKeyDown:function(a){var d=this.get("selectedItem");if(d){var h=this.itemToRenderer[this.getIdentity(d)],g=h.parentItem,f,c,n;if(a.keyCode!=b.UP_ARROW&&a.keyCode!=b.NUMPAD_MINUS&&a.keyCode!=b.NUMPAD_PLUS)if(f=a.keyCode==b.DOWN_ARROW?d.children:g.children)c=r.initElements(f,l.hitch(this,this._computeAreaForItem)).elements,n=c[k.indexOf(f,d)],c.sort(function(a,b){return b.size-a.size});else return;var e;switch(a.keyCode){case b.LEFT_ARROW:e=
f[c[Math.max(0,k.indexOf(c,n)-1)].index];break;case b.RIGHT_ARROW:e=f[c[Math.min(c.length-1,k.indexOf(c,n)+1)].index];break;case b.DOWN_ARROW:e=f[c[0].index];break;case b.UP_ARROW:e=g;break;case b.NUMPAD_PLUS:!this._isLeaf(d)&&this.drillDown&&(this.drillDown(h),m.stop(a));break;case b.NUMPAD_MINUS:!this._isLeaf(d)&&this.drillUp&&(this.drillUp(h),m.stop(a))}e&&!this._isRoot(e)&&(this.set("selectedItem",e),m.stop(a))}}})});