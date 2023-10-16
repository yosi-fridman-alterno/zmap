var MainController
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zmap.zmap.controller.Main", {
		onInit: function () {
			MainController = this;
			var oGeoMap = this.getView().byId("GeoMap");
			var oMapConfig = {
				"MapProvider": [{
					"name": "GMAP",
					"type": "",
					"description": "",
					"tileX": "256",
					"tileY": "256",
					"maxLOD": "20",
					"copyright": "Alterno",
					"Source": [{
						"id": "s1",
						"url": "https://mt.google.com/vt/lyrs=m&x={X}&y={Y}&z={LOD}"
					}]
				}],
				"MapLayerStacks": [{
					"name": "DEFAULT",
					"MapLayer": {
						"name": "layer1",
						"refMapProvider": "GMAP",
						"opacity": "1",
						"colBkgnd": "RGB(255,255,255)"
					}
				}]
			};
			oGeoMap.setMapConfiguration(oMapConfig);
			oGeoMap.setRefMapLayerStack("DEFAULT");
		},
		GetApiAdress : function() {
			$(document).ready(function() {
        	$.ajax({
        	 url: '/v2/trackings/cainiao/LP00163304895803',
        	 type: 'GET',
        	 dataType: 'json',
        	 headers : {
        	 	'Content-Type' : 'application/json',
        	 	'Trackingmore-Api-Key' : 'ca57f433-14eb-43cf-a050-575d1e1eafe6'
        	 },
        	success: function(data) { 
        		debugger;
        		console.log('hello!'); },
        	error: function() { console.log('boo!'); }
    	 });
    	  });
		}

       /*setHeader : function (xhr) {
       	$.ajaxSetup({
				 headers : {
			    'Authorization' : 'Basic faskd52352rwfsdfs',
			    'X-PartnerKey' : '3252352-sdgds-sdgd-dsgs-sgs332fs3f'
			  }
			});
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Trackingmore-Api-Key', '73b51890-e194-412b-8089-78b4bfc18a9a');
      }*/
	});
});