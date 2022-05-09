// while cikla naudojame kai is anksto nezinome kiek kartu reikes prasukti cikla...
// for naudojamas kai jau zinome kiek reikes ciklu...
// while nuo nuliaus iki infinity...
// do while nuo vieneto iki infinity
// break; ciklo nutraukimas, 
// continue; irgi nutraukineja cikle bet tik neuzbaigto ciklo iteracija. nutraukia tik tai viena ciklo prasukima. Grista i ciklo pradzia.


// let a = 0;


// while (true) {
//     if (++a > 100) { //Saugiklis, kai jau viskas veiks galima koda ismest ( istrynti)
//       console.log('avarija');
//         break;
//     }
// }

// for (let i = 0; i < 10; i++) {

//     if (i == 2) {//ciklas sustos kai pasieks 2-traji nari.
//         break;
//     }

//     if (i == 6
//         || i == 3) {
//         continue //praskipins 6-taji ir 3-iaji nari, nebus (7 ir 4 ciklo)
//     }
//     console.log(` Dabar sukasi ciklas:
//      ${i + 1}`); // ` ` leidzia iterpti js koda i stringa ir perskirti stringa i dvi eilutes
    
// }

// let b = 0;

// while (b < 10) {// kol salyga true tol vyksta ciklai
//     if (++a > 100) { //Saugiklis, kai jau viskas veiks galima koda ismest ( istrynti)
//         console.log('avarija');
//           break;
//       }
//       b++;
      
// }
// console.log(b);

// let c = 0;
// do {
//     if (++a > 100) { //Saugiklis, kai jau viskas veiks galima koda ismest ( istrynti)
//         console.log('avarija');
//           break;
//       }
//     ++c;
// } while (c < 10);

// console.log(c);




let a = 0;

let b = 0;

while (b < -10) {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    b++;

}

let c = 0;

do {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    c++;


}while(c < -10);

console.log(b, c);

for (let i = 0; i < 10; i++) {

    if (i == 2) {
        break;
    }
    
    if (i == 6 || i == 3) {
        continue;
    }
    
    console.log(`Dabar sukasi:
     ${ i + 1 } ratas`);

}


console.log('============== Ciklas Cikle ==============');

for (let i = 0; i < 5; i++) {
    console.log(`Dabar sukasi didelis:${ i + 1 } ratas`);

    for (let k = 0; k < 3; k++) {
        console.log(`Dabar sukasi maziukas:${ k + 1 } ratukas`);
    }
}


// leksteje gali buti 10...30 kasniu kotletu
//kasnis susikramto per rand 1...10

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++) {
    
    // const gabaliukasSukramtomas = rand(1, 10);
    // kotletasSuvalgytasPer += gabaliukasSukramtomas;
    
    do {
        kotletasSuvalgytasPer++
    } while (rand(0, 4));// kai iskrenta 0 kuris yra false ciklas sustoja

}

console.log(kotletasSuvalgytasPer, ':kasniai');