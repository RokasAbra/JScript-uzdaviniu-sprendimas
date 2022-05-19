//  REACT BASICS:
// jsx yra js kodo ir html misinys
// visi tagai visada turi buti uzdaryti ==> />
// className tarp react'o yra taspats kas class ant html'e 

//1. Komponentas ==> component
//2. Propsas ==> props
//3. steitas ==> state

//1.KOMPONENTAI-COMPONENTS : tai yra funkcija kuri grazina html'a 
// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Labas</h1>
         
//         </header>
//       </div>
//     );
//   }

// !!! pagrindine taisykle funkcijos arba komponento pavadinimas turi prasideti didziaja raide
// vienas komponente vienam faile ==> viena funkcija vienam faile, faila pavadinsime kaip ir komponenta-funkcija

// returninant su funkcija norint rasyti kelias eilutes reikia apskliausti elementus ()
// return ( <h1></h1> ... jei daugiau nei vienas elementas naudojam tuscia tag <> </>)


/*function Lokis() {
    return ( 
        <>
    <h2>Lokys</h2>
    <span>Misko zveris Nr. {10 + 11} {} </span> tarp liauztiniu skliaustu galima irasyt tik viena eilute kodo
    jei norime rasyti antra eilute pridedam papildomus {} skliaustus
    </>)
}
export default Lokis;*/


//2. PROPS!!! 
// jeigu komponentas yra funkcija tai props'as yra tos funkcijos argumentas
//<Hello spalva="green"/> <Hello propso vardas="propso reiksme"/>

//<Lokis skaicius={4}/> jeigu norime gauti ne string naudojame {} skliaustus ne " kabutes"


//3. State's ==> funkcijoje atsirandantis propsas
// hook'as yra tiek principas kuris igyvendinamas funkcija kuri padeda komponento viduje susikurti state'a
// const [a, b] = [1, 2] a lygu masyvo [1, 2] pirmam [0] elementui  b lygus antram elementui [1]
// [a, b] dvi constantos a gaus reiksme 1. b gaus reiksme 2