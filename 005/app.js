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
console.log(index);

const copy2 = n1.filter(v => -1 != n2.indexOf(v));



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
console.table(copy3);
console.table(copy2);