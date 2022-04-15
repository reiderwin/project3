var trace1 = {
    x: ["Alabama", "Alaska", "Arizona", "Arkansas", "Califorina", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Misissippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    y: [355.0900526, 299.9392782, 272.594432, 340.6948487, 291.7528625, 253.4626182, 318.3383096, 357.4519213, 295.6763187, 349.6603916, 243.3052494, 259.8478024, 323.0729464, 320.4943599, 278.6551415, 278.6831054, 337.5485367, 361.2798322, 320.9872428, 359.44585, 327.9188885, 312.4430788, 271.6065725, 348.8802505, 323.9166346, 284.7745642, 283.7337305, 316.4609466, 336.8710022, 251.2944668, 321.8869408, 322.0411199, 267.8191974, 332.0965992, 302.6446569, 281.8026832, 336.2922521, 332.030884, 338.5624904, 272.3107103, 329.9203399, 315.5220921, 213.2524525, 310.0533776, 345.0620266, 276.201707, 318.9821053, 285.1254361, 268.7413224],
    type: 'bar',
    name: '1981, Male',
    marker: {
      color: 'rgb(49,130,189)',
      opacity: 0.7,
    }
  };
  
  var trace2 = {
    x: ["Alabama", "Alaska", "Arizona", "Arkansas", "Califorina", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Misissippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"  ],
    y: [355.0900526, 299.9392782, 272.594432, 340.6948487, 291.7528625, 253.4626182, 318.3383096, 357.4519213, 295.6763187, 349.6603916, 243.3052494, 259.8478024, 323.0729464, 320.4943599, 278.6551415, 278.6831054, 337.5485367, 361.2798322, 320.9872428, 359.44585, 327.9188885, 312.4430788, 271.6065725, 348.8802505, 323.9166346, 284.7745642, 283.7337305, 316.4609466, 336.8710022, 251.2944668, 321.8869408, 322.0411199, 267.8191974, 332.0965992, 302.6446569, 281.8026832, 336.2922521, 332.030884, 338.5624904, 272.3107103, 329.9203399, 315.5220921, 213.2524525, 310.0533776, 345.0620266, 276.201707, 318.9821053, 285.1254361, 268.7413224],
    type: 'bar',
    name: '1981, Female',
    marker: {
      color: 'rgb(204,204,204)',
      opacity: 0.5
    }
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: 'US Cancer Data 1981-2014',
    xaxis: {
      tickangle: -45
    },
    barmode: 'group'
  };
  
  Plotly.newPlot('myDiv', data, layout);
  