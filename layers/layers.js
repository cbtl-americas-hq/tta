var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CurrentOperationalStores_1 = new ol.format.GeoJSON();
var features_CurrentOperationalStores_1 = format_CurrentOperationalStores_1.readFeatures(json_CurrentOperationalStores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentOperationalStores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentOperationalStores_1.addFeatures(features_CurrentOperationalStores_1);
var lyr_CurrentOperationalStores_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurrentOperationalStores_1, 
                style: style_CurrentOperationalStores_1,
                interactive: true,
                title: '<img src="styles/legend/CurrentOperationalStores_1.png" /> Current Operational Stores'
            });
var format_1MileDiameterBuffer_2 = new ol.format.GeoJSON();
var features_1MileDiameterBuffer_2 = format_1MileDiameterBuffer_2.readFeatures(json_1MileDiameterBuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MileDiameterBuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MileDiameterBuffer_2.addFeatures(features_1MileDiameterBuffer_2);
var lyr_1MileDiameterBuffer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1MileDiameterBuffer_2, 
                style: style_1MileDiameterBuffer_2,
                interactive: false,
                title: '<img src="styles/legend/1MileDiameterBuffer_2.png" /> 1-Mile Diameter Buffer'
            });
var format_TargetTradeAreas_3 = new ol.format.GeoJSON();
var features_TargetTradeAreas_3 = format_TargetTradeAreas_3.readFeatures(json_TargetTradeAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas_3.addFeatures(features_TargetTradeAreas_3);
var lyr_TargetTradeAreas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas_3, 
                style: style_TargetTradeAreas_3,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas_3.png" /> Target Trade Areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CurrentOperationalStores_1.setVisible(true);lyr_1MileDiameterBuffer_2.setVisible(true);lyr_TargetTradeAreas_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CurrentOperationalStores_1,lyr_1MileDiameterBuffer_2,lyr_TargetTradeAreas_3];
lyr_CurrentOperationalStores_1.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_1MileDiameterBuffer_2.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_TargetTradeAreas_3.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_CurrentOperationalStores_1.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_1MileDiameterBuffer_2.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_TargetTradeAreas_3.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_CurrentOperationalStores_1.set('fieldLabels', {'id': 'no label', 'storeid': 'header label', 'store_name': 'inline label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_1MileDiameterBuffer_2.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'no label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_3.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'inline label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});