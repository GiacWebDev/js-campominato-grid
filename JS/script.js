
// 1. porto gli elementi su js come variabili e creo event list
// 2. reset
// 4. inserire div square da js e resettare quelle esistenti
// 5. creare ciclo per numerare caselle 
// 6. inserire classe event listener con toggle su div square in modo da colorare lo sfondo
// 7. mandare in console i numeri all'interno delle div una volta selezionati nell event listener



// 1.
const btnPlayEl = document.querySelector('btn-play');
const containerEl = document.querySelector('._container');

// 2.
// tolgo gli elementi all'interno del contenitore con funzione reset
reset();



// FUNCTIONS

function reset() {
  containerEl.innerHTML = '';
}

// // 3.
function generateSquare() {
  const newsquare = document.createElement('div');
  // do una classe al nuovo elemento creato
  newsquare.className = 'square';
  // prova con numero
  return newsquare;
}
