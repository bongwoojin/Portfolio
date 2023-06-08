/*풀페이지*/
$(function(){

    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally:true,
        anchors:['first','second','third','fourth','fifth'],

    'onLeave' : function(anchorLink, index){
        if(index == 1){
            $('.scroll-down').show();
            $('.header_nav ul .first a').addClass('active');
            $('.header_nav ul li:not(.first) a').removeClass('active');
            $('.header_nav ul .first .circle').css({'opacity':'1'});
            $('.header_nav ul li:not(.first) .circle').css({'opacity':'0'});
        }
        
        else if(index == 2){
            $('.scroll-down').show();
            $('.profile').addClass('active');
            $('.coment').addClass('active');
            $('.header_nav ul .second a').addClass('active');
            $('.header_nav ul li:not(.second) a').removeClass('active');
            $('.header_nav ul .second .circle').css({'opacity':'1'});
            $('.header_nav ul li:not(.second) .circle').css({'opacity':'0'});
            $('.graph.stack1 span').addClass('active');
            $('.graph.stack2 span').addClass('active');
            $('.graph.stack3 span').addClass('active');
            $('.graph.stack4 span').addClass('active');
            $('.graph.stack5 span').addClass('active');
            
        }
        else if(index == 3){
            $('.scroll-down').show();
            $('#portfolio_1 .portfolio_box').addClass('active');
            $('#portfolio_1 .frame_coment').addClass('active');
            $('.header_nav ul .third a').addClass('active');
            $('.header_nav ul li:not(.third) a').removeClass('active');
            $('.header_nav ul .third .circle').css({'opacity':'1'});
            $('.header_nav ul li:not(.third) .circle').css({'opacity':'0'});
            
        }
        else if(index == 4){
            $('.scroll-down').show();
            $('#portfolio_2 .portfolio_box').addClass('active');
            $('#portfolio_2 .frame_coment').addClass('active');
            $('.header_nav ul .fourth a').addClass('active');
            $('.header_nav ul li:not(.fourth) a').removeClass('active');
            $('.header_nav ul .fourth .circle').css({'opacity':'1'});
            $('.header_nav ul li:not(.fourth) .circle').css({'opacity':'0'});
            
        }
        else if(index == 5){
            $('.scroll-down').show();
            $('.header_nav ul .fifth a').addClass('active');
            $('.header_nav ul li:not(.fifth) a').removeClass('active');
            $('.header_nav ul .fifth .circle').css({'opacity':'1'});
            $('.header_nav ul li:not(.fifth) .circle').css({'opacity':'0'});
        }
        else if(index == 6){
            $('.scroll-down').hide();
            $('.header_nav ul li a').removeClass('active');
            $('.header_nav ul li .circle').css({'opacity':'0'});
        }
    },

    'afterLoad' : function(anchoirLink, index){
      if(index == 5){
        $('.img_left_01').delay(700).animate({opacity:1,left:'150%'},1500,'easeInExpo');
        $('.img_right_01').delay(700).animate({opacity:1,left:'-95%'},1500,'easeInExpo');
        $('.img_word_01').delay(2200).animate({opacity:0,top:'-30%'},1500,'easeOutBounce');
        $('.iam').delay(200).animate({opacity:0,fontSize:'6em'},1500,'easeOutQuart');
        $('.ment_01').delay(2700).animate({opacity:1,bottom:'50%'},2500,'easeOutExpo');
        
      }
    }
});
    
    
    $('.header_nav ul .first').addClass('active');
    $('.header_nav ul .first a').addClass('active');

    

    /*포트폴리오_첫번쨰 페이지 액션*/
    $('#portfolio_1 .desktop_box').mouseover(function(){
        $('#portfolio_1 .desktop_box .img_box').addClass('active');
      });

    $('#portfolio_1 .desktop_box').mouseout(function(){
        $('#portfolio_1 .desktop_box .img_box').removeClass('active');
      });

    $('#portfolio_1 .mobile_box').mouseover(function(){
        $('#portfolio_1 .mobile_box .img_box').addClass('active');
      });

    $('#portfolio_1 .mobile_box').mouseout(function(){
        $('#portfolio_1 .mobile_box .img_box').removeClass('active');
      });

    /*포트폴리오_두번쨰 페이지 액션*/
    $('#portfolio_2 .desktop_box').mouseover(function(){
        $('#portfolio_2 .desktop_box .img_box').addClass('active');
      });

    $('#portfolio_2 .desktop_box').mouseout(function(){
        $('#portfolio_2 .desktop_box .img_box').removeClass('active');
      });

    $('#portfolio_2 .mobile_box').mouseover(function(){
        $('#portfolio_2 .mobile_box .img_box').addClass('active');
      });

    $('#portfolio_2 .mobile_box').mouseout(function(){
        $('#portfolio_2 .mobile_box .img_box').removeClass('active');
      });

      $('.button').on('click',function(){
        $('.mobile_menu').slideToggle();
      })

      $('.allmenu li').on('click',function(){
        $('.mobile_menu').slideUp();
      })

  $('.img_left').animate({opacity:1,left:'50%'},1500,'easeInExpo');
  $('.img_right').animate({opacity:1,right:'50%'},1500,'easeInExpo');
  $('.img_word').delay(1500).animate({opacity:1,top:'50%'},1500,'easeOutBounce');
  $('.who').animate({opacity:1,fontSize:'6em'},1500,'easeOutQuart');
  $('.ment').delay(3000).animate({opacity:1,bottom:'0px'},2500,'easeOutExpo');
});

$(function(){
  var aaaa;
  $('.coment_document').click(function(){
    aaaa=$(window).scrollTop()
    $('.modal_wrap').css({'display':'block','top':aaaa})

    $('html, body').on('scroll touchmove mousewheel', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });

  $('.modal_wrap').click(function(){
    $('.modal_wrap').hide();
    $('html, body').off('scroll touchmove mousewheel');
  })
})


