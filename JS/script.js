// Devo prendere gli elementi e metterli in variabili
const inpKM = document.getElementById("inpKm");
const inpEta = document.getElementById("inpEtà");
const formSconto = document.getElementById("formSconto");

// Debug elementi presi
// console.log(inpKM,inpEta,formSconto);

formSconto.addEventListener("submit", (event) => {
  event.preventDefault();

  // Debug
  //   console.log("Ciao sono dentro la callback");

  const inpKmValue = parseFloat(inpKM.value.trim());
  const inpEtaValue = parseInt(inpEta.value.trim());

  //   Debug
  //console.log(inpKmValue, inpEtaValue);

  const costoFinale = calcolaPrezzo(inpKmValue, inpEtaValue).toFixed(2);

  //   Debug
  //   console.log(costoFinale);
});

/**
 * Description
 * @param {number} km
 * @param {number} eta
 * @returns {number}
 */
function calcolaPrezzo(km, eta) {
  let percSconto = 0;

  if (eta < 18) {
    percSconto = 20;
  } else if (eta > 65) percSconto = 65;

  const prezzoFinale = km * 0.21 - km * 0.21 * (percSconto / 100);

  //   Debug
  //   console.log(prezzoFinale);
  return prezzoFinale;
}
