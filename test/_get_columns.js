
var _ =require('lodash');

const getColumn = (agg, i) => {
  return {
    aggConfig: agg,
    id: `col-${i}-${agg.id}`,
    name: "test"
  };
};

function tabifyGetColumns(aggs, minimal) {

  // pick the columns
  if (minimal) {
    return aggs.map((agg, i) => getColumn(agg, i));
  }

  // supposed to be bucket,...metrics,bucket,...metrics
  const columns = [];

  // separate the metrics
  const grouped = _.groupBy(aggs, function (agg) {
    return agg.type.type;
  });

  if (!grouped.buckets) {
    // return just the metrics, in column format
    return grouped.metrics.map((agg, i) => getColumn(agg, i));
  }

  let columnIndex = 0;
  // return the buckets, and after each place all of the metrics
  grouped.buckets.forEach(function (agg) {
    columns.push(getColumn(agg, columnIndex++));
    grouped.metrics.forEach(function (metric) {
      columns.push(getColumn(metric, columnIndex++));
    });
  });

  return columns;
}


module.exports={
  tabifyGetColumns:tabifyGetColumns
}
