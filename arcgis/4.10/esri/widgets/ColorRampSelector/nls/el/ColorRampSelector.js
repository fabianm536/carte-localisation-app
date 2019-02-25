// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u039a\u03b1\u03bd\u03ad\u03bd\u03b1",blackToWhite_predefined:"\u039c\u03b1\u03cd\u03c1\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bb\u03b5\u03c5\u03ba\u03cc",yellowToRed_predefined:"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf",slope_predefined:"\u039a\u03bb\u03af\u03c3\u03b7",aspect_predefined:"\u03a0\u03c1\u03bf\u03bf\u03c0\u03c4\u03b9\u03ba\u03ae",errors_predefined:"\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1\u03c4\u03b1",
heatmap1_predefined:"Heatmap #1",elevation1_predefined:"\u03a5\u03c8\u03cc\u03bc\u03b5\u03c4\u03c1\u03bf #1",elevation2_predefined:"\u03a5\u03c8\u03cc\u03bc\u03b5\u03c4\u03c1\u03bf #2",blueBright_predefined:"\u039c\u03c0\u03bb\u03b5 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",blueLightToDark_predefined:"\u039c\u03c0\u03bb\u03b5 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",blueGreenBright_predefined:"\u039c\u03c0\u03bb\u03b5-\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",
blueGreenLightToDark_predefined:"\u039c\u03c0\u03bb\u03b5-\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",brownLightToDark_predefined:"\u039a\u03b1\u03c6\u03ad \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",brownToBlueGreenDivergingBright_predefined:"\u039a\u03b1\u03c6\u03ad \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",
brownToBlueGreenDivergingDark_predefined:"\u039a\u03b1\u03c6\u03ad \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",coefficientBias_predefined:"\u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1 \u03c3\u03c5\u03bd\u03c4\u03b5\u03bb\u03b5\u03c3\u03c4\u03ae",coldToHotDiverging_predefined:"\u03a8\u03c5\u03c7\u03c1\u03cc \u03c0\u03c1\u03bf\u03c2 \u03b8\u03b5\u03c1\u03bc\u03cc \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd",
conditionNumber_predefined:"\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c3\u03c5\u03bd\u03b8\u03ae\u03ba\u03b7\u03c2",cyanToPurple_predefined:"\u039a\u03c5\u03b1\u03bd\u03cc \u03c0\u03c1\u03bf\u03c2 \u03b9\u03ce\u03b4\u03b5\u03c2",cyanLightToBlueDark_predefined:"\u039a\u03c5\u03b1\u03bd\u03cc \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",distance_predefined:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7",grayLightToDark_predefined:"\u0393\u03ba\u03c1\u03b9 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
greenBright_predefined:"\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",greenLightToDark_predefined:"\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",greenToBlue_predefined:"\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5",orangeBright_predefined:"\u03a0\u03bf\u03c1\u03c4\u03bf\u03ba\u03b1\u03bb\u03af \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",
orangeLightToDark_predefined:"\u03a0\u03bf\u03c1\u03c4\u03bf\u03ba\u03b1\u03bb\u03af \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",partialSpectrum_predefined:"\u039c\u03b5\u03c1\u03b9\u03ba\u03cc \u03c6\u03ac\u03c3\u03bc\u03b1",partialSpectrum1Diverging_predefined:"\u039c\u03b5\u03c1\u03b9\u03ba\u03cc \u03c6\u03ac\u03c3\u03bc\u03b1 1 \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd",partialSpectrum2Diverging_predefined:"\u039c\u03b5\u03c1\u03b9\u03ba\u03cc \u03c6\u03ac\u03c3\u03bc\u03b1 2 \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd",
pinkToYellowGreenDivergingBright_predefined:"\u03a1\u03bf\u03b6 \u03c0\u03c1\u03bf\u03c2 \u03ba\u03b9\u03c4\u03c1\u03b9\u03bd\u03bf\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",pinkToYellowGreenDivergingDark_predefined:"\u03a1\u03bf\u03b6 \u03c0\u03c1\u03bf\u03c2 \u03ba\u03b9\u03c4\u03c1\u03b9\u03bd\u03bf\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
precipitation_predefined:"\u0392\u03c1\u03bf\u03c7\u03cc\u03c0\u03c4\u03c9\u03c3\u03b7",prediction_predefined:"\u03a0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7",purpleBright_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",purpleToGreenDivergingBright_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2 \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",
purpleToGreenDivergingDark_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2 \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",purpleBlueBright_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2-\u03bc\u03c0\u03bb\u03b5 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",purpleBlueLightToDark_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2-\u03bc\u03c0\u03bb\u03b5 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
purpleRedBright_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2-\u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",purpleRedLightToDark_predefined:"\u0399\u03ce\u03b4\u03b5\u03c2-\u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",redBright_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",redLightToDark_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",
redToBlueDivergingBright_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",redToBlueDivergingDark_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",redToGreen_predefined:"\u0391\u03c0\u03cc \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c3\u03b5 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf",
redToGreenDivergingBright_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",redToGreenDivergingDark_predefined:"\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf, \u03b1\u03c0\u03bf\u03ba\u03bb\u03af\u03bd\u03bf\u03bd, \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",spectrumFullBright_predefined:"\u03a6\u03ac\u03c3\u03bc\u03b1-\u038c\u03bb\u03b1 \u03c4\u03b1 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03ac \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1",
spectrumFullDark_predefined:"\u03a6\u03ac\u03c3\u03bc\u03b1-\u038c\u03bb\u03b1 \u03c4\u03b1 \u03c3\u03ba\u03bf\u03cd\u03c1\u03b1 \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1",spectrumFullLight_predefined:"\u03a6\u03ac\u03c3\u03bc\u03b1-\u038c\u03bb\u03b1 \u03c4\u03b1 \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03ac \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1",surface_predefined:"\u0395\u03c0\u03b9\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1",temperature_predefined:"\u0398\u03b5\u03c1\u03bc\u03bf\u03ba\u03c1\u03b1\u03c3\u03af\u03b1",
whiteToBlack_predefined:"\u039b\u03b5\u03c5\u03ba\u03cc \u03c0\u03c1\u03bf\u03c2 \u03bc\u03b1\u03cd\u03c1\u03bf",yellowToDarkRed_predefined:"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf",yellowToGreenToDarkBlue_predefined:"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf \u03bc\u03c0\u03bb\u03b5",
yellowGreenBright_predefined:"\u03a0\u03c1\u03b1\u03c3\u03b9\u03bd\u03bf\u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03bf \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc",yellowGreenLightToDark_predefined:"\u039a\u03af\u03c4\u03c1\u03b9\u03bd\u03bf-\u03c0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u03b1\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc \u03c0\u03c1\u03bf\u03c2 \u03c3\u03ba\u03bf\u03cd\u03c1\u03bf"}});