let nav = document.querySelectorAll("ul.navbar-nav li");
let navs = document.getElementsByClassName("nav-item");

for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(".fa-gear").click(() => {
  if ($(".outer-box").css("left") == "0px") {
    let innerWidth = $(".inner-box").css("width");
    $(".outer-box").animate({ left: `-${innerWidth}` }, 1000);
  } else {
    $(".outer-box").animate({ left: "0" }, 1000);
  }
});
// #1 change main color
// play in css
$(".box").click(function () {
  let color = $(this).css("background-color");
  $(":root").css("--main-color", color);
});

// #2 class  progress-bar
// play in element style
$(".box").click(function () {
  let color = $(this).css("background-color");
  $(".chango").css("background-color", color);
});

const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false,
})