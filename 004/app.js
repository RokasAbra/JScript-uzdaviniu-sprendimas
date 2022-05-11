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
for (let i = 0; i <= rand(10, 30); i++) {
    pinigine.push(rand(0, 10))
     pinigai += pinigine[i]; // 2. uzd
  
     pinigine.sort((a, b) => a - b);
     largest = Math.max(...pinigine)
     if (pasikartojantisDidziausias == pinigine[i]) {
        count++
    }

    //  if (pinigine[i] > largest) {
        
    //     largest = pinigine[i];
    //     count++
    //     // console.log(largest);
    //   }
     } 
      
    //   console.log(count, largest);
      // 
     
    //  pinigine.forEach((element, i) => {
    //     pinigine[i] = element + i;
    //   });
    
console.log(pinigine,'pinigu suma:', pinigai,'ilgis:', pinigine.length);



console.log('=========== Masyvai 2 ============');

/*
2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio 
reikšmių (pinigų esančių piniginėje) sumą;
*/
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

for (let i = 0; i <= rand(10, 30); i++) {
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

console.log('Didziausias:', largest, count);

pasikartojantisDidziausias = pinigine[pinigine.length - 1];

console.log('asd',pasikartojantisDidziausias);

