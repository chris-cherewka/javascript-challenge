// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Populate table with data
tableData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData)
    filteredData.forEach(function(search) {
        var row = tbody.append("tr");
        Object.entries(search).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
