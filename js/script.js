const currentYearElement = document.querySelector('#current-year');
currentYearElement.textContent = new Date().getFullYear();

const ageFelipe = document.querySelector('#felipeAge');
if (ageFelipe) {
  ageFelipe.textContent = new Date().getFullYear() - 2002;
}

const ageDutra = document.querySelector('#dutraAge');
if (ageDutra) {
  ageDutra.textContent = new Date().getFullYear() - 1997;
}

const ageJose = document.querySelector('#joseAge');
if (ageJose) {
  ageJose.textContent = new Date().getFullYear() - 2000;
}