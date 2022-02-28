$(document).ready(function(){

    // 서브 Navi 보이기
    $(".nav_lv2").hide();
    $(".main_nav> li").mouseover(function(){
        $(this).children(".nav_lv2").slideDown(150);
		$(this).children("a").css("color","#3276b3").css("font-weight","500");


    });
    $(".main_nav> li").mouseleave(function(){
        $(this).children(".nav_lv2").slideUp(150);
		$(this).children("a").css("color","#222").css("font-weight","400");
		$(this).css("border-top","none");
    });

	$(".nav_lv2> li").mouseover(function(){
		$(this).children("a").css("font-weight","500");
    });
	$(".nav_lv2> li").mouseleave(function(){
		$(this).children("a").css("font-weight","400");
    });

    // 메z탭메뉴
    $(".tab_conts li").hide();
    $(".tab_conts li:first").show();
	$("#pick_tab li").click(function () {
        $("#pick_tab li").removeClass("active").css("color", "#333");
	$(this).addClass("active").css("color", "#fff");
	$(".tab_conts li").hide()
        var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
    });


    // 리스트 검색 상세 검색 여닫기

    $('.srch_open').hide();
    $('.btn_open').click(function (){
        $('.srch_open').slideToggle(350);
    });


    //숙박 소개 tab
  $(".tab_conts li").hide();
    $(".tab_conts li:first").show().addClass("active");
	$("#rm_tabs li").click(function () {
        $("#rm_tabs li").removeClass("rm_active");
	$(this).addClass("rm_active");
	$(".tab_conts li").hide()
        var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
    });



    //마이페이지 구매내역
    $(".customer_table").hide();
    $(".customer_table:first").show().addClass("on");
	$(".customer_tab li").click(function () {
        $(".customer_tab li").removeClass("on");
	$(this).addClass("on");
	$(".customer_table").hide()
        var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
    });



	//리조트상품 탭


		$(".myr_conts").hide();
		$(".myr_conts:first").show();
		$(".resort_tabs li").click(function () {
			$(this).siblings().removeClass("myr_active");
		$(this).addClass("myr_active");
		$(".myr_conts").hide()
			var myactiveTab = $(this).attr("rel");
			$("#" + myactiveTab).fadeIn()
		});

    //상품 메인이미지
$(document).ready(function(){
  $('.img_rm_main').bxSlider({
      captions:true,
      slideWidth:550
  });
});






    // //예약 테이블
    // $(".rm_tb_unfold").on("click", function(){

    //   $(this).nextAll(".rm_tb_fold").toggleClass("open");});

    //   //퀵메뉴
    //   $("#btn_fixed").on("click", function(){	;$(this).parent(".fixed_menu").toggleClass("fixed_hidden");
    //   $(".fix_thumb").css("display","none");
    // });

	var open = 'images/icons/quick_open.png';
	var close = 'images/icons/quick_close.png';

	$('#btn_fixed img').click(function() {
	  if ($('#btn_fixed img').attr('src') === open) {
		$('#btn_fixed img').attr('src', close);
	  } else {
		$('#btn_fixed img').attr('src', open)
	  }
	})


var chck = 'images/icons/sign_check.png';
var unchck = 'images/icons/sign_uncheck.png';

$('.agree_check label').click(function() {
  if ($(this).find('img').attr('src') === chck) {
    $(this).children('img').attr('src', unchck);
  } else {
    $(this).children('img').attr('src', chck)
  }
});





	$("#sign_agree_all").click(function(){
        //클릭되었으면
        if($(".agree_check input").prop("checked")){

            $(".agree_check input").prop("checked",true);
        }else{
            $(".agree_check input").prop("checked",false);
        }
    });
	/*
	$("#signup_contents button").mouseover(function(){
		$(this).css("background","#0586EE").css("color","#fff")
	});
	$("#signup_contents button").mouseleave(function(){
		$(this).css("background","#dbdbdb").css("color","#000")
	});
	*/
	/*

	$("#sign_agree_all").click(function(){
        //클릭되었으면
        if($(".agree_check img").attr("src",unchck)){

            $(".agree_check img").attr("src",chck);
        }else{
            $(".agree_check img").attr("src",unchck);
        }
    });

*/

	$("#navi_all").hide();
	$("#nav_btn").click(function(){
		$("#navi_all").fadeToggle("onn");
	});



	$('#nav_btn').click(function(){
		$(this).toggleClass('nav_open');
	});








	//예약테이블 높이 조정
  $(document).ready(function(){
   var max_h=0;
   $(".gf_box").each(function(){
 var h = parseInt($(this).css("height"));
    if(max_h<h){ max_h = h; }
   });
   $(".gf_box").each(function(){
 $(this).css({height:max_h});
   });
  });


	  $(document).ready(function(){
   var max_h=0;
   $(".inv_box").each(function(){
 var h = parseInt($(this).css("height"));
    if(max_h<h){ max_h = h; }
   });
   $(".inv_box").each(function(){
 $(this).css({height:(max_h)});
   });
  });



});


