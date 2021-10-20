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

//Main Page
text.onmouseover = function mouseOver() {
  const text = document.getElementById("text").innerHTML = "We #Design";
};
text.onmouseout = function mouseOut() {
  const text = document.getElementById("text").innerHTML = "We #Develop";
};

//Our Projects
$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    variableWidth: true
  });
});