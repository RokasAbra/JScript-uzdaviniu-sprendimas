// set() reiksmiu rinkinys

const mySet1 = new Set()
mySet1.add('cat');
mySet1.add('dog');
mySet1.add({t:'cat'});
mySet1.add('cat');
mySet1.delete('dog');

const va = [4,8,4,7,7,2];// isrenka unikalias reiksmes 
console.log(new Set(va));

console.log(mySet1);


/*                                        FUNKCIJOS                                            */

// deklaracija ==> function name(parametrai) 
// kvietimas ==> name(argumentai) 
// name(argumentas1, argumentas2, ...,)
// function name(parametras1, parametras2)
const b = 'babaJaga';


function fun(ki, li) {
    console.log(ki);
    console.log(li);
    const rez1 = ki + li;
    const rez2 = ki * li;
    
     //return rez //galiu grazinti tik viena daikta viena karta,
     return [rez1, rez2];  // dvieju reiksmiu grazinti negalima. grazinant masyva ar pan galima grazinti daug reiksmiu
}


fun(b);// funkcijos iskvietimas
//fun(argumentas)
fun('geras');
fun('blogas');
const gavau = fun(5, 7);
console.log(gavau);

const [gavau1, gavau2] = fun(5, 7);
console.log(gavau1, gavau2);

// funkcija priskiriama kintamajam ir bevardes funkcijos iskvietimas beVardo() prie sukurto kintamajo pridedame skliaustelius()

const beVardo = function() {
    console.log('as neturiu vardo');
}
beVardo()

function suVardo() {
    console.log('as turiu grazu varda');
}
suVardo()


// Arrow funkcijos
const strele = (t) => {
    console.log('as arrow funkcija');
}

strele();

const vienas = y => {  // jeigu turime viena parametra galime rasyt be skliausteliu

}

const du = y => console.log('as arrow funkcija'); //jeigu telpa i viena eilute galima praleisti riestinius skliaustus
// viskas kas parasyta vienoje eiluteje iskarto bus grazinama tai kas paskaiciuota
du()


// const fancy = () => {

//     return kita = () => {
//         console.log('labas');
//     }
// }


// antri skliaustai paleidzia kita funkcija ir grazina 'labas'
// funkcijos kitas paleidimas
// norint grazinti funkcija kuri yra tarp kitos funkcijos reikia papildomu skliausteliu ()()
//arrow funkcijos pritaikymas
const fancy = () => () => console.log('labas');
fancy()();

// arba galima funkcija priskirti kintamajam
const ja = fancy();
ja();


// Callback'as yra funkcija kuri i parametra paduodama kaip argumentas jeigu argumentas yra funkcija jis bus callback'as

const array1 = ['a', 'b', 'c'];
// function alio(element) {
//     console.log(element);
// }


array1.forEach((element, i) => console.log(element, i));// i atspausdina indexa 
//(element, i, b) ==> (elementas. i = indexas, b = visas masyvas, objektas)

const dvimatis = [
    [2, 3, 5, 6, 0],
    [2, 7, 5, 9, 0],
    [2, 3, 8, 6, 1],
    [2, 3, 5, 3, 2]
];

dvimatis.forEach(r => r.forEach(n => console.log(n)));

const cat = {
    name: 'Pilkis',
    voice: function () {
        console.log('Miau says ' + this.name);
                 // norint naudoti this objekte turi buti paprastoji-pilna funkcija
    }
}

cat.voice();

//Savybes kurios yra funkcijos === metodai

//sort
const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];

n1.sort((a, b) => {
    if (a > b) {
        return -1;
    }              // 1 ir -1 nuo maziauzio iki didz... . -1 ir 1 nuo didziausio iki maz.. 
    if (a < b) {
        return 1;
    }
    return 0 ;
});

console.table(n1);