var app, app2, app3;

require([
  // ArcGIS
  "dojo/has",
  "esri/config",
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/geometry/Point",
  "esri/geometry/SpatialReference",
  "esri/geometry/coordinateFormatter",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/widgets/Search",
  "esri/widgets/ScaleBar",
  "esri/widgets/Popup",
  "esri/widgets/ColorPicker",
  "esri/widgets/FeatureForm",
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
], function (has, esriConfig,Map, FeatureLayer, Point, SpatialReference, coordinateFormatter, MapView, Graphic, Search, ScaleBar, Popup, ColorPicker, 
        FeatureForm, watchUtils, query, domClass, dom, on, CalciteMapsSettings, CalciteMapsArcGISSupport, PanelSettings
        ) {

    if (!has("dojo-built")) {
        esriConfig.workers.loaderConfig = {
            paths: {
            "esri": "../arcgis-js-api",
            "dstore": "../dojo-dstore"
            }
        };
    }

    let editFeature, highlight;

    app1 = {
        zoom: 2,
        lonlat: [1.393, 46.525],
        mapView: null,
        mapDiv: "mapViewDiv",
        mapFL: null,
        vectorLayer: null,
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "streets",
        basemapSelectedAlt: "streets",
        webmap: null,
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
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null,
        layers:[]
    }
    app2 = {
        zoom: 2,
        lonlat: [1.393, 46.525],
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
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null,
        layers: []
    }

    app3 = {
        zoom: 8,
        lonlat: [3.98138, 43.67888],
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
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null,
        layers: []
    }


    //----------------------------------
    // App
    //----------------------------------

    initializeMapViews(app1);
    initializeAppUI(app1);
    initializeAppSettings(app1);
    initializeWidgets(app1);

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
    synchronizeMap(app1, app2);
    synchronizeMap(app2, app3);

    //----------------------------------
    // Map View
    //----------------------------------

    function initializeMapViews(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'streets'
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions)
        });


        // Set active view
        app.activeView = app.mapView;

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
            basemap: 'national-geographic'
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions)
        });


        // Set active view
        app.activeView = app.mapView;

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
            basemap: 'satellite'
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions)
        });


        // Set active view
        app.activeView = app.mapView;

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
            app.panelSettings.setWidgetPosition(app.mapView, "zoom", "none", 1);
        });

        // Panel widgets
        //app.panelSettings.setWidgetPosition(app.mapView, "legend", "top-left", 0, "legendDiv");
        app.panelSettings.setWidgetPosition(app.mapView, "layerlist", "top-left", 0, "layerlistDiv");
       // app.panelSettings.setWidgetPosition(app.mapView, "print", "top-left", 0, "printDiv");

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
        setBasemapEvents(app);
        //setSearchWidgets(app);
        setColorPicker(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI2(app) {
        // App UI
        setBasemapEvents2(app);
        //setSearchWidgets(app);
        setColorPicker2(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI3(app) {
        // App UI
        setBasemapEvents3(app);
        setSearchWidgets(app);
        setColorPicker3(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

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
        }

    }

    //----------------------------------
    // Search Widgets
    //----------------------------------

    function setSearchWidgets(app) {

        

        //TODO - Search Nav + Panel (detach/attach)
        app.searchWidgetSettings = createSearchWidget("settingsSearchDiv", false);

        // Create widget
        function createSearchWidget(parentId, showPopup) {
            var search = new Search({
                viewModel: {
                    view: app.activeView,
                    popupEnabled: showPopup,
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
        }, "colorPickerDiv");
    }

    function setColorPicker2(app) {
        app.colorPickerWidget = new ColorPicker({
        }, "colorPickerDiv2");
    }

    function setColorPicker3(app) {
        app.colorPickerWidget = new ColorPicker({
        }, "colorPickerDiv3");
    }

    //----------------------------------
    // Scale Bar Widget
    //----------------------------------
    function setScaleBar(app) {
        app.scaleBar = new ScaleBar({
            view: app.mapView,
            unit: "metric",
            style: 'ruler'
        });

        app.mapView.ui.add(app.scaleBar, {
            position: "bottom-right"
        });
    }




    //----------------------------------
    // Synchronize maps
    //----------------------------------

    
    function synchronizeMap(app, app2) {

       app.mapView.when(function () {
            // Update the overview extent whenever the MapView extent changes
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
               
                var extent = app2.mapView.extent;

                app.mapView.when(function () {

                    var bottomLeft = app.mapView.toScreen(extent.xmin, extent.ymin);
                    var topRight = app.mapView.toScreen(extent.xmax, extent.ymax);
                    addPolygonExtent(extent);
                });


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

    //----------------------------------
    // copy Layer 
    //----------------------------------
   
    $('#syncButton').off("click").on("click", function () {

        var layers = app3.webmap.layers.items;

        app1.webmap.removeAll();
        app2.webmap.removeAll();

        layers.forEach(function (lyr) {
            addPoint(app2, lyr.featureform.feature.geometry.x, lyr.featureform.feature.geometry.y, lyr.featureform.feature.geometry.spatialReference, lyr.featureform.feature.attributes.toponyme);
            addPoint(app1, lyr.featureform.feature.geometry.x, lyr.featureform.feature.geometry.y, lyr.featureform.feature.geometry.spatialReference, lyr.featureform.feature.attributes.toponyme);

        });

    });


    //----------------------------------
    // Add Map Point 
    //----------------------------------

    // Listen for when a result is selected
    app3.searchWidgetSettings.on("select-result", function (event) {

        //off - on prevent event duplicated
        $('#addPointButton').off("click").on("click", function () {

            if (event.result.key !== null) {

                addPoint(app3, event.result.feature.geometry.x, event.result.feature.geometry.y, event.result.feature.geometry.spatialReference);

            } else {
                console.error("event.mapPoint is not defined");
            }

        });


    });

    // With the lat long data click event and create feature
    $("#geoform").submit(function (event) {

        event.preventDefault();
        var latlon = $('#lat').val() + " " + $('#long').val();
        var sr = new SpatialReference($('#epsg').val());

        coordinateFormatter.load().then(function () {
            var point = coordinateFormatter.fromLatitudeLongitude(latlon, sr);

            if (point !== null) {

                addPoint(app3, point.x, point.y, point.spatialReference);
            }

        });
    });

    // With the XY data click event and create feature
    $("#xyform").submit(function (event) {

        event.preventDefault();

        var x = $('#coordx').val();
        var y = $('#coordy').val();
        var sr = new SpatialReference($('#epsg2').val());

        addPoint(app3, x, y, sr);

    });


    // With the CSV file data click event and create features

    $("#fileform").submit(function (event) {

        $("#status").empty().text("File is uploading...");
        event.preventDefault();
        var sr = JSON.parse('{ "wkid": ' + $('#epsg3').val() + '}');

        $(this).ajaxSubmit({

            error: function (xhr) {
                status('Error: ' + xhr.status);
            },

            success: function (response) {

                $("#status").empty().text("File uploaded");

                var res = JSON.parse(response);
                var x = null;
                var y = null;
                for (r in res) {
                    if (res[r].hasOwnProperty('x')) { x = res[r].x }
                    else if (res[r].hasOwnProperty('longitude')) { x = res[r].longitude }
                    else if (res[r].hasOwnProperty('Longitude')) { x = res[r].Longitude }
                    else if (res[r].hasOwnProperty('long')) { x = res[r].long }
                    else if (res[r].hasOwnProperty('X')) { x = res[r].X }
                    else { alert("No field x, X, longitude, Longitude or long found"); }

                    if (res[r].hasOwnProperty('y')) { y = res[r].y }
                    else if (res[r].hasOwnProperty('latitude')) { y = res[r].latitude }
                    else if (res[r].hasOwnProperty('Latitude')) { y = res[r].Latitude }
                    else if (res[r].hasOwnProperty('lat')) { y = res[r].lat }
                    else if (res[r].hasOwnProperty('Y')) { y = res[r].Y }
                    else { alert("No field y, Y, latitude, Latitude or lat found"); }

                    addPoint(app3, x, y, sr);
                }
            }
        });
        return false;
    });


    //----------------------------------
    // add Point 
    //----------------------------------
    function addPoint(app, x, y, sr, toponyme) {

        var pointGeom = new Point({
            x: x,
            y: y,
            spatialReference: sr
        });
        // variable object id
        var id = Date.now().toString();
        var oid = parseInt(id.substr(id.length - 5));

        var features = [
     {
         geometry: pointGeom,
         attributes: {
             ObjectID: oid,
             toponyme: toponyme,
             date: Date.now(),
             client: "UAL1"
         }
     }
        ];

        var fields = [
            {
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
            },
            {
                name: "toponyme",
                alias: "toponyme",
                type: "string"
            }, {
                name: "date",
                alias: "date",
                type: "date"
            }, {
                name: "client",
                alias: "client",
                type: "string"
            }, {
                name: "rapport",
                alias: "rapport",
                type: "string"
            }, {
                name: "titre",
                alias: "titre",
                type: "string"
            }, {
                name: "n_affaire",
                alias: "n_affaire",
                type: "string"
            }, {
                name: "theme",
                alias: "theme",
                type: "string"
            }, {
                name: "prestation",
                alias: "prestation",
                type: "string"
            }, {
                name: "type_clien",
                alias: "type_clien",
                type: "string"
            }, {
                name: "filiere",
                alias: "filiere",
                type: "string"
            }, {
                name: "id_aff",
                alias: "id_aff",
                type: "string"
            }, {
                name: "titre_aff",
                alias: "titre_aff",
                type: "string"
            }];

        var renderer = {
            type: "simple",
            symbol: {
                type: "picture-marker",
                url: "img/pointIcon.png",
                width: "15px",
                height: "15px"
            }
        };

        const labelClass = {
            // autocasts as new LabelClass()
            symbol: {
                type: "text",  // autocasts as new TextSymbol()
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                font: {  // autocast as new Font()
                    family: "playfair-display",
                    size: 12,
                    weight: "bold"
                }
            },
            labelPlacement: "above-right",
            labelExpressionInfo: {
                expression: "$feature.toponyme"
            }
        };

        var layer = new FeatureLayer({
            title: "Project" + oid,
            source: features,
            fields: fields,
            objectIdField: "ObjectID",
            renderer: renderer,
            id: "Project" + oid,
            labelingInfo: [labelClass]
        });


        app.webmap.add(layer);
        app.layers.push(layer);

        if (app === app3) {

            setFeatureForm(app, layer);
        }

        layer.when(function () {
            app.mapView.goTo(layer.fullExtent);
        });
        
    }

    //----------------------------------
    // set Feature form by selected point 
    //----------------------------------
    

    // Check if the user clicked on the existing feature
    selectExistingFeature();

    function selectExistingFeature() {

        app3.mapView.on("click", function (event) {
            // clear previous feature selection
            unselectFeature();
            toggleEditingDivs("block", "none");

            app3.mapView.hitTest(event).then(function (response) {
                // If a user clicks on an project feature, select the feature.
                var layer = response.results[0].graphic.layer;

                if (response.results[0].graphic && response.results[0].graphic.layer.title == layer.title) {


                   

                    if (addFeatureDiv.style.display === "block") {
                        toggleEditingDivs("none", "block");
                    }                   
                    var id = setLayerActive(layer);
                    selectFeature(response.results[0].graphic.attributes[layer.objectIdField], id.id);
                    


                    
                }
            });

        });

        function setLayerActive(layer) {
            var returnedObject = {};
            for (var i = 0; i < app3.layers.length; i++) {
                if (app3.layers[i] === layer) {
                    app3.layers[i].active = true;
                    id = i;  
                }
                else {
                    app3.layers[i].active = false;
                }
            }
            returnedObject["id"] = id;
            
            return returnedObject;
        }

       
        

    // Highlights the clicked feature and display
    // the feature form with the incident's attributes.
    function selectFeature(objectId, idLyr) {

        // query feature from the server
        app3.layers[idLyr].queryFeatures({
            objectIds: [objectId],
            outFields: ["*"],
            returnGeometry: true
        }).then(function (results) {

            if (results.features.length > 0) {
                editFeature = results.features[0];



                // display the attributes of selected feature in the form
                app3.layers[idLyr].featureform.feature = editFeature;

                app3.mapView.whenLayerView(editFeature.layer).then(function () {

                    //set id form
                    var formid = "EFF" + idLyr;
                    for (var i = 0; i < $("#formDiv").children().length ; i++) {
                        $("#formDiv").children()[i].id = "EFF" + i;
                    }
                    //set up form view
                    if ($("#formDiv").children()) {
                        for (var i = 0; i < $("#formDiv").children().length ; i++) {
                            if ($("#formDiv").children()[i].id == formid) {
                                $("#formDiv").children()[i].style.display = "block";
                            }
                            else { $("#formDiv").children()[i].style.display = "none"; }
                        }
                    }

                });

                

                // highlight the feature on the view
                app3.mapView.whenLayerView(editFeature.layer).then(function (layerView) {

                    highlight = layerView.highlight(editFeature);
                });
            }
        });

        setSubmitForm(idLyr);
    }

        //set submit options
    function setSubmitForm(idLyr) {

        // Listen to the feature form's submit event.
        // Update feature attributes shown in the form.
        app3.layers[idLyr].featureform.on("submit", function () {

            if (editFeature) {
                // Grab updated attributes from the form.
                var updated = app3.layers[idLyr].featureform.getValues();

                // Loop through updated attributes and assign
                // the updated values to feature attributes.
                Object.keys(updated).forEach(function (name) {
                    editFeature.attributes[name] = updated[name];
                });

                // Setup the applyEdits parameter with updates.
                const edits = {
                    updateFeatures: [editFeature]
                };
                applyEditsToIncidents(edits);
            }
        });

        // update point edits to map
        function applyEditsToIncidents(params) {
            //unselectFeature();
            app3.layers[idLyr].applyEdits(params).then(function (editsResult) {
                // Get the objectId of the newly added feature.
                // Call selectFeature function to highlight the new feature.
                if (editsResult.addFeatureResults.length > 0 || editsResult.updateFeatureResults.length > 0) {
                    unselectFeature();
                    let objectId;
                    if (editsResult.addFeatureResults.length > 0) {
                        objectId = editsResult.addFeatureResults[0].objectId;
                    }
                    else {
                        app3.layers[idLyr].featureform.feature = null;
                        objectId = editsResult.updateFeatureResults[0].objectId;
                    }
                    selectFeature(objectId, idLyr);
                    if (addFeatureDiv.style.display === "block") {
                        toggleEditingDivs("none", "block");
                    }
                }
                    // show off if user deleted a feature
                else if (editsResult.deleteFeatureResults.length > 0) {
                    toggleEditingDivs("block", "none");
                }
            })
            .catch(function (error) {
                console.log("===============================================");
                console.error("[ applyEdits ] FAILURE: ", error.code, error.name,
                  error.message);
                console.log("error = ", error);
            });

        }

        // Update attributes of the selected feature.
        $('#btnUpdate').off("click").on("click", function () {
            // Fires feature form's submit event.
            app3.layers[idLyr].featureform.submit();
        });
        // Delete the selected feature. ApplyEdits is called
        // with the selected feature to be deleted.
        $("#btnDelete").off("click").on("click", function () {
            // setup the applyEdits parameter with deletes.
            const edits = {
                deleteFeatures: [editFeature]
            };

            applyEditsToIncidents(edits);

            app3.webmap.remove(app3.layers[idLyr]);
        });

        $("#btnAddBD").off("click").on("click", function () {
            // add point to database
            app3.layers[idLyr].featureform.submit();

            var objForm = app3.layers[idLyr].featureform.getValues();
            var latForm = app3.layers[idLyr].featureform.feature.geometry.latitude;
            var longForm = app3.layers[idLyr].featureform.feature.geometry.longitude;

            //fields
            var keys = Object.keys(objForm);
            var fields = "";
            for (var i = 1; i < keys.length; i++) {
                fields = fields + keys[i] + ",";
            }
            fields = fields + "lat,long";

            //values
            var valObj = Object.values(objForm);
            var values = "";
            for (var i = 1; i < valObj.length; i++) {
                if (i !== 2) {
                    values = values + "'" + valObj[i] + "'" + ",";
                } else {
                    values = values + "to_timestamp(" + valObj[i] / 1000 + ")" + ",";
                }
            }
            values = values + latForm + ", " + longForm;

            var resultData = $.ajax({
                url: '/pool',
                data: 'fields=' + fields + '&values=' + values,
                success: function (result) {
                    alert(result)
                },
                error: function (xhr) {
                    alert(xhr.statusText)
                }

            });

        });

    }
        // input boxes for the attribute editing
    const addFeatureDiv = document.getElementById("addFeatureDiv");
    const attributeEditing = document.getElementById("featureUpdateDiv");

        // Controls visibility of addFeature or attributeEditing divs
    function toggleEditingDivs(addDiv, attributesDiv) {
        addFeatureDiv.style.display = addDiv;
        attributeEditing.style.display = attributesDiv;

        document.getElementById("updateInstructionDiv").style.display = addDiv;
    }

        // Function to unselect features
    function unselectFeature() {
        if (highlight) {
            highlight.remove();
        }
    }
}



    //----------------------------------
    // FeatureForm Widget
    //----------------------------------
    function setFeatureForm(app, layer) {

            var id = null;
            for (var i = 0; i < app.layers.length; i++) {
                if (app.layers[i] === layer) {
                    app.layers[i].featureform = null;
                    id = i;
                }
            }

        app.layers[id].featureform = new FeatureForm({
            container: "formDiv",
            layer: layer,
            fieldConfig: [
                  {
                      name: "toponyme",
                      label: "Toponyme"
                  },
                  {
                      name: "client",
                      label: "Client"
                  }, {
                      name: "date",
                      label: "Date"
                  }, {
                      name: "rapport",
                      label: "Rapport"
                  }, {
                      name: "titre",
                      label: "Titre"
                  }, {
                      name: "n_affaire",
                      label: "Nombre Affaire"
                  }, {
                      name: "theme",
                      label: "Theme"
                  }, {
                      name: "prestation",
                      label: "Prestation"
                  }, {
                      name: "type_clien",
                      label: "Type Client"
                  }, {
                      name: "filiere",
                      label: "Filiere"
                  }, {
                      name: "id_aff",
                      label: "Id Affaire"
                  }, {
                      name: "titre_aff",
                      label: "Titre Affaire"
                  }
            ]
        });  
    }




    //----------------------------------
    // Print Map Widget
    //----------------------------------

    $("#printButton").on('click', function () {

        //screenShot();
        
        var carteJpg = new Object();
        carteJpg.map1 = new Object();
        carteJpg.map2 = new Object();
        carteJpg.map3 = new Object();

        //Arcgis ScreenShot
        app1.mapView.when(function () {
            var options = {
                format: 'jpg',
                quality: 100
            };
            app1.mapView.takeScreenshot(options).then(function (screenshot) {
                carteJpg.map1.dataImage = screenshot.dataUrl;
            });
        });

        app2.mapView.when(function () {
            var options = {
                format: 'jpg',
                quality: 100
            };
            app2.mapView.takeScreenshot(options).then(function (screenshot) {
                carteJpg.map2.dataImage = screenshot.dataUrl;
            });
        });

        app3.mapView.when(function () {
            var options = {
                format: 'jpg',
                quality: 100
            };
            app3.mapView.takeScreenshot(options).then(function (screenshot) {
                carteJpg.map3.dataImage = screenshot.dataUrl;
            });
        });

        //mapviews elements
        var mapViews = document.getElementsByClassName("esri-view");

        //Border elements



        //ScaleBar elements
        var scaleBars = document.getElementsByClassName("esri-scale-bar");

        html2canvas(scaleBars[0], { backgroundColor: null }).then(function (canvas) {
            carteJpg.map1.dataScalBar = canvas.toDataURL("image/png");

        });

        html2canvas(scaleBars[1], { backgroundColor: null }).then(function (canvas) {
            carteJpg.map2.dataScalBar = canvas.toDataURL("image/png");
        });

        html2canvas(scaleBars[2], { backgroundColor: null }).then(function (canvas) {
            carteJpg.map3.dataScalBar = canvas.toDataURL("image/png");

            exportToJpeg();
        });       


        //Export to jpeg
        function exportToJpeg() {

            //mapviews elements
            var mapViews = document.getElementsByClassName("esri-view");
            var mapContainer = document.getElementById("map-container");

            //get dimensions from html elements
            
            var dx = mapContainer.getBoundingClientRect().x + 1;
            var dy = mapContainer.getBoundingClientRect().y + 1;


            //dimensions
            carteJpg.map1.width = mapViews[0].getBoundingClientRect().width;
            carteJpg.map1.height = mapViews[0].getBoundingClientRect().height;
            carteJpg.map2.width = mapViews[1].getBoundingClientRect().width;
            carteJpg.map2.height = mapViews[1].getBoundingClientRect().height;
            carteJpg.map3.width = mapViews[2].getBoundingClientRect().width;
            carteJpg.map3.height = mapViews[2].getBoundingClientRect().height;

            //maps positions
            carteJpg.map1.x = mapViews[0].getBoundingClientRect().x - dx;
            carteJpg.map1.y = mapViews[0].getBoundingClientRect().y - dy;
            carteJpg.map2.x = mapViews[1].getBoundingClientRect().x - dx;
            carteJpg.map2.y = mapViews[1].getBoundingClientRect().y - dy;
            carteJpg.map3.x = mapViews[2].getBoundingClientRect().x - dx;
            carteJpg.map3.y = mapViews[2].getBoundingClientRect().y - dy;

            //scalebar positions
            carteJpg.map1.sx = scaleBars[0].getBoundingClientRect().x - dx;
            carteJpg.map1.sy = scaleBars[0].getBoundingClientRect().y - dy + 15;
            carteJpg.map2.sx = scaleBars[1].getBoundingClientRect().x - dx;
            carteJpg.map2.sy = scaleBars[1].getBoundingClientRect().y - dy + 15;
            carteJpg.map3.sx = scaleBars[2].getBoundingClientRect().x - dx;
            carteJpg.map3.sy = scaleBars[2].getBoundingClientRect().y - dy + 15;

            carteJpg.width = 682;
            carteJpg.height = 954;

            var canvas = document.getElementById('canvas');

            border1(carteJpg);
            border2(carteJpg);
            border3(carteJpg);

            if ($('#numViews').val()==3) {
            mergeImages([
                { src: carteJpg.border1, x: carteJpg.map1.x, y: carteJpg.map1.y },
                { src: carteJpg.map1.dataImage, x: carteJpg.map1.x + 1, y: carteJpg.map1.y + 1},
                { src: carteJpg.map1.dataScalBar, x: carteJpg.map1.sx, y: carteJpg.map1.sy },
                { src: carteJpg.border2, x: carteJpg.map2.x, y: carteJpg.map2.y},
                { src: carteJpg.map2.dataImage, x: carteJpg.map2.x+ 1, y: carteJpg.map2.y+1 },
                { src: carteJpg.map2.dataScalBar, x: carteJpg.map2.sx, y: carteJpg.map2.sy },
                { src: carteJpg.border3, x: carteJpg.map3.x, y: carteJpg.map3.y },
                { src: carteJpg.map3.dataImage, x: carteJpg.map3.x+1, y: carteJpg.map3.y +1},
                { src: carteJpg.map3.dataScalBar, x: carteJpg.map3.sx, y: carteJpg.map3.sy }
            ], {
                width: carteJpg.width,
                height: carteJpg.height
            })
            .then(function (b64) {
                //download image
                let a = document.createElement("a");
                a.href = b64;
                a.download = "carte.jpg";
                document.body.appendChild(a);
                a.click();
                a.remove();

            });
            } else if ($('#numViews').val() == 2) {
                mergeImages([
                { src: carteJpg.border2, x: carteJpg.map2.x, y: carteJpg.map2.y },
                { src: carteJpg.map2.dataImage, x: carteJpg.map2.x+1, y: carteJpg.map2.y +1},
                { src: carteJpg.map2.dataScalBar, x: carteJpg.map2.sx, y: carteJpg.map2.sy },
                { src: carteJpg.border3, x: carteJpg.map3.x, y: carteJpg.map3.y},
                { src: carteJpg.map3.dataImage, x: carteJpg.map3.x+1, y: carteJpg.map3.y +1},
                { src: carteJpg.map3.dataScalBar, x: carteJpg.map3.sx, y: carteJpg.map3.sy }
                            ], {
                                width: carteJpg.width,
                                height: carteJpg.height
                            })
            .then(function (b64) {
                //download image
                let a = document.createElement("a");
                a.href = b64;
                a.download = "carte.jpg";
                document.body.appendChild(a);
                a.click();
                a.remove();

            });
        } else if ($('#numViews').val() == 1) {
            mergeImages([
            { src: carteJpg.border3, x: carteJpg.map3.x, y: carteJpg.map3.y},
            { src: carteJpg.map3.dataImage, x: carteJpg.map3.x+1, y: carteJpg.map3.y +1},
            { src: carteJpg.map3.dataScalBar, x: carteJpg.map3.sx, y: carteJpg.map3.sy }
            ], {
                width: carteJpg.width,
                height: carteJpg.height
            })
        .then(function (b64) {
            //download image
            let a = document.createElement("a");
            a.href = b64;
            a.download = "carte.jpg";
            document.body.appendChild(a);
            a.click();
            a.remove();

        });
        }
        }


        function border1(carteJpg) {

            var ctx = document.getElementById('canvas').getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(1, 1);
            ctx.lineTo(carteJpg.map1.width + 1, 1);
            ctx.lineTo(carteJpg.map1.width + 1, carteJpg.map1.height + 1);
            ctx.lineTo(1, carteJpg.map1.height + 1);
            ctx.lineTo(1, 1);
            ctx.stroke();

            carteJpg.border1 = canvas.toDataURL();

        }

        function border2(carteJpg) {

            var ctx = document.getElementById('canvas').getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(1, 1);
            ctx.lineTo(carteJpg.map2.width + 1, 1);
            ctx.lineTo(carteJpg.map2.width + 1, carteJpg.map2.height + 1);
            ctx.lineTo(1, carteJpg.map2.height + 1);
            ctx.lineTo(1, 1);
            ctx.stroke();

            carteJpg.border2 = canvas.toDataURL();

        }


        function border3(carteJpg) {

            var canvas = document.getElementById('canvas');
            var ctx = document.getElementById('canvas').getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(1, 1);
            ctx.lineTo(carteJpg.map3.width + 1, 1);
            ctx.lineTo(carteJpg.map3.width + 1, carteJpg.map3.height + 1);
            ctx.lineTo(1, carteJpg.map3.height + 1);
            ctx.lineTo(1, 1);
            ctx.stroke();

            carteJpg.border3 = canvas.toDataURL();

        }
    });


});

