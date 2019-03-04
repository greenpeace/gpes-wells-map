document.addEventListener("DOMContentLoaded", function (t) {
    
    /* BEGIN SCRIPTS */
    
    var osmap;

    var containerEl = document.getElementById("mapaAndalucia2");
    var elwidth = containerEl.offsetWidth;
    var defaultZoomLevel = elwidth >= 550 ? 6.5 : 6.3;
    var maxZoomLevel = 9;
    var minZoomLevel = 6;

    var minCircle = 2500;

    var mapheight = elwidth >= 550 ? 400 : 300;

    document.getElementById("mapaAndalucia2").style.height = mapheight + "px";

    var bounds = new L.LatLngBounds(new L.LatLng(34.9919663, -10), new L.LatLng(40.5532684, 1));

    /**
     * Obtain the radius from the area
     * @param   {number} area Area of the circle
     * @returns {number} Radius of the circle
     */
    var getRadius = function (area) {
        return Math.sqrt(area / Math.PI);
    }

    /**
     * Make the numbers easy to read and add euro
     * @param   {number} value Number of Euro
     * @returns {string} String to display
     */
    var easyNumbersEuro = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €';
    }

    /**
     * Draws the number of sancions map
     */
    var drawSancionesJucar = function () {
        osmap = L.map('mapaAndalucia2', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        jucar_sanciones.forEach(function (node) {
            L.circle([node.lat, node.long], (getRadius(node.NumSanciones) * 2000) + minCircle, {
                // color: '#f00',
                stroke: false,
                fillColor: '#ff9f00',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>{{ site.data[page.lang_file].media-1.num_sanctions }}: " + node.NumSanciones + "</p>");
        });
    }

    drawSancionesJucar();

    /**
     * Draws the amount map
     */
    var drawValorJucar = function () {
        osmap = L.map('mapaAndalucia2', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([37.2141193, -4.3873866], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        jucar_danos.forEach(function (node) {
            L.circle([node.lat, node.long], (getRadius(node.Danos) * 30) + minCircle, {
                // color: '#f00',
                stroke: false,
                fillColor: '#e80505',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>{{ site.data[page.lang_file].media-1.damage_value }}: " + easyNumbersEuro(node.Danos) + "</p>");
        });
    }

    /**
     * Manages the click in the buttons
     */
    var numSanciones = document.getElementById("numSancionesAndalucia2");
    var valorDanos = document.getElementById("valorDanosAndalucia2");
    var TituloGraficoAndalucia = document.getElementById("tituloGraficoAndalucia2");
    numSanciones.addEventListener("click", function () {
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.num_sanctions }}";
        osmap.off();
        osmap.remove();
        drawSancionesJucar();
    });
    valorDanos.addEventListener("click", function () {
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.damage_value }}";
        osmap.off();
        osmap.remove();
        drawValorJucar();
    });


    /* END SCRIPTS */
    
});
