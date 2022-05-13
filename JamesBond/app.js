//<script src="app.js" defer></script> defer atideda js scripto veikima iki pilno html uzkrovimo



const tagH1 = document.querySelector('h1');
const tagH11 = document.querySelector('h1 + h1') // naudojami css selectoriai

const tagAll = document.querySelectorAll('h1') // paselectina visus tagus
console.log(tagH1, tagH11, tagAll);

tagAll.forEach(h1 => {
    console.log(h1)
    h1.style.color = '#fff';
    h1.style.backgroundColor = '#0904';
    h1.style.border = '2px solid #0505';
    h1.style.margin = '20px'
    h1.style.width = '400px';
    h1.innerText = 'Valio savaitgalis '; // tiesiog skaiciai ar tekstai
    h1.innerHTML = '<i>Valio !!!!</i>' // kai rasome html su tagais ir pan...
});


// EVENT --------------------------------------------------------------------------------------

// 1. Susirandam reikiama < > elementa == tag'a
// 2. Susirandam ivyki uzdedam stebetoja
// 3. Pradedame stebeti, vienu metu galima stebeti vieno elemento viena ivyki
// 
// 1.
const but = document.querySelector('button');

// 2.
but.addEventListener('click', () => {
    
    console.log('atliktas paspaudimas')
but.style.color = but.style.color == 'red' ? 'black' : 'red';// kad pasikeistu is raudono i juoda

})


tagAll.forEach(h1 => {
    h1.addEventListener('click', e => {
        h1.style.color = h1.style.color == 'red' ? 'black' : 'red'; 
        console.log(e);
    })
});

const go = document.querySelector('a');
go.addEventListener('click', e => {
    e.preventDefault(); // preventiman defoltini veikima kad paspaudus ant tagu nepereitu i puslapi
    go.style.color = go.style.color == 'red' ? 'black' : 'red';
    
});

// kai nezimone tago ar kur yra elementas susirandame ji ivykus tam tikra ivykiui
document.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
    e.target.style.color = 'red';
});

document.querySelector('#vaikas').addEventListener('click', e => {
    e.stopPropagation(); //sustabdom bublinimasi, kad eventas nepereitu ant tevo
    console.log('vaikas');
    e.target.style.color =  'red';
});
document.querySelector('#tevas').addEventListener('click', e => {
    console.log('tevas');
    document.querySelector('#tevas').style.backgroundColor = 'red';
});

