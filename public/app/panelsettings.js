/* ========================================================================
 * Calcite Maps: panelsettings.js v0.1 (dojo)
 * ========================================================================
 * Settings panel event handlers to dynamically change map UI
 *
 * ======================================================================== */

define([ 
  "esri/widgets/Zoom",
  "esri/widgets/Home",
  "esri/widgets/Locate",
  "esri/widgets/Compass",
  "esri/widgets/BasemapToggle",
  "esri/widgets/NavigationToggle",
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/Track",
  "esri/widgets/Print",
  "esri/views/ui/Component",
  "esri/layers/FeatureLayer",
  "esri/PopupTemplate",
  "esri/WebMap",

  "esri/geometry/Extent",
  "esri/geometry/support/webMercatorUtils",
  "esri/tasks/GeometryService",
  "esri/tasks/support/ProjectParameters",
  "esri/core/watchUtils",

  "dojo/query",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/touch",
  "dojo/on",
  "dojo/keys",
  "dojo/_base/lang",
  "dojo/_base/declare",

  "dojo/domReady!"
], 
function(Zoom, Home, Locate, Compass, BasemapToggle, NavToggle, Search, Legend, LayerList, Track, Print, Component, FeatureLayer, PopupTemplate, WebMap,
  Extent, ProjectUtils, GeometryService, ProjectParams, watchUtils, 
  query, domClass, domStyle, touch, on, keys, lang, declare) {

  //--------------------------------------------------------------------------
  //
  //  Constants
  //
  //--------------------------------------------------------------------------

  var CALCITE_THEME_SELECTORS = {
    NAVBAR: ".calcite-navbar",
    DROPDOWN: ".calcite-dropdown",
    DROPDOWN_MENU: ".calcite-dropdown .dropdown-menu",
    PANELS: ".calcite-panels",
    MAP: ".calcite-map"
  }

  var CALCITE_THEME_STYLES = {
    BG_LIGHT: "calcite-bg-light", // default
    BG_DARK: "calcite-bg-dark",
    BG_CUSTOM: "calcite-bg-custom",
    TEXT_LIGHT: "calcite-text-light",
    TEXT_DARK: "calcite-text-dark", // default
    WIDGETS_DARK: "calcite-widgets-dark",
    WIDGETS_LIGHT: "calcite-widgets-light", // default
    RGBA_DEFAULT: "" // default (no bg color)
  }

  var CALCITE_LAYOUT_STYLES = {
    body: 
    // Custom layouts
    "calcite-layout-large-title calcite-layout-small-title calcite-layout-inline-right calcite-layout-inline-left " +
    // Nav
    "calcite-nav-top calcite-nav-bottom calcite-nav-top-fixed calcite-nav-bottom-fixed " +
    // Nav space
    "calcite-margin-top calcite-margin-bottom calcite-margin-all " + 
    // Zoom
    "calcite-zoom-top-left calcite-zoom-top-right calcite-zoom-bottom-left calcite-zoom-bottom-right " +
    // Minibar
    "calcite-nav-transparent",
    nav:
    // Navbar
    "navbar-fixed-top navbar-fixed-bottom",
    // Panels
    panels: "calcite-panels-right calcite-panels-left"
  }

  var PanelSettings = declare(null, {
    
    APP_LAYOUTS: {
      TOP: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0 , bottom: 0 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 5, right: 5 },
          layoutName: ""
      },
      TOPSPACE: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-top", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 65, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 5, right: 5 },
          layoutName: ""
      }, 
      TOPSPACEALL: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 65, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 5, right: 5 },
          layoutName: ""
      }, 
      TOPFIXED: {
          navPosition: "calcite-nav-top-fixed", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 15, bottom: 5, right: 5 },
          layoutName: ""
      },
      BOTTOM: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 50  },
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 30, bottom: 15, right: 5 },
          layoutName: ""
      },
      BOTTOMSPACE: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "calcite-margin-bottom", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 65 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 30, bottom: 15, right: 5 },
          layoutName: ""
      }, 
      BOTTOMSPACEALL: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 65 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 30, bottom: 15, right: 5 },
          layoutName: ""
      }, 
      BOTTOMFIXED: {
          navPosition: "calcite-nav-bottom-fixed", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 30, bottom: 15, right: 5 },
          layoutName: ""
      },
      // Custom layouts...
      TOPSMALL: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 40, bottom: 0 }, 
          viewPaddingSmallScreen: { top: 40, bottom: 0 }, 
          uiPadding: { top: 15, left: 15, right: 5, bottom: 30 },
          layoutName: "calcite-layout-small-title"
      },
      BOTTOMSMALL: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 40 }, 
          viewPaddingSmallScreen: { top: 0, bottom: 40 }, 
          uiPadding: { top: 30, left: 15, right: 5, bottom: 15 },
          layoutName: "calcite-layout-small-title"
      },
      TOPLARGE: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 60, bottom: 0 }, 
          viewPaddingSmallScreen: { top: 60, bottom: 0 }, 
          uiPadding: { top: 15, left: 15, right: 5, bottom: 30 },
          layoutName: "calcite-layout-large-title"
      },
      BOTTOMLARGE: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 60 },
          viewPaddingSmallScreen: { top: 0, bottom: 60 }, 
          uiPadding: { top: 30, left: 15, right: 5, bottom: 15 },
          layoutName: "calcite-layout-large-title"
      },
      TOPINLINELEFT: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: "calcite-layout-inline-left"
      },
      TOPINLINERIGHT: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-left", 
          zoomPosition: "calcite-zoom-top-right", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: "calcite-layout-inline-right"
      }
    },

    _this: null,

    activeLayout: null,
    
    // TODO
    defaultOptions: {
      "loading-text":'loading...'
    },

    // Default settings
    styleSettings: {
      navbar: {
        bgStyle: CALCITE_THEME_STYLES.BG_LIGHT, // calcite-bg-light / calcite-bg-dark / calcite-bg-custom
        textStyle: CALCITE_THEME_STYLES.TEXT_DARK, // calcite-text-dark / calcite-text-light
        bgRgbaColor: CALCITE_THEME_STYLES.RGBA_DEFAULT // ""
      },
      dropdown: {
        bgStyle: CALCITE_THEME_STYLES.BG_LIGHT, // calcite-bg-light / calcite-bg-dark / calcite-bg-custom
        textStyle: CALCITE_THEME_STYLES.TEXT_DARK, // calcite-text-dark / calcite-text-light
        bgRgbaColor: CALCITE_THEME_STYLES.RGBA_DEFAULT // ""
      },
      panel: {
        bgStyle: CALCITE_THEME_STYLES.BG_LIGHT, // calcite-bg-light / calcite-bg-dark / calcite-bg-custom
        textStyle: CALCITE_THEME_STYLES.TEXT_DARK, // calcite-text-dark / calcite-text-light
        bgRgbaColor: CALCITE_THEME_STYLES.RGBA_DEFAULT // ""
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (options) {
        _this = this;

        _this.options = lang.mixin(lang.clone(_this.defaultOptions), (options || {}));
        
        _this.app = options.app;

        _this.activeLayout = _this.APP_LAYOUTS.TOP; //default

        _this._initUIHandlers();
    },

    //--------------------------------------------------------------------------
    //
    //  UI
    //
    //--------------------------------------------------------------------------

    _initUIHandlers: function () {

        //--------------------------------------------------------------------
        // Tab - XY
        //--------------------------------------------------------------------

        query("#refsystem").on("change", function (e) {
            var style = e.target.value;
            // Update UI
            query("#geographicCollapse").removeClass("in");
            query("#projectedCollapse").removeClass("in");
            switch (style) {
                // Show geographic
                case "geographic":
                    query("#geographicCollapse").collapse("show");
                    break;
                    // Show projected
                case "projected":
                    query("#projectedCollapse").collapse("show");

            }
        });


      //--------------------------------------------------------------------
      // Tab - Map
      //--------------------------------------------------------------------

      // Set Map Views
        $('#numViews').on('change', function () {

            if ($(this).val() == '3') {

                document.getElementById("menu").children[1].style.display = "block";
                document.getElementById("menu").children[2].style.display = "block";

                $("#map1").removeClass("hidden");
                $("#map2").removeClass("hidden");
                $('#formlayout3').removeClass("hidden");
                $('#formlayout2').addClass("hidden");
                $('#layout2').val("1");
                

                //z order
                $("#map1").css( "z-index", "0" );
                $("#map2").css( "z-index", "1" );
                $("#map3").css( "z-index", "2" );

                //xy position
                $("#map1").attr('data-x', 0);
                $("#map1").attr('data-y', 0);

                $("#map2").attr('data-x', 0);
                $("#map2").attr('data-y', 0);

                $("#map3").attr('data-x', 0);
                $("#map3").attr('data-y', 0);

                $("#map1").css({ height: 416, width: 680, left: 0, top: 0 , transform: 'translate(0px, 0px)'});
                $("#map2").css({ height: 416, width: 680, left: 0, top: 435, transform: 'translate(0px, 0px)' });
                $("#map3").css({ height: 302, width: 302, left: 10, top: 650, transform: 'translate(0px, 0px)' });

            } else if ($(this).val() == '2') {

                document.getElementById("menu").children[1].style.display = "none";
                document.getElementById("menu").children[2].style.display = "block";

                $("#map1").addClass("hidden");
                $("#map2").removeClass("hidden");
                $('#formlayout2').removeClass("hidden");
                $('#formlayout3').addClass("hidden");
                $('#layout3').val("1");

                //z order
                $("#map2").css( "z-index", "1" );
                $("#map3").css( "z-index", "2" );
    
                //xy position
                $("#map2").attr('data-x', 0);
                $("#map2").attr('data-y', 0);
                $("#map3").attr('data-x', 0);
                $("#map3").attr('data-y', 0);
                $("#map2").css({ height: 467, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
                $("#map3").css({ height: 467, width: 680, left: 0, top: 485, transform: 'translate(0px, 0px)' });
            } else if ($(this).val() == '1') {

              document.getElementById("menu").children[1].style.display = "none";
              document.getElementById("menu").children[2].style.display = "none";

                $("#map1").addClass("hidden");
                $("#map2").addClass("hidden");
                $('#formlayout2').addClass("hidden");
                $('#formlayout3').addClass("hidden");

                $("#map3").attr('data-x', 0);
                $("#map3").attr('data-y', 0);

                $("#map3").css({ height: 952, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
            }
          
      });


      // Set Map Positions View 3
      $('#layout3').on('change', function () {
        if ($(this).val() == "1") {
            //z order
            $("#map1").css( "z-index", "0" );
            $("#map2").css( "z-index", "1" );
            $("#map3").css( "z-index", "2" );

            //xy position
            $("#map1").attr('data-x', 0);
            $("#map1").attr('data-y', 0);
            $("#map2").attr('data-x', 0);
            $("#map2").attr('data-y', 0);
            $("#map3").attr('data-x', 0);
            $("#map3").attr('data-y', 0);
            $("#map1").css({ height: 416, width: 680, left: 0, top: 0 , transform: 'translate(0px, 0px)'});
            $("#map2").css({ height: 416, width: 680, left: 0, top: 435, transform: 'translate(0px, 0px)' });
            $("#map3").css({ height: 302, width: 302, left: 10, top: 650, transform: 'translate(0px, 0px)' });

        } else if ($(this).val() == "2" ) {
            //z order
            $("#map1").css( "z-index", "2" );
            $("#map2").css( "z-index", "1" );
            $("#map3").css( "z-index", "0" );

            //xy position
            $("#map1").attr('data-x', 0);
            $("#map1").attr('data-y', 0);
            $("#map2").attr('data-x', 0);
            $("#map2").attr('data-y', 0);
            $("#map3").attr('data-x', 0);
            $("#map3").attr('data-y', 0);
            $("#map2").css({ height: 466, width: 680, left: 0, top: 0 , transform: 'translate(0px, 0px)'});
            $("#map3").css({ height: 467, width: 680, left: 0, top: 485, transform: 'translate(0px, 0px)' });
            $("#map1").css({ height: 233, width: 233, left: 447, top: 0, transform: 'translate(0px, 0px)' });

        } else if ($(this).val() == "3" ) {
          $("#map1").css( "z-index", "0" );
          $("#map2").css( "z-index", "1" );
          $("#map3").css( "z-index", "2" );

          //xy position
          $("#map1").attr('data-x', 0);
          $("#map1").attr('data-y', 0);
          $("#map2").attr('data-x', 0);
          $("#map2").attr('data-y', 0);
          $("#map3").attr('data-x', 0);
          $("#map3").attr('data-y', 0);
          $("#map1").css({ height: 332, width: 332, left: 348, top: 620 , transform: 'translate(0px, 0px)'});
          $("#map2").css({ height: 332, width: 332, left: 0, top: 620, transform: 'translate(0px, 0px)' });
          $("#map3").css({ height: 606, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
        } else if ($(this).val() == "4" ) {
          $("#map1").css( "z-index", "0" );
          $("#map2").css( "z-index", "1" );
          $("#map3").css( "z-index", "2" );

          //xy position
          $("#map1").attr('data-x', 0);
          $("#map1").attr('data-y', 0);
          $("#map2").attr('data-x', 0);
          $("#map2").attr('data-y', 0);
          $("#map3").attr('data-x', 0);
          $("#map3").attr('data-y', 0);
          $("#map1").css({ height: 332, width: 332, left: 348, top: 0 , transform: 'translate(0px, 0px)'});
          $("#map2").css({ height: 332, width: 332, left: 0, top: 0, transform: 'translate(0px, 0px)' });
          $("#map3").css({ height: 606, width: 680, left: 0, top: 347, transform: 'translate(0px, 0px)' });
        } 
    });

         // Set Map Positions View 2
         $('#layout2').on('change', function () {
          if ($(this).val() == "1") {
              //z order
              $("#map2").css( "z-index", "1" );
              $("#map3").css( "z-index", "2" );
  
              //xy position
              $("#map2").attr('data-x', 0);
              $("#map2").attr('data-y', 0);
              $("#map3").attr('data-x', 0);
              $("#map3").attr('data-y', 0);
              $("#map2").css({ height: 467, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
              $("#map3").css({ height: 467, width: 680, left: 0, top: 485, transform: 'translate(0px, 0px)' });
  
          } else if ($(this).val() == "2" ) {
              //z order
              $("#map2").css( "z-index", "1" );
              $("#map3").css( "z-index", "0" );
  
              //xy position
              $("#map2").attr('data-x', 0);
              $("#map2").attr('data-y', 0);
              $("#map3").attr('data-x', 0);
              $("#map3").attr('data-y', 0);
              $("#map3").css({ height: 467, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
              $("#map2").css({ height: 467, width: 680, left: 0, top: 485, transform: 'translate(0px, 0px)' });
  
          } else if ($(this).val() == "3" ) {
            $("#map2").css( "z-index", "1" );
            $("#map3").css( "z-index", "2" );
  
            //xy position
            $("#map2").attr('data-x', 0);
            $("#map2").attr('data-y', 0);
            $("#map3").attr('data-x', 0);
            $("#map3").attr('data-y', 0);
            $("#map3").css({ height: 332, width: 332, left: 0, top: 0, transform: 'translate(0px, 0px)' });
            $("#map2").css({ height: 952, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
          } else if ($(this).val() == "4" ) {
            $("#map2").css( "z-index", "2" );
            $("#map3").css( "z-index", "1" );
  
            //xy position
            $("#map2").attr('data-x', 0);
            $("#map2").attr('data-y', 0);
            $("#map3").attr('data-x', 0);
            $("#map3").attr('data-y', 0);
            $("#map2").css({ height: 332, width: 332, left: 0, top: 0, transform: 'translate(0px, 0px)' });
            $("#map3").css({ height: 952, width: 680, left: 0, top: 0, transform: 'translate(0px, 0px)' });
          } 
      });



    },

    //--------------------------------------------------------------------------
    //
    //  Private Functions
    //
    //--------------------------------------------------------------------------

    _rgb2hsv: function() {
      var rr, gg, bb,
          r = arguments[0] / 255,
          g = arguments[1] / 255,
          b = arguments[2] / 255,
          h, s,
          v = Math.max(r, g, b),
          diff = v - Math.min(r, g, b),
          diffc = function(c){
              return (v - c) / 6 / diff + 1 / 2;
          };

      if (diff == 0) {
          h = s = 0;
      } else {
          s = diff / v;
          rr = diffc(r);
          gg = diffc(g);
          bb = diffc(b);

          if (r === v) {
              h = bb - gg;
          }else if (g === v) {
              h = (1 / 3) + rr - bb;
          }else if (b === v) {
              h = (2 / 3) + gg - rr;
          }
          if (h < 0) {
              h += 1;
          }else if (h > 1) {
              h -= 1;
          }
      }
      return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          v: Math.round(v * 100)
      };
    },

    _rgb2hsl: function(r, g, b){
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      }else{
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return {
          h: h,
          s: s,
          l: l
      };
    },

    _getRgbaColorFromStyle: function(calciteBgColorStyle) {
      caliteColorStyle = "." + calciteBgColorStyle,
        attr = "backgroundColor";
      var ss = document.styleSheets;
      var rgba = "";
      for (var i = 0; i < ss.length && !rgba; i++) {
        var ss = document.styleSheets;
        var s = ss[i];
        try {
          var rules = s.cssRules ? s.cssRules : null; //ss[i].cssRules; //  || ss[i].rules;
          if (s && rules) {
            for (var j = 0; j < rules.length; j++) {
              if (rules[j].selectorText === caliteColorStyle) {
                rgba = rules[j].style[attr];
                break;
              }
            }
          }
        } catch (err){}
      }
      return rgba;
    },

    //--------------------------------------------------------------------------
    //
    //  Public Functions
    //
    //--------------------------------------------------------------------------

    setStyles: function(bgStyle, textStyle, bgRgbaColor, applyToAll) {
      // Navbar
      _this.styleSettings.navbar.bgStyle = bgStyle || _this.styleSettings.navbar.bgStyle;
      _this.styleSettings.navbar.textStyle = textStyle || _this.styleSettings.navbar.textStyle;
      _this.styleSettings.navbar.bgRgbaColor = bgRgbaColor !== null ? bgRgbaColor : _this.styleSettings.navbar.bgRgbaColor;
      // Navbar only - reset
      if (!applyToAll) {
        // Dropdown - reset
        _this.styleSettings.dropdown.bgStyle = CALCITE_THEME_STYLES.BG_LIGHT;
        _this.styleSettings.dropdown.textStyle = CALCITE_THEME_STYLES.TEXT_DARK;
        _this.styleSettings.dropdown.bgRgbaColor = CALCITE_THEME_STYLES.RGBA_DEFAULT;
        // Panel - reset
        _this.styleSettings.panel.bgStyle = CALCITE_THEME_STYLES.BG_LIGHT;
        _this.styleSettings.panel.textStyle = CALCITE_THEME_STYLES.TEXT_DARK;
        _this.styleSettings.panel.bgRgbaColor = CALCITE_THEME_STYLES.RGBA_DEFAULT;
      } else {
        // Dropdown
        // _this.styleSettings.dropdown.bgStyle = bgStyle || _this.styleSettings.dropdown.bgStyle;
        // _this.styleSettings.dropdown.textStyle = textStyle || _this.styleSettings.dropdown.textStyle;
        // _this.styleSettings.dropdown.bgRgbaColor = bgRgbaColor !== null ? bgRgbaColor : _this.styleSettings.dropdown.bgRgbaColor;
        // Panel
        _this.styleSettings.panel.bgStyle = bgStyle || _this.styleSettings.panel.bgStyle;
        _this.styleSettings.panel.textStyle = textStyle || _this.styleSettings.panel.textStyle;
        _this.styleSettings.panel.bgRgbaColor = bgRgbaColor !== null ? bgRgbaColor : _this.styleSettings.panel.bgRgbaColor;
      }
    },

    applyStyles: function(applyToAll) {
      // Navbar
      _this.setBgThemeStyle(CALCITE_THEME_SELECTORS.NAVBAR, _this.styleSettings.navbar.bgStyle);
      _this.setTextThemeStyle(CALCITE_THEME_SELECTORS.NAVBAR, _this.styleSettings.navbar.textStyle);
      _this.setBgRgbaColor(CALCITE_THEME_SELECTORS.NAVBAR, _this.styleSettings.navbar.bgRgbaColor);
      // Dropdown
      // _this.setBgThemeStyle(CALCITE_THEME_SELECTORS.DROPDOWN, _this.styleSettings.dropdown.bgStyle);
      // _this.setTextThemeStyle(CALCITE_THEME_SELECTORS.DROPDOWN, _this.styleSettings.dropdown.textStyle);
      // _this.setBgRgbaColor(CALCITE_THEME_SELECTORS.DROPDOWN_MENU, _this.styleSettings.dropdown.bgRgbaColor);
      // Panel
      _this.setBgThemeStyle(CALCITE_THEME_SELECTORS.PANELS, _this.styleSettings.panel.bgStyle);
      _this.setTextThemeStyle(CALCITE_THEME_SELECTORS.PANELS, _this.styleSettings.panel.textStyle);
      _this.setBgRgbaColor(CALCITE_THEME_SELECTORS.PANELS, _this.styleSettings.panel.bgRgbaColor);
    },

    // BgColor
    setBgColorStyle: function(cssSelector, bgColorStyle) {
      _this.removeBgColorStyle(cssSelector);
      if (bgColorStyle !== "default") {
        query(cssSelector).addClass(bgColorStyle);
      }
    },

    setBgRgbaColor: function(cssSelector, bgColorRgba) {
      query(cssSelector).attr("style", {"background-color": bgColorRgba});
    },

    removeBgColorStyle: function(cssSelector) {
      query(cssSelector).attr("class")[0].split(" ").forEach(function(val){
        if (val.indexOf("calcite-bgcolor-") > -1) {
          query(cssSelector).removeClass(val);
        }
      });
    },

    // Theme - text
    setTextThemeStyle: function(cssSelector, textColorStyle) {
      query(cssSelector).removeClass(CALCITE_THEME_STYLES.TEXT_LIGHT + " " + CALCITE_THEME_STYLES.TEXT_DARK);
      query(cssSelector).addClass(textColorStyle);
    },

    // Theme - bg
    setBgThemeStyle: function(cssSelector, bgColorStyle) {
      query(cssSelector).removeClass(CALCITE_THEME_STYLES.BG_LIGHT + " " + CALCITE_THEME_STYLES.BG_DARK + " " + CALCITE_THEME_STYLES.BG_CUSTOM);
      query(cssSelector).addClass(bgColorStyle)
    },

    //----------------------------------
    // Tab - Map functions
    //----------------------------------

    addWebmap: function() {
      var id = query("#settingsWebmapId")[0].value;
      if (id === "") {
        _this.showErrorLoadingLayer("Sorry, please provide a valid webmap ID.");
        return;
      }  
      _this.loadWebmap(id);
    },

    clearWebmap: function() {
      _this.loadWebmap(_this.app.webmapId);
    },

    loadWebmap: function(id) {
      var webmap = new WebMap({
        portalItem: {
          id: id
        }
      });

      webmap.load()
        .then(function(map){
          _this.app.webmap = map;
          _this.app.mapView.map = map;
          //_this.app.sceneView.map = map;
        }, function(error){
          _this.showErrorLoadingLayer("Sorry, the webmap could not be loaded. Check the ID.");
        });
    },

    //----------------------------------
    // Tab - Layout functions
    //----------------------------------

    setLayout: function(layout, hiddenNav) {
      // Update layout
      _this.activeLayout = layout;
      // Remove classes
      _this.removeClasses();
      _this.addClasses(layout);
      if (hiddenNav) {
        _this.setPadding(layout.viewPaddingHidden, layout.uiPadding);  
      } else {
        _this.setPadding(layout.viewPadding, layout.uiPadding);  
      }
     // _this.setPaddingUI(layout.viewPadding); //update UI
      if (layout.zoomPosition === "calcite-zoom-top-right") {
        _this.setWidgetPosition(_this.app.mapView, "zoom", "top-right");
        //_this.setWidgetPosition(_this.app.sceneView, "zoom", "top-right");
      } else {
        _this.setWidgetPosition(_this.app.mapView, "zoom", "top-left");
       // _this.setWidgetPosition(_this.app.sceneView, "zoom", "top-left");
      }
    },

    addClasses: function(layout) {
      var body = query("body")[0],
        nav = query("nav")[0],
        panels = query(CALCITE_THEME_SELECTORS.PANELS)[0];
      domClass.add(body, layout.navPosition + " " + layout.navSpace + " " + layout.zoomPosition + " " + layout.layoutName);
      domClass.add(nav, layout.navFixedPosition);
      domClass.add(panels, layout.panelPosition);
    },

    removeClasses: function() {
      var body = query("body")[0],
        nav = query("nav")[0],
        panels = query(CALCITE_THEME_SELECTORS.PANELS)[0];
      domClass.remove(body, CALCITE_LAYOUT_STYLES.body);
      domClass.remove(nav, CALCITE_LAYOUT_STYLES.nav);
      domClass.remove(panels, CALCITE_LAYOUT_STYLES.panels);
    },

    setPadding: function(viewPadding, uiPadding) {
      if (window.innerWidth <= 768 && _this.activeLayout.viewPaddingSmallScreen) {
        viewPadding = _this.activeLayout.viewPaddingSmallScreen;
      }
      _this.app.mapView.padding = viewPadding;
      _this.app.mapView.ui.padding = uiPadding;
      //_this.app.sceneView.padding = viewPadding;
      //_this.app.sceneView.ui.padding = uiPadding;
    },

   /* setPaddingUI: function(viewPadding) {
      query("#settingsPadding")[0].value = JSON.stringify(viewPadding);
    },*/
    
    setWidgetPosition: function(view, name, position, index, id) {
      var component,
        exists = view.ui.find(name);
      // Remove
      if (position === "none") {
          view.ui.remove(name);
          // if (exists) {
          //   exists.destroy();
          // }
      } else { // Add/Move
          if (exists) {
              view.ui.move(name, position);
          } else {
            component = _this.createComponent(view, name, id);
            if (!id) {
              view.ui.add([{ 
                component: component, 
                position: position, 
                index: index 
              }]);
            }
          }
      }               
    },

    createComponent: function(view, name, id) {
      var component,
        widget = _this.createWidget(view, name, id);
      component = new Component({
        node: widget, 
        id: name
      });
      return component;
    },

    createWidget: function(view, name, id) {
      var widget,
        viewModel = {
          view: view
        }
      switch (name) {
        case "zoom":
          widget = new Zoom({
            viewModel: viewModel
          });
          break;
        case "navtoggle":
          widget = new NavToggle({
            viewModel: viewModel
          });
          break;
        case "home":
          widget = new Home({
            viewModel: viewModel
          });
          break;
        case "compass":
          widget = new Compass({
            viewModel: viewModel
          });
          break;
        case "locate":
          widget = new Locate({
            viewModel: viewModel
          });
          break;
        case "basemaptoggle":
          widget = new BasemapToggle({
            viewModel: viewModel
          });
          break;
        case "search":
          widget = new Search({
            viewModel: viewModel,
            container: id
          });
          break;
        case "layerlist":
          widget = new LayerList({
            viewModel: viewModel,
            container: id
          });
          break;
        case "legend":
          widget = new Legend({
            viewModel: viewModel,
            container: id
          });
          break;
        case "track":
          widget = new Track({
            viewModel: viewModel,
            container: id
          });
          break;
        case "print":
          widget = new Print({
            viewModel: viewModel,
            container: id,
            printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
          });
          break;

      }
      return widget;
    },

    setPopupDock: function(view, popupOptions) {
      view.popup.set({
        dockOptions: popupOptions
      });
      var dock = (popupOptions.position !== "auto");
      view.popup.set("dockEnabled", dock);
    }

  });

  return PanelSettings;

 
});
