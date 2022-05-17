console.log('======================== Masyvai basics 1 ========================');
/*
Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let masyvas = [];
do {
    masyvas.push(rand(5, 25));
    
} while (masyvas.length < 30);
console.table(masyvas,);


console.log('======================== Masyvai basics 2 ========================');

/*
2. Naudodamiesi 1 uždavinio masyvu:
    A) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
    B) Raskite didžiausią masyvo reikšmę ir jos indeksą;
    C) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
    D) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
    E) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
    F) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių 
    (pagal neporinį-porinį indeksą, ne reikšmę);
    G) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;  
    H) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

// A.)
let didesniuUz10 = 0;
for (let k = 0; k < masyvas.length; k++) {
    if (masyvas[k] > 10) {
       
        didesniuUz10++
    }
    
}console.log('didesniu uz 10 :',didesniuUz10);

// B)
let a = 0;
let koksIndexas = 0;
for (let g = 0; g < masyvas.length; g++) {
    if (a < masyvas[g]) {
        a = masyvas[g];
        
    }
    
}console.log(a, masyvas.indexOf(a));

// C) 
let suma = 0;
for (let l = 0; l < masyvas.length; l++) {
    if ([l] % 2 == 0) {
     suma += masyvas[l] 
    //  console.log(masyvas[l]);
    }
    
}console.log( suma);

// D)

let naujasMasyvas = [];

for (let a = 0; a < masyvas.length; a++) {
   naujasMasyvas.push(masyvas[a] - [a]);
   
}console.table(naujasMasyvas);

// E)

for (let o = naujasMasyvas.length; o < 40; o++) {
    naujasMasyvas.push(rand(5, 25));
}console.log(naujasMasyvas, naujasMasyvas.length);

// F)
let porinis = [];
let nePorinis = [];
for (let q = 0; q < masyvas.length; q++) {
    if ([q] % 2 == 0) {
     porinis.push(masyvas[q])
    //  console.log(masyvas[l]);
    }
    if ([q] % 2 !== 0) {
        nePorinis.push(masyvas[q])
    }
}console.log(porinis, nePorinis);

for (let r = 0; r < porinis.length; r++) {
    if (porinis[r] > 15) {
        porinis[r] = 0;
    }
    
}console.log(porinis);

//H) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let pir = 0;
for (let s = 0; s < masyvas.length; s++) {
    if (masyvas[s] > 10) {
        pir = [s]
        break ;
    }
    
}console.log(pir);


console.log('======================== Masyvai basics 3 ========================');


/*
Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

*/

let raidziuMasyvas = ["A", "B", "C", "D"];
let wordMas = [];
let mostA = 0;
let mostB = 0;
let mostC = 0;
let mostD = 0;
for (let w = 0; w < 200; w++) {
    wordMas.push(raidziuMasyvas[Math.floor(Math.random() * raidziuMasyvas.length)]);
    if (wordMas[w] == 'A' ) {
        mostA++;
      }
      if (wordMas[w] == 'B' ) {
        mostB++;
      }
      if (wordMas[w] == 'C'  ) {
        mostC++;
      }
      if (wordMas[w] =='D' ) {
        mostD++;
      }
}
console.log(wordMas, 'A:', mostA++, 'B:', mostB++, 'C:', mostC++, 'D:', mostD++);




console.log('======================== Masyvai basics 4 ========================');

/*
Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite 
kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
*/
let wordMas1 = [];
for (let e = 0; e < 200; e++) {
    wordMas1.push(raidziuMasyvas[Math.floor(Math.random() * raidziuMasyvas.length)]);
}
let wordMas2 = [];
for (let e = 0; e < 200; e++) {
    wordMas2.push(raidziuMasyvas[Math.floor(Math.random() * raidziuMasyvas.length)]);
}
let wordMas3 = [];
for (let e = 0; e < 200; e++) {
    wordMas3.push(raidziuMasyvas[Math.floor(Math.random() * raidziuMasyvas.length)]);
}
let bendrasMasyvas = wordMas1 + wordMas2 + wordMas3;
console.log(bendrasMasyvas, );


console.log('======================== Masyvai basics 5 ========================');

/*
Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
*/

let w = [];
let r = [];
 for (let f = 0; f < 100; f++) {
    
    //  w.push(rand(100, 999));
    // r.push(rand(100, 999));
  
    // Pushing into the array only 
    // if the array does not contain it
    if (!w.includes(rand(100, 999))) {
        w.push(rand(100, 999));
    }
    if (!r.includes(rand(100, 999))) {
        r.push(rand(100, 999));
    }
    }

console.log(w, r, w.length, r.length);





// You can take this value from user
const n = 100
  
// Initial empty array
const arr = [];
  
// Null check
if (n == 0) {
    console.log(null)
}
  
do {
    // Generating random number
    const randomNumber = Math
        .floor(Math.random() * 999) + 100
  
    // Pushing into the array only 
    // if the array does not contain it
    if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
    }
  
} while (arr.length < n);
// console.log(arr, arr.length);

// You can take this value from user
const k = 100
  
// Initial empty array
const arr2 = [];
const newArr = []; 
// Null check
if (k == 0) {
    console.log(null)
}
  
do {
    // Generating random number
    const randomNumber = Math
        .floor(Math.random() * 999) + 100
  
    // Pushing into the array only 
    // if the array does not contain it
    if (!arr2.includes(randomNumber)) {
        arr2.push(randomNumber);
    }
    if (!arr2.includes(arr2)) {
        newArr.push(randomNumber);
    }
    newArr.push(arr);
  
} while (arr2.length < k);
// console.log(arr2, arr2.length);
// Pagal destytoja new Set() sudeda tik unikalias reiksmes nepasikartojancias
const longSet1 = new Set();

do {
    longSet1.add(rand(100, 999));
} while (longSet1.size < 100);
const longArray1 = [...longSet1];


const longSet2 = new Set();
do {
    longSet2.add(rand(100, 999));
} while (longSet2.size < 100);

const longArray2 = [...longSet2];
console.table(longArray1);
console.table(longArray2);

const freakArray = [];
longArray1.forEach((v, i) => {
    freakArray[v] = longArray2[i];
});
console.table(freakArray);

console.log('======================== Masyvai basics 6 ========================');

/*
Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
*/

const duArray = [];

duArray.push(arr + arr2);
console.log(duArray);


console.log('======================== Masyvai basics 9 ========================');
/*
Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/
const arrayMas = [];
for (let h = 0; h <= 10; h++) {
   arrayMas[0] = rand(5, 25);
   arrayMas[1] = rand(5, 25);
   arrayMas[2] = arrayMas[0] + arrayMas[1];
   arrayMas[3] = arrayMas[1] + arrayMas[2];
   arrayMas[4] = arrayMas[2] + arrayMas[3];
   arrayMas[5] = arrayMas[3] + arrayMas[4];
   arrayMas[6] = arrayMas[4] + arrayMas[5];
   arrayMas[7] = arrayMas[5] + arrayMas[6];
   arrayMas[8] = arrayMas[6] + arrayMas[7];
   arrayMas[9] = arrayMas[7] + arrayMas[8];

    
}
console.log(arrayMas);


// if (h[2] == 2) {
//     h[2] = h[0] + h[1];
// }
// if (h[3] == 3) {
//     h[3] = h[1] + h[2];
// }
// if (h[4] == 4) {
//     h[4] = h[2] + h[3];
// }
// if (h[5] == 5) {
//     h[5] = h[3] + h[4];
// }
// if (h[6] == 6) {
//     h[6] = h[4] + h[5];
// }
// if (h == 7) {
//     h[7] = h[4] + h[5];
// }
// if (h == 8) {
//     h[8] = h[5] + h[6];
// }
// if (h == 9) {
//     h[9] = h[6] + h[7];
// }