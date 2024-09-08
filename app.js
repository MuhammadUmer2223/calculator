var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var val = document.querySelector("#val")

function add(){
    var addition = +num1.value + +num2.value;
    val.innerHTML = addition;
}
function sub(){
    var addition = +num1.value - +num2.value;
    val.innerHTML = addition;
}
function mult(){
    var addition = +num1.value * +num2.value;
    val.innerHTML = addition;
}
function div(){
    var addition = +num1.value / +num2.value;
    val.innerHTML = addition;
}
