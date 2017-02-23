
'use strict';

function inToCen(inch) {
  return inches * 2.54;
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

var inches = Document.getElementById('inches');
var miles = Document.getElementById('miles');
var pounds = Document.getElementById('pounds');
var shitTon = Document.getElementById('shit-ton');

conversion.addEventListener('select', function selectTrigger() {
  if () {}
});
