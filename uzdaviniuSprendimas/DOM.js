console.log('####################### DOM 1 ########################');

 /*
 1. Atskiri elementai
    a. Tamsiai žaliai nuspalvinti h1 tagą;
    b. Tagui i pridėti klasę small;
        https://developer.mozilla.org/en-US/docs/Web/API/Element/classList;
    c. Iš tago h1 pašalinti klasę main;
    d. Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
        https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
    e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
 */

//a.
    const tagH1 = document.querySelector('h1');

    tagH1.style.color = 'green';
//b.
    const tagI = document.querySelector('i');
    tagI.classList.add('small')
    console.log(tagI.outerHTML);
//c.
    tagH1.classList.remove('main');

//d.
    const tagH2 = document.querySelector('h1 + h2');
    tagH2.classList.remove('main');

    tagH2.classList.add('first');
    console.log(tagH2.outerHTML);

//e.
    const span = document.querySelector('h2  span');
    span.style.fontSize = '10px';
    span.style.color = 'grey';
    console.log(span.outerHTML);

console.log('####################### DOM 2 ########################');


/*
2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
    a. Suskaičiuoti kiek yra h2 tagų;
    b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
    c. Visus h2 tagus nuspalvinti šviesiai mėlynai
    d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
    e. Pabraukti visus tagus su klase new;
    f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
    g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
    h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
    i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje; */


//a. 
const h2Tagai = document.querySelectorAll('h2');

function getACount() {
    return document.getElementsByTagName('h2').length;
}
console.log(getACount());

//b.  
let tagaiH2 = 0;
function getElement() {
    if (document.getElementsByClassName('firts')) {
       tagaiH2 = document.getElementsByTagName('h2').length - 1;
    }
    return tagaiH2;
    
}
console.log(getElement());

//c. 

const visiH2 = document.querySelectorAll('h2');
visiH2.forEach(h2 => {
    h2.style.color = '#0089'
});

//d.

const pricesTag = document.querySelectorAll('#Prices > h2');
// pricesTag.classList.add('prices');
console.log(pricesTag.outerHTML);




// div.classList.add('price')
// console.log(div.outerHTML);