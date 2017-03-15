var diameter2 = 500, //max size of the bubbles
    color2    = d3.scale.category10(); //color category

var bubble2 = d3.layout.pack()
    .sort(null)
    .size([diameter2, diameter2])
    .padding(1.5);

var svg2 = d3.select("#film")
    .append("svg")
    .attr("width", diameter2)
    .attr("height", diameter2)
    .attr("class", "bubble");

d3.csv("data/film-genre-pop.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){ d.value = +d["Popularity"]; return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes2 = bubble2.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles2 = svg2.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes2)
        .enter();

    //create the bubbles
    bubbles2.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) { return color2(d.value); });

    //format the text for each bubble
    bubbles2.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["Genre"]; })
        .style({
            "fill":"white", 
            "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
})