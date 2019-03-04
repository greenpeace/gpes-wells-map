document.addEventListener("DOMContentLoaded", function (t) {
    
    /* BEGIN SCRIPTS */
    
    var osmap;

    var containerEl = document.getElementById("mapaTajo");
    var elwidth = containerEl.offsetWidth;
    var defaultZoomLevel = elwidth >= 550 ? 6.5 : 6.3;
    var maxZoomLevel = 9;
    var minZoomLevel = 6;

    var minCircle = 2500;

    var mapheight = elwidth >= 550 ? 400 : 300;

    document.getElementById("mapaTajo").style.height = mapheight + "px";

    var bounds = new L.LatLngBounds(new L.LatLng(39.0855203, -8.8438118), new L.LatLng(41.9911131, 0.1358697));

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
    var drawSancionesTajo = function () {
        osmap = L.map('mapaTajo', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([40.4381311, -3.8196226], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        tajo_sanciones.forEach(function (node) {
            L.circle([node.lat, node.long], (getRadius(node.NumSanciones) * 2000) + minCircle, {
                // color: '#f00',
                stroke: false,
                fillColor: '#ff9f00',
                fillOpacity: 0.6
            }).addTo(osmap).bindPopup("<h4>" + node.Municipio + "</h4><p>{{ site.data[page.lang_file].media-1.num_sanctions }}: " + node.NumSanciones + "</p>");
        });
    }

    drawSancionesTajo();

    /**
     * Draws the amount map
     */
    var drawValorTajo = function () {
        osmap = L.map('mapaTajo', {
            scrollWheelZoom: false,
            maxBounds: bounds
        }).setView([40.4381311, -3.8196226], defaultZoomLevel);

        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang={{ site.data[page.lang_file].lang }}', {
            maxZoom: maxZoomLevel,
            minZoom: minZoomLevel,
            attribution: '&copy; OpenStreetMap contributors, Wikimedia',
            id: 'mapbox.light'
        }).addTo(osmap);


        tajo_danos.forEach(function (node) {
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
    var numSanciones = document.getElementById("numSancionesTajo");
    var valorDanos = document.getElementById("valorDanosTajo");
    var TituloGraficoAndalucia = document.getElementById("tituloGraficoTajo");
    numSanciones.addEventListener("click", function () {
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.num_sanctions }}";
        osmap.off();
        osmap.remove();
        drawSancionesTajo();
    });
    valorDanos.addEventListener("click", function () {
        TituloGraficoAndalucia.textContent = "{{ site.data[page.lang_file].media-1.damage_value }}";
        osmap.off();
        osmap.remove();
        drawValorTajo();
    });


    /* END SCRIPTS */
    
});
