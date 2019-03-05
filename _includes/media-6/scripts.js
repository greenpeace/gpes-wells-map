document.addEventListener("DOMContentLoaded", function (event) {

    var colores = [];
    colores["Jucar"] = 'rgba(255, 121, 84, 1)';
    colores["Cantabrico"] = 'rgba(255, 196, 167, 0.85)';
    colores["Segura"] = 'rgba(255, 160, 0, 0.85)';
    colores["Mino"] = 'rgba(253, 246, 178, 0.85)';
    colores["Duero"] = 'rgba(255, 225, 159, 0.85)';
    colores["Guadiana"] = 'rgba(218,241,250, 0.85)';
    colores["Ebro"] = 'rgba(215, 213, 161, 0.85)';
    colores["Tajo"] = 'rgba(195, 224, 166, 0.85)';
    colores["Guadalquivir"] = 'rgba(122, 189, 148, 0.85)';

    /**
    * Denuncias pozos ilegales
    */
    var denuncias_pozos_ilegales = [{
      y: [
      'Júcar',
      'Cantábrico',
      'Segura',
      'Miño',
      'Duero',
      'Guadiana',
      'Ebro',
      'Tajo',
      'Guadalquivir'],
      x: [0, 0, 113, 114, 385, 583, 608, 703, 968],
      marker: {
          color: [
        colores["Jucar"],
        colores["Cantabrico"],
        colores["Segura"],
        colores["Mino"],
        colores["Duero"],
        colores["Guadiana"],
        colores["Ebro"],
        colores["Tajo"],
        colores["Guadalquivir"]
    ]
      },
      type: 'bar',
      orientation: 'h'
    }];

    var layout_denuncias_pozos_ilegales = {
      title: '{{ site.data[page.lang_file].media-6.title-1 }}<br />2013 / 2017',
      font: {
          family: '"Work Sans",sans-serif',
          size: 11,
          color: '#212529'
      },
      titlefont: {
          size: 16,
          color: '#212529'
      },
      annotations: [{
          x: 0,
          y: 0,
          xref: 'x',
          yref: 'y',
          text: '{{ site.data[page.lang_file].media-6.no-data }}',
          showarrow: true,
          arrowhead: 7,
          ax: 70,
          ay: 0
    }],
      margin: {
          r: 10,
          t: 55,
          b: 80,
          l: 90
      },
      paper_bgcolor: '#f6f6f5',
      plot_bgcolor: '#f6f6f5',
      xaxis: {
          title: "{{ site.data[page.lang_file].media-6.num-den }}",
          fixedrange: true,
          range: [-20, 1350]
      },
      yaxis: {
          title: "{{ site.data[page.lang_file].media-6.confed }}",
          fixedrange: true
      }

    }

    /**
    * Denuncias extracciones ilegales
    */
    var denuncias_extracciones_ilegales = [{
      y: [
      'Ebro',
      'Segura',
      'Cantábrico',
      'Júcar',
      'Miño',
      'Guadiana',
      'Tajo',
      'Guadalquivir',
      'Duero'],
      x: [0, 109, 136, 147, 265, 540, 607, 974, 1305],
      marker: {
          color: [
        colores["Ebro"],
        colores["Segura"],
        colores["Cantabrico"],
        colores["Jucar"],
        colores["Mino"],
        colores["Guadiana"],
        colores["Tajo"],
        colores["Guadalquivir"],
        colores["Duero"]
    ]
      },
      type: 'bar',
      orientation: 'h'
    }];

    var layout_denuncias_extracciones_ilegales = {
      title: '{{ site.data[page.lang_file].media-6.title-2 }}<br />2013 / 2017',
      font: {
          family: '"Work Sans",sans-serif',
          size: 11,
          color: '#212529'
      },
      titlefont: {
          size: 16,
          color: '#212529'
      },
      annotations: [{
          x: 0,
          y: 0,
          xref: 'x',
          yref: 'y',
          text: '{{ site.data[page.lang_file].media-6.no-data }} (???)',
          showarrow: true,
          arrowhead: 7,
          ax: 70,
          ay: 0
    }],
      margin: {
          r: 10,
          t: 55,
          b: 80,
          l: 90
      },
      paper_bgcolor: '#f6f6f5',
      plot_bgcolor: '#f6f6f5',
      xaxis: {
          title: "{{ site.data[page.lang_file].media-6.num-den }}",
          fixedrange: true,
          range: [-20, 1350]
      },
      yaxis: {
          title: "{{ site.data[page.lang_file].media-6.confed }}",
          fixedrange: true
      }

    }

    /**
    * Intialize the map and manages the click in the buttons
    */

    Plotly.newPlot('graficos_pozos', denuncias_pozos_ilegales, layout_denuncias_pozos_ilegales, {
      displayModeBar: false
    });

    var total_pozos_ilegales = document.getElementById("total_pozos_ilegales");
    var total_extracciones_ilegales = document.getElementById("total_extracciones_ilegales");
    var tituloTotales = document.getElementById("tituloTotales");
    total_pozos_ilegales.addEventListener("click", function () {
      Plotly.newPlot('graficos_pozos', denuncias_pozos_ilegales, layout_denuncias_pozos_ilegales, {
          displayModeBar: false
      });
        total_pozos_ilegales.classList.add("btactive");
        total_extracciones_ilegales.classList.remove("btactive");

    });
    total_extracciones_ilegales.addEventListener("click", function () {
      Plotly.newPlot('graficos_pozos', denuncias_extracciones_ilegales, layout_denuncias_extracciones_ilegales, {
          displayModeBar: false
      });
        total_extracciones_ilegales.classList.add("btactive");
        total_pozos_ilegales.classList.remove("btactive");
    });

});
