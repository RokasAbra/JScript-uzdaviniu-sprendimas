const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];

// pagrindiniai dalykai leidziantis vaikscioti per masyva .map(pasidaro kopija) ir foreach(nieko nepadaro)

const copy = n1.map(value => value + ' Valio' );
// .map padaro kopija , kopija turi tiek pat nariu kiek orginalas
console.table(copy);

const copy1 = n1.filter(v => true); // ideda n1 masiva(nukopijuoja)
console.table(copy1);

const index = n1.indexOf('Asilas');
// surando elemento idexo numeri .indexOf('ideti stringa kokio elemento idexa nori surasti')


const copy2 = n1.filter(v => -1 != n2.indexOf(v));


//masyvai basic 7uzd...
const copy3 = [];
for (let i = 0; i < n1.length; i++) {   
    const what = n1[i];
    for (let k = 0; k < n1.length; k++){
        if (n2[k] == what) {
            copy3.push(what);
            break;
        }
    }
}
for (const key of n1) { //paima masyvo reiksmes for in paima index'us
    console.log(key);
}
console.table(copy3);
console.table(copy2);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ma = [rand(1, 3), rand(1, 3)];
//masyvai basics 9 uzd...
for (let i = 2; i < 10; i++) {
    ma.push(ma[i -1] + ma[i - 2]);
    
}
console.table(ma);
const kazkas = 'asfhgajsflkhaflas'; 

const namasSuKaminu = {
    kaminas: 'Yra 3 metrai',
    gyventojai: ['Petras', 'Asilas', 'Barsukas', 'Kate'],
    tas: 'kazkas'
};
//namasSuKaminu.kaminas = 8 // galima pakeisti reiksmes
namasSuKaminu.tas = 645
console.table(namasSuKaminu.kaminas, namasSuKaminu.gyventojai, namasSuKaminu.tas);

namasSuKaminu.animals = {
    cat: 'Murka',
    dog: 'Brisius'
};

console.log(namasSuKaminu.animals.cat);
console.log(namasSuKaminu);

//const namasSuKaminu2 = namasSuKaminu; //nesukuria naujo objekto tiesiog priskiria darviena 'varda' (pavadinima)
 // pakeis elementa abiejuose namuose 

//const n4 = n1.slice(); // kopijavimas, naudojamas tik masyvo kopijavimui
const n4 = {...n1}; // kopijavimas
// n4.shift();
console.log(n4, n1);

//Objekto kopijavimas

const a1 = {
    cat: 'Murka',
    dog: 'Brisius'
};

const a2 = {...a1};// trys taskai destrucktina a1 i jo sudedamasias dalis

const namasSuKaminu2 = JSON.parse(JSON.stringify(namasSuKaminu)) ; //kopija
namasSuKaminu2.animals.cat = 'kitas Katinas';
console.log(namasSuKaminu, namasSuKaminu2);


const map = new Map();
map.set('Murka', 5);
map.set('Pilkis', 7);//unikalus tokio pateis dar vieno neidetume pvz dar vieno 'Pilkis' tiesiog ji pakeistu.
map.set('Pukis', 4);
console.log(map.get('Pilkis'));
console.log(map.has('Pilkis')); // patikrina ar yra toks elementas
//map.delete('Pilkis');

const masMap = [...map];
console.table(masMap);
console.log(map.size);            