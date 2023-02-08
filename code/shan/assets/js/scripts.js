



(function($) {
	/*'use strict';*/


    //  给轮播  添加事件  监听
    $("#welcome-slide-carousel").on("slide.bs.carousel",function () {  // 表示  过度 动作 开始
        console.log("11111111111111");
        //console.log($(".carousel-inner .item.active").index());  // 获取当前  对应  显示的 图片的角标  即将显示下一张
        // 对应的当前的  文本信息 应该准备隐藏
        var  index =$(".carousel-inner .item.active").index();
        var  $currentObj = $(".my_slider_text .text_item:eq("+index+")");
        $currentObj.find("p.text_title").animate({left:"-100%"},{
            duration:200,
            easing:"easeOutBounce",
            complete:function () {
                var  size = $currentObj.find("p.text_content span").size(); // 拿到需要 延迟加载的 数量
                var  spanIndex = 0;
                function moveSpan() {
                    if(spanIndex==3){
                        $currentObj.removeClass("active");
                        return;
                    }
                    $currentObj.find("p.text_content span:eq("+spanIndex+")").stop(true).animate({left:"-100%"},{
                        duration:200,
                        easing:"easeOutBounce"
                    });
                    spanIndex++;
                    setTimeout(arguments.callee,200);
                }
                moveSpan();
            }
        });

    });
    $("#welcome-slide-carousel").on("slid.bs.carousel",function () {// 表示  过度 动作 结束
        var  index =$(".carousel-inner .item.active").index();
        var  $currentObj = $(".my_slider_text .text_item:eq("+index+")");
        $currentObj.find("p.text_title").css({left:"-100%"});
        $currentObj.find("p.text_content span").css({left:"-100%"});
        $currentObj.find("p.text_title").animate({left:"0px"},{
            duration:200,
            easing:"easeOutBounce",
            complete:function () {
                var  size = $currentObj.find("p.text_content span").size(); // 拿到需要 延迟加载的 数量
                var  spanIndex = 0;
                function moveSpan() {
                    if(spanIndex==3){
                        $currentObj.addClass("active");
                        return;
                    }
                    $currentObj.find("p.text_content span:eq("+spanIndex+")").stop(true).animate({left:"0px"},{
                        duration:200,
                        easing:"easeOutBounce"
                    });
                    spanIndex++;
                    setTimeout(arguments.callee,200);
                }
                moveSpan();
            }
        });
        $currentObj.addClass("active");
    });


	jQuery(document).ready(function(){
				$('a.page-scroll').on('click', function(e){
					var anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $(anchor.attr('href')).offset().top - 50
					}, 1500);
					e.preventDefault();
				});		



			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 
		
		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/



		/*END TESTIMONIAL JS*/   //  图片轮播。。。。。。

		// Owl Carousel for Testimonials
		/*var testiCarousel = $('.testimonials_carousel');
		testiCarousel.owlCarousel({
			loop:true,
			autoplay:false,
			dots:false,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items:1
		});	*/

		/*START CONTACT MAP JS*/
/*		var contact = {'lat':'-37.7622470161679', 'lon':'145.06004333496094'}; //Change a map coordinate here!
		try {
			$('#map').gmap3({
				action: 'addMarker',
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 5
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {

		}*/
	   /*END CONTACT MAP JS*/

	});

	/*  Stellar for background scrolling  */
/*	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());*/
	/* End Stellar for background scrolling  */

	/*START WOW ANIMATION JS*/
	 // new WOW().init();
	/*END WOW ANIMATION JS*/













	// 滑块 //***************************************  新增的  jq代码
	//$("#nav_slider")
	//console.log($("#nav_slider").siblings().size())   //7
 /*   $("#nav_slider").siblings().on("click",function () {
    	var index = $(this).index();
    	$("#nav_slider").stop(true).css({left:index*78+"px"});

    });*/






				
})(jQuery);


  

