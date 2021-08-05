// Initializes the page with a default plot
function init() {
    data2 = [{
        x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        y: [85.05, 84.52, 85.19, 84.29, 85.52, 85.76, 87.33, 87.10, 87.86, 87.19, 85.71, 84.14, 89.57]
    }
    ];

    var layout = {
        title: "2000-2020 Average Max Temperature per Month",
        // xaxis: {title: "Month" },
        yaxis: {title: "Temperature (F)"}
                }
                var config = {responsive: true}
    Plotly.newPlot("bar2", data2, layout, config);
}



// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#temperature").on("change", updatePlotly);
// This function is called when a dropdown menu item is selected
var outerX = "abc123"
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#temperature");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset)
    // Initialize x and y arrays
    var x = [];
    var y = [];

    if (dataset === 'dataset6') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [85.05, 84.52, 85.19, 84.29, 85.52, 85.76, 87.33, 87.10, 87.86, 87.19, 85.71, 84.14, 89.57];
    }
    else if (dataset === 'dataset7') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [83.81, 84.57, 84.90, 86.10, 88.33, 88.76, 90.19, 90.95, 90.86, 89.86, 87.00, 84.95, 91.38];
    }
    else if (dataset === 'dataset8') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [85.67, 85.71, 86.38, 87.62, 89.67, 90.62, 92.19, 92.24, 92.38, 91.67, 89.24, 86.38, 93.43];
    }
    else if (dataset === 'dataset9') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [82.52, 81.62, 81.95, 82.71, 84.67, 85.05, 86.67, 87.33, 87.19, 86.57, 84.10, 82.38, 88.33];
    }
    else if (dataset === 'dataset10') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [82.29, 82.71, 83.48, 83.90, 85.86, 87.00, 88.71, 89.24, 89.05, 88.48, 86.05, 84.33, 90.05];
    }
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar2", "x", [x]);
    Plotly.restyle("bar2", "y", [y]);
}
init();
//console.log(`Inside x: ${x}`)
//console.log(`Inside x: ${data.x}`)
console.log(`OuterX: ${outerX} `)

