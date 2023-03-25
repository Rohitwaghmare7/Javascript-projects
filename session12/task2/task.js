function change1() {
    var m = document.getElementById("a1").value
    if (m == "Fruits") {
        var a = document.getElementById("f1").innerText = "Strawberry";
        var b = document.getElementById("f2").innerHTML = "Blueberry"
        var c = document.getElementById("f3").innerHTML = "Apple"
        var d = document.getElementById("f4").innerHTML = "Orange"
    }
    else if(m == "vegetables"){
        var a = document.getElementById("f1").innerText = "LadyFinger";
        var b = document.getElementById("f2").innerHTML = "Tomato"
        var c = document.getElementById("f3").innerHTML = "Cucumber"
        var d = document.getElementById("f4").innerHTML = "Onion"
    }
    else{
        var a = document.getElementById("f1").innerText = " ";
        var b = document.getElementById("f2").innerHTML = " "
        var c = document.getElementById("f3").innerHTML = " "
        var d = document.getElementById("f4").innerHTML = " " 
    }
}
function show(){
    var m = document.getElementById("a1").value
    if (m == "Fruits") {
        var d = document.getElementById("fc").value

        var a = document.getElementById("sp1").innerText = "You selected Food type is : Fruits";
        var b = document.getElementById("sp2").innerText = "You selected item is : "+d;
    }
    else {
        var d = document.getElementById("fc").value
        var a = document.getElementById("sp1").innerText = "You selected Food type is : vegetable";
        var b = document.getElementById("sp2").innerText = "You selected item is : "+d;
    }
}