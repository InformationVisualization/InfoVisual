function initdurationGroups(result) {
    if(result != null && result != undefined) {

        var duration0to10 = 0;
        var duration10to20 = 0;
        var duration20to30 = 0;
        var duration30to40 = 0;
        var duration40to50 = 0;
        var duration50to60 = 0;
        var duration60plus = 0;

        for (var i=0; i<result.length; i++) {
            var duration = result[i].duration / 60;

            if (duration >= 0 && duration < 10) {
                duration0to10++;
            } else if (duration >= 10 && duration < 20) {
                duration10to20++;
            } else if (duration >= 20 && duration < 30) {
                duration20to30++;
            } else if (duration >= 30 && duration < 40) {
                duration30to40++;
            } else if (duration >= 40 && duration < 50) {
                duration40to50++;
            } else if (duration >= 50 && duration < 60) {
                duration50to60++;
            } else {
                duration60plus++;
            }
        }

        var durationGroupsData = [
            {key: "0-10", y: duration0to10},
            {key: "10-20", y: duration10to20},
            {key: "20-30", y: duration20to30},
            {key: "30-40", y: duration30to40},
            {key: "40-50", y: duration40to50},
            {key: "50-60", y: duration50to60},
            {key: "60+", y: duration60plus}
        ];

        nv.addGraph(function() {
            var durationGroupsChart = nv.models.pieChart()
                .x(function(d) { return d.key })
                .y(function(d) { return d.y })
                .showTooltipPercent(true);

            d3.select("#duration-groups-svg")
                .datum(durationGroupsData)
                .call(durationGroupsChart);

            nv.utils.windowResize(durationGroupsChart.update);
            return durationGroupsChart;
        });
    }
}