

$(function () {


  $('.subMenu').hide();

  $(".menu>a").click(function () {
    var li = $(this).parent();
    var ul = li.parent()
    ul.find('li').removeClass('expand');
    ul.find('ul').not(li.find('ul')).hide();
    li.children('ul').fadeToggle(100);
    if (li.children('ul').is(':visible') || li.has('ul')) {
        li.addClass('expand');
    }
  });

 // $('#gnb').hide();
  $('#menuToggle').click(function () {
      $('#gnb').animate({
        "left":"0",
      },200);
  });
  $('#btn-gnb_close').click(function(){
    $('#gnb').animate({
      "left":"-100%",
    },150);
  });

});
