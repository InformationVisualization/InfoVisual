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
      key: "Distance",
      values: circle
    }];
    console.log(circleData);
    nv.addGraph(function() {
      var distVsDurationchart = nv.models.scatterChart()
          .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
          .showDistY(true)
          .color(d3.scale.category10().range());


    //Axis settings
    distVsDurationchart.xAxis.tickFormat(d3.format('.0f'));
    distVsDurationchart.yAxis.tickFormat(d3.format('.0f'));

    //Axis labels
    distVsDurationchart.xAxis.axisLabel('Duration (mins)');
    distVsDurationchart.yAxis.axisLabel('Distance (km)');

    //Hide legend
    distVsDurationchart.showLegend(false);

    //Tooltip format
    distVsDurationchart.tooltip.valueFormatter(function (d, i) {
        return round(d, 1) + ' km';
    });

    //var myData = randomData(4,40);
    d3.select('#chart2')
      .attr('width', 400)
      .attr('height', 400)
      .datum(circleData)
      .call(distVsDurationchart);

    nv.utils.windowResize(distVsDurationchart.update);

    return distVsDurationchart;
    });

  }
}
