 document.addEventListener("DOMContentLoaded", function (t) {
    /* BEGIN SCRIPTS */

    var osmap = L.map('mapaAndalucia', {
        scrollWheelZoom: false
    }).setView([37.2141193, -4.3873866], 6.5);

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=es', {
        maxZoom: 8,
        minZoom: 6.5,
        attribution: '&copy; OpenStreetMap contributors, Wikimedia',
        id: 'mapbox.light'
    }).addTo(osmap);
     
	L.circle([37.2141193, -4.3873866], 50000, {
		// color: '#f00',
        stroke: false,
		fillColor: '#008',
		fillOpacity: 0.7
	}).addTo(osmap).bindPopup("<h4>Mensage en el popup</p><h4>Bar</p>");

    /* END SCRIPTS */
});
