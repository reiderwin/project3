const url = "http://127.0.0.1:5000/get-data";

//let year = []
//let state = []
//let sex = []
//let mx = []

// Fetch the JSON data and console log it
//d3.json(url).then(function(data) {
  // console.log(data);
  //for (let i = 0; i < data.length; i++) {
    
  //}
//});

function selectOnlyFemale(Female) {
  return Female.Sex == "Female";
}

let MxFemaleOnly = data.filter(selectOnlyFemale);
//console.log(MxFemale)

function selectOnlyMale(Male) {
  return Male.Sex == "Male";
}

let MxMaleOnly = data.filter(selectOnlyMale);
//console.log(MxMale);

function selectOnlyFemaleGA(FemaleGA) {
  return FemaleGA.Location == "Georgia";
}

let GeoriaFOnly = MxFemaleOnly.filter(selectOnlyFemaleGA);
//console.log(GeoriaF);

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

let GeoriaF = MxFemaleOnly.filter(selectOnlyFemaleGA);
//console.log(GeoriaF);

function selectOnlyMaleGA(MaleGA) {
    return MaleGA.Location == "Georgia";
  }
  let GeoriaM = MxMaleOnly.filter(selectOnlyMaleGA);
  //console.log(GeoriaM);
  //CREATING 1ST PLOT “GEORGIA F VS M”
  //Find x-value (Years)
  let YearGA = GeoriaFOnly.map(function(date) {
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


