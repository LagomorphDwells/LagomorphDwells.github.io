$(document).ready(function(){

// Declare bunnies in variables

  const bunnyWhite = $(".bunnyWhite");
  const bunnyRed = $(".bunnyRed");
  const bunnyGrey = $(".bunnyGrey");

// Hide all bunnies

$(".bunny").addClass("hide");
$(".hiddenText").addClass("hide")

// Opacity shift

function opacityInc(arg){
  var incIt = arg;
  incIt.css("opacity", "1");
}

function opacityDec(arg){
  var decIt = arg;
  decIt.css("opacity", "0");
}

// Fade's elements in on click

function begin(){
  $(".begin").fadeOut(1500);
  opacityInc(bunnyWhite);
  opacityInc(bunnyRed);
  var bunny = document.querySelector(".bunnyWhite");
  bunny.addEventListener("transitionend", function(){
    $(".background").css("opacity", "1");
  });
}

$(".begin").click(function(){
  $(".bunnyWhite").toggleClass("hide");
  begin();
});




// Bunny Swapper

const background = document.querySelector(".background");

var interval;
var scaryBunnyInt;

background.addEventListener("transitionend", function(){

$(".bunnyWhite").css("transition","2.5s");

function bunnySwap(){
  var count = 0;
  interval = setInterval(function(){
      if(count <=9){
        $(".bunnyWhite").toggleClass("hide");
        $(".bunnyRed").toggleClass("hide");
      count++;
      } else {
        clearInterval(interval);
      }
    }, 50);
}


 scaryBunnyInt = setInterval(function(){
    bunnySwap();
  }, 3000);

});

$(".bunnyWhite").click(function(){
  clearInterval(scaryBunnyInt);
  $(".bunnyGrey").toggleClass("hide");
  opacityDec(bunnyWhite);
  opacityDec(bunnyRed);
  var bunny = document.querySelector(".bunnyWhite");
  bunny.addEventListener("transitionend", function(){
    opacityInc(bunnyGrey);
    $(".hiddenText").removeClass("hide");
  });
});

$(".bunnyGrey").click(function(){
  $(".bunnyRed").toggleClass("hide");
  opacityDec(bunnyGrey);
  var bunny = document.querySelector(".bunnyGrey");
  bunny.addEventListener("transitionend", function(){
    opacityInc(bunnyRed);
    $(".hiddenTitle").css("opacity", ".5");

    setTimeout(function(){
        $(".whiteOverlay").removeClass("hide");
     }, 10000);

     setTimeout(function(){
         $(".bunnyFormWrap").css("opacity", "1");
      }, 12000);

  });
});

$("form").submit(function(e){
    e.preventDefault();
    $(".blackOverlay").removeClass("hide");
});



})
