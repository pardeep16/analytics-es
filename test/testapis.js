var elasticsearch=require('elasticsearch');
var tabify = require('es-tabify');

var client=new elasticsearch.Client({
	host:'localhost:9200',
	log:'trace'
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

// client.get({
//   index: 'kibana_sample_data_flights',
//   type: 'visualization',
//   id: '10f1a240-b891-11e8-a6d9-e546fe2bba5f'
// },function(response){
// 	console.log(response);
// });


var searchQuery="";

client.search({
  index: 'kibana_sample_data_ecommerce',
  body:{
  "aggs": {
    "2": {
      "date_histogram": {
        "field": "order_date",
        "interval": "3h",
        "time_zone": "America/New_York",
        "min_doc_count": 1
      },
      "aggs": {
        "3": {
          "terms": {
            "field": "category.keyword",
            "size": 5,
            "order": {
              "1": "desc"
            }
          },
          "aggs": {
            "1": {
              "sum": {
                "field": "total_quantity"
              }
            }
          }
        }
      }
    }
  },
  "size": 0,
  "_source": {
    "excludes": []
  },
  "stored_fields": [
    "*"
  ],
  "script_fields": {},
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "order_date": {
              "gte" : "now-1w",
                "lt" :  "now"
            }
          }
        }
      ]
    }
  }
}
}).then(function (response) {
	console.log(response);
  var data = tabify(response);
  console.log(data);
}, function (error) {
  console.trace(error.message);
});

