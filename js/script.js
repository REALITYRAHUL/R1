$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/csk.jpg",
    "images/virat.jpg",
    "images/dinesh.jpg",
    "images/rohit.jpg",
    "images/aj.jpg",
    "images/shreyas.jpg",
    "images/kane.jpg",
  ];

  var i = 0;
$(document).ready(function(){
  $(".gallery").hide();
    $(".button").click(function(){
        $(".gallery").toggle();
    });
});
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 3000);

});
