// selektori

const btnG = document.getElementById('generator');
const bodyG = document.getElementById('bodyId');
const kod = document.getElementById('kod');
const btnK = document.getElementById('konfirmator');
const submiter= document.getElementById('submiter');

// liste
const listaSlova = ['a','b','c','d','e','f'];
const listaBrojeva = ['0','1','2','3','4','5','6','7','8','9'];
const pool = listaBrojeva.concat(listaSlova);



// funkcije

function getRandomBroj () {
    let i = 0;
    let hash = '#';
    let hes = '';
    while (i<6) {
        hes = hes+pool[Math.floor(Math.random()*pool.length)];
        console.log(hes);
        i++
    }

    var reverser = function(rev) {
         return rev.split('').reverse().join('');
    }
    
    bodyG.style.backgroundColor = hash+hes;
    kod.innerHTML = hes.toUpperCase();
    kod.style.color = hash+reverser(hes);
    
}




function unesiKod () {
    
    let inputer = document.getElementById('input').value;
    bodyG.style.backgroundColor = inputer;


}


//      KONVERTOR


const euro = 1.9553;

function changeEuro() {
    let unos = document.querySelector('#evri').value *euro;
    return unos;
}
changeEuro();

function konvertuj() {
    document.getElementById('marke').value = changeEuro();
}

const btn = document.getElementById('convert').addEventListener('click',()=>{
    konvertuj();
})

const switcher = document.getElementById('switch').addEventListener('click', ()=>{
    let unosSwitch = document.querySelector('#evri').value /euro;
    document.getElementById('marke').value = unosSwitch;
    toggleName()
})

function toggleName() {
    let eurotext = document.getElementById('eText');
    let kmtext = document.getElementById('kmText');
    if (eurotext.innerHTML === 'Euro' && kmtext.innerHTML === 'KM') {
        eurotext.innerHTML = 'KM';
        kmtext.innerHTML = 'Euro';
    } else {
        eurotext.innerHTML = 'Euro';
        kmtext.innerHTML = 'KM'
    }
}

// iz sna

const newAray = [];
let tekstPolje = document.getElementById('tekst');
function dodajTekst() {
    newAray.push(tekstPolje.value);
    
}

function dodajListu() {
    let lista = document.createElement('p');
    lista.innerHTML = newAray;
    document.body.appendChild(lista);
}

tekstPolje.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13) {
    dodajTekst();
    dodajListu();
    newAray.pop();
    tekstPolje.value= '';
    }
    
})

function brisi() {
    let odstrel = document.querySelectorAll(lista);
    document.removeChild(odstrel);
}
document.getElementById('btnDdj').addEventListener('click', () => brisi());
document.getElementById('prikazi').addEventListener('click', () => dodajListu())

// gradient

let kolor = document.querySelector('#kolor');
let kolor2 = document.querySelector('#kolor2');


// dom manipulacija

let tekst = document.querySelector('.tekst');

const trazi = document.querySelector('#trazi');

trazi.addEventListener('keyup', ()=>{
     
    if (trazi.value) {
        tekst.innerHTML = tekst.innerText.split(' ').map( word => word.length == trazi.value ? `<span style = 'background-color : #ade322'> ${word}</span>`: word).join(' ');
    } else {
        tekst.innerHTML = tekst.innerText.split(' ').map( word => word.length == trazi.value  ? `<span style = 'background-color : none'> ${word}</span>`: word).join(' ');
    }
      
})

const sadrzaj = document.querySelector('#sadrzaj');

sadrzaj.addEventListener('keyup', ()=>{
    if(sadrzaj.value) {
        tekst.innerHTML = tekst.innerText.split(' ').map(word => word.includes(sadrzaj.value)  ? `<span style = 'background-color : black; color:white'> ${word}</span>`: word).join(' ');
    } else {
        tekst.innerHTML = tekst.innerText.split(' ').map(word => word.includes(sadrzaj.value)  ? `<span style = 'background-color : none;'> ${word}</span>`: word).join(' ');
    }
    
})


const trazilica = document.querySelector("#trazilica");

const rez = trazilica.closest("div");
const rezdva = rez.previousElementSibling;
const targets = rezdva.firstElementChild;

console.log(targets.getAttribute("class"));


