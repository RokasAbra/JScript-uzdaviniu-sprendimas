console.log('Labas, ka tu?');


var labas = 'pats tu labas'; // old school! nebenaudojamas!
alio = 'pats tu alio'; // automatiskai prideda var

// naudotini tik: let, const!!!
let ku = 'ok';// leidziama keisti let reiksme 

const kuku = 'ok';
// negali keistis pati reiksme, vidus gali keistis pvz.: jei tai masyvas tada galima prideti nariu ir pan...
// jei iseina visada naudoti const 


console.log('=====================1=================');

/*Naudokite funkcija rand(). Sukurkite du kintamuosius ir
 naudodamiesi funkcija rand() jiems priskirkite atsitiktines 
 reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
 Atspausdinkite rezultatą naudodami console.log()
*/
/*function rand(min, max) {
    min = Math.ceil(0) ;
    max = Math.floor(5) ;
    return Math.floor(Math.random() * (max - min )) + min;
    
}*/

function rand1(a, b) {
    let nr1 = Math.floor(Math.random() * 5);
    let nr2 = Math.floor(Math.random() * 5);
    a = nr1;
    b = nr2;
    console.log(a);
    console.log(b);
    if (a > b) {
        return a / b;
    }
    else return b / a;
    
}

console.log(rand1());




console.log('================2==============');

/*Naudokite funkcija rand(). Sukurkite tris kintamuosius 
ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines 
reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite 
kintąmąjį turintį vidurinę reikšmę. */



function vidurinis(a, b, c) {
    let number1 = Math.floor(Math.random() * 26);
    let number2 = Math.floor(Math.random() * 26);
    let number3 = Math.floor(Math.random() * 26);
    
     a = number1;
     b = number2;
     c = number3; 
     console.log('a:',a, 'b:', b,'c:', c );
   if (a > b && a < c
    || a < b && a > c) {
       return a;
   }
   if (b > a && b < c
    || b < a && b > c) {
       return b;
   }
   else return c;
   
}
console.log(vidurinis());



console.log('==================3================');


/*Įvedami skaičiai -a, b, c –kraštinių ilgiai, 
trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10).
Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį 
ir atsakymą atspausdintų naudojant console.log(). */
let nr1 = Math.floor(Math.random() * 10) + 1;
let nr2 = Math.floor(Math.random() * 10) + 1;
let nr3 = Math.floor(Math.random() * 10) + 1;
console.log('a:',nr1,'b:', nr2,'c:', nr3);
function trikampis(a, b, c) {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;
    if (a + b > c 
        && a + c > b
        && b + c > a) {
        return 'trikampi sudaryti galima'
    }
    else return 'trikampio sudaryti negalima'
   
} console.log(trikampis());


console.log('================4=============');

/*Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
Rezultatus atspauzdinkite su console.log() */
function kiek(nuliu, vienetu, dvejetu) {
    nuliu = Math.floor(Math.random() * 3) ;
    vienetu = Math.floor(Math.random() * 3) ;
    dvejetu = Math.floor(Math.random() * 3) ; 
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
 console.log(nuliu, vienetu, dvejetu);
 if (nuliu == 0) {
     count0++
 }  if( nuliu == 1){
     count1++
 }if (nuliu == 2) {
     count2++   
 }if (vienetu == 0) {
     count0++
 }
 if (vienetu == 1) {
     count1++
 }
 if (vienetu == 2) {
     count2++
 }
 if (dvejetu == 0) {
     count0++
 }
 if (dvejetu == 1) {
     count1++
 }
 if (dvejetu == 2) {
     count2++
 }
 return `Nuliu:${count0}, Vienetu:${count1}, Dvejetu:${count2}`;{}
 
   }
console.log(kiek());
// let a = Math.floor(Math.random() * 3) ;
// let b = Math.floor(Math.random() * 3) ;
// let c = Math.floor(Math.random() * 3) ;
// let d = Math.floor(Math.random() * 3) ;
// let sum = 0;


console.log('=============5============');
/*
Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami 
console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų 
pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių 
atspauzdinkite “-” simbolius, o prie 0 “*” simbolius*/

// console.log(rnd1, rnd2, rnd3);

function skaiciai(rnd1, rnd2, rnd3) {
    rnd1 = Math.floor(Math.random() * (10 - -10 )) + -10;
    rnd2 = Math.floor(Math.random() * (10 - -10 )) + -10;
    rnd3 = Math.floor(Math.random() * (10 - -10 )) + -10;

    console.log(rnd1, rnd2, rnd3);
if (rnd1 < 0
    ) {
    rnd1 = '+'+ rnd1 +'+'; 
   }
if (rnd2 < 0) {
    rnd2 = '+'+ rnd2 +'+';
   }
if (rnd3 < 0) {
    rnd3 = '+'+ rnd3 +'+';
}
if (rnd1 > 0
    ) {
    rnd1 = '-'+ rnd1 +'-'; 
   }
if (rnd2 > 0) {
    rnd2 = '-'+ rnd2 +'-';
   }
if (rnd3 > 0) {
    rnd3 = '-'+ rnd3 +'-';
}
if (rnd1 == 0
    ) {
    rnd1 = '*'+ rnd1 +'*';  
   }
if (rnd2 == 0) {
    rnd2 = '*'+ rnd2 +'*';
   }
if (rnd3 == 0) {
    rnd3 = '*'+ rnd3 +'*';
}return `${rnd1}, ${rnd2}, ${rnd3} `

}
console.log(skaiciai());


console.log('=================6===============');

/* Įmonė parduoda žvakes po 1 EUR. 
Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida,
 daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą,
 kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() 
 kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija 
 nuo 5 iki 3000.*/

 function rand(uzKiek) {
      let a = Math.floor(Math.random() * (3000 - 5 + 1 )) + 5;
      uzKiek = a;
     
     if (uzKiek > 1000 && uzKiek < 2000) {
         return `kiek zvakiu: ${uzKiek}, kaina su nuolaida ${uzKiek *0.97}, ` ;
     }
    else if (uzKiek > 2000) {
         return `kiek zvakiu: ${uzKiek}, kaina su nuolaida ${uzKiek *0.96}, `;
     }
     else 
     return `be nuolaidos ${uzKiek} zvakiu`
 }

 console.log(rand());


 console.log('==============7===============');
 /* Naudokite funkcija rand(). Sukurkite tris kintamuosius 
 su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų 
 aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes,
  kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius 
  atspausdinkite su console.log()
*/


// let vienas = 0;
// let du = 0;
// let trys = 0;

function vidurkis(skaiciuVidurkis) {
    vienas = Math.floor(Math.random() * 100) ;
    du = Math.floor(Math.random() * 100) ;
    trys = Math.floor(Math.random() * 100) ;
    skaiciuVidurkis = (vienas + trys + du) / 3;
    console.log(vienas, du, trys, 'vidurkis:', skaiciuVidurkis);
if (vienas < 10) {
  return  skaiciuVidurkis = (du + trys) /2;
}
if (du < 10) {
  return  skaiciuVidurkis = (vienas + trys) /2;
}
if (trys < 10) {
   return skaiciuVidurkis = (du + vienas) /2;
}
if (vienas > 90) {
  return  skaiciuVidurkis = (du + trys) /2;
} 
if (du > 90) {
  return  skaiciuVidurkis = (vienas + trys) /2;
} 
if (trys > 90) {
   return skaiciuVidurkis = (du + vienas) /2;
}
if (vienas < 10
    && du < 10
    && trys < 10) {
    return 'Skaiciai mazesni uz 10'
}
if (vienas > 90
    && du > 90
    && trys > 90) {
    return 'skaiciai didesni uz 90'
}
if (vienas > 10
    && du > 10
    && trys > 10
    && vienas < 90
    && du < 90
    && trys < 90) {
    return 'skiaiciai tarp 10 ir 90 ir ju vidurkis:',skaiciuVidurkis;
}
if (vienas >10
    && du <10
    && trys < 10) {
    return vienas
}
if (vienas > 10
    && vienas <90
    && du < 10
    && trys < 10) {
    
}
if (vienas < 10
    && du < 90
    && trys < 90) {
    return du, trys;
}

} 
    

console.log(vidurkis());



console.log('============ JS Basic Loops 1 =================');


/*
Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
     A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
     B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
     C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite 
     pasinaudodami console.log;
     D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, 
     paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
Math.floor(Math.random() * (max - min )) + min;
*/
let kint1 = Math.floor(Math.random() * (25 - 5) + 5);
let kint2 = Math.floor(Math.random() * (25 - 5) + 5);
let kint3 = Math.floor(Math.random() * (25 - 5) + 5);

let suma = kint1 + kint2 + kint3;
//A.
console.log('A:',suma);
//B.
console.log('B:', '' +suma);
//C.
console.log('C:',`${kint1} ${kint2} ${kint3}` );
//D.
console.log('D:', `${kint1} ${kint2} ${kint3} ${suma}`);


/*
2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija 
rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

*/
console.log('============ JS Basic Loops 2 =================');
function random(min, max) {
    min = Math.ceil(min) ;
    max = Math.floor(max) ;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let belekas = random(5, 10);
console.log(belekas);

/*
3.Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite 
kintamąjį 5 kartus;
*/
console.log('============ JS Basic Loops 3 =================');

let zodis = 'Labas'

for (let i = 0; i < 5; i++) {
    console.log(zodis);
    
}

/*
4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
*/
console.log('============ JS Basic Loops 4 =================');
let kiekKartu = 0;
for (let i = 0; i < 7; i++) {
    
    kiekKartu++
    console.log(kiekKartu, zodis);
    
}

/*
5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 
tiek kartų, koks skaičius yra sugeneruotas;
*/
console.log('============ JS Basic Loops 5 =================');
let kiekPrasisuko = 0;
for (let i = 0; i < belekas; i++) {
  
    kiekPrasisuko++;
    
    console.log(kiekPrasisuko, zodis, `random skc: ${belekas}`);
}


/*
6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
 koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
*/
console.log('============ JS Basic Loops 6 =================');

for (let i = 0; i < belekas; i++) {
    if (belekas > 7) {
        console.log(belekas);
    }
    
}


/*
7.Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
    A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

    B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
    Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

    C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo 
    tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;

    D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus 
    prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
    Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
*/
console.log('============ JS Basic Loops 7 =================');

let q;
let suma1 = 0;
let strin = ' ';
for (let i = 0; i < 5; i++) {
    q = random(10, 20);
    suma1 = suma1 + q;
   strin += ' ' + q;
     console.log(q, `suma:`,suma1, strin);

     
do {
    kinta = q + suma1;
    kinta += ' ' + q;
} while (i == 5);
}


console.log(`C. suma:`,suma1, strin);

console.log(`D.:`,kinta);


/*
Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(),
 kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
    A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

    B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

    C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, 
    kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

    D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą 
    su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;

    E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami
     console.log už ciklo ribų jam pasibaigus.

    F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo 
    atlikta ir rezultatą atspauzdinkite pabaigoje. 
*/



console.log('============ JS Basic Loops 8 =================');

let z = 0 ;
let cc = 0;
let skaiciuSuma = 0;
let xx = 0;
let lyginiai = 0;
let nelyginiai = 0;
do {
    z = random(10, 25);
    cc++
    console.log(z);
} while (z > 12);

//A.
console.log(`Skaicius:`,z);
//B.
console.log(`kiek iteraciju: ${cc}`);
//C. 
do {
    z = random(10, 25);
    skaiciuSuma = skaiciuSuma + z;
    if (z > 18) {
       skaiciuSuma -= z;
       xx++
    }console.log('skc:', z);

//E.
    if (z % 2 == 0 ) {
        lyginiai++
    }      
    if (z % 2 !== 0) {
        nelyginiai++
    }  
} while (z > 12){
   
};
console.log(`skaiciu suma: ${skaiciuSuma}`, );

//D.
console.log('Atmete:', xx );

//E.
console.log('Lyginiai:', lyginiai); 
console.log('nelyginiai:', nelyginiai);

//F.
let pakartojimai = 0;
let iterCount = 0;
do {
    z = random(10, 25);
    iterCount++
    pakartojimai = pakartojimai + iterCount;
    // if (iterCount > 20) {
    //     break;
    // }
    console.log(z,'Iteraciju:', iterCount, 'Pakartojo:',pakartojimai);
} while (iterCount < 20);
console.log('Iteraciju:', iterCount, 'Pakartojo:',pakartojimai);



console.log('============ JS Basic Loops 9 =================');

/*
Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(),
 kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
    A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo 
    sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų
     padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
*/
let kazkoksSkaicius = 0;
let kiekIteraciju1 = 0;
let kiekIteraciju2 = 0;
do {
   kazkoksSkaicius = random(5, 10)
   console.log('isorinis ciklas: ',kazkoksSkaicius);
   kiekIteraciju1++
} while (kazkoksSkaicius !== 5);{
    for (let i = 0; i < kazkoksSkaicius; i++) {
        kiekIteraciju2++
        kazkoksSkaicius = random(5, 10);
        console.log('vidinis ciklas:',kazkoksSkaicius);
    }
}console.log('isorinis ciklas: ',kiekIteraciju1, 'vidinis ciklas: ',kiekIteraciju2);

//B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;


let kk = 5;
let dd = 0;
// do {
//     kazkoksSkaicius = random(5, 10)
    
// } while (kk !== 5);{
    
// }


/*C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės; 
*/








console.log('============ JS Basic Loops 10 =================');
/*
10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu 
ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas,
 kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų. 
*/

let Kazys = 0;
let Petras = 0;
let kazioTaskuSkaicius = 0;
let petroTaskuSkaicius = 0;
do {Kazys = random(10, 20);
    Petras = random(5, 25);
    kazioTaskuSkaicius = kazioTaskuSkaicius + Kazys;
    petroTaskuSkaicius = petroTaskuSkaicius + Petras ;
    console.log('Kazio:', kazioTaskuSkaicius,  'Petro:', petroTaskuSkaicius);
} while (kazioTaskuSkaicius <= 222 
    && petroTaskuSkaicius <= 222)
    {
        if (kazioTaskuSkaicius > petroTaskuSkaicius) {
            console.log(`Partiją laimėjo: Kazys surinkes: ${kazioTaskuSkaicius} taskus`);
        }
        else {
            console.log(`Partiją laimėjo: Petras surinkes: ${petroTaskuSkaicius} taskus`);
        }
    };
    // console.log('Kazio taskai:', kazioTaskuSkaicius, 'Petro tasku skaicius:', Petras);


    console.log('============ Ciklai 8 =================');
    /*
    console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
    (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
    */

    let atsitiktinis = 0;
    do {
        atsitiktinis = random(0, 10);
        console.log(atsitiktinis);
    } while (atsitiktinis !== 5);
    console.log(atsitiktinis);

    console.log('============ Ciklai 9 =================');
    /*
    console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10
     (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
    */

     let atss = 0;
     let atsSuma = 0;
     do {
         atss = random(0, 10);
        atsSuma = atss + atsSuma;
        
     } while (atsSuma <= 100);
     console.log(atsSuma);


     console.log('============ Ciklai 10 =================');

/*
console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
 Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
*/

let kazkosAtsisitiktinis = 0;
let iteracCount = 0;
do {
    kazkosAtsisitiktinis = random(0, 10);
    iteracCount++
    
} while (kazkosAtsisitiktinis !== 5 
    && kazkosAtsisitiktinis !== 7);
    console.log(kazkosAtsisitiktinis, 'iteraciju:,', iteracCount);


    console.log('============ Ciklai 11 =================');
/*
console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
*/

let ciklai = 0;
let randominiai = 0;
let randominiuSuma = 0;
do {
    ciklai++ ;
    randominiai = random(0, 10);
    randominiuSuma = randominiai + randominiuSuma;
} while (ciklai < 11 
    || randominiuSuma < 20);
    console.log(randominiuSuma, ciklai);