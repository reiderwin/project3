const url = "http://127.0.0.1:5000/get-data";

function selectOnlyFemale(Female) {
  return Female.Sex == "Female";
}
let MxFemale = data.filter(selectOnlyFemale);
//console.log(MxFemale);
function selectOnlyMale(Male) {
  return Male.Sex == "Male";
}
let MxMale = data.filter(selectOnlyMale);
//console.log(MxMale);
function selectOnlyFemaleGA(FemaleGA) {
  return FemaleGA.Location == "Georgia";
}
let GeoriaF = MxFemale.filter(selectOnlyFemaleGA);
//console.log(GeoriaF);
function selectOnlyMaleGA(MaleGA) {
  return MaleGA.Location == "Georgia";
}
let GeoriaM = MxMale.filter(selectOnlyMaleGA);
//console.log(GeoriaM);
//CREATING 1ST PLOT “GEORGIA F VS M”
//Find x-value (Years)
let YearGA = GeoriaF.map(function(date) {
  return date.Year;
});
  //console.log(YearGA);
//Mx Value for Female (y-value) trace1
let MxFemaleGA = GeoriaF.map(function(mxvaluefemale) {
  return mxvaluefemale.Mx;
});
  //console.log(MxFemaleGA);
//Mx Value for Male (y-value)trace2
let MxMaleGA = GeoriaM.map(function(mxvaluemale) {
  return mxvaluemale.Mx;
  });

  // console.log(MxMaleGA);
  var trace1 = {
   x: YearGA,
   y: MxFemaleGA,
   type: "bar",
   name: "Female",
   marker: {
     color: "rgb(49,130,189)",
     opacity: 0.7,
     }
   };
 var trace2 = {
   x: YearGA,
   y: MxMaleGA,
   type: "bar",
   name: "Male",
   marker: {
     color: "rgb(204,204,204)",
     opacity: 0.5,
     }
   };
 var data = [trace1, trace2];
 var layout = {
   title: "Georgia State Cancer Mortality Rate Female vs Male Over Time",
   xaxis: {
     tickangle: -45
   },
   barmode: "group"
 };
 Plotly.newPlot("plot", data, layout);

