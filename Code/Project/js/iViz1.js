//Harsh Patel
//Information Vizualization
//05/08/2017
//speedVSduration

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function barChart(avspeed, duration)
{
  this.avspeed = avspeed;
  this.duration = duration;
}

function speedVSduration(result)
        {
          if(result != null && result != undefined)
          {
            var speed = [];
            for(var i = 0; i < result.length; ++i)
            {
              var results = result[i];
              speed.push(new barChart(results.avspeed, results.duration));
            }

            speed.sort(function(a,b){
              return a.duration - b.duration;
            })

            var top5trips = [];
            for(var i = 0; i < 5; ++i)
            {
              top5trips.push(speed[i]);
            }

            var speedData = [{
              key: "duration",
              values: top5trips
            }];
            console.log(speedData);
             nv.addGraph(function() {
                var chart = nv.models.discreteBarChart()
                    .x(function(d) { return round(d.duration, 1) })
                    .y(function(d) { return d.avspeed })
                    .staggerLabels(true)
                    //.staggerLabels(historicalBarChart[0].values.length > 8)
                    .showValues(true)
                    .duration(250)
                    ;

                d3.select('#chart1')
                    .attr('width', 300)
                    .attr('height', 300)
                    .datum(speedData)
                    .call(chart);

                nv.utils.windowResize(chart.update);
                return chart;
            });
          }
           
        }
