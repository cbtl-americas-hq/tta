var wms_layers = [];


    var projection_Streets_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Streets_0 = projection_Streets_0.getExtent();
    var size_Streets_0 = ol.extent.getWidth(projectionExtent_Streets_0) / 256;
    var resolutions_Streets_0 = new Array(14);
    var matrixIds_Streets_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Streets_0[z] = size_Streets_0 / Math.pow(2, z);
        matrixIds_Streets_0[z] = z;
    }
    var lyr_Streets_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/iselasoria/cllv87835011501qb9qfeg9cu/wmts?access_token=pk.eyJ1IjoiaXNlbGFzb3JpYSIsImEiOiJjbGl1dG81djIwMXQwM2xua3JjeW41M3ZjIn0.zLgXnQN9vz8LSI8Eg6Ud9g",
    attributions: ' ',
                                "layer": "cllv87835011501qb9qfeg9cu",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Streets_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Streets_0),
                resolutions: resolutions_Streets_0,
                matrixIds: matrixIds_Streets_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Streets",
                            opacity: 1.0,
                            
                            
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

lyr_Streets_0.setVisible(true);lyr_1MileDiameterBuffer_1.setVisible(true);lyr_TargetTradeAreas_2.setVisible(true);
var layersList = [lyr_Streets_0,lyr_1MileDiameterBuffer_1,lyr_TargetTradeAreas_2];
lyr_1MileDiameterBuffer_1.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_TargetTradeAreas_2.set('fieldAliases', {'temp_id': 'temp_id', 'new_area': 'new_area', 'storeid': 'storeid', 'eff_score': 'eff_score', 'geo_id': 'geo_id', });
lyr_1MileDiameterBuffer_1.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_TargetTradeAreas_2.set('fieldImages', {'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'storeid': 'TextEdit', 'eff_score': 'TextEdit', 'geo_id': 'TextEdit', });
lyr_1MileDiameterBuffer_1.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'no label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_2.set('fieldLabels', {'temp_id': 'no label', 'new_area': 'no label', 'storeid': 'no label', 'eff_score': 'inline label', 'geo_id': 'no label', });
lyr_TargetTradeAreas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});