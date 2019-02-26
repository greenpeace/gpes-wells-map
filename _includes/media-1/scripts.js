
document.addEventListener("DOMContentLoaded", function (t) {
    /* BEGIN SCRIPTS */
    var osmap; 
    
    var containerEl = document.getElementById("mapaAndalucia");
    var elwidth = containerEl.offsetWidth;
    var defaultZoomLevel = elwidth >= 550 ? 6.5 : 6.3;
    var maxZoomLevel = 9;
    var minZoomLevel = 6;
    
    var mapheight = elwidth >= 550 ? 400 : 300;
    
    document.getElementById("mapaAndalucia").style.height = mapheight + "px";
    
    
    function easyNumbers(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €';
    }

    function drawSancionesGuadalquivir() {
        osmap = L.map('mapaAndalucia', {
            scrollWheelZoom: false
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        guadalquivir.forEach(function(node){
            L.circle([node.lat, node.long], (node.NumSanciones * 100 ) + 5000, {
                // color: '#f00',
                stroke: false,
                fillColor: '#ff9f00',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>{{ site.data[page.lang_file].media-1.num_sanctions }}: " + node.NumSanciones + "</p>");
        });
    }
    
   drawSancionesGuadalquivir();
    
    function drawValorGuadalquivir() {
        osmap = L.map('mapaAndalucia', {
            scrollWheelZoom: false
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        guadalquivir.forEach(function(node){
            L.circle([node.lat, node.long], (node.Danos / 40) + 100, {
                // color: '#f00',
                stroke: false,
                fillColor: '#e80505',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>{{ site.data[page.lang_file].media-1.damage_value }}: " + easyNumbers(node.Danos) + "</p>");
        });
    }

     
    var numSanciones = document.getElementById("numSanciones");
    var valorDanos = document.getElementById("valorDanos");
    var TituloGraficoAndalucia = document.getElementById("tituloGraficoAndalucia");
    numSanciones.addEventListener("click", function(){
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.num_sanctions }}";
        osmap.off();
        osmap.remove();
        drawSancionesGuadalquivir();
    });
    valorDanos.addEventListener("click", function(){
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.damage_value }}";
        osmap.off();
        osmap.remove();
        drawValorGuadalquivir();
    }); 


    /* END SCRIPTS */
});
