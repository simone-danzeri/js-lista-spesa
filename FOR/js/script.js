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

// Devo stampare in pagina gli elementi della mia lista

// Seleziono dove andare a stampare
let myLi = document.querySelector('#list');
console.log(myLi);

for (let i = 0; i < list.length; i++) {
    let eachLi = list[i];
    // Stampo in pagina i vari <li> --> Uso += perchè altrimenti mi stampa solo l'ultimo
    myLi.innerHTML += `<li>${eachLi}</li>`;
    // console.log(list[i]);
}