// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define({noFilterFields:"\u30ec\u30a4\u30e4\u30fc ${name} \u306b\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u3067\u4f7f\u7528\u3067\u304d\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u3042\u308a\u307e\u305b\u3093\u3002",addToViewer:"\u30ec\u30a4\u30e4\u30fc\u3092\u30de\u30c3\u30d7\u306b\u8ffd\u52a0",noItemsToDisplay:"\u8868\u793a\u3067\u304d\u308b\u30a2\u30a4\u30c6\u30e0\u306f\u73fe\u5728\u3042\u308a\u307e\u305b\u3093\u3002",searchFor:"\u691c\u7d22",searching:"\u691c\u7d22\u3057\u3066\u3044\u307e\u3059",items:{organizationLabel:"\u7d44\u7e54",
onlineLabel:"ArcGIS Online",contentLabel:"\u30de\u30a4 \u30b3\u30f3\u30c6\u30f3\u30c4",favoritesLabel:"\u304a\u6c17\u306b\u5165\u308a",createApp:"Web \u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},title:"Web \u30de\u30c3\u30d7\u306e\u9078\u629e",searchTitle:"\u691c\u7d22",ok:"OK",cancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",placeholder:"\u691c\u7d22\u8a9e\u53e5\u306e\u5165\u529b",instructionsLeft:"\u76ee\u7684:",instructionsRight:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",go:"\u79fb\u52d5",selectDetails:"\u9078\u629e",
configure:"\u4f5c\u6210",close:"\u9589\u3058\u308b",learnMoreConfigurableApps:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a73\u7d30",preview:"\u30d7\u30ec\u30d3\u30e5\u30fc",download:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",appTemplateFilters:{all:{title:"\u3059\u3079\u3066\u8868\u793a",description:""},analyze:{title:"\u30c7\u30fc\u30bf\u306e\u63a2\u7d22/\u96c6\u8a08",description:"\u30d5\u30a3\u30fc\u30c1\u30e3\u306e\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001\u30de\u30c3\u30d7\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63a2\u7d22\u3057\u307e\u3059"},
narrate:{title:"\u30b9\u30c8\u30fc\u30ea\u30fc \u30de\u30c3\u30d7\u306e\u4f5c\u6210",description:"\u30de\u30c3\u30d7\u306b\u30ca\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30ad\u30b9\u30c8\u3001\u753b\u50cf\u3001\u304a\u3088\u3073\u30de\u30eb\u30c1\u30e1\u30c7\u30a3\u30a2 \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u4f1d\u3048\u307e\u3059\u3002"},collect:{title:"\u30c7\u30fc\u30bf\u306e\u53ce\u96c6/\u7de8\u96c6",description:"\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e\u30c7\u30fc\u30bf\u306e\u4f4d\u7f6e\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u5024\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"},
compare:{title:"\u30de\u30c3\u30d7/\u30ec\u30a4\u30e4\u30fc\u306e\u6bd4\u8f03",description:"1 \u3064\u307e\u305f\u306f\u8907\u6570\u306e\u5834\u6240\u306e\u5730\u7406\u7684\u73fe\u8c61\u3092\u6bd4\u8f03\u5bfe\u7167\u3057\u307e\u3059\u3002"},"3dscene":{title:"\u30b7\u30fc\u30f3\u306e\u8868\u793a (3D)",description:"\u30b7\u30fc\u30f3\u304b\u3089\u5730\u7406\u30c7\u30fc\u30bf\u3092 3D \u3067\u8868\u793a\u3057\u307e\u3059\u3002"},present:{title:"\u30ae\u30e3\u30e9\u30ea\u30fc\u306e\u4f5c\u6210",description:"\u30ae\u30e3\u30e9\u30ea\u30fc\u306b\u30de\u30c3\u30d7\u3068\u30a2\u30d7\u30ea\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u8868\u793a\u3057\u307e\u3059\u3002"},
social:{title:"\u30bd\u30fc\u30b7\u30e3\u30eb \u30e1\u30c7\u30a3\u30a2 \u30de\u30c3\u30d7",description:"\u30c6\u30fc\u30de\u3068\u5834\u6240\u306b\u95a2\u9023\u3059\u308b\u30bd\u30fc\u30b7\u30e3\u30eb \u30e1\u30c7\u30a3\u30a2 \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f7f\u7528\u3057\u3066\u3001\u30de\u30c3\u30d7\u3092\u62e1\u5f35\u3057\u307e\u3059\u3002"},local:{title:"\u30ed\u30fc\u30ab\u30eb\u60c5\u5831\u306e\u5165\u529b",description:"\u5834\u6240\u306e\u30ea\u30bd\u30fc\u30b9\u3084\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3057\u307e\u3059\u3002"},
route:{title:"\u30eb\u30fc\u30c8/\u30eb\u30fc\u30c8\u6848\u5185",description:"\u30de\u30c3\u30d7\u5185\u306e\u30d5\u30a3\u30fc\u30c1\u30e3\u3078\u306e\u30eb\u30fc\u30c8\u6848\u5185\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"},showcase:{title:"\u30de\u30c3\u30d7\u306e\u7d39\u4ecb",description:"\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30c3\u30d7\u306b\u6ce8\u76ee\u3067\u304d\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}}});