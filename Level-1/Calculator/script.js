
let x;
function add1(x) {
    let value = document.getElementById('value');
    value.value += x;
}
function addp() {
    let value = document.getElementById('value');
    value.value += "+";
}
function addm() {
    let value = document.getElementById('value');
    value.value += "-";
}
function addmu() {
    let value = document.getElementById('value');
    value.value += "*";
}
function addd() {
    let value = document.getElementById('value');
    value.value += "/";
}

function adde() {
    let value = document.getElementById('value').value;
    let total = eval(value);
    document.getElementById('value').value = total;
}

function adds() {
    document.getElementById('value').value = "";
}

