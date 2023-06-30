

//20% sconto minorenni
//40% sconto senior over 65 
//0.21€ al km

// dati utente 

const firstName = prompt(" inserisci il tuo nome ");
const secondName = prompt(" inserisci il tuo cognome ");
const età = prompt(" inserisci la tua età ");
const distanza = prompt(" inserisci la distanza della tratta espressa in Km");

const tariffa = 0.21;
const currentDate = new Date();

console.log(currentDate.getFullYear());
console.log(
  currentDate.getHours(),
  currentDate.getMinutes(),
  currentDate.getSeconds()
);

//numero biglietto
const primoMin =  0;
const primoMax = 15;
const primoNum = Math.round(Math.random() * (max - min + 1)) + min;


const secondoMin = 10;
const secondMax = 99;
const secondNum = Math.round(Math.random() * (max - min + 1)) + min;




const prezzo =  (firstName + secondName + prefItem + numero);

document.getElementById("firstName").innerHTML = ` ${firstName}`;
document.getElementById("secondName").innerHTML = ` ${firstName}`;
document.getElementById("età").innerHTML = ` ${firstName}`;
document.getElementById("distanza").innerHTML = ` ${firstName}`;
document.getElementById("prezzo").innerHTML = ` ${firstName}`;




