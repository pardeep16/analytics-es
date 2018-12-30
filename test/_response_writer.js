
var toArray =require('lodash');
var tabifyColumns =require('./_get_columns');

/**
 * Writer class that collects information about an aggregation response and
 * produces a table, or a series of tables.
 *
 * @param {AggConfigs} aggs - the agg configs object to which the aggregation response correlates
 * @param {boolean} metricsAtAllLevels - setting to true will produce metrics for every bucket
 * @param {boolean} partialRows - setting to true will not remove rows with missing values
 */
function TabbedAggResponseWriter(aggs, { metricsAtAllLevels = false, partialRows = false, timeRange } = {}) {
  this.rowBuffer = {};
  this.bucketBuffer = [];
  this.metricBuffer = [];

  this.metricsForAllBuckets = metricsAtAllLevels;
  this.partialRows = partialRows;
  this.aggs = aggs;
  this.columns = tabifyColumns.tabifyGetColumns(aggs, !metricsAtAllLevels);
  this.aggStack = [...this.columns];

  this.rows = [];

  // Extract the time range object if provided
  if (timeRange) {
    const timeRangeKey = Object.keys(timeRange)[0];
    this.timeRange = timeRange[timeRangeKey];
    if (this.timeRange) {
      this.timeRange.name = timeRangeKey;
    }
  }
}

TabbedAggResponseWriter.prototype.isPartialRow = function (row) {
  return !this.columns.map(column => row.hasOwnProperty(column.id)).every(c => (c === true));
};

/**
 * Create a new row by reading the row buffer and bucketBuffer
 */
TabbedAggResponseWriter.prototype.row = function () {
  this.bucketBuffer.forEach(bucket => {
    this.rowBuffer[bucket.id] = bucket.value;
  });

  this.metricBuffer.forEach(metric => {
    this.rowBuffer[metric.id] = metric.value;
  });

  if (!toArray(this.rowBuffer).length || (!this.partialRows && this.isPartialRow(this.rowBuffer))) {
    return;
  }

  this.rows.push(this.rowBuffer);
  this.rowBuffer = {};
};

/**
 * Get the actual response
 *
 * @return {object} - the final table
 */
TabbedAggResponseWriter.prototype.response = function () {
  return {
    columns: this.columns,
    rows: this.rows
  };
};

module.exports ={ TabbedAggResponseWriter:TabbedAggResponseWriter };
