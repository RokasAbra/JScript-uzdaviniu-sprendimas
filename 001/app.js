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



console.log('============ JS Basic Loops =================');


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
Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija 
rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

*/
let betkas = 0;
let belekas = Math.floor(Math.random() * (10 - 5 )) + 5;;
console.log(belekas);