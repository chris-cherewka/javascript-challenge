// from data.js
var table = data;

var tbody = d3.select("tbody");

// Populate table with data
table.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

// return search
button.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = table.filter(data => data.datetime === inputValue);

    console.log(filteredData)
    filteredData.forEach(function(search) {
        var row = tbody.append("tr");
        Object.entries(search).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
