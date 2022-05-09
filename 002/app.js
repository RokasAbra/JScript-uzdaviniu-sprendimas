console.log('labas');

let skaicius = 444; // number
let netikrasSkaicius = ''; // string
let loginis = false;// true (bolean)

// if( kas tarp sklaiusteliu pavercia i logini kintamaji){  }

console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginis);

console.log(5 > 8); 

console.log(!!skaicius); // ! - neigimas, padaro false !!- neigimo neigimas padaro false ir vel i true. 0 visada yra false visi kiti skaiciai yra true
console.log(!!netikrasSkaicius); // jei tai yra stringas ir yra '0' jis vistiek bus true, jei stringas yra tuscias '' tada jis bus false. visi betkokie stringai yra true tik tuscias visada yra false

// jeigu tarp if skliausteliu reiksme lygi false jokio atsakymo negausime, vykdoma tik tada kai yra true
// jeigu turime true darome tai kas uzrasyta tiesia po if'u
// jeigu if'e reiksme yra false perienama prie else dalies
if (netikrasSkaicius) {
    console.log('Yes');
}
//    else if (skaicius) {
//        console.log('Nezinau');
//    } 
else {
    console.log('No');
}

//vienas if'as atlieka viena salyga, jei turesime if'a po if'o tai bus atskyros salygos. atskiri vienas nuo kito
// jei po if'o turesime (else) arba (else if'a) jis priklausi if'o daliai 


if (5 == '5') {
    console.log('Yes');
} else {
    console.log('No');
}

//Dviguba ligybe == lygina nesvarbu ar tai stringas ar ne pvz.: 5 == '5' gausime true. (automatiskai perkonvertuoja kad gautusi tokie patys kintamieji) '5' pavercia i 5. ' 5' gautusi 5 ir pan
//Triguba ligybe === niekad nieko nekonvertuoja, jei tipai yra nelygus iskart yra nelygu. Pvz. 5 === '5' bus nelygu priesingai nei su dviguba ligybe
// trigubos ligybes yra svarbios Node.js, typeScript'e, fronte tai jau neturi itakos

// logine operacija "arba" || visalaika renkasi true reiksme Pvz.: (false || true) bus true (0 || 1) bus 1

console.log(false || false);  

//End'as && visa laika rinksis false (true && false) bus false

/*
> <===> <=
< <===> >=
== <===> !=
|| <===> &&
*/

console.log(true && false);

console.log('6', +'6');  // pridedant pliusa(+) prie stringo konvertuojame i skaicius

console.log(7, ''+7); // is skaiciaus i stringa ('' + 7) tuscias stringas plius skaicius

console.log(!!1, !!0, '' + !0);// i bolean'us norint paverti pridedam ! 

// switch yra kaip ciklas jei nepanaudosime break; jei su break; tada veiks kaip if'as

let kas = 'tas';
switch (kas) {
    case 'anas':
        console.log('ANAS');
        break;
    case 'tas':
        console.log('TAS');
        break;
    case 'antis':
        console.log('ANTIS');
        break;  
    default:
        console.log('LABANAKT');          
}