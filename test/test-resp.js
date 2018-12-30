var result=function(root){
	return root.hits.hits.map(function(hit) {
    var values = [];
    for (var field in hit.fields) {
        values.push(hit.fields[field]);
    }
    return values.join(",");
});
}

var groupArray = require('group-array');

var tabify=require('es-tabify');

var _=require('lodash');

var objj={
  "took": 178,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": 335,
    "max_score": 0,
    "hits": []
  },
  "aggregations": {
    "2": {
      "buckets": [
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Late Aircraft Delay",
                "doc_count": 2
              },
              {
                "key": "No Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T03:30:00.000+05:30",
          "key": 1546034400000,
          "doc_count": 3
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              }
            ]
          },
          "key_as_string": "2018-12-29T04:00:00.000+05:30",
          "key": 1546036200000,
          "doc_count": 8
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Late Aircraft Delay",
                "doc_count": 2
              },
              {
                "key": "No Delay",
                "doc_count": 2
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T04:30:00.000+05:30",
          "key": 1546038000000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T05:00:00.000+05:30",
          "key": 1546039800000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T05:30:00.000+05:30",
          "key": 1546041600000,
          "doc_count": 10
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T06:00:00.000+05:30",
          "key": 1546043400000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T06:30:00.000+05:30",
          "key": 1546045200000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              }
            ]
          },
          "key_as_string": "2018-12-29T07:00:00.000+05:30",
          "key": 1546047000000,
          "doc_count": 4
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              }
            ]
          },
          "key_as_string": "2018-12-29T07:30:00.000+05:30",
          "key": 1546048800000,
          "doc_count": 8
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T08:00:00.000+05:30",
          "key": 1546050600000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              }
            ]
          },
          "key_as_string": "2018-12-29T08:30:00.000+05:30",
          "key": 1546052400000,
          "doc_count": 4
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "No Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T09:00:00.000+05:30",
          "key": 1546054200000,
          "doc_count": 2
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 6
              },
              {
                "key": "Carrier Delay",
                "doc_count": 2
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T09:30:00.000+05:30",
          "key": 1546056000000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Late Aircraft Delay",
                "doc_count": 2
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              },
              {
                "key": "No Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T10:00:00.000+05:30",
          "key": 1546057800000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 2
              },
              {
                "key": "Weather Delay",
                "doc_count": 2
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T10:30:00.000+05:30",
          "key": 1546059600000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 2
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T11:00:00.000+05:30",
          "key": 1546061400000,
          "doc_count": 3
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T11:30:00.000+05:30",
          "key": 1546063200000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 3
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T12:00:00.000+05:30",
          "key": 1546065000000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 5
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T12:30:00.000+05:30",
          "key": 1546066800000,
          "doc_count": 8
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 5
              }
            ]
          },
          "key_as_string": "2018-12-29T13:00:00.000+05:30",
          "key": 1546068600000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 6
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T13:30:00.000+05:30",
          "key": 1546070400000,
          "doc_count": 7
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 2
              }
            ]
          },
          "key_as_string": "2018-12-29T14:00:00.000+05:30",
          "key": 1546072200000,
          "doc_count": 2
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T14:30:00.000+05:30",
          "key": 1546074000000,
          "doc_count": 8
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T15:00:00.000+05:30",
          "key": 1546075800000,
          "doc_count": 11
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 9
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T15:30:00.000+05:30",
          "key": 1546077600000,
          "doc_count": 12
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T16:00:00.000+05:30",
          "key": 1546079400000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 12
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T16:30:00.000+05:30",
          "key": 1546081200000,
          "doc_count": 13
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Carrier Delay",
                "doc_count": 2
              },
              {
                "key": "No Delay",
                "doc_count": 2
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T17:00:00.000+05:30",
          "key": 1546083000000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 3
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T17:30:00.000+05:30",
          "key": 1546084800000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 6
              }
            ]
          },
          "key_as_string": "2018-12-29T18:00:00.000+05:30",
          "key": 1546086600000,
          "doc_count": 6
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T18:30:00.000+05:30",
          "key": 1546088400000,
          "doc_count": 6
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 2
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T19:00:00.000+05:30",
          "key": 1546090200000,
          "doc_count": 3
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 5
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T19:30:00.000+05:30",
          "key": 1546092000000,
          "doc_count": 6
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "Carrier Delay",
                "doc_count": 2
              }
            ]
          },
          "key_as_string": "2018-12-29T20:00:00.000+05:30",
          "key": 1546093800000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 10
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T20:30:00.000+05:30",
          "key": 1546095600000,
          "doc_count": 11
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 2
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T21:00:00.000+05:30",
          "key": 1546097400000,
          "doc_count": 11
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T21:30:00.000+05:30",
          "key": 1546099200000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 7
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 2
              }
            ]
          },
          "key_as_string": "2018-12-29T22:00:00.000+05:30",
          "key": 1546101000000,
          "doc_count": 9
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 5
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T22:30:00.000+05:30",
          "key": 1546102800000,
          "doc_count": 8
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "No Delay",
                "doc_count": 1
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T23:00:00.000+05:30",
          "key": 1546104600000,
          "doc_count": 3
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 6
              },
              {
                "key": "NAS Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-29T23:30:00.000+05:30",
          "key": 1546106400000,
          "doc_count": 7
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 11
              }
            ]
          },
          "key_as_string": "2018-12-30T00:00:00.000+05:30",
          "key": 1546108200000,
          "doc_count": 11
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Carrier Delay",
                "doc_count": 3
              }
            ]
          },
          "key_as_string": "2018-12-30T00:30:00.000+05:30",
          "key": 1546110000000,
          "doc_count": 7
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 5
              },
              {
                "key": "NAS Delay",
                "doc_count": 2
              }
            ]
          },
          "key_as_string": "2018-12-30T01:00:00.000+05:30",
          "key": 1546111800000,
          "doc_count": 7
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-30T01:30:00.000+05:30",
          "key": 1546113600000,
          "doc_count": 5
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 3
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-30T02:00:00.000+05:30",
          "key": 1546115400000,
          "doc_count": 4
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 8
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-30T02:30:00.000+05:30",
          "key": 1546117200000,
          "doc_count": 10
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 4
              },
              {
                "key": "Carrier Delay",
                "doc_count": 1
              },
              {
                "key": "Late Aircraft Delay",
                "doc_count": 1
              },
              {
                "key": "Weather Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-30T03:00:00.000+05:30",
          "key": 1546119000000,
          "doc_count": 7
        },
        {
          "3": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
              {
                "key": "No Delay",
                "doc_count": 6
              },
              {
                "key": "Security Delay",
                "doc_count": 1
              }
            ]
          },
          "key_as_string": "2018-12-30T03:30:00.000+05:30",
          "key": 1546120800000,
          "doc_count": 7
        }
      ]
    }
  },
  "status": 200
};


var resp=tabify(objj);


var arr=[{
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
  }];



  var arr1=[ { '100.0-200.0': [{ '3': '2DHGW92', doc_count: 1 },
     { '3': '7QO9FQX', doc_count: 1 },
     { '3': 'SDZQJAO', doc_count: 1 },
     { '3': 'UPYBY0Z', doc_count: 1 },
     { '3': 'WCV807S', doc_count: 1 },
     { '3': 'Z9OWYXU', doc_count: 1 } ]},
  { '200.0-600.0': [{ '3': '0VJGQD3', doc_count: 1 },
     { '3': '1MAEYXT', doc_count: 1 },
     { '3': '24B12T8', doc_count: 1 },
    { '3': '38DL0W5', doc_count: 1 },
    { '3': '3EGDIS0', doc_count: 1 },
    { '3': '3QCO6IE', doc_count: 1 },
    { '3': '3UNFMV9', doc_count: 1 },
    { '3': '42NTNA0', doc_count: 1 },
    { '3': '44WXG9Y', doc_count: 1 } ]},
  { '600.0-1000.0':[{ '3': '02EKPYM', doc_count: 1 },
    { '3': '04JX3Q0', doc_count: 1 },
    { '3': '109CUFD', doc_count: 1 },
    { '3': '11QD22O', doc_count: 1 },
    { '3': '13X5SKH', doc_count: 1 },
    { '3': '1AHKSRA', doc_count: 1 },
    { '3': '1GXF2QH', doc_count: 1 },
    { '3': '1NH90MS', doc_count: 1 },
    { '3': '1PMAE0A', doc_count: 1 } ]} ];

  var tableify = require('tableify');
 


  var resp1=groupArray(arr1,"2");

  

console.log(resp);




 




var arr_resp=[ { '0': { '3': '2DHGW92', doc_count: 1 },
    '1': { '3': '7QO9FQX', doc_count: 1 },
    '2': '100.0-200.0',
    '3': { '3': 'SDZQJAO', doc_count: 1 },
    '4': { '3': 'UPYBY0Z', doc_count: 1 },
    '5': { '3': 'WCV807S', doc_count: 1 },
    '6': { '3': 'Z9OWYXU', doc_count: 1 } },
  { '0': { '3': '0VJGQD3', doc_count: 1 },
    '1': { '3': '1MAEYXT', doc_count: 1 },
    '2': '200.0-600.0',
    '3': { '3': '24B12T8', doc_count: 1 },
    '4': { '3': '38DL0W5', doc_count: 1 },
    '5': { '3': '3EGDIS0', doc_count: 1 },
    '6': { '3': '3QCO6IE', doc_count: 1 },
    '7': { '3': '3UNFMV9', doc_count: 1 },
    '8': { '3': '42NTNA0', doc_count: 1 },
    '9': { '3': '44WXG9Y', doc_count: 1 } },
  { '0': { '3': '02EKPYM', doc_count: 1 },
    '1': { '3': '04JX3Q0', doc_count: 1 },
    '2': '600.0-1000.0',
    '3': { '3': '109CUFD', doc_count: 1 },
    '4': { '3': '11QD22O', doc_count: 1 },
    '5': { '3': '13X5SKH', doc_count: 1 },
    '6': { '3': '1AHKSRA', doc_count: 1 },
    '7': { '3': '1GXF2QH', doc_count: 1 },
    '8': { '3': '1NH90MS', doc_count: 1 },
    '9': { '3': '1PMAE0A', doc_count: 1 } } ];


function refine(){

	var objArr=[
    {
      "id": "1",
      "enabled": true,
      "type": "count",
      "schema": "metric",
      "params": {
        "customLabel": "Number of Flights"
      }
    },
    {
      "id": "2",
      "enabled": true,
      "type": "range",
      "schema": "segment",
      "params": {
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
        "customLabel": "Ticket Price"
      }
    },
    {
      "id": "3",
      "enabled": true,
      "type": "terms",
      "schema": "segment",
      "params": {
        "field": "FlightNum",
        "size": 10,
        "order": "desc",
        "orderBy": "1",
        "otherBucket": false,
        "otherBucketLabel": "Other",
        "missingBucket": false,
        "missingBucketLabel": "Missing",
        "customLabel": "Flight Number"
      }
    }
  ];

  var isRange=false;
  var id=null;


  for(var i=0;i<objArr.length;i++){
  	if(objArr[i].params.ranges && objArr[i].params.ranges!=null){
  		id=objArr[i].id;
  		isRange=true;
  		break;
  	}
  }

  console.log("isRange :-"+isRange);
  console.log("id :- "+id);


  var arrObj=new Array();

  for(var i=0;i<arr_resp.length;i++){
  		console.log("len - "+Object.keys(arr_resp[i]).length);
  		if(Object.keys(arr_resp[i]).length>0){
  			var key=id;
  			var value=arr_resp[i][key];
  			console.log(value);
  			for(var j=0;j<Object.keys(arr_resp[i]).length;j++){
  				if(j!=key){
  					var obj=arr_resp[i][j];
  					var newObj={[key]:value};
  					var pairObj=_.merge(newObj,obj);
  					arrObj.push(pairObj);
  				}
  			}
  		}
  		else{
  			arrObj.push(i);
  		}
  }

  return arrObj;

}

var arr12=refine();

var html = tableify(arr12);


const fs = require('fs');
fs.writeFile("./temp.html",html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});