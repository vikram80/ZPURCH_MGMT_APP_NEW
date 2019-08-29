sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zpurch_mgmt_app/ZPURCH_MGMT_APP/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("zpurch_mgmt_app.ZPURCH_MGMT_APP.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			//Create Global models
			// this.setModel(new JSONModel(), "F4Model");
			
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});