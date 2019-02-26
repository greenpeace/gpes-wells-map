 document.addEventListener("DOMContentLoaded", function (t) {
    /* BEGIN SCRIPTS */

    var osmap = L.map('mapaAndalucia', {
        scrollWheelZoom: false
    }).setView([37.2141193, -4.3873866], 6.5);

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=es', {
        maxZoom: 9,
        minZoom: 6.5,
        attribution: '&copy; OpenStreetMap contributors, Wikimedia',
        id: 'mapbox.light'
    }).addTo(osmap);
    
          
    guadalquivir.forEach(function(node){
        L.circle([node.lat, node.long], (node.NumSanciones * 100 ) + 5000, {
            // color: '#f00',
            stroke: false,
            fillColor: '#800',
            fillOpacity: 0.6
        }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>Número de sanciones: " + node.NumSanciones + "</p>");        
    });


    /* END SCRIPTS */
});
