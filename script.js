
// Initialize and add the map
function initMap() {
    // The location of the restaurant
    const restaurant = { lat: -25.363, lng: 131.044 };
    // The map, centered at the restaurant
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: restaurant,
    });
    // The marker, positioned at the restaurant
    const marker = new google.maps.Marker({
        position: restaurant,
        map: map,
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
