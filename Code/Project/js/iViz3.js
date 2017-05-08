function initSpeedGroups(result) {
    if(result != null && result != undefined) {

        var speed0to20 = 0;
        var speed20to40 = 0;
        var speed40to60 = 0;
        var speed60plus = 0;

        for (var i=0; i<result.length; i++) {
            var speed = result[i].avspeed;

            if (speed >= 0 && speed < 20) {
                speed0to20++;
            } else if (speed >= 20 && speed < 40) {
                speed20to40++;
            } else if (speed >= 40 && speed < 60) {
                speed40to60++;
            } else {
                speed60plus++;
            }
        }

        var speedGroupsData = [
            {key: "0-20", y: speed0to20},
            {key: "20-40", y: speed20to40},
            {key: "40-60", y: speed40to60},
            {key: "60+", y: speed60plus}
        ];

        nv.addGraph(function() {
            var speedGroupsChart = nv.models.pieChart()
                .x(function(d) { return d.key })
                .y(function(d) { return d.y })
                .showTooltipPercent(true);

            d3.select("#speed-groups-svg")
                .datum(speedGroupsData)
                .call(speedGroupsChart);

            return speedGroupsChart;
        });
    }
}