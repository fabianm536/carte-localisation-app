var app, app2, app3;

require([
  // ArcGIS
  "esri/Map",
  "esri/Basemap",
  "esri/WebMap",
  "esri/layers/VectorTileLayer",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/Graphic",
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
], function (Map, Basemap, Webmap, VectorTileLayer, MapView, SceneView, Graphic,Search, Popup, Home, Legend, ColorPicker,
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
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
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
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
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

    app3 = {
        zoom: 12,
        lonlat: [1.393, 46.525],
        mapView: null,
        mapDiv: "mapViewDiv3",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv3",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "gray",
        basemapSelectedAlt: "gray",
        webmap: null,
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
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

    initializeMapViews(app);
    initializeAppUI(app);
    initializeAppSettings(app);
    initializeWidgets(app);

    //----------------------------------
    // App2
    //----------------------------------

    initializeMapViews2(app2);
    initializeAppUI2(app2);
    initializeAppSettings(app2);
    initializeWidgets(app2);

    //----------------------------------
    // App3
    //----------------------------------

    initializeMapViews3(app3);
    initializeAppUI3(app3);
    initializeAppSettings(app3);
    initializeWidgets(app3);

    //synchronizeMaps
    synchronizeMap(app, app2);
    synchronizeMap(app2, app3);

    //----------------------------------
    // Map and Scene View
    //----------------------------------

    function initializeMapViews(app) {
        // Webmap
        app.webmap = new Map({
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

    function initializeMapViews2(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'national-geographic',
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

    function initializeMapViews3(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'satellite',
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

    function initializeWidgets(app) {

        app.mapView.when(function () {
            //app.panelSettings.setWidgetPosition(app.mapView, "home", "top-left", 0);
            app.panelSettings.setWidgetPosition(app.mapView, "zoom", "none", 1);
            //app.panelSettings.setWidgetPosition(app.mapView, "compass", "top-left");
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

    function initializeAppSettings(app) {
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
    function initializeAppUI(app) {
        // App UI
        setTabEvents(app);
        setBasemapEvents(app);
        //setSearchWidgets(app);
        setColorPicker(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.sceneView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI2(app) {
        // App UI
        setTabEvents(app);
        setBasemapEvents2(app);
        //setSearchWidgets(app);
        setColorPicker2(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.sceneView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI3(app) {
        // App UI
        setTabEvents(app);
        setBasemapEvents3(app);
        setSearchWidgets(app);
        setColorPicker3(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.sceneView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    //----------------------------------
    // View Tabs
    //----------------------------------

    function setTabEvents(app) {

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
            syncSearch(app);
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
        function syncSearch(app) {
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

    function setBasemapEvents(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    function setBasemapEvents2(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel2").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    function setBasemapEvents3(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel3").on("change", function (e) {
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

    function setSearchWidgets(app) {

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

    function setColorPicker(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv");
    }

    function setColorPicker2(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv2");
    }

    function setColorPicker3(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv3");
    }
    //----------------------------------
    // Synchronize maps
    //----------------------------------

    
    function synchronizeMap(app, app2) {

       app.mapView.when(function () {
            // Update the overview extent whenever the MapView or SceneView extent changes
            app2.mapView.watch("extent", updateOverviewExtent);
            app.mapView.watch("extent", updateOverviewExtent);

            // Update the minimap overview when the main view becomes stationary
            watchUtils.when(app2.mapView, "stationary", updateOverview);

            function updateOverview() {
                // Animate the MapView to a zoomed-out scale so we get a nice overview.
                // We use the "progress" callback of the goTo promise to update
                // the overview extent while animating
                app.mapView.goTo({
                    center: app2.mapView.center,
                    scale: app2.mapView.scale * 4 * Math.max(app2.mapView.width /
                      app.mapView.width,
                      app2.mapView.height / app.mapView.height)
                });
            }

            function updateOverviewExtent() {
                // Update the overview extent by converting the SceneView extent to the
                // MapView screen coordinates and updating the extentDiv position.
                var extent = app2.mapView.extent;

                var bottomLeft = app.mapView.toScreen(extent.xmin, extent.ymin);
                var topRight = app.mapView.toScreen(extent.xmax, extent.ymax);

                addPolygonExtent(extent);
            }
        });

       function addPolygonExtent(extent) {

           app.mapView.graphics.removeAll();


           // Create a polygon geometry
           var polygon = {
               type: "polygon", // autocasts as new Polygon()
               rings: [
                 [extent.xmin, extent.ymin],
                 [extent.xmin, extent.ymax],
                 [extent.xmax, extent.ymax],
                 [extent.xmax, extent.ymin]
               ],
               spatialReference: { wkid: 102100 }
           };

           // Create a symbol for rendering the graphic
           var fillSymbol = {
               type: "simple-fill", // autocasts as new SimpleFillSymbol()
               color: [227, 139, 79, 0.0],
               outline: { // autocasts as new SimpleLineSymbol()
                   color: [255, 0, 0],
                   width: 1
               }
           };

           // Add the geometry and symbol to a new graphic
           var polygonGraphic = new Graphic({
               geometry: polygon,
               symbol: fillSymbol
           });

           // Add the graphics to the view's graphics layer
           app.mapView.graphics.add(polygonGraphic);
       }


    }

});