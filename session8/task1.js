
var a = document.createElement("div")

var b = document.getElementById("a")

b.append(a);

a.className = "myDiv"
document.getElementsByClassName("myDiv")[0].innerHTML = "Hello everyone"
