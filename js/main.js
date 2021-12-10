$(document).ready(function(){
  $(".link").hover(function(){
  $(this).addClass("rotate-scale-up");
  }, function(){
  $(this).removeClass("rotate-scale-up");
  });
  $(".link").click(function(){
  $(this).closest(".flip-card").toggleClass("hovered"); 
  });
  });