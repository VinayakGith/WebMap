// GeoServer WMS URL
const geoServerUrl = 'http://192.168.98.125:8080/geoserver/wms';

// Create the map
const map = new ol.Map({
    target: 'map',
    layers: [
        // Base map from OpenStreetMap
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),

        // GeoServer WMS Layer
        new ol.layer.Image({
            source: new ol.source.ImageWMS({
                url: geoServerUrl,
                params: {
                    'LAYERS': 'india:India_state_taluka', // Replace with your actual workspace:layer
                    'TILED': true
                },
                ratio: 1,
                serverType: 'geoserver'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([78.9629, 20.5937]), // Center on India
        zoom: 6
    })
});
