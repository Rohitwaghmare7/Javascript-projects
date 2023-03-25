var a = prompt("Enter color of text :");
var b = prompt("Enter Background color of text :");

function change(){
    document.getElementById("info").style.color = a.valueOf();
    document.getElementById("info").style.background = b.valueOf();
    document.getElementById("info").style.fontFamily = "Arial";
}