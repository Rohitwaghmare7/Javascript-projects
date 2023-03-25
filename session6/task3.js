values();

function values(){
    a = prompt("Enter 1st subject marks out off 80 :")
    b = prompt("Enter 2nd subject marks out off 80 :")
    c = prompt("Enter 3rd subject marks out off 80 :")
    d = prompt("Enter 4th subject marks out off 80 :")
    e = prompt("Enter 5th subject marks out off 80 :")

    var f = parseInt(a);
    var g = parseInt(b);
    var h = parseInt(c);
    var i = parseInt(d);
    var j = parseInt(e);

    percentage(f, g, h, i, j)

}

function percentage(a,b,c,d,e){

    var f = ((a+b+c+d+e)/400)*100;

    document.write(f);
}