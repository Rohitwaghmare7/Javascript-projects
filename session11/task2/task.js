
function inc() {
    var b = document.getElementById("e").innerHTML ;
    var c = parseInt(b) ;
    c = c + 1 ;
    console.log(c)
    var a = document.getElementById("e").innerHTML = c;
}

function dec() {
    var a = document.getElementById("e").innerHTML ;
    a = a - 1;
    var b = document.getElementById("e").innerHTML = a;
}

function res(){
    var a = document.getElementById("e").innerHTML = 0;
}
