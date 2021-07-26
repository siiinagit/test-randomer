function toggleName() {
    let eurotext = document.getElementById('eText');
    let kmtext = document.getElementById('kmText');
    if (eurotext=== 'Euro' && kmtext=== 'KM') {
        changeEuro();
        eurotext.innerHTML = 'KM';
        kmtext.innerHTML = 'Euro';
        document.getElementById('marke').value = changeEuro();
    } else {
        changeKm()
        eurotext.innerHTML = 'Euro';
        kmtext.innerHTML = 'KM';
        document.getElementById('marke').value = changeKm();
    }
}

function changeEuro() {
    let unos = document.querySelector('#evri').value *euro;
    return unos;
}
changeEuro();

function changeKm() {
    let unos = document.querySelector('#evri').value /euro;
    return unos;
}
changeKm()
