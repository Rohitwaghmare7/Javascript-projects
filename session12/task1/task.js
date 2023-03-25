var a = "";
function clickk(value){ 
    if(value == "AC"){
        var b = document.getElementById("val").value = "";
        a = "";
        var b = document.getElementById("val").value = a
    }
    else if(value == "C"){
        var b = document.getElementById("val").value
        var c = b.slice(0,- 1);
        var d = document.getElementById("val").value = c
        a = c
    }
    else if(value == "="){
        var b = document.getElementById("val").value
        console.log(b)
        var n = eval(b)
        var d = document.getElementById("val").value = n   
    }
    else{
    a = a + value;
    var b = document.getElementById("val").value = a
    }
}