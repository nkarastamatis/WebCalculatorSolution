/// <reference pa th="Scripts/_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    var originalBtnBackground;
    var pressBtnBackground;

    function initialize() {
        var calculator = new ns.Calculator();

        originalBtnBackground = document.getElementById('btnPlus').style.background;
        pressBtnBackground = 'green';

        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnMultiply').on('click', calculator.multiplyClick);
        $('#btnDivide').on('click', calculator.divideClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);
        $('#btnDecimal').on('click', calculator.decimalClick);

        $('#btns').on('mousedown', calculator.btnClickDown).on('mouseup', calculator.btnClickUp);
        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        calculator.clear();
    }

    ns.Calculator = (function () {

        function Calculator() {
            // Calculator constructor function
        }

        Calculator.prototype.btnClickDown = function (e) {
            if (e.target.nodeName === 'BUTTON')
                e.target.style.background = pressBtnBackground;
        }
        Calculator.prototype.btnClickUp = function (e) {
            if (e.target.nodeName === 'BUTTON')
                e.target.style.background = originalBtnBackground;
        }

        Calculator.prototype.numberClick = function () {
            $('#txtInput').val($('#txtInput').val() == 0 ?
                $(this).text() : $('#txtInput').val() + $(this).text());
        }

        Calculator.prototype.decimalClick = function () {
            $('#txtInput').val($('#txtInput').val().indexOf('.') != -1 ?
                $('#txtInput').val() : $('#txtInput').val() + $(this).text());
        }

        Calculator.prototype.plusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.minusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.multiplyClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) * Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.divideClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) / Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.clearEntry = function () {
            $('#txtInput').val('0');
        }

        Calculator.prototype.clear = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        }

        return Calculator;
    }());

})();