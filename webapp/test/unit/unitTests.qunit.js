/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zmap/zmap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});