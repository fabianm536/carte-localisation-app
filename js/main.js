var app;


require([
  // ArcGIS
  "esri/Map",
  "esri/Basemap",
  "esri/WebMap",
  "esri/layers/VectorTileLayer",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/widgets/Search",
  "esri/widgets/Popup",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/ColorPicker",
  "esri/core/watchUtils",
  "dojo/query",
  "dojo/dom-class",
  "dojo/dom",
  "dojo/on",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.10",
  "calcite-maps/calcitemaps-arcgis-support-v0.10",
  //"calcite-maps/calcitemaps",
  "calcite-settings/panelsettings",

  // Boostrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Carousel",
  "bootstrap/Tooltip",
  "bootstrap/Modal",

  // Dojo
  "dojo/domReady!"
], function (Map, Basemap, Webmap, VectorTileLayer, MapView, SceneView, Search, Popup, Home, Legend, ColorPicker,
  watchUtils, query, domClass, dom, on, CalciteMapsSettings, CalciteMapsArcGISSupport, PanelSettings) {

    app = {
        zoom: 2,
        lonlat: [-40, 0],
        mapView: null,
        mapDiv: "mapViewDiv",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "hybrid",
        basemapSelectedAlt: "hybrid",
        webmap: null,
        webmapId: "df5b4bad631d4209b6ef7a88493dac7d",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["zoom", "attribution"],
            padding: {
                top: 15,
                right: 15,
                bottom: 30,
                left: 15
            }
        },
        popupOptions: {
            autoPanEnabled: true,
            messageEnabled: false,
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        panelSettings: null
    }

    //----------------------------------
    // App
    //----------------------------------

    //app.panelSettings = new PanelSettings( { app: app } );

    initializeMapViews();
    initializeAppUI();
    initializeAppSettings();
    initializeWidgets();

    //----------------------------------
    // Map and Scene View
    //----------------------------------

    function initializeMapViews() {
        // Webmap
        app.webmap = new Webmap({
            basemap: 'hybrid',
            portalItem: {
                id: app.webmapId
            }
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: true
        });


        // Set active view
        app.activeView = app.mapView;

        // 3D - SceneView
        app.sceneView = new SceneView({
            container: app.sceneDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: false
        });

        // Listen for view breakpoint changes and update control location
        app.mapView.watch("widthBreakpoint", function (newVal, oldVal) {
            function setPadding(newVal, oldVal) {
                if (!app.panelSettings) {
                    return;
                }
                if (newVal === "small" && oldVal === "medium") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
                } else if (newVal === "medium" && oldVal === "small") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPadding, app.panelSettings.activeLayout.uiPadding);
                }
            }
            // Set padding for navs that change height
            if (app.panelSettings.activeLayout.viewPaddingSmallScreen) {
                setPadding(newVal, oldVal);
            }
        });
    }

    //----------------------------------
    // View widgets
    //----------------------------------

    function initializeWidgets() {
        app.mapView.when(function () {
            app.panelSettings.setWidgetPosition(app.mapView, "home", "top-left", 0);
            //app.panelSettings.setWidgetPosition(app.mapView, "zoom", "top-left", 1);
            app.panelSettings.setWidgetPosition(app.mapView, "compass", "top-left");
        });


        app.sceneView.when(function () {
            app.panelSettings.setWidgetPosition(app.sceneView, "home", "top-left", 0);
            //app.panelSettings.setWidgetPosition(app.sceneView, "zoom", "top-left");
            app.panelSettings.setWidgetPosition(app.sceneView, "compass", "top-left");
            app.panelSettings.setWidgetPosition(app.sceneView, "navtoggle", "top-left");
        });

        // Panel widgets
        app.panelSettings.setWidgetPosition(app.mapView, "legend", "top-left", 0, "legendDiv");
        app.panelSettings.setWidgetPosition(app.mapView, "layerlist", "top-left", 0, "layerlistDiv");
        app.panelSettings.setWidgetPosition(app.mapView, "print", "top-left", 0, "printDiv");

    }
    //----------------------------------
    // App panel settings
    //----------------------------------

    function initializeAppSettings() {
        // Panel settings
        app.panelSettings = new PanelSettings({ app: app });
        app.panelSettings.activeLayout = app.panelSettings.APP_LAYOUTS.TOP;
        app.panelSettings.setLayout(app.panelSettings.activeLayout, false);

        // Set padding for navs that change height
        if (window.innerWidth < app.activeView.breakpoints.small && app.panelSettings.activeLayout.viewPaddingSmallScreen) {
            app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
        }
    }

    //----------------------------------
    // App UI Handlers
    //----------------------------------

    function initializeAppUI() {
        // App UI
        setTabEvents();
        setBasemapEvents();
        setSearchWidgets();
        setColorPicker();
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.sceneView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    //----------------------------------
    // View Tabs
    //----------------------------------

    function setTabEvents() {

        // Tab event
        query(".calcite-navbar li a[data-toggle='tab']").on("show.bs.tab", function (e) {
            // Views
            if (e.target.text.indexOf("Map") > -1) {
                syncViews(app.sceneView, app.mapView);
                app.activeView = app.mapView;
            } else {
                syncViews(app.mapView, app.sceneView);
                app.activeView = app.sceneView;
            }
            // Search
            syncSearch();
            // Hide popup - TODO
            app.activeView.popup.set({
                visible: false
            });
        });

        // Views
        function syncViews(fromView, toView) {
            watchUtils.whenTrueOnce(fromView, "ready", function () {
                var viewPt = fromView.viewpoint.clone();
                fromView.container = null;
                if (fromView.type === "3d") {
                    toView.container = app.mapDiv;
                } else {
                    toView.container = app.sceneDiv;
                }
                toView.viewpoint = viewPt;
                toView.padding = fromView.padding;
            });
        }

        // Search
        function syncSearch() {
            app.searchWidgetNav.view = app.activeView;
            app.searchWidgetPanel.view = app.activeView;
            app.searchWidgetSettings.view = app.activeView;
            // Sync
            if (app.searchWidgetNav.selectedResult) {
                app.searchWidgetNav.search(app.searchWidgetNav.selectedResult.name);
            }
            if (app.searchWidgetPanel.selectedResult) {
                app.searchWidgetPanel.search(app.searchWidgetPanel.selectedResult.name);
            }
        }
    }

    //----------------------------------
    // Basemaps
    //----------------------------------

    function setBasemapEvents() {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel, #settingsSelectBasemap").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    //----------------------------------
    // Search Widgets
    //----------------------------------

    function setSearchWidgets() {

        //TODO - Search Nav + Panel (detach/attach)
        app.searchWidgetNav = createSearchWidget("searchNavDiv", true);
        app.searchWidgetPanel = createSearchWidget("searchPanelDiv", true);
        app.searchWidgetSettings = createSearchWidget("settingsSearchDiv", false);

        // Create widget
        function createSearchWidget(parentId, showPopup) {
            var search = new Search({
                viewModel: {
                    view: app.activeView,
                    showPopupOnSelect: showPopup,
                    highlightEnabled: false,
                    maxSuggestions: 20
                },
            }, parentId);
            return search;
        }
    }

    //----------------------------------
    // Colorpicker Widget
    //----------------------------------

    function setColorPicker() {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv");
    }

    //----------------------------------
    // Toggle nav
    //----------------------------------
    // query("#calciteToggleNavbar").on("click", function(e) {
    //   var padding;
    //   if (query(".calcite-nav-hidden").length > 0) { // hidden
    //     //app.panelSettings.setLayout(app.panelSettings.activeLayout, true);
    //     //query(".calcite-panels .panel.in").collapse("hide");
    //   } else {
    //     //app.panelSettings.setLayout(app.panelSettings.activeLayout, false);
    //   }
    //   query(".calcite-dropdown").removeClass("open");
    //   query(".calcite-dropdown-toggle").removeClass("open");
    // });

    //----------------------------------
    // Manual show/hide menu dropdown (slide)
    //----------------------------------

    // query(".dropdown-toggle").on('click', function (e) {
    //   // Show dropdown nav
    //   query(this).parent().toggleClass("open");
    //   // Menu animcation
    //   query(".calcite-dropdown-toggle").toggleClass("open");
    // });

});

// map2
var app2;
require([
  // ArcGIS
  "esri/Map",
  "esri/Basemap",
  "esri/WebMap",
  "esri/layers/VectorTileLayer",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/widgets/Search",
  "esri/widgets/Popup",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/ColorPicker",
  "esri/core/watchUtils",
  "dojo/query",
  "dojo/dom-class",
  "dojo/dom",
  "dojo/on",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.10",
  "calcite-maps/calcitemaps-arcgis-support-v0.10",
  //"calcite-maps/calcitemaps",
  "calcite-settings/panelsettings",

  // Boostrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Carousel",
  "bootstrap/Tooltip",
  "bootstrap/Modal",

  // Dojo
  "dojo/domReady!"
], function (Map, Basemap, Webmap, VectorTileLayer, MapView, SceneView, Search, Popup, Home, Legend, ColorPicker,
  watchUtils, query, domClass, dom, on, CalciteMapsSettings, CalciteMapsArcGISSupport, PanelSettings) {

    app2 = {
        zoom: 2,
        lonlat: [-40, 0],
        mapView: null,
        mapDiv: "mapViewDiv2",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv2",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "gray",
        basemapSelectedAlt: "gray",
        webmap: null,
        webmapId: "df5b4bad631d4209b6ef7a88493dac7d",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["zoom", "attribution"],
            padding: {
                top: 15,
                right: 15,
                bottom: 30,
                left: 15
            }
        },
        popupOptions: {
            autoPanEnabled: true,
            messageEnabled: false,
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        panelSettings: null
    }

    //----------------------------------
    // App
    //----------------------------------

    //app.panelSettings = new PanelSettings( { app: app } );

    initializeMapViews();
    initializeAppUI();
    initializeAppSettings();
    initializeWidgets();

    //----------------------------------
    // Map and Scene View
    //----------------------------------

    function initializeMapViews() {
        // Webmap
        app2.webmap = new Webmap({
            portalItem: {
                id: app2.webmapId
            }
        });


        // 2D - MapView2
        app2.mapView = new MapView({
            container: app2.mapDiv,
            map: app2.webmap,
            zoom: app2.zoom,
            center: app2.lonlat,
            padding: app2.padding,
            ui: app2.uiPadding,
            popup: new Popup(app2.popupOptions),
            visible: true
        });

        // Set active view
        app2.activeView = app2.mapView;

        // 3D - SceneView
        app2.sceneView = new SceneView({
            container: app2.sceneDiv,
            map: app2.webmap,
            zoom: app2.zoom,
            center: app2.lonlat,
            padding: app2.padding,
            ui: app2.uiPadding,
            popup: new Popup(app2.popupOptions),
            visible: false
        });

        // Listen for view breakpoint changes and update control location
        app2.mapView.watch("widthBreakpoint", function (newVal, oldVal) {
            function setPadding(newVal, oldVal) {
                if (!app2.panelSettings) {
                    return;
                }
                if (newVal === "small" && oldVal === "medium") {
                    app2.panelSettings.setPadding(app2.panelSettings.activeLayout.viewPaddingSmallScreen, app2.panelSettings.activeLayout.uiPadding);
                } else if (newVal === "medium" && oldVal === "small") {
                    app2.panelSettings.setPadding(app2.panelSettings.activeLayout.viewPadding, app2.panelSettings.activeLayout.uiPadding);
                }
            }
            // Set padding for navs that change height
            if (app2.panelSettings.activeLayout.viewPaddingSmallScreen) {
                setPadding(newVal, oldVal);
            }
        });

    }

    //----------------------------------
    // View widgets
    //----------------------------------

    function initializeWidgets() {
        app2.mapView.when(function () {
            app2.panelSettings.setWidgetPosition(app2.mapView, "home", "top-left", 0);
            //app.panelSettings.setWidgetPosition(app.mapView, "zoom", "top-left", 1);
            app2.panelSettings.setWidgetPosition(app2.mapView, "compass", "top-left");
        });

        app2.sceneView.when(function () {
            app2.panelSettings.setWidgetPosition(app2.sceneView, "home", "top-left", 0);
            //app.panelSettings.setWidgetPosition(app.sceneView, "zoom", "top-left");
            app2.panelSettings.setWidgetPosition(app2.sceneView, "compass", "top-left");
            app2.panelSettings.setWidgetPosition(app2.sceneView, "navtoggle", "top-left");
        });


        // Panel widgets
        app2.panelSettings.setWidgetPosition(app2.mapView, "legend", "top-left", 0, "legendDiv");
        app2.panelSettings.setWidgetPosition(app2.mapView, "layerlist", "top-left", 0, "layerlistDiv");
        app.panelSettings.setWidgetPosition(app2.mapView, "print", "top-left", 0, "printDiv");


    }

    //----------------------------------
    // App panel settings
    //----------------------------------

    function initializeAppSettings() {
        // Panel settings
        app2.panelSettings = new PanelSettings({ app: app2 });
        app2.panelSettings.activeLayout = app2.panelSettings.APP_LAYOUTS.TOP;
        app2.panelSettings.setLayout(app2.panelSettings.activeLayout, false);

        // Set padding for navs that change height
        if (window.innerWidth < app2.activeView.breakpoints.small && app2.panelSettings.activeLayout.viewPaddingSmallScreen) {
            app2.panelSettings.setPadding(app2.panelSettings.activeLayout.viewPaddingSmallScreen, app2.panelSettings.activeLayout.uiPadding);
        }
    }

    //----------------------------------
    // App UI Handlers
    //----------------------------------

    function initializeAppUI() {
        // App UI
        //setTabEvents();
        setBasemapEvents();
       // setSearchWidgets();
        //setColorPicker();
        CalciteMapsArcGISSupport.setPopupPanelSync(app2.mapView);
        CalciteMapsArcGISSupport.setPopupPanelSync(app2.sceneView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app2.searchWidgetNav);

    }

    //----------------------------------
    // View Tabs
    //----------------------------------

    function setTabEvents() {

        // Tab event
        query(".calcite-navbar li a[data-toggle='tab']").on("show.bs.tab", function (e) {
            // Views
            if (e.target.text.indexOf("Map") > -1) {
                syncViews(app2.sceneView, app2.mapView);
                app2.activeView = app2.mapView;
            } else {
                syncViews(app2.mapView, app2.sceneView);
                app2.activeView = app2.sceneView;
            }
            // Search
            syncSearch();
            // Hide popup - TODO
            app2.activeView.popup.set({
                visible: false
            });
        });

        // Views
        function syncViews(fromView, toView) {
            watchUtils.whenTrueOnce(fromView, "ready", function () {
                var viewPt = fromView.viewpoint.clone();
                fromView.container = null;
                if (fromView.type === "3d") {
                    toView.container = app2.mapDiv;
                } else {
                    toView.container = app2.sceneDiv;
                }
                toView.viewpoint = viewPt;
                toView.padding = fromView.padding;
            });
        }

        // Search
        function syncSearch() {
            app2.searchWidgetNav.view = app2.activeView;
            app2.searchWidgetPanel.view = app2.activeView;
            app2.searchWidgetSettings.view = app2.activeView;
            // Sync
            if (app2.searchWidgetNav.selectedResult) {
                app2.searchWidgetNav.search(app2.searchWidgetNav.selectedResult.name);
            }
            if (app2.searchWidgetPanel.selectedResult) {
                app2.searchWidgetPanel.search(app2.searchWidgetPanel.selectedResult.name);
            }
        }
    }

    //----------------------------------
    // Basemaps
    //----------------------------------

    function setBasemapEvents() {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel2, #settingsSelectBasemap2").on("change", function (e) {
            app2.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app2.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app2.mapView.map.basemap = app2.basemapSelected;
            app2.sceneView.map.basemap = app2.basemapSelectedAlt;
        }

    }

    //----------------------------------
    // Search Widgets
    //----------------------------------

    function setSearchWidgets() {

        //TODO - Search Nav + Panel (detach/attach)
        app2.searchWidgetNav = createSearchWidget("searchNavDiv", true);
        app2.searchWidgetPanel = createSearchWidget("searchPanelDiv", true);
        app2.searchWidgetSettings = createSearchWidget("settingsSearchDiv", false);

        // Create widget
        function createSearchWidget(parentId, showPopup) {
            var search = new Search({
                viewModel: {
                    view: app2.activeView,
                    showPopupOnSelect: showPopup,
                    highlightEnabled: false,
                    maxSuggestions: 20
                },
            }, parentId);
            return search;
        }
    }

    //----------------------------------
    // Colorpicker Widget
    //----------------------------------

    function setColorPicker() {
        app2.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv2");
    }

    //----------------------------------
    // Toggle nav
    //----------------------------------
    // query("#calciteToggleNavbar").on("click", function(e) {
    //   var padding;
    //   if (query(".calcite-nav-hidden").length > 0) { // hidden
    //     //app.panelSettings.setLayout(app.panelSettings.activeLayout, true);
    //     //query(".calcite-panels .panel.in").collapse("hide");
    //   } else {
    //     //app.panelSettings.setLayout(app.panelSettings.activeLayout, false);
    //   }
    //   query(".calcite-dropdown").removeClass("open");
    //   query(".calcite-dropdown-toggle").removeClass("open");
    // });

    //----------------------------------
    // Manual show/hide menu dropdown (slide)
    //----------------------------------

    // query(".dropdown-toggle").on('click', function (e) {
    //   // Show dropdown nav
    //   query(this).parent().toggleClass("open");
    //   // Menu animcation
    //   query(".calcite-dropdown-toggle").toggleClass("open");
    // });

});