//Harsh Patel
//Information Visualization
//05/08/2017

function Circles(x, y, size)
{
  this.x = x;
  this.y = y;
  this.size = size;
  this.shape = 'circle';
}

function distVSduration(result) {
  if (result != null && result != undefined)
  {
    var circle =[];

    for (var i = 0; i < result.length; ++i)
    {
      var results = result[i];

      circle.push(new Circles(results.duration/60, results.distance/1000, 5));
    }

    var circleData = [{
      key: "distance",
      values: circle
    }];
    console.log(circleData);
    nv.addGraph(function() {
      var chart = nv.models.scatterChart()
          .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
          .showDistY(true)
          .color(d3.scale.category10().range());


    //Axis settings
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    //Axis labels
    chart.xAxis.axisLabel('Duration (mins)');
    chart.yAxis.axisLabel('Distance (km)');

    //Hide legend
    chart.showLegend(false);

    //var myData = randomData(4,40);
    d3.select('#chart2')
      .attr('width', 400)
      .attr('height', 400)
      .datum(circleData)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
    });

  }
}
