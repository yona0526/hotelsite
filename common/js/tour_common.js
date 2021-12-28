/* flash 삽입(투명) */

function flash(c,d,e) {
 var flash_tag = "";
 flash_tag = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
 flash_tag +='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ';
 flash_tag +='WIDTH="'+c+'" HEIGHT="'+d+'" >';
 flash_tag +='<param name="movie" value="'+e+'">';
 flash_tag +='<param name="quality" value="high">';
 flash_tag +='<param name="wmode" value="transparent">';
 flash_tag +='<embed src="'+e+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" ';
 flash_tag +='type="application/x-shockwave-flash"  WIDTH="'+c+'" HEIGHT="'+d+'"></embed></object>'

 document.write(flash_tag);

}


/* png 투명파일 */

    function setPng24(obj) {
        obj.width=obj.height=1;
        obj.className=obj.className.replace(/\bpng24\b/i,'');
        obj.style.filter =
        "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
        obj.src=''; 
        return '';
    }

function eopen(url, width, height, left, top, scrollbars, toolbar, menubar, statusbar, resizable){
  window.open(url, "custom", "width=" + width + ",height=" + height + ",left=" +left+",top="+top+",scrollbars=" + scrollbars + ",toolbar=" + toolbar + ",menubar=" + menubar + ",statusbar=" + statusbar +",resizable=" + resizable);
}

// 오픈 윈도우
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//마우스오버 스크립트
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


/* 오토탭 */

var isNN = (navigator.appName.indexOf("Netscape")!=-1);
function autoTab(input,len, e) {
var keyCode = (isNN) ? e.which : e.keyCode; 
var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];

if(input.value.length >= len && !containsElement(filter,keyCode)) {
input.value = input.value.slice(0, len);
input.form[(getIndex(input)+1) % input.form.length].focus();
}

function containsElement(arr, ele) {
var found = false, index = 0;
while(!found && index < arr.length)
if(arr[index] == ele) found = true;
else index++;
return found;
}

function getIndex(input) {
var index = -1, i = 0, found = false;
while (i < input.form.length && index == -1)
if (input.form[i] == input)index = i;
else i++;
return index;
}
return true;
}





//패턴매칭, 정규식으로 유효성을 검사한다, 유효하면 false, 유효하지 않으면 true
function ValidString(s, exp)
{
	//새 대소문자 구별하지 않는(gi) 정규식을 만든다
	reg = new RegExp(exp, "gi");
	return !reg.test(s);
}

//날짜값 검사
function CheckDate(e,div)
{
	val = e.value;

	len = val.length;
	isNum = !isNaN(val);
	
	if(isNum)
	{
		year = val.substring(0,len-4);
		month = val.substr(len-4,2);
		day = val.substr(len-2,2);
	}
	else
	{
		year = val.substr(0,len-6);
		month = val.substr(len-5,2);
		day = val.substr(len-2,2);
	}
	
	if(year.length == 2 && !isNaN(year) && eval(year) < 50)
		year = "20" + year;
	else if(year.length == 2 && !isNaN(year))
		year = "19" + year;

	if(!isNaN(year+month+day) && (1900 < eval(year) && eval(year) < 2100) && (0 < eval(month) && eval(month) < 13) && (0 < eval(day) && eval(day) < 32))
	{
		e.value = year + div + month + div + day;
		return true;
	}
	else
	{
		return false;
	}
}

//사용자 입력 체크
function Check(str, msg, focus)
{
	if(trim(str.value).length == 0)
	{
		alert(msg);
		if(focus)
		{
			str.focus();
		}
		return true;
	}
	
	return false;
}
//공백 제거
function trim(str) { return str.replace(/(^\s+)|(\s+)$/,""); }

//윈도를 띄운다
function OpenWindow(url,width,height,scroll)
{
	if(scroll == null) scroll = "no";
	winpos = "left=" + ((window.screen.width-width)/2) + ",top=" + ((window.screen.height-height-28)/2);
	winstyle="width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,location=no,resizable=no,copyhistory=no,scrollbars=" + scroll + "," + winpos;
	window.open(url,'_blank',winstyle);
}

//창이름을 주어서 윈도를 띄운다.
function OpenWindowByName(url, width, height, WindowName, scroll)
{
	if(scroll == null)
		scroll = "no";
	winpos = "left=" + ((window.screen.width - width ) / 2 ) + ",top=" + ((window.screen.height-height-28)/2);
	winstyle="width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,location=no,resizable=no,copyhistory=no,scrollbars=" + scroll + "," + winpos;
	window.open(url,WindowName,winstyle);
}

//주민등록번호의 유효성 검사
function PeopleCode(peoplecode)
{
	var v = new Array(13);
	var arg = new Array(12);
	
	//주민등록번호 각 자리마다 곱해질 인수, 12자리까지 곱하고 마지막 자리는 곱하지 않는다.
	arg[0] = 2;
	arg[1] = 3;
	arg[2] = 4;
	arg[3] = 5;
	arg[4] = 6;
	arg[5] = 7;
	arg[6] = 8;
	arg[7] = 9;
	arg[8] = 2;
	arg[9] = 3;
	arg[10] = 4;
	arg[11] = 5;
	
	var i;
	var sum = 0;
	var result = 0;

	
	//각자리마다 정해진 인수를 곱한뒤 총합을 구한다.
	for(i = 0; i < 12; i++)
	{
		v[i] = parseFloat(peoplecode.substring(i, i+1) * arg[i]);
		sum = sum + v[i];
	}
	
	v[12] = parseFloat(peoplecode.substring(12, 13));

	//총합을 11로 나눈 나머지를 11에서 빼준후 다시 10으로 나눈 나머지(result)를 구해 이것이 주민등록번호
	//맨 마지막 숫자와 같다면 유효한 주민등록 번호이다.
	result = (11 - sum % 11) % 10;

	return (result != v[12]);
}

//입력박스에서 일정갯수의 문자가 입력되면 포커스를 다음 입력박스로 이동한다.
function NextFocus(box, count, nextBox)
{
	if(box.value.length == count)
		nextBox.focus();
}

// Replace
function ReplaceStr(strOriginal, strFind, strChange)
{
  return strOriginal.split(strFind).join(strChange);
}

//라이오버튼이 선택된 값을 가져온다
function GetRadioValue(rdo)
{
	var result = "";
	for(var i = 0; i < rdo.length; i++)
	{
		if(rdo[i].checked)
			result = rdo[i].value;
	}
	
	return result;
}

