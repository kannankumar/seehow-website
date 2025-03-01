// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

$(document).ready(function() {

    var allSectionHeader = false;
    $('#fullpage').fullpage({
      navigation: true,
      menu:"#header",
      navigationTooltips: ['Home','Smart Ball', 'SeeHow app', 'Our Team','Partners'],
      anchors:['home','product','app','team','partners'],
			responsiveWidth: 9999999,//767,
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
});
