// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Questa è la mia lista
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// Seleziono dove andare a stampare
let myLi = document.querySelector('#list');
console.log(myLi);

let i = 0;
while (i < list.length) {
    let eachLi = list[i];
    // Stampo in pagina i vari <li> --> Uso += perchè altrimenti mi stampa solo l'ultimo
    myLi.innerHTML += `<li>${eachLi}</li>`;
    // incremento la i per poter uscire dal ciclo
    i++
}