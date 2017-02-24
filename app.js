
'use strict';

function inToCen(inch) {
  return inch * 2.54;
}

function cenToIn(cen) {
  return cen / 2.54;
}

function fluidOzToMl(oz) {
  return oz * 29.5735;
}

function mlToFluidOz(ml) {
  return ml / 29.5735;
}

function mileToKm(mile) {
  return mile * 1.60934;
}

function kmToMile(km) {
  return km / 1.60934;
}

function lbsToKg(lb) {
  return lb * 0.453592;
}

function kgToLbs(kg) {
  return kg / 0.453592;
}

function mstToEst(mst) {
  return mst / 0.75;
}

function estToMst(est) {
  return est * 0.75;
}

var submitButton = document.getElementById('conversion');
submitButton.addEventListener('submit', selectTrigger);

function selectTrigger() {
  event.preventDefault();
  var userInput = event.target.user_input.value;
  var get = document.getElementById('measurement').value;
  console.log(get);
  var answer;

  if (get === 'inches') {
    answer = inToCen(userInput);
  } else if (get === 'centimeters') {
    answer = cenToIn(userInput);
  } else if(get === 'fluidoz') {
    answer = fluidOzToMl(userInput);
  } else if(get === 'ml') {
    answer = mlToFluidOz(userInput);
  } else if(get === 'miles') {
    answer = mileToKm(userInput);
  } else if(get === 'kilometers') {
    answer = kmToMile(userInput);
  } else if(get === 'pounds') {
    answer = lbsToKg(userInput);
  } else if(get === 'kilograms') {
    answer = kgToLbs(userInput);
  } else if(get === 'english-shit-ton') {
    answer = mstToEst(userInput);
  } else if(get === 'metric-shit-ton') {
    answer = estToMst(userInput);
  }
  console.log(answer);
  var results = document.getElementById('results');
  results.textContent = answer;
};
