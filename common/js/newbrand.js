
//// NEW BRAND NOH maked
$(function() {
	//////////////   제이쿼리 파라미터     /////////
	$.QueryString = (function(a) {
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; i++)	{
			var p=a[i].split('=');
			if (p.length != 2) continue;
			b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")); //공백으로 변환 후 디코딩
		}
		return b;
	})(window.location.search.substr(1).split('&'));
	//파라미터 정보만 분리

	////////////////      Init      //////////////
	var winH = $(window).height();
	var winW = $(window).width();
	var imageWidth = 1920;
	var imageHeight = 1080;
	var ratioW =  $(window).width() / imageWidth;
	var ratioH =  $(window).height() / imageHeight;
	var imageW;
	var imageH;
	var ml;
	var mt;

	//상단 메뉴영역 높이값 삭제
	$("#container .visual").css("height",winH);
	$("#gnb .menuActive").css("height",winH);
	$("#timeline").css("height",winH / 3);
	$("#timeline").css("margin-top",winH / 3);
	

	//////////////////////////////////////////////////////////// 전체 화면 기본값 셋팅 처리 스크립트 START ////////////////////////////////////////////////////////////
	$(document).ready(function() {
		var diff = (winH - $(window).height()) * activeNum;
		var fin = $("#container").offset().top + diff;
		
		winH = $(window).height();
		winW = $(window).width();
		ratioW =  $(window).width() / imageWidth;
		ratioH =  $(window).height() / imageHeight;
		$("#container").css("width",winW);
		$(".gbn_sono").css("width",winW / 5);
		$(".gbn_sono").css("height",winH);
		$(".images_trans").css("height",winH - 120);
		
		//숨김영역 처리
		$(".v1_hide_area").css("width",winW);
		$(".v1_hide_area").css("margin-left","+="+winW+"");
		$(".v1_title3_hide").css("width",winW-200);
		$(".v1_hide_area").css("height",winH);
		var hide_page_left = (winW - (winW-200));		//전체에서 200뺀 만큼 양옆 여백처리 값
		var hide_page_imgW = (winW-260) / 3;			//이미지 가로 사이즈 조정
		var hide_page_imgH = hide_page_imgW * 0.7;		//이미지 세로 사이즈 조정
		
		//타임라인 margin-bottom값 처리
		$(".timeline_new:not(:eq(4))").css("margin-bottom",((winH/3)-100)/4);

		$(".v1_title3_hide").css("margin-left",hide_page_left / 2);	//가운데 정렬

		//화면 리사이즈시에 -값 모두 제거
		$("#timeline").css("height",winH / 3);
		$("#timeline").css("margin-top",winH / 3);
		$("#container .visual").css("height",winH);
		$("#gnb .menuActive").css("height",winH);
		$("#container .visual .back,#container .visual .out").stop().css({"width":imageW,"height":imageH,"margin-left":ml});
	
		imageResize();

	//////////////////////////////////////////////////////////// 전체 화면 기본값 셋팅 처리 스크립트 END ////////////////////////////////////////////////////////////
		
		


		//인트로 버튼 마우스 호버 처리 START
		$(".v1_main_btn").hover(function() {
			var index = $(".v1_main_btn").index(this);
			$(".v1_main_btn:eq("+index+")").stop().animate( {
				
				backgroundColor:"rgba(86, 71, 37, 0.7)",
				color:"#dfcfb1"
			}, 1000);
			}, function() {
			var index = $(".v1_main_btn").index(this);
			$(".v1_main_btn:eq("+index+")").stop().animate({
				backgroundColor:"rgba(149, 120, 67, 0.7)",
				//backgroundColor:"rgba( 0, 0, 0, 0 )",
				//color:"#686059"
				color:"#dfcfb1"
			}, 1000);
		});
		//인트로 버튼 마우스 호버 처리 END


	});





	//인트로 버튼 클릭 처리 START
	
	/*$(".v1_main_btn").click(function() {
		var index = $(".v1_main_btn").index(this);
		if (index == 0) {
			location.href="http://14.36.152.67:8090/index";
		} else if (index == 1) {
			location.href="http://14.36.152.67:8090/index";
		} else if (index == 2) {
			//location.href="/dp/";
			location.href='http://14.36.152.67:8090/index';
		} else if (index == 3) {
			$('.v1_hide_area').animate({"margin-left": '-='+winW+''},1000);
		}
	});
	$("div.v1_main_btn").click(function(e) {
		var url = $(this).data("url");
		$("div.loading").show();
		setTimeout(function() {
			window.location.href = url;
		}, 500);
	});
	//인트로 버튼 클릭 처리 END*/




	


	///////////////////////////////////////////////////////////// 이미지 리사이즈  처리 스크립트 START ////////////////////////////////////////////////////////////
	function imageResize() {		//화면 리사이즈시 이미지 리사이징 호출 함수
		if (ratioW > ratioH) {
			imageW = imageWidth*ratioW;
			imageH = imageHeight*ratioW;
			
			$("#container .visual .image").each(function(index) {
				ml = (winW - imageW)/2;
				mt = (winH - imageH)/2;
				$(this).attr('width',imageW);
				$(this).attr('height',imageH);
				$(this).css("margin-left",ml);
				$(this).css("margin-top",mt);
			});
		} else {
			imageW = imageWidth*ratioH;
			imageH = imageHeight*ratioH;
			
			$("#container .visual .image").each(function(index) {
				mt = (winH - imageH)/2;
				ml = (winW - imageW)/2;
				$(this).attr('width',imageW);
				$(this).attr('height',imageH);
				$(this).css("margin-left",ml);
				$(this).css("margin-top",mt);

			});
		}
	}
	imageResize();
	///////////////////////////////////////////////////////////// 이미지 리사이즈  처리 스크립트 END ////////////////////////////////////////////////////////////
	
	function pageChange(val) {
		if(typeof(history.pushState) == 'function')
		{
		    //현재 주소를 가져온다.
		    var renewURL = location.href;
		    renewURL = renewURL.replace(/\&pageNum=([0-9]+)/ig,'');
		    renewURL = '?pageNum='+activeNum;
		    //페이지 갱신 실행!
		    history.pushState(null, null, renewURL);
		}
	}
	
	///////////////////////////////////////////////////////////// 마우스 휠 이벤트 처리 스크립트 START ////////////////////////////////////////////////////////////
	var activeNum = 0;
	var conNum = 6;	//전체 페이지수 총7개 0부터 시작유
	var isScroll = false;
	var speed = 600;
	$("#container").mousewheel(function(event, delta) {
		event.preventDefault();
		if (delta < 0 && activeNum < conNum && isScroll == false) {		//스크롤 다운
			activeNum++;
			f_page(activeNum);
			timelineChk(activeNum);
			calm_size();
			pageChange(activeNum);
			isScroll = true;
			conMove(activeNum);
			timeLineActive(activeNum-1, delta);
			//if (pageNum != activeNum) {
			//	pageNum = activeNum;
			//}
			//alert(pageNum);
			//alert(activeNum);
			//alert('down');
		} else if (delta > 0 && activeNum > 0 && isScroll == false) {		//스크롤 업
			activeNum--;
			f_page(activeNum);
			timelineChk(activeNum);
			calm_size();
			pageChange(activeNum);
			isScroll = true;
			conMove(activeNum);
			timeLineActive(activeNum-1, delta);
			//if (pageNum != activeNum) {
			//	pageNum = activeNum;
			//}
			//alert(pageNum);
			//alert(activeNum);
			//alert('up');
		}
	});
	///////////////////////////////////////////////////////////// 마우스 휠 이벤트 처리 스크립트 END ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////// 마우스 스와이프 이벤트 처리 스크립트 START ////////////////////////////////////////////////////////////
	$("#container").swipe({
		swipe:function(event, direction) {
			if (direction == "up" && activeNum < conNum && isScroll == false) {
				activeNum++;
				f_page(activeNum);
				timelineChk(activeNum);
				calm_size();
				pageChange(activeNum);
				isScroll = true;
				conMove(activeNum);
				timeLineActive(activeNum-1, -1);
			} else if (direction == "down" && activeNum > 0 && isScroll == false) {
				activeNum--;
				f_page(activeNum);
				timelineChk(activeNum);
				calm_size();
				pageChange(activeNum);
				isScroll = true;
				conMove(activeNum);
				timeLineActive(activeNum-1, 1);
			}
		}
	});
	///////////////////////////////////////////////////////////// 마우스 스와이프 이벤트 처리 스크립트 END ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////// 타임라인 클릭 이벤트 처리 스크립트 START ////////////////////////////////////////////////////////////
	$(".timeline_new").click(function() {
		var index = $(".timeline_new").index(this);
		if (index == 0) {
			activeNum = 2;
		} else if (index == 1) {
			activeNum = 3;
		} else if (index == 2) {
			activeNum = 4;
		} else if (index == 3) {
			activeNum = 5;
		} else if (index == 4) {
			activeNum = 6;
		}
		calm_size();
		f_page(activeNum);
		timelineChk(activeNum);
		pageChange(activeNum);
		conMove(activeNum);
		imageReset();
	});
	///////////////////////////////////////////////////////////// 타임라인 클릭 이벤트 처리 스크립트 END ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////// 스크롤시&화면 이동시 높이값 처리 함수 START ////////////////////////////////////////////////////////////
	function conMove(num) {	//스크롤시 호출 높이값 조절
		//alert(winH);
		//$("#container").stop().delay().animate({ top : (num * (winH-60) * -1 +60)}, speed,'easeInOutExpo',function(){
		$("#container").stop().delay().animate({ top : (num * (winH) * -1)}, speed,'easeInOutExpo',function() {
			isScroll = false;
			$("#container .visual .filter").stop().css({"opacity": 1});
			$("#container .visual").stop().eq(num).find(".filter").animate({"opacity": 0}, 1800, 'easeInOutQuint');
			imageReset();
		});
	}
	///////////////////////////////////////////////////////////// 스크롤시&화면 이동시 높이값 처리 함수 START ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////// 스크롤 아래로 버튼 이벤트 스크립트 START ////////////////////////////////////////////////////////////
	$(".title5").click(function() {	//스크롤 아래로 버튼NEW
		activeNum++;
		f_page(activeNum);
		timelineChk(activeNum);
		calm_size();
		pageChange(activeNum);
		isScroll = true;
		conMove(activeNum);
		timeLineActive(activeNum-1, -1);
	});
	///////////////////////////////////////////////////////////// 스크롤 아래로 버튼 이벤트 스크립트 END ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////// 타임 라인 처리 스크립트 START ////////////////////////////////////////////////////////////
	// n : activeNum / m : delta
	function timeLineActive(n, m) {
		var timelineArray = [3, 10, 18, 20, 25, 27, 28, 30, 31];
		//휠업
		if (m > 0) {
			if (activeNum > 1 && activeNum <= 6 ) {
				$("#timeline").stop().delay(300).animate({right: 20}, 1000, 'easeInOutExpo');
				
			} else { //오른쪽 타임라인 숨김
				$("#timeline").stop().delay(300).animate({right:-120}, 1000, 'easeInOutExpo');
			}
		} else if (m < 0) {
			if (activeNum > 1 && activeNum < 14 ) {
				if (jQuery.inArray(activeNum, timelineArray) < 0) {
					$("#timeline").stop().delay(300).animate({right: 20}, 1000, 'easeInOutExpo');
				}
			} else {
				$("#timeline").stop().delay(300).animate({right:-120}, 1000, 'easeInOutExpo');
			}
		}
	}
	///////////////////////////////////////////////////////////// 타임 라인 처리 스크립트 END ////////////////////////////////////////////////////////////

	function imageReset() {
		$(".visual").each(function(index) {
			$(this).has("ul[class=imageWrap]").attr("data-index",1);
			$(".visual").find(".imageWrap").css("left",0);
			$(this).find(".visualNum p").text($(this).closest(".visual").attr("data-index") + " / " + $(this).find(".imageWrap li").length);
		});
	}

	///////////////////////////////////////////////////////////// IE브라우져 분기 스크립트 START ////////////////////////////////////////////////////////////
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		$(".btn_main1, .btn_main2").css("line-height","83px");
		$(".btn_main1, .btn_main2").css("line-height","83px");
		$(".v1_main_btn, .v2_main_btn, .v3_main_btn, .v4_main_btn, .v5_main_btn").css("line-height","67px");
	} else {
	}
	///////////////////////////////////////////////////////////// IE브라우져 분기 스크립트 END ////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////가로 사이즈 1280 대응 관련 CSS 스크립트 START //////////////////////////////////////////////////
	function calm_size() {
		var winW_mode = $(window).width();
		//1280가로 사이즈 대응
		if (parseInt(winW_mode) <= 1280) {
			$(".v3_main_btn:eq(3)").css("margin-top","25px");
			$(".v3_main_btn:eq(4)").css("margin-top","25px");
			$(".v3_title3").css("width","940px");
			$(".v3_title3").css("margin-left","-365px");
		} else if (parseInt(winW_mode) < 1545) {
			$(".v3_main_btn:eq(3)").css("margin-top","25px");
			$(".v3_main_btn:eq(4)").css("margin-top","25px");
			$(".v3_title3").css("width","940px");
			$(".v3_title3").css("margin-left","-365px");
		} else if (parseInt(winW_mode) > 1280) {
			$(".v3_main_btn:eq(3)").css("margin-top","0");
			$(".v3_main_btn:eq(4)").css("margin-top","0");
			$(".v3_title3").css("width","1260px");
			$(".v3_title3").css("margin-left","-613px");
		}
	}
	/////////////////////////////////////////////////// 가로 사이즈 1280 대응 관련 CSS 스크립트 END //////////////////////////////////////////////////
});