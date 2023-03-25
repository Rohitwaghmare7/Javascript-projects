var c = 0
function Calc(){
var a = document.getElementById("input").value;
var b = document.getElementById("k").value;

var n = (a * (b/100))

var f = document.getElementById("box").innerHTML = n

c = a - (a * (b/100))

var d = document.getElementById("box1").innerHTML = c
}

function reset(){
var z = 0

var a = document.getElementById("input").value = z;
var b = document.getElementById("k").value = z;
var f = document.getElementById("box").innerHTML = 0;
var d = document.getElementById("box1").innerHTML = 0;

}

