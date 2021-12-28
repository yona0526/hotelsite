	function check(){
		var form = document.frmConfirm;
		//첫번째 라디오 버튼을 선택한 경우
		if(form.selectType[0].checked == true){
			//현재 폼의 action 값을 menu_1.html이라는 파일로 만든다
			fnSubmit();
		}
		//두번째 라디오 버튼을 선택한 경우
		else if(form.selectType[1].checked == true){
			pay(); 
		}
	
	}


	
	
		var pf;

		function init() {
			pf = document.frmConfirm;
			pf.ORDERNO.value= getTimeStamp();
		}

		function pay() {


     document.charset = "euc-kr";
     
		var fileName;

			fileName = "http://ssl.kiwoompay.co.kr/vaccount/DaouVaccountMng.jsp";
			
			//pf = document.payForm;
			pf = document.VPay
			
	/*
			if (pf.USERSSN.value == "" )
			{
				alert("주민번호는 필수입니다.");
				return;
			}
		*/	
			KIWOOMPAY = window.open("", "KIWOOMPAY", "width=468,height=538");
			KIWOOMPAY.focus();

			pf.target = "KIWOOMPAY";
			//pf.target = "hidden";
			pf.action = fileName;
			pf.method = "post";
			pf.submit();

		}

		function getTimeStamp() {
			var d = new Date();
			var month = d.getMonth() + 1
			var date = d.getDate()
			var hour = d.getHours()
			var minute = d.getMinutes()
			var second = d.getSeconds()

			month = (month < 10 ? "0" : "") + month;
			date = (date < 10 ? "0" : "") + date;
			hour = (hour < 10 ? "0" : "") + hour;
			minute = (minute < 10 ? "0" : "") + minute;
			second = (second < 10 ? "0" : "") + second;

			var s =
			d.getFullYear() + month + date + hour + minute + second

			return s;
		}
		
		function test(url){
			var fileName;

			//fileName = "./result.jsp";
			fileName = url;
			
			
//			pf.target = "_self";
			pf.target = "hidden";
			pf.action = fileName;
			pf.method = "post";
			pf.submit();
		}
		//////////////////////////////////////////////////////////////////////////////////////////////
		
 	//-->
	


var pf;

function init() {
	pf = document.frmConfirm
	pf.ORDERNO.value= getTimeStamp();
}

function fnSubmit() {
	
	document.charset = "euc-kr";
	
	var fileName;
	fileName = "https://ssl.kiwoompay.co.kr/card/DaouCardMng.jsp";		
	
	pf = document.frmConfirm
	
		 
	
	var UserAgent = navigator.userAgent;
	
	if (UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
		KIWOOMPAY = window.open("", "KIWOOMPAY", "fullscreen");
		KIWOOMPAY.focus();
		pf.target = "KIWOOMPAY";
	}else{
		KIWOOMPAY = window.open("", "KIWOOMPAY", "width=579,height=527");
		KIWOOMPAY.focus();
		pf.target = "KIWOOMPAY";
	}
	pf.action = fileName;
	pf.method = "post";
	pf.submit();
	
	
}


function fnCheck() {	

	var frm = document.frmConfirm;
	
	//주문번호
	if(trim(frm.ORDERNO.value) == "" || getByteLen(frm.ORDERNO.value) > 50) {
		alert("주문번호 (ORDERNO) 를 입력해주세요. (최대:50byte, 현재:" + getByteLen(frm.ORDERNO.value) + ")");
		return;
	}
	//상품구분
	if(trim(frm.PRODUCTTYPE.value) == "" || getByteLen(frm.PRODUCTTYPE.value) > 2) {
		alert("상품구분 (PRODUCTTYPE) 를 입력해주세요. (최대:2byte, 현재:" + getByteLen(frm.PRODUCTTYPE.value) + ")");
		return;
	}
	//과금유형
	if(trim(frm.BILLTYPE.value) == "" || getByteLen(frm.BILLTYPE.value) > 2) {
		alert("과금유형 (BILLTYPE) 를 입력해주세요. (최대:2byte, 현재:" + getByteLen(frm.BILLTYPE.value) + ")");
		return;
	}
	//결제금액
	if(trim(frm.AMOUNT.value) == "" || getByteLen(frm.AMOUNT.value) > 10) {
		alert("결제금액 (AMOUNT) 를 입력해주세요. (최대:10byte, 현재:" + getByteLen(frm.AMOUNT.value) + ")");
		return;
		
	}
	/********************  필수 입력 체크 끝  ***/
}

	   
function trim(txt) {
	while (txt.indexOf(' ') >= 0) {
		txt = txt.replace(' ','');
	}
	return txt;
}

function getTimeStamp() {
	var d = new Date();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();

	month = (month < 10 ? "0" : "") + month;
	date = (date < 10 ? "0" : "") + date;
	hour = (hour < 10 ? "0" : "") + hour;
	minute = (minute < 10 ? "0" : "") + minute;
	second = (second < 10 ? "0" : "") + second;

	var s = d.getFullYear() + month + date + hour + minute + second;

	return s;
}

function getByteLen(p_val) {
	var onechar;
	var tcount = 0;
	
	for(i = 0; i < p_val.length; i++) {
		onechar = p_val.charAt(i);
		if(escape(onechar).length > 4)
			tcount += 2;
		else if(onechar != '\r')
			tcount++;
	}
	return tcount;
}

function fnNumCheck() {
	if(event.keyCode >= 48 && event.keyCode <= 57)
		event.returnValue = true;
	else
		event.returnValue = false;
}


