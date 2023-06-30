

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
const primoNum = Math.round(Math.random() * (primoMax - primoMin + 1)) + primoMin;


const secondoMin = 10;
const secondoMax = 99;
const secondoNum = Math.round(Math.random() * (secondoMax - secondoMin + 1)) + secondoMin;

const terzoMin = 10;
const terzoMax = 99;
const terzoNum = Math.round(Math.random() * (terzoMax - terzoMin + 1)) + terzoMin;

const numBiglietto = ( "Biglietto Numero #" + primoNum + secondoNum + terzoNum );

console.log(numBiglietto);

const prezzoLordo = ( distanza * tariffa );
const ridottoMinori = ( prezzoLordo - (prezzoLordo * 0.20 )  )
const ridottoSenior = ( prezzoLordo - ( prezzoLordo * 0.40 ) )

console.log( prezzoLordo.toFixed(2) );
console.log( ridottoMinori.toFixed(2) );
console.log( ridottoSenior.toFixed(2) );

console.log(`Ridotto minori ` + ridottoMinori.toFixed(2) );
console.log( `Ridotto Senior `+ ridottoSenior.toFixed(2) );



if( età < 18 ){
    document.getElementById("prezzo").innerHTML = (`Ridotto minori €` + ridottoMinori.toFixed(2)) ;

}else if(età < 65) {
    document.getElementById("prezzo").innerHTML = (`Prezzo Pieno €` + prezzoLordo.toFixed(2)) ;

}else if(età > 65) {
        document.getElementById("prezzo").innerHTML = (`Ridotto Senior €` + ridottoSenior.toFixed(2)) ;
    }




document.getElementById("firstName").innerHTML = ` ${firstName}`;
document.getElementById("secondName").innerHTML = ` ${secondName}`;
document.getElementById("età").innerHTML = ` ${età}`;
document.getElementById("distanza").innerHTML = `Distanzaio ${distanza} km`;





