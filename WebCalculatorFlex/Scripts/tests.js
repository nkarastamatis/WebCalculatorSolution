﻿module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});

test("Number Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected string lenght: ' + expectedLength + ' Actual value: ' + txtInput.value.length);
    }
});
test("Decimal Click Test", function () {
    expect(2);
    txtInput.value = '10';
    QUnit.triggerEvent(btnDecimal, "click");
    var expected = '10.'
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);

    txtInput.value = '10.0';
    QUnit.triggerEvent(btnDecimal, "click");
    var expected = '10.0'
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Add Test", function() {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Subtract Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '10';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Muliply Test", function () {
    expect(2);
    txtInput.value = '2';
    txtResult.value = '10';
    QUnit.triggerEvent(btnMultiply, "click");
    var expected = '20';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Divide Test", function () {
    expect(2);
    txtInput.value = '2';
    txtResult.value = '10';
    QUnit.triggerEvent(btnDivide, "click");
    var expected = '5';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnClear, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});