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
const strele = () => {
    console.log('as arrow funkcija');
}

strele();