// AIzaSyDifz7n-IOW_1S_k9ZPF4kdkRNPN1Pioxg

jQuery(document).ready(function($) {

    // genreate map
    // createGmap();



    function xashMap(settingObj) {

        /**
		 * Defaults
		 * https://developers.google.com/maps/documentation/javascript/controls
		 * 
		 *  disableDefaultUI:boolean
		 * 	zoomControl: boolean,
  			mapTypeControl: boolean,
  			scaleControl: boolean,
  			streetViewControl: boolean,
  			rotateControl: boolean,
  			fullscreenControl: boolean

		 */

        /**
         * Options
         * Market
         * marker: location
         * marker title
         * marker info
         * marker image
         */







        var self = this,
            map;

        this.settingObj = settingObj || {};

        // Default Props
        this.center,
        this.marker,
        this.control,
        this.zoom,
        this.icon,
        this.info_width,
        this.style,
        this.target;


        this.icon = "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png";



       




    } // xashMap



    xashMap.prototype.init = function () {



		 // default settings
		 this.settings = {}

		 this.settings.center = this.center || { lat: -33, lng: 151 };
		 this.settings.control = {};
		 this.settings.zoom = this.zoom || 8;
		 this.settings.styles = this.style;
		 this.settings.target = this.target || "map-canvas";
 
 
 
 
		 ///merge Objects
		 this.options = obj_merge(this.settings, this.settingObj);

		
		console.log(this.style);
        console.log(this.settings);


        //return;


        var map = new google.maps.Map(document.getElementById(self.target), options);


        // Marker
        if (self.marker) {

            // Make an array
            if (self.constructor != Array) {
                var tmp_marker = self.marker;

                // init empty array;
                self.marker = [];
                self.marker.push(tmp_marker);
            }

            for (var i = 0; i < self.marker.length; i++) {

                var _current_map_item = self.marker[i];
                if (!_current_map_item.hasOwnProperty("icon")) {
                    _current_map_item.icon = self.icon;
                }


                // Generate markers
                var marker = new google.maps.Marker({
                    position: _current_map_item.location,
                    map: map,
                    title: _current_map_item.title,
                    icon: _current_map_item.icon
                });



                // Add Info Window
                if (_current_map_item.hasOwnProperty('info')) {

                    var contentString = _current_map_item.info;


                    var infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: self.info_width
                    });


                    // Add listener
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });

                } //

            }

        }
    };








    // closure issue in gmap callback., so made it global
   

    initMap = function() {

        var myMap = new xashMap(); 




        myMap.marker = [{
            location: { lat: 40.674, lng: -73.945 },
            title: "Demo",
            info: "<h1>Testing Place"
        }];



        myMap.style = [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ];



        myMap.init();


    };





    /**
     * 
     * @param {Obj} obj1 
     * @param {Object} obj2 
     * @returns {Object}
     */

    function obj_merge(obj1, obj2) {

        var obj_merged = {};

        for (var attrname in obj1) { obj_merged[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj_merged[attrname] = obj2[attrname]; }

        return obj_merged;

    }




    // Helpers
    function createGmap(callback, key) {
        callback = callback || 'initMap';
        key = key || "AIzaSyASDrgyKgTH1OAjKIKRrx9Z0MH7Agnx11Q";
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.id = "gmap-script";
        s.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=" + callback;

        $("head").append(s);
    }


    initMap();

});

// Initialize and add the map