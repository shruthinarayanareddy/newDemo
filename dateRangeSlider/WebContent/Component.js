
sap.ui.core.UIComponent.extend("projectmanagement.Component", {
  metadata: {
    routing: {
      config: {
        viewType: "XML",
        viewPath: "view",
        targetControl: "splitApp",
        clearTarget: false,
        transition: "slide"
      },
      routes: [
        {
          pattern: "Home",
          name: "Home",
          view: "Home",
          targetAggregation: "pages"
        },
       
        {
          pattern: "",
          name: "default",
          view: "Home",
          targetAggregation: "pages"
        },
   
      ]
    }
  },
  init : function () {
    jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
    jQuery.sap.require("sap.ui.core.routing.HashChanger");
    jQuery.sap.require("projectmanagement.myRouter");
   
    // call overwritten init (calls createContent)
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    //extend the router
    this._router = this.getRouter();
    jQuery.extend(this._router, projectmanagement.myRouter);
    //navigate to initial page for !phone
   
      this._router._myNavToWithoutHash("view.Home", "XML", false);
    
    // initialize the router
    this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
    this._router.initialize();
    
  },
  destroy : function () {
    if (this._routeHandler) {
      this._routeHandler.destroy();
    }
    // call overriden destroy
    sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
  },
  createContent : function () {
  
 
  
    // create root view
    var oView = sap.ui.view({
      id : "app",
      viewName : "view.App",
      type : "JS",
      viewData : { component : this }
    });

   
    return oView;
  }
});