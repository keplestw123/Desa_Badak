ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.399850, -7.173413, 109.401044, -7.172532]);
var wms_layers = [];

var format_polydesa_0 = new ol.format.GeoJSON();
var features_polydesa_0 = format_polydesa_0.readFeatures(json_polydesa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_polydesa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polydesa_0.addFeatures(features_polydesa_0);
var lyr_polydesa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polydesa_0, 
                style: style_polydesa_0,
                popuplayertitle: "polydesa",
                interactive: true,
                title: '<img src="styles/legend/polydesa_0.png" /> polydesa'
            });
var format_sawah_1 = new ol.format.GeoJSON();
var features_sawah_1 = format_sawah_1.readFeatures(json_sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_1.addFeatures(features_sawah_1);
var lyr_sawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_1, 
                style: style_sawah_1,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_1.png" /> sawah'
            });
var format_hutan_2 = new ol.format.GeoJSON();
var features_hutan_2 = format_hutan_2.readFeatures(json_hutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_hutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_2.addFeatures(features_hutan_2);
var lyr_hutan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_2, 
                style: style_hutan_2,
                popuplayertitle: "hutan",
                interactive: true,
                title: '<img src="styles/legend/hutan_2.png" /> hutan'
            });
var format_polybatasrtrw_3 = new ol.format.GeoJSON();
var features_polybatasrtrw_3 = format_polybatasrtrw_3.readFeatures(json_polybatasrtrw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_polybatasrtrw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polybatasrtrw_3.addFeatures(features_polybatasrtrw_3);
var lyr_polybatasrtrw_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polybatasrtrw_3, 
                style: style_polybatasrtrw_3,
                popuplayertitle: "polybatasrtrw",
                interactive: true,
    title: 'polybatasrtrw<br />\
    <img src="styles/legend/polybatasrtrw_3_0.png" /> RT 1/ RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_1.png" /> RT 1/ RW 5<br />\
    <img src="styles/legend/polybatasrtrw_3_2.png" /> RT 1/ RW 6<br />\
    <img src="styles/legend/polybatasrtrw_3_3.png" /> RT 1/ RW 7<br />\
    <img src="styles/legend/polybatasrtrw_3_4.png" /> RT 1/ RW 8<br />\
    <img src="styles/legend/polybatasrtrw_3_5.png" /> RT 1/ RW 9<br />\
    <img src="styles/legend/polybatasrtrw_3_6.png" /> RT 1A/RW 2<br />\
    <img src="styles/legend/polybatasrtrw_3_7.png" /> RT 1A/RW 3<br />\
    <img src="styles/legend/polybatasrtrw_3_8.png" /> RT 1B/ RW 2<br />\
    <img src="styles/legend/polybatasrtrw_3_9.png" /> RT 1B/RW 3<br />\
    <img src="styles/legend/polybatasrtrw_3_10.png" /> RT 2/ RW 2<br />\
    <img src="styles/legend/polybatasrtrw_3_11.png" /> RT 2/ RW 3<br />\
    <img src="styles/legend/polybatasrtrw_3_12.png" /> RT 2/ RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_13.png" /> RT 2/ RW 6<br />\
    <img src="styles/legend/polybatasrtrw_3_14.png" /> RT 2/ RW 7<br />\
    <img src="styles/legend/polybatasrtrw_3_15.png" /> RT 2/ RW 8<br />\
    <img src="styles/legend/polybatasrtrw_3_16.png" /> RT 2/ RW 9<br />\
    <img src="styles/legend/polybatasrtrw_3_17.png" /> RT 2B/RW 1<br />\
    <img src="styles/legend/polybatasrtrw_3_18.png" /> RT 3/ RW 2<br />\
    <img src="styles/legend/polybatasrtrw_3_19.png" /> RT 3/ RW 3<br />\
    <img src="styles/legend/polybatasrtrw_3_20.png" /> RT 3/ RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_21.png" /> RT 3/ RW 5<br />\
    <img src="styles/legend/polybatasrtrw_3_22.png" /> RT 3/ RW 6<br />\
    <img src="styles/legend/polybatasrtrw_3_23.png" /> RT 3/RW 1<br />\
    <img src="styles/legend/polybatasrtrw_3_24.png" /> RT 3/RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_25.png" /> RT 3/RW 9<br />\
    <img src="styles/legend/polybatasrtrw_3_26.png" /> RT 4/ RW 1<br />\
    <img src="styles/legend/polybatasrtrw_3_27.png" /> RT 4/ RW 3<br />\
    <img src="styles/legend/polybatasrtrw_3_28.png" /> RT 4/ RW 6<br />\
    <img src="styles/legend/polybatasrtrw_3_29.png" /> RT 4/ RW 7<br />\
    <img src="styles/legend/polybatasrtrw_3_30.png" /> RT 4/RW 2<br />\
    <img src="styles/legend/polybatasrtrw_3_31.png" /> RT 4A/ RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_32.png" /> RT 4B/ RW 4<br />\
    <img src="styles/legend/polybatasrtrw_3_33.png" /> RT 5A/ RW 7<br />\
    <img src="styles/legend/polybatasrtrw_3_34.png" /> RT 5B/ RW 7<br />\
    <img src="styles/legend/polybatasrtrw_3_35.png" /> RT. 001/RW. 001<br />\
    <img src="styles/legend/polybatasrtrw_3_36.png" /> RT. 002A/RW. 001<br />\
    <img src="styles/legend/polybatasrtrw_3_37.png" /> RT. 2/ RW. 5<br />\
    <img src="styles/legend/polybatasrtrw_3_38.png" /> RT. 3A/RW. 5<br />\
    <img src="styles/legend/polybatasrtrw_3_39.png" /> <br />'
        });
var format_sungai_4 = new ol.format.GeoJSON();
var features_sungai_4 = format_sungai_4.readFeatures(json_sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_4.addFeatures(features_sungai_4);
var lyr_sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_4, 
                style: style_sungai_4,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_4.png" /> sungai'
            });
var format_badakpolybangunan_5 = new ol.format.GeoJSON();
var features_badakpolybangunan_5 = format_badakpolybangunan_5.readFeatures(json_badakpolybangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_badakpolybangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_badakpolybangunan_5.addFeatures(features_badakpolybangunan_5);
var lyr_badakpolybangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_badakpolybangunan_5, 
                style: style_badakpolybangunan_5,
                popuplayertitle: "badakpolybangunan",
                interactive: true,
                title: '<img src="styles/legend/badakpolybangunan_5.png" /> badakpolybangunan'
            });
var format_jalan_6 = new ol.format.GeoJSON();
var features_jalan_6 = format_jalan_6.readFeatures(json_jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_6.addFeatures(features_jalan_6);
var lyr_jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_6, 
                style: style_jalan_6,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_6.png" /> jalan'
            });
var format_pointbadak_7 = new ol.format.GeoJSON();
var features_pointbadak_7 = format_pointbadak_7.readFeatures(json_pointbadak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pointbadak_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointbadak_7.addFeatures(features_pointbadak_7);
var lyr_pointbadak_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointbadak_7, 
                style: style_pointbadak_7,
                popuplayertitle: "pointbadak",
                interactive: true,
    title: 'pointbadak<br />\
    <img src="styles/legend/pointbadak_7_0.png" /> AYAM INDAH<br />\
    <img src="styles/legend/pointbadak_7_1.png" /> BALAI DESA BADAK<br />\
    <img src="styles/legend/pointbadak_7_2.png" /> Bengkel om udin<br />\
    <img src="styles/legend/pointbadak_7_3.png" /> Bengkel slamet<br />\
    <img src="styles/legend/pointbadak_7_4.png" /> bidan tutiik<br />\
    <img src="styles/legend/pointbadak_7_5.png" /> BRI LINK TAHYAT<br />\
    <img src="styles/legend/pointbadak_7_6.png" /> LAPANGAN BENGKOK<br />\
    <img src="styles/legend/pointbadak_7_7.png" /> MADRASAH DINIYAH ROUDHOTUT THOLIBIN<br />\
    <img src="styles/legend/pointbadak_7_8.png" /> MAKAM<br />\
    <img src="styles/legend/pointbadak_7_9.png" /> Masjid Baitul Salam<br />\
    <img src="styles/legend/pointbadak_7_10.png" /> MINIMART<br />\
    <img src="styles/legend/pointbadak_7_11.png" /> MTS ALPALAH BADAK<br />\
    <img src="styles/legend/pointbadak_7_12.png" /> Mushola<br />\
    <img src="styles/legend/pointbadak_7_13.png" /> Nibras BUTIK<br />\
    <img src="styles/legend/pointbadak_7_14.png" /> PASAR PON<br />\
    <img src="styles/legend/pointbadak_7_15.png" /> Peternakan ayam<br />\
    <img src="styles/legend/pointbadak_7_16.png" /> PETERNAKAN AYAM<br />\
    <img src="styles/legend/pointbadak_7_17.png" /> Rias Bu Nanik<br />\
    <img src="styles/legend/pointbadak_7_18.png" /> SD N 01 BADAK<br />\
    <img src="styles/legend/pointbadak_7_19.png" /> SD N 02 BADAK<br />\
    <img src="styles/legend/pointbadak_7_20.png" /> SD N 03 BADAK<br />\
    <img src="styles/legend/pointbadak_7_21.png" /> SD N 04 BADAK<br />\
    <img src="styles/legend/pointbadak_7_22.png" /> SMP NEGERI 3 BELIK<br />\
    <img src="styles/legend/pointbadak_7_23.png" /> Toko Sugeng<br />\
    <img src="styles/legend/pointbadak_7_24.png" /> Wahyu Home<br />\
    <img src="styles/legend/pointbadak_7_25.png" /> Warung dewi<br />\
    <img src="styles/legend/pointbadak_7_26.png" /> Warung mba sanah<br />\
    <img src="styles/legend/pointbadak_7_27.png" /> Warung nensy<br />\
    <img src="styles/legend/pointbadak_7_28.png" /> <br />'
        });

lyr_polydesa_0.setVisible(true);lyr_sawah_1.setVisible(true);lyr_hutan_2.setVisible(true);lyr_polybatasrtrw_3.setVisible(true);lyr_sungai_4.setVisible(true);lyr_badakpolybangunan_5.setVisible(true);lyr_jalan_6.setVisible(true);lyr_pointbadak_7.setVisible(true);
var layersList = [lyr_polydesa_0,lyr_sawah_1,lyr_hutan_2,lyr_polybatasrtrw_3,lyr_sungai_4,lyr_badakpolybangunan_5,lyr_jalan_6,lyr_pointbadak_7];
lyr_polydesa_0.set('fieldAliases', {'id': 'id', 'Desa': 'Desa', });
lyr_sawah_1.set('fieldAliases', {'id': 'id', 'NAMASAWAH': 'NAMASAWAH', });
lyr_hutan_2.set('fieldAliases', {'id': 'id', 'NAMAHUTAN': 'NAMAHUTAN', });
lyr_polybatasrtrw_3.set('fieldAliases', {'id': 'id', 'rt/rw': 'rt/rw', });
lyr_sungai_4.set('fieldAliases', {'id': 'id', 'SUNGAI': 'SUNGAI', });
lyr_badakpolybangunan_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'access_roo': 'access_roo', 'building_m': 'building_m', 'building': 'building', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_house': 'addr_house', });
lyr_jalan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_pointbadak_7.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_polydesa_0.set('fieldImages', {'id': 'TextEdit', 'Desa': 'TextEdit', });
lyr_sawah_1.set('fieldImages', {'id': 'TextEdit', 'NAMASAWAH': 'TextEdit', });
lyr_hutan_2.set('fieldImages', {'id': 'TextEdit', 'NAMAHUTAN': 'TextEdit', });
lyr_polybatasrtrw_3.set('fieldImages', {'id': 'TextEdit', 'rt/rw': 'TextEdit', });
lyr_sungai_4.set('fieldImages', {'id': 'TextEdit', 'SUNGAI': 'TextEdit', });
lyr_badakpolybangunan_5.set('fieldImages', {'osm_id': '', 'osm_type': '', 'addr_stree': '', 'access_roo': '', 'building_m': '', 'building': '', 'roof_mater': '', 'name': '', 'addr_house': '', });
lyr_jalan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_pointbadak_7.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_polydesa_0.set('fieldLabels', {'id': 'no label', 'Desa': 'no label', });
lyr_sawah_1.set('fieldLabels', {'id': 'no label', 'NAMASAWAH': 'no label', });
lyr_hutan_2.set('fieldLabels', {'id': 'no label', 'NAMAHUTAN': 'no label', });
lyr_polybatasrtrw_3.set('fieldLabels', {'id': 'no label', 'rt/rw': 'no label', });
lyr_sungai_4.set('fieldLabels', {'id': 'no label', 'SUNGAI': 'no label', });
lyr_badakpolybangunan_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'building': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_house': 'no label', });
lyr_jalan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_pointbadak_7.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_pointbadak_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});