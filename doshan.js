//Navbar
function homeFunction() {
  location.replace("home.html")
}

function aboutFunction() {
  location.replace("about.html")
}

function projectsFunction() {
  location.replace("projects.html")
}

function project_detailFunction() {
  location.replace("project-detail.html")
}

function contactFunction() {
  location.replace("contact.html")
}

//Project Slider
$('.doshan-slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<span class="priv_arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa fa-angle-right"></i></span>',
  });


//Projects Slider
  $('.cards').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    prevArrow: '<span class="priv_arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa fa-angle-right"></i></span>',
  });
