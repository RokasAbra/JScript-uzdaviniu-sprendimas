console.log('================== JS Functions 1 =================');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
*/

const strele = (argumentas) => {
    console.log('Labas');
}
strele()







console.log('================== JS Functions 2 =================');

/*
Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas
su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją
remkitės pirmame uždavinyje parašytą funkciją;
*/

const arrow = (a, b) => {

}
strele()















console.log('================== JS Functions 4 =================');
/*
Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos 
argumentas dalijasi be liekanos (išskyrus vienetą ir patį save) */


function sveikiSk(skaicius) {
    if (typeof skaicius !== 'number'
        || !isFinite(skaicius)) {
        return `ERROR`
    }
    let dalmuo = 0;
    for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            dalmuo++;
        }
    } return `skaiciaus dalijasi is: ${dalmuo} sveiku`;
}
console.log(sveikiSk(6));
console.log(sveikiSk(14));
console.log(sveikiSk(20));


console.log('================== JS Functions 5 =================');
/*
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. 
Išrūšiuokite masyvą pagal 
daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją. */
const masyvas = [];
for (let i = 0; i < 100; i++) {
    masyvas.push(rand(33, 77));
    if (sveikiSk(masyvas[i]) == 0) {
        masyvas.sort()
    }
    // console.log(masyvas[i]);
} console.log(masyvas);


console.log('================== JS Functions 6 =================');

/*
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius. */
const masyvas2 = [];
for (let r = 0; r < 100; r++) {
    masyvas2.push(rand(333, 777));
    if (sveikiSk(masyvas2)) {

    }
}






console.log('================== JS Functions 7 =================');


/*
Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, 
išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10,
o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip 
ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
Paskutinio masyvo paskutinis elementas yra lygus 0;
 */


const monsterSize = rand(10, 30);

const makeNiceArray = () => {
    const array = [0];
    const size = rand(10, 20);
    for (let l = 0; l < size; l++) {
        array.push(rand(0, 10));
    }
    return array;
}

let monster = [];

for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) {
    const monsterPart = makeNiceArray();

    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;  
    }
    monster = monsterPart;
}
console.log(monster);

console.log('================== JS Functions 9 =================');
/*
Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. 
Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo 
pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę 
sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus 
pridėti elemento.  */
const prime = (a) => {
    let count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            count++;
        }
    }

    return count;

};
const isTryju = [rand(1, 33), rand(1, 33), rand(1, 33),];
const yesOrNo = (a) => {
    for (let i = 0; i < 3; i++) {
       if (prime(a.slice(-3)[i])) {
           return true;
       } 
        return false;
    }
};
while (yesOrNo(isTryju)) {
    isTryju.push(rand(1, 33));
}
console.log(isTryju);

console.log('================== JS Functions 10 =================');


/*Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų,
 kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo 
 (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve 
 mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite 
 masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.  */
// const prime = (a) => {
//     let count = 0;
//     for (let i = 2; i < a; i++) {
//         if (a % i === 0) {
//             count++;
//         }
//     }

//     return count;

// };

const sqArray = [];
for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
        
    }
    sqArray.push(row); 
}
const primeSum = (a) => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach( v =>  {
        if (!prime(v)) {
            count++;
            sum += v;
        }
    }));
    return count ? sum / count : 0;
}
const findMin = (a) => {
    let min = a[0][0];
    let coordinates = [0, 0];
    a.forEach((r, ci) => r.forEach((v, ri) => {
        if (v < min) {
            min = v;
            coordinates = [ri, ci];
        }
    }));
    return coordinates;

}
console.table(sqArray);
console.table(primeSum(sqArray));
console.log(findMin(sqArray));

let s = 1000;
while (primeSum(sqArray) < 70) {
    if (--s === 0) {
        console.log('BR');
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;
} 
// do {
//     if (--s === 0) {
//         console.log('BR');
//         break;
//     }
//     const [x, y] = findMin(sqArray);
//     sqArray[x][y] += 3;
// } while (primeSum(sqArray) < 70);

console.table(sqArray);