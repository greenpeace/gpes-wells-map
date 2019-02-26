
document.addEventListener("DOMContentLoaded", function (t) {
    /* BEGIN SCRIPTS */
    var osmap; 
    
    var containerEl = document.getElementById("mapaAndalucia");
    var elwidth = containerEl.offsetWidth;
    var defaultZoomLevel = elwidth >= 550 ? 6.5 : 6.3;
    
    var mapheight = elwidth >= 550 ? 400 : 300;
    
    document.getElementById("mapaAndalucia").style.height = mapheight + "px";
    
    
    function drawSanciones() {
        osmap = L.map('mapaAndalucia', {
            scrollWheelZoom: false
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=es', {
            maxZoom: 9,
            minZoom: 5,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        guadalquivir.forEach(function(node){
            L.circle([node.lat, node.long], (node.NumSanciones * 100 ) + 5000, {
                // color: '#f00',
                stroke: false,
                fillColor: '#e80505',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>Número de sanciones: " + node.NumSanciones + "</p>");        
        });
    }
    
   drawSanciones();
    
    function drawValor() {
        osmap = L.map('mapaAndalucia', {
            scrollWheelZoom: false
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=es', {
            maxZoom: 9,
            minZoom: 5,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        guadalquivir.forEach(function(node){
            L.circle([node.lat, node.long], (node.Danos / 40) + 100, {
                // color: '#f00',
                stroke: false,
                fillColor: '#ff9f00',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>Valor de los daños: " + node.Danos + "</p>");        
        });
    }

     
    var numSanciones = document.getElementById("numSanciones");
    var valorDanos = document.getElementById("valorDanos");
    var TituloGrafico = document.getElementById("tituloGrafico");
    numSanciones.addEventListener("click", function(){
        TituloGrafico.textContent = "Número de sanciones";
        osmap.off();
        osmap.remove();
        drawSanciones();
    });
    valorDanos.addEventListener("click", function(){
        TituloGrafico.textContent = "Valor de los daños";
        osmap.off();
        osmap.remove();
        drawValor();
    }); 


    /* END SCRIPTS */
});
