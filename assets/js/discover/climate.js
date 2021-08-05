// Initializes the page with a default plot
function init() {
    data = [{
        x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        y: [8.58, 10.70, 12.01, 9.58, 6.77, 5.97, 7.72, 10.97, 8.15, 10.77, 14.20, 12.71]
    }
    ];

    var layout = {
        title: "2000-2020 Average Precipitation per Month",
        // xaxis: {title: "Month" },
        yaxis: { title: "Precipitation (in.)" }
    }
    var config = { responsive: true }
    Plotly.newPlot("bar", data, layout, config);
}



// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#precipitation").on("change", updatePlotly);
// This function is called when a dropdown menu item is selected
var outerX = "abc123"
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#precipitation");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset)
    // Initialize x and y arrays
    var x = [];
    var y = [];
    if (dataset === 'dataset1') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [8.58, 10.70, 12.01, 9.58, 6.77, 5.97, 7.72, 10.97, 8.15, 10.77, 14.20, 12.71];
    }
    else if (dataset === 'dataset2') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [1.81, 1.81, 2.40, 0.83, 0.91, 0.58, 0.46, 0.94, 0.94, 1.47, 2.02, 2.32];
    }
    else if (dataset === 'dataset3') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [2.23, 2.11, 2.68, 1.46, 0.76, 0.11, 0.44, 0.56, 0.34, 0.92, 1.52, 2.56];
    }
    else if (dataset === 'dataset4') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [2.62, 3.91, 6.36, 1.91, 1.88, 1.61, 1.69, 2.31, 1.97, 2.84, 3.62, 3.97];
    }
    else if (dataset === 'dataset5') {
        x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        y = [3.76, 1.83, 3.01, 1.45, 1.03, 0.48, 0.54, 0.94, 0.94, 1.54, 2.22, 2.27];
    }
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
}
init();
//console.log(`Inside x: ${x}`)
//console.log(`Inside x: ${data.x}`)
console.log(`OuterX: ${outerX} `)

