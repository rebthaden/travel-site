import $ from 'jquery';
import  waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
  constructor() {
      this.siteHeader = $('.site-header');
      this.headerTriggerELement = $('.large-hero__title');
      this.createHeaderWaypoint();
      this.pageSections = $(".page-section");
      this.headerLinks = $(".primary-nav a")
      this.createPageSectionWaypoints();
      this.addSmoothScrolling();
  } 
    

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({speed:500});
  }
    
  createHeaderWaypoint() {
      var that = this;
      new Waypoint({
          element: this.headerTriggerELement[0],
          handler: function(direction) {
            if (direction === 'down') {
              that.siteHeader.addClass("site-header--dark");
            } else {
              that.siteHeader.removeClass("site-header--dark");
            }
          }
      });
  }
    
    
    /*  Supposed to remove current-link class when scroll back up to top 
        of the page- not sure why not working.   
        
        
    resetPageSectionWaypoints() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
               if (direction == "up") {
                   that.headerLinks.removeClass("is-current-link");
               }
            },
            offset: "-30%"
        });
    }
    */
    
    
  createPageSectionWaypoints() {
      var that = this;  
      this.pageSections.each(function() {
         var currentPageSection = this;
         new Waypoint({
             element: currentPageSection,
             handler: function(direction) {
               if (direction === 'down') {
                var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
               that.headerLinks.removeClass('is-current-link');
               $(matchingHeaderLink).addClass('is-current-link'); 
               }
             },
             offset: "18%"
         }); 
          
          
           new Waypoint({
             element: currentPageSection,
             handler: function(direction) {
               if (direction === 'up') {
                var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
               that.headerLinks.removeClass('is-current-link');
               $(matchingHeaderLink).addClass('is-current-link'); 
               }
             },
             offset: '-40%'
         }); 
          
      });
      
      
  }     
    
    
}

export default StickyHeader;