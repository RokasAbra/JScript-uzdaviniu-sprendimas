console.log('=========== Masyvai ============');

/*
1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, 
o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
*/
console.log('=========== Masyvai 1 ============');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pinigine = [];
let pinigai = 0;
let pinigaiDaugiauUzDu = 0;

let count = 0;
let largest = 0;
let pasikartojantisDidziausias = 0;
const popieriniai = [];
const monetos = [];

for (let i = 0; i < rand(10, 30); i++) {
    pinigine.push(rand(0, 10))
    largest = Math.max(...pinigine)
    if (pinigine[i] > 2) {
        popieriniai.push(pinigine[i])
    }else {
        monetos.push(pinigine[i])
    }
   
   
   }

//5. ===>   
for (let k = 0; k < pinigine.length; k++) {
    if (largest == pinigine[k]) {
        count++
    }    
   }
  
   
  
      console.log('Didziausias:',largest,'vnt:', count);
      
     
  
    
console.log(pinigine,'ilgis:', pinigine.length);



console.log('=========== Masyvai 2 ============');

/*
2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio 
reikšmių (pinigų esančių piniginėje) sumą;
*/
for (let i = 0; i < rand(10, 30); i++) {
    pinigine.push(rand(0, 10))
     pinigai += pinigine[i]; // 2. uzd
  
     } 
console.log('pinigu suma:',pinigai);


console.log('=========== Masyvai 3 ============');

/*
3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio
 popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
*/
let didesnisDu = 0;
for (let i = 0; i < pinigine.length; i++) {
    
    if (pinigine[i] > 2) {
        didesnisDu += pinigine[i];
    // } if( pinigine[i] <= 2){
    //     didesnisDu += 0 ;
    // }
    // pinigai += pinigine[i]; // 2. uzd
    }
    
}
console.log('didesniu uz 2 suma:',didesnisDu);

/*
4. Išleisti visus metalinius pinigus (reikšmes, kurios 
    yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
*/

console.log('=========== Masyvai 4 ============');

let metaliniai = 0;
let pinigine2 = [];
let pinigai2 = 0;

for (let i = 0; i < rand(10, 30); i++) {
    pinigine2.push(rand(0, 10))
     if (pinigine2[i] <= 2) {
         pinigine2[i] = 0;
     }
}console.log('mazesni arba lygus 2 paversti i nuli:', pinigine2 );
/*
Surasti didžiausią reikšmę 1 uždavinio masyve 
ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
*/

console.log('=========== Masyvai 5 ============');

 console.log(largest, count);



 console.log('=========== Masyvai 6 ============');

 /*
 Visus masyvo elementus, kurie yra lygūs 0, pakeisti į
  tų elementų indeksų (vietų, numerių) reikšmes;
 */

  for (let k = 0; k < pinigine.length; k++) {
    if (pinigine[k] === 0) {
        pinigine[k] = k;
    }
     
     } console.table(pinigine);


console.log('=========== Masyvai 7 ============');


/*
Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
(pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
*/

let newWallet = [];
for (let a = 0; a < 30 - pinigine.length + pinigine.length; a++) {
    newWallet.push(rand(0, 10));
    
    
   } console.table(newWallet);
   console.log(newWallet.length);



console.log('=========== Masyvai 8 ============');
/*
Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus.
 Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), 
 o į kitą didesnes nei 2 (popierinius pinigus);
*/


   console.log('Popieriniai:', popieriniai,'Monetos:', monetos);


   console.log('=========== Masyvai 9 ============');
/*
Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas 
elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
*/   
const naujaPinigine = [];

    naujaPinigine.push(popieriniai)
    naujaPinigine.push(monetos)
   
console.log(naujaPinigine);

console.log('=========== Masyvai 10 ============');

/*
Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm:
 ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
*/
const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

naujaPinigine.push(korteles);
console.log(naujaPinigine);



console.log('=========== Masyvai 11 ============');

/*
Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
*/
naujaPinigine[2].sort()

console.log(naujaPinigine);


console.log('=========== Masyvai 12 ============');

/*
Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa'
 (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' 
 ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
*/
let bakoKorteles = ['MasterCard,  visa'] ;
push(words[Math.floor(Math.random() * words.length)]);
for (let i = 0; i <20 - naujaPinigine[2].length ; i++) {
   
    
}

console.log(naujaPinigine[2].length);