$('#hamburger').click(function(){
	$('#menu_list').toggle();
})
$('.product_type .product_Title').click(function(){
	$(this).parent().toggleClass('active');
    $(this).next('.product_series').slideToggle(500);
})
$('.product_text').click(function(){
	$(this).addClass('active_b').siblings().removeClass('active_b');
})
$('.Contact_information .Contact').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})
function addListener(element, type, callback) {
		    if (element.addEventListener) {
		        element.addEventListener(type, callback);
		    } else if (element.attachEvent) {
		        element.attachEvent('on' + type, callback);
		    }
		}

		addListener(document, 'DOMContentLoaded', function () {
		    
		    var mq = window.matchMedia("(max-width: 760px)");
		    if (mq.matches) {
		        document.getElementById("menu_list").classList.add("hidden");
		        document.getElementById("menu_img").classList.add("hidden");
		    }

		    addListener(document.getElementById("menu_button"), 'click', function () {
		        document.getElementById("menu_list").classList.toggle("hidden");
		    });
		    
		    addListener(window, 'resize', function () {
		        var width = window.innerWidth ||
		                    document.documentElement.clientWidth ||
		                    document.body.clientWidth;
		        
		        if (width > 760) {
		            document.getElementById("menu_list").classList.remove("hidden");
		            document.getElementById("menu_img").classList.remove("hidden");
		        } else {
		            document.getElementById("menu_list").classList.add("hidden");
		            document.getElementById("menu_img").classList.add("hidden");
		        }
		    });
		    
		});
		var mySwiper = new Swiper('.swiper-container',{
			autoplay: 3000,   //自动轮播参数
			pagination: '.swiper-pagination',   //分页器class
			loop:true,   //无限循环
			grabCursor: true,    //鼠标放上时变成手的形状
			paginationClickable :true,   //点击分页切换图像
			autoplayDisableOnInteraction : false,//点击屏幕后仍然可以自动播放
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
			
		})
		$('.index_button').click(function(){
			$(this).addClass('active').siblings('.index_button').removeClass('active');
		})	
		$('.Pipe_option .Pipe_option_text').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var index = $(this).index();
			$('.Tube_pictures .Tube_pictures_subset').eq(index).addClass('active').siblings().removeClass('active');
		})
		$('.MAJOR').click(function(){
			$(this).addClass('active').siblings('.MAJOR').removeClass('active');
			$(this).children('.Horizontal').addClass('MAJOR_Line').siblings('.Horizontal').removeClass('MAJOR_Line');
		})
		$('.Company_profile_right_text').click(function(){
			$(this).addClass('active').siblings('.Company_profile_right_text').removeClass('active');
		})
		$('.Jigsaw_puzzle_lr').click(function(){
			$(this).addClass('active').siblings('.Jigsaw_puzzle_lr').removeClass('active');
		})
		$('.fill_in_Submission').click(function(){
			$(this).addClass('active');
		})
		$('.paging_auto .on').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
		$('.img_left').click(function(){
			$(this).addClass('active').siblings('.img_left').removeClass('active');
		})

		var a_idx = 0;
	    jQuery(document).ready(function($) {
	        $("html").click(function(e) {
	            var a = new Array("绿色", "环保", "健康");
	            var $i = $("<span />").text(a[a_idx]);
	            a_idx = (a_idx + 1) % a.length;
	            var x = e.pageX,
	                y = e.pageY;
	            $i.css({
	                "z-index": 99999999999999999999999999999999999999999999999999999999999999999999999999 ,
	                "top": y - 20,
	                "left": x,
	                "position": "absolute",
//	                "font-weight": "bold",
	                "color": "#ff6651"
	            });
	            $("body").append($i);
	            $i.animate({
	                    "top": y - 180,
	                    "opacity": 0
	                },
	                1500,
	                function() {
	                    $i.remove();
	                });
	        });
	    });
	    /*合作伙伴轮播*/
	
	
	