var svg = d3.select("#cars").append("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var area = d3.area()
    .x(function(d) { return x(d.ModelYear); })
    .y1(function(d) { return y(d.MPG); });

d3.tsv("data.tsv", function(d) {
  d.ModelYear = parseTime(d.ModelYear);
  d.MPG = +d.MPG;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.ModelYear; }));
  y.domain([0, d3.max(data, function(d) { return d.MPG; })]);
  area.y0(y(0));

  g.append("path")
      .datum(data)
      .attr("fill", "steelblue")
      .attr("d", area);

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
	  .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(0)")
      .attr("x", 80)
      .attr("dx", "80.91em")
      .attr("text-anchor", "end")
	  .text("Model Year");

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("AVG MPG");
});
