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

//d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

const divPrices = document.querySelectorAll('.prices  h2');
divPrices.forEach(h2 =>
    {
        h2.classList.add('price-tag')
    });
console.log(divPrices);





// div.classList.add('price')
// console.log(div.outerHTML);



//e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai


const pSpan = document.querySelector('h2  span');
pSpan.style.fontSize = '10px';
span.style.color = 'grey';


//f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

const ulTagai = document.querySelectorAll('ul');

console.log(ulTagai.length);


//g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

ulTagai.forEach(ul => {
    ul.style.padding = '50px 15px' ;
    ul.style.border = '1px solid blue'
});


// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

const gyvunai = document.querySelectorAll('ul  li');
const countIn = document.querySelectorAll('.animals .new').length;
console.log(countIn);
console.log(gyvunai);


// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;


const countZirafos = document.querySelectorAll('#zirafos .new').length;
console.log('nauju zirafu:', countZirafos);

const countPlesrunai = document.querySelectorAll('#plesrunai .new').length;
console.log('nauju plesrunu:', countPlesrunai);

const countGyvates = document.querySelectorAll('#gyvates .new').length;
console.log('nauju gyvaciu:', countGyvates);

const countZoliaedziai = document.querySelectorAll('#zoliaedziai .new').length;
console.log('nauju zoliaedziai:', countZoliaedziai);






console.log('####################### DOM 3 ########################');

/*
 3. Elementų events
    a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
    b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
    c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, 
       o paspaudus dar kartą vėl grįžtu į baltą spalvą;
    d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
    e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta 
      css savybė fontSize = 20px;
    f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts 
       savybės būtų panaikintos
    g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;  */



    // a. 

    const header = document.querySelector('.header h1');
    header.style.color = 'green';