// prova collegamento file .js
console.log('JS OK')

//pasaggi traccia milestone1
/*
1.preparo eventuali variabili che so che mi serviranno sicuramente dopo
2.scrivere le informazioni (km,età) nell'apposita input in pagina
3.grazie al bottone raccolgo le informazioni (km, età)
4.calcolo il prezzo del biglietto in base a quanti anni ha l'utente
5.stampo in console il prezzo del biglietto
*/
//passaggi milestone2
/*
6.dopo aver inserito un form in pagina svolgo i passaggi dal 2 al 4
7.stampo in pagina il recap dei datiinseriti(km,età) e il prezzo del biglietto (con 2 decimali)
*/
// ! milestone 1
//fase di preparazione
const priceKm = 0.21;
let discount = null;
const message = 'il prezzo del biglietto è di €';

const button = document.getElementById('confirm');
console.log('bottone conferma', typeof button);

const kmField = document.getElementById('user-km');
console.log(kmField);

const ageField = document.getElementById('user-age');
console.log(ageField);

const priceTicketElement = document.getElementById('price-ticket');
console.log(priceTicketElement);



button.addEventListener('click', function(){
    //recupero i valori dall'input
    const kmValue = parseInt(kmField.value.trim());
    const ageValue = parseInt(ageField.value.trim());

    //stampo i valori in console
    console.log('km ' + kmValue, 'età ' + ageValue);

    //calolo il costo del biglietto
    const basePrice = kmValue * priceKm;
    let finalPrice = basePrice;

    if (ageValue >= 65){
        finalPrice *= 0.6;
    } else if (ageValue<18){
        finalPrice *= 0.8;
    }

    //stampo il costo del biglietto in console e in pagina
    console.log(message + finalPrice.toFixed(2));
    priceTicketElement.innerText = message + finalPrice.toFixed(2);

})