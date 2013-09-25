var txtInput;
var txtResult;
var originalBtnBackground;
var pressBtnBackground;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    originalBtnBackground = document.getElementById('btnPlus').style.background;
    pressBtnBackground = 'green';

    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnMultiply').addEventListener('click', multiplyClick, false);
    document.getElementById('btnDivide').addEventListener('click', divideClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
    document.getElementById('btnDecimal').addEventListener('click', decimalClick, false);

    document.getElementById('btns').addEventListener('mousedown', btnClickDown, false);
    document.getElementById('btns').addEventListener('mouseup', btnClickUp, false);

    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick, false);
    }

    clear();
}

function btnClickDown(e) {
    if (e.target.nodeName === 'BUTTON')
        e.target.style.background = pressBtnBackground;
}
function btnClickUp(e) {
    if (e.target.nodeName === 'BUTTON')
        e.target.style.background = originalBtnBackground;
}
function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}

function decimalClick() {
    txtInput.value = txtInput.value.indexOf('.') != -1 ?
        txtInput.value : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}

function multiplyClick() {
    txtResult.value = Number(txtResult.value) * Number(txtInput.value);
    clearEntry();
}

function divideClick() {
    txtResult.value = Number(txtResult.value) / Number(txtInput.value);
    clearEntry();
}

function clearEntry() {
    txtInput.value = '0';
}

function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}