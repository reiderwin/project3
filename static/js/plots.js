const url = "http://127.0.0.1:5000/get-data";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    let yAxis = (data[i]["Mx"]);
  }
});
