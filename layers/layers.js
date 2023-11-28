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
var format_1MileDiameterBuffer_1 = new ol.format.GeoJSON();
var features_1MileDiameterBuffer_1 = format_1MileDiameterBuffer_1.readFeatures(json_1MileDiameterBuffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MileDiameterBuffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MileDiameterBuffer_1.addFeatures(features_1MileDiameterBuffer_1);
var lyr_1MileDiameterBuffer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1MileDiameterBuffer_1, 
                style: style_1MileDiameterBuffer_1,
                interactive: false,
                title: '<img src="styles/legend/1MileDiameterBuffer_1.png" /> 1-Mile Diameter Buffer'
            });
var format_TargetTradeAreas_2 = new ol.format.GeoJSON();
var features_TargetTradeAreas_2 = format_TargetTradeAreas_2.readFeatures(json_TargetTradeAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas_2.addFeatures(features_TargetTradeAreas_2);
var lyr_TargetTradeAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas_2, 
                style: style_TargetTradeAreas_2,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas_2.png" /> Target Trade Areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1MileDiameterBuffer_1.setVisible(true);lyr_TargetTradeAreas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1MileDiameterBuffer_1,lyr_TargetTradeAreas_2];
lyr_1MileDiameterBuffer_1.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_TargetTradeAreas_2.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_1MileDiameterBuffer_1.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_TargetTradeAreas_2.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_1MileDiameterBuffer_1.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'no label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_2.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'inline label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});