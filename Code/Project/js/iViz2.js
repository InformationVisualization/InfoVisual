
function barChart02(distance, duration)
{
  this.distance = distance;
  this.duration = duration;
}

function distVSduration(result)
        {
          if(result != null && result != undefined)
          {
            var durations = [];
            for(var i = 0; i < result.length; ++i)
            {
              var results = result[i];
              durations.push(new barChart02(results.duration, results.distance/1000));
            }

            durations.sort(function(a,b){
              return a.distance - b.distance;
            })

            /*var top10trips = [];
            for(var i = 0; i < 10; ++i)
            {
              top10trips.push(durations[i]);
            }*/

            var durationData = [{
              key: "Distance",
              values: durations
            }];
            console.log(durationData);
             nv.addGraph(function() {
                var chart = nv.models.discreteBarChart()
                    .x(function(d) { return d.distance })
                    .y(function(d) { return d.duration })
                    .staggerLabels(true)
                    //.staggerLabels(historicalBarChart[0].values.length > 8)
                    .showValues(true)
                    .duration(250)
                    ;

                d3.select('#chart2')
                    .attr('width', 400)
                    .attr('height', 400)
                    .datum(durationData)
                    .call(chart);

                nv.utils.windowResize(chart.update);
                return chart;
            });
          }
           
        }