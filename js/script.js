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

const button = document.getElementById('confirm');
console.log('bottone conferma', typeof button);

const kmField = document.getElementById('user-km');
console.log(kmField);
const ageField = document.getElementById('user-age');
console.log(ageField);

button.addEventListener('click', function(){
    //recupero i valori dal form
    const kmValue = parseInt(kmField.value.trim());
    const ageValue = ageField.value.trim();
    //stampo i valori in console
    console.log('km ' + kmValue, 'età ' + ageValue);
})