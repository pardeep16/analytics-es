var tabify=require('./tabify');


var tabilfyAggs=tabify.tabifyAggResponse([{
    "2": {
      "range": {
        "field": "AvgTicketPrice",
        "ranges": [
          {
            "from": 100,
            "to": 200
          },
          {
            "from": 200,
            "to": 600
          },
          {
            "from": 600,
            "to": 1000
          }
        ],
        "keyed": true
      },
      "aggs": {
        "3": {
          "terms": {
            "field": "FlightNum",
            "size": 10,
            "order": {
              "_count": "desc"
            }
          }
        }
      }
    }
  }],{
  "took": 17,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": 326,
    "max_score": 0,
    "hits": []
  },
  "aggregations": {
    "2": {
      "buckets": {
        "100.0-200.0": {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "2DHGW92",
                "doc_count": 1
              },
              {
                "key": "7QO9FQX",
                "doc_count": 1
              },
              {
                "key": "M16YNRN",
                "doc_count": 1
              },
              {
                "key": "SDZQJAO",
                "doc_count": 1
              },
              {
                "key": "UPYBY0Z",
                "doc_count": 1
              },
              {
                "key": "WCV807S",
                "doc_count": 1
              },
              {
                "key": "Z9OWYXU",
                "doc_count": 1
              }
            ]
          },
          "from": 100,
          "to": 200,
          "doc_count": 7
        },
        "200.0-600.0": {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 79,
            "buckets": [
              {
                "key": "0VJGQD3",
                "doc_count": 1
              },
              {
                "key": "1MAEYXT",
                "doc_count": 1
              },
              {
                "key": "1NP5NEW",
                "doc_count": 1
              },
              {
                "key": "24B12T8",
                "doc_count": 1
              },
              {
                "key": "38DL0W5",
                "doc_count": 1
              },
              {
                "key": "3EGDIS0",
                "doc_count": 1
              },
              {
                "key": "3QCO6IE",
                "doc_count": 1
              },
              {
                "key": "3UNFMV9",
                "doc_count": 1
              },
              {
                "key": "42NTNA0",
                "doc_count": 1
              },
              {
                "key": "44WXG9Y",
                "doc_count": 1
              }
            ]
          },
          "from": 200,
          "to": 600,
          "doc_count": 89
        },
        "600.0-1000.0": {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 149,
            "buckets": [
              {
                "key": "02EKPYM",
                "doc_count": 1
              },
              {
                "key": "04JX3Q0",
                "doc_count": 1
              },
              {
                "key": "100720F",
                "doc_count": 1
              },
              {
                "key": "109CUFD",
                "doc_count": 1
              },
              {
                "key": "11QD22O",
                "doc_count": 1
              },
              {
                "key": "13X5SKH",
                "doc_count": 1
              },
              {
                "key": "1AHKSRA",
                "doc_count": 1
              },
              {
                "key": "1GXF2QH",
                "doc_count": 1
              },
              {
                "key": "1NH90MS",
                "doc_count": 1
              },
              {
                "key": "1PMAE0A",
                "doc_count": 1
              }
            ]
          },
          "from": 600,
          "to": 1000,
          "doc_count": 159
        }
      }
    }
  },
  "status": 200
},{});
console.log(response);

const fs = require('fs');
fs.writeFile("/temp.html",response, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 