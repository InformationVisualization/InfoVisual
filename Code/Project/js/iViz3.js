function initSpeedGroups() {
    var speed0to20 = 1;
    var speed20to40 = 2;
    var speed40to60 = 3;
    var speed60to80 = 4;
    var speed80plus = 5;

    var speedGroupsData = [
        {key: "0-20", y: speed0to20},
        {key: "20-40", y: speed20to40},
        {key: "40-60", y: speed40to60},
        {key: "60-80", y: speed60to80},
        {key: "80+", y: speed80plus}
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