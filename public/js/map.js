// GeoJSON stores coordinates as [longitude, latitude]
// Leaflet expects [latitude, longitude]

const latLng = [coordinates[1], coordinates[0]];

const map = L.map("map").setView(latLng, 8);

// OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Red marker
const redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.marker(latLng, { icon: redIcon })
    .addTo(map)
    .bindPopup(`
        <h5>${listingTitle}</h5>
        <p>Exact location will be provided after booking.</p>
    `)
    .openPopup();