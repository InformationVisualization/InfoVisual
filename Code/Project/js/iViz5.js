function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
} 

function barChart(distance, avspeed)
{
  this.distance = distance;
  this.avspeed = avspeed;
}

function distVSspeed(result)
        {
          if(result != null && result != undefined)
          {
            var speed = [];
            for(var i = 0; i < result.length; ++i)
            {
              var results = result[i];
              speed.push(new barChart(results.avspeed, results.distance));
            }

            speed.sort(function(a,b){
              return a.distance - b.distance;
            })

            var top10trips = [];
            for(var i = 0; i < 10; ++i)
            {
              top10trips.push(speed[i]);
            }

            var speedData = [{
              key: "Distance",
              values: top10trips
            }];

            console.log(speedData);
             nv.addGraph(function() {
                var distVSspeedChart = nv.models.discreteBarChart()
                    .x(function(d) { return round(d.distance, 1) })
                    .y(function(d) { return d.avspeed })
                    .staggerLabels(true)

                    //.staggerLabels(historicalBarChart[0].values.length > 8)
                    .showValues(true)
                    .duration(250)
                    ;
               
    distVSspeedChart.xAxis.tickFormat(d3.format('.0f'));
    distVSspeedChart.yAxis.tickFormat(d3.format('.0f'));
               
    distVSspeedChart.xAxis.axisLabel('Distance (Km)');
    distVSspeedChart.yAxis.axisLabel('Speed (Kmph)');

                d3.select('#chart5')
                    .attr('width', 400)
                    .attr('height', 400)
                    .datum(speedData)
                    .call(distVSspeedChart);

                nv.utils.windowResize(distVSspeedChart.update);

                return distVSspeedChart;
            });
          }
           
        }
