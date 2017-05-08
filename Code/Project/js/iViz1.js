//Harsh Patel
//Information Vizualization
//05/08/2017

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
              speed.push(new barChart(results.avspeed, results.distance/1000));
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
                var chart = nv.models.discreteBarChart()
                    .x(function(d) { return d.distance })
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
