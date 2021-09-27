$(document).ready(function(){
  $("marquee img").mouseenter(function(){
    i=this.id;
    $("#"+String(i)).animate({height: '200px'});

  });
});


$(document).ready(function(){
  $("marquee img").mouseleave(function(){
    i=this.id;
    $("#"+String(i)).animate({height: '150px'});

  });
});


$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});

window.setInterval(setanime,1000);
function setanime(){
	$("button").animate( {opacity:0.25}, 1000,
	 function(){
		$(this).css('opacity',1)
	});
}


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
});



/*Slideshow*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  if (n > slides.length)
   {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.setInterval(setanime,2000);
function setanime(){
    $(".page_logo").animate( {opacity:0.25}, 2000,
     function(){
        $(this).css('opacity',1)
    });
}