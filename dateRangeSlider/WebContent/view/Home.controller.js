
sap.ui.controller("view.Home",
        {
          /**
           * Called when a controller is instantiated and its View
           * controls (if available) are already created. Can be used
           * to modify the View before it is displayed, to bind event
           * handlers and do other one-time initialization.
           *
           * @memberOf view.Home
           */
          onInit : function() {
        	  that=this;
              this._router = sap.ui.core.UIComponent.getRouterFor(this);
          
            
          },
     
       
           onBeforeRendering:function()
          {
        	   this.byId("daterangesel").setMax(new Date(2015, 9, 25));
       		this.byId("daterangesel").setMin(new Date(2015, 9, 19));
       		
       		this.byId("daterangesel").setDateFormat(sap.ui.core.format.DateFormat.getDateInstance(new sap.ui.core.Locale("de")));
       		this.byId("daterangesel").setLabels(['Day1','Day2','Day3','Day4', 'Day5', 'Day6', 'Day7']);
       		d=new Date(2015, 9, 25)
       		this.byId("daterangesel").setValue2(d); 

          },
          onAfterRendering: function() {
        	
   
      	},

                 });