var arr3 = [];
var arr1 = [1,2,3,4,5];
var a = document.getElementById("sp1").innerText = arr1

var arr2 = [6,7,8,9,10];
var b = document.getElementById("sp2").innerText = arr2

function addarray(){
    arr3 = arr1.concat(arr2);
    var c = document.getElementById("sp3").innerText = arr3
}


function showw(){
    var a = document.getElementById("sp3").innerText;

    var b = document.getElementById("sp4").innerText = arr3.length;

    console.log(arr3);
}

function hide(){
    var b = document.getElementById("sp4").innerText = '';
}