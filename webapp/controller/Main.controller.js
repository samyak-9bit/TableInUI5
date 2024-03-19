sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.myorg.myapp.controller.Main", {
        onInit: function () {
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "product");
            this.fetchData();
         },
         fetchData: function(){
            var sApiUrl = "https://fakestoreapi.com/products";
            jQuery.ajax({
               url: sApiUrl,
               method: "GET",
               dataType: "json",
               success: function (oData) {
                  console.log(oData)
                  this.getView().getModel("product").setData(oData);
               }.bind(this),
               error: function (error) {
                  console.error("Error fetching API data:", error);
               }
            });
         }
        });
    })


