/**
 * Created by fission on 10-May-16.
 */
/**
 * Created by fission on 09-May-16.
 */


(function () {
    'use strict';

    angular
        .module('pip')
        .controller('testController', function ($scope, $auth, $stateParams, store) {
            /*var token =$stateParams.token;
             var myObj = {};
             store.set('obj', myObj);*/

            var map = L.map('map').setView([39.5, -0.5], 5);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'shivashankargalla.053g1ooe',
                accessToken: 'pk.eyJ1Ijoic2hpdmFzaGFua2FyZ2FsbGEiLCJhIjoiY2lvOWt3MHpsMDM3aXcxa3F4ODBvNHZ1YSJ9.XHZnyMQnfdeLV_GR_8d1dw'
            }).addTo(map);

            map.locate({setView: true, maxZoom: 16});

            var GoogleSearch = L.Control.extend({
                onAdd: function() {
                    var element = document.createElement("input");

                    element.id = "searchBox";

                    return element;
                }
            });
            (new GoogleSearch).addTo(map);
            var input = document.getElementById("searchBox");
            var searchBox = new google.maps.places.SearchBox(input);
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                var group = L.featureGroup();

                places.forEach(function(place) {

                    // Create a marker for each place.
                    console.log(places);
                    console.log(place.geometry.location.lat() + " / " + place.geometry.location.lng());
                    var marker = L.marker([
                        place.geometry.location.lat(),
                        place.geometry.location.lng()
                    ]);
                    group.addLayer(marker);
                });

                group.addTo(map);
                map.fitBounds(group.getBounds());

            });

            function onLocationFound(e) {
                var radius = e.accuracy / 2;
                L.marker(e.latlng).addTo(map)
                    .bindPopup("You are within " + radius + " meters from this point").openPopup();
                L.circle(e.latlng, radius).addTo(map);
            }

            map.on('locationfound', onLocationFound);

            function onLocationError(e) {
                alert(e.message);
            }

            map.on('locationerror', onLocationError);
            map.on('click', function(e) {
                //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)

            });


        });

})();
