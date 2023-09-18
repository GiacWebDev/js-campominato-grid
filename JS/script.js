
// 1. porto gli elementi su js come variabili e creo event list
// 2. reset
// 3. inserire div square da js e resettare quelle esistenti
// 4. creare ciclo per numerare caselle 
// 5. inserire classe event listener con toggle su div square in modo da colorare lo sfondo
// 6. stampare numeri visibili al click



// 1.
const btnPlayEl = document.querySelector('.btn-play');
const containerEl = document.querySelector('._container');
const mainEl = document.querySelector('main');

// 2.
// tolgo gli elementi all'interno del contenitore con funzione reset
reset();

// 3.
btnPlayEl.addEventListener('click', function(){
  //resetto il contenitore al click (evito la creazione di più contenitori)
  reset();

  // 4.
  for (let i = 1; i <= 100; i++) {
  
    const square = generateSquare(i);
    
    // 5.
    square.addEventListener ('click', function (){
      this.classList.toggle('clicked');
      console.log(this.innerText);
    })
  
    containerEl.appendChild(square);
  }

  mainEl.classList.remove('d-none')
})


// FUNCTIONS

function reset() {
  containerEl.innerHTML = '';
}

// 3.
function generateSquare(index) {

  const newSquare = document.createElement('div');
  // do una classe al nuovo elemento creato
  newSquare.className = 'square';
  // Crea un elemento <span>
  const span = document.createElement('span');
  // Imposta il testo dello span
  span.innerText = index; 
  // Aggiungi lo span alla casella
  newSquare.appendChild(span);
  return newSquare;
}
