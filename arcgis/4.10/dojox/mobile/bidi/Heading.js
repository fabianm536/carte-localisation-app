//>>built
define(["dojo/_base/declare","./common"],function(c,a){return c(null,{_setLabelAttr:function(b){this.inherited(arguments);"rtl"===this.getTextDir(b)&&(this.domNode.style.direction="rtl");this.labelDivNode.innerHTML=a.enforceTextDirWithUcc(this.labelDivNode.innerHTML,this.textDir)},_setBackAttr:function(b){this.inherited(arguments);this.backButton.labelNode.innerHTML=a.enforceTextDirWithUcc(this.backButton.labelNode.innerHTML,this.textDir);this.labelNode.innerHTML=this.labelDivNode.innerHTML},_setTextDirAttr:function(b){this._created&&
this.textDir==b||(this._set("textDir",b),"rtl"===this.getTextDir(this.labelDivNode.innerHTML)&&(this.domNode.style.direction="rtl"),this.labelDivNode.innerHTML=a.enforceTextDirWithUcc(a.removeUCCFromText(this.labelDivNode.innerHTML),this.textDir),a.setTextDirForButtons(this))}})});