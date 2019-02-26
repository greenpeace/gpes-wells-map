[
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column Daños Ocasionados (euros) using expression grel:value.round()",
    "engineConfig": {
      "mode": "row-based",
      "facets": []
    },
    "columnName": "Daños Ocasionados (euros)",
    "expression": "grel:value.round()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/column-rename",
    "description": "Rename column NumSanciones pozos ilegales to NumSanciones",
    "oldColumnName": "NumSanciones pozos ilegales",
    "newColumnName": "NumSanciones"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Daños Ocasionados (euros) to Danos",
    "oldColumnName": "Daños Ocasionados (euros)",
    "newColumnName": "Danos"
  },
  {
    "op": "core/column-removal",
    "description": "Remove column Column",
    "columnName": "Column"
  },
  {
    "op": "core/row-removal",
    "description": "Remove rows",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "omitError": false,
          "expression": "isBlank(value)",
          "selectBlank": false,
          "selection": [
            {
              "v": {
                "v": true,
                "l": "true"
              }
            }
          ],
          "selectError": false,
          "invert": false,
          "name": "Municipio",
          "omitBlank": false,
          "type": "list",
          "columnName": "Municipio"
        }
      ]
    }
  },
  {
    "op": "core/row-removal",
    "description": "Remove rows",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "omitError": false,
          "expression": "value",
          "selectBlank": false,
          "selection": [
            {
              "v": {
                "v": 0,
                "l": "0.0"
              }
            }
          ],
          "selectError": false,
          "invert": false,
          "name": "NumSanciones",
          "omitBlank": false,
          "type": "list",
          "columnName": "NumSanciones"
        }
      ]
    }
  },
  {
    "op": "core/row-removal",
    "description": "Remove rows",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "omitError": false,
          "expression": "value",
          "selectBlank": false,
          "selection": [
            {
              "v": {
                "v": 0,
                "l": "0"
              }
            }
          ],
          "selectError": false,
          "invert": false,
          "name": "Danos",
          "omitBlank": false,
          "type": "list",
          "columnName": "Danos"
        }
      ]
    }
  }
]
