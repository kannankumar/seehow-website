// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

$(document).ready(function() {

    var allSectionHeader = false;
    $('#fullpage').fullpage({
      navigation: true,
      menu:"#header",
      onLeave: function(index, nextIndex, direction){
    		var leavingSection = $(this);

        if(allSectionHeader){
      		//after leaving section 1
      		if(index == 1 && direction =='down'){
      			$('.navbar-default').css('background-color', '#ededed');
            $('.navbar-default .navbar-nav>li>a').css('color','black');

            $('.seehow-logo').attr('src','img/seehow_logo.png');
            $('.order-nav-btn').css('visibility','visible');
      		}
      		else if(index == 2 && direction == 'up'){
      			$('.navbar-default').css('background-color', 'transparent');
            $('.navbar-default .navbar-nav>li>a').css('color','white');

            $('.seehow-logo').attr('src','img/seehow_logo_white.png');
            $('.order-nav-btn').css('visibility','hidden');
      		}
        }
        else{
          if(index == 1 && direction =='down'){
      			$('.navbar-default').css('visibility', 'hidden');
      		}
      		else if(index == 2 && direction == 'up'){
            $('.navbar-default').css('visibility', 'visible');
          }
        }
    	}
    });

  //  var scroll_start = 0;
  //  var startchange = $('#product-section');
  //  var offset = startchange.offset();
  //  $(document).scroll(function() {
  //     scroll_start = $(this).scrollTop();
  //     if(scroll_start > offset.top) {
  //         $('.navbar-default').css('background-color', '#f0f0f0 !important');
  //      } else {
  //         $('.navbar-default').css('background-color', 'transparent !important');
  //      }
  //  });

});
