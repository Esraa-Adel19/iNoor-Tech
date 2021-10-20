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

//Map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 30.013260066566854, lng: 31.2088311403178 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }