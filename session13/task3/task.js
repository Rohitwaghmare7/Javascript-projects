var a = [];
for(var i = 0; i < 4; i++) {
    var x = prompt("Enter a number :");
    a.push(x);
}
console.log("1st Array is :"+ a+"\n");

var b = [];
for(var i = 0; i < 4; i++) {
    var x = prompt("Enter a number :");
    b.push(x);
}
console.log("2st Array is :"+ b+"\n");

var arr=[];

for(var i = 0; i <= 4; i++){

    var c = a.pop();
    console.log(c);
    for(var j = 0; j < b.length; j++){
        if(c == b[j]){
            arr.push(c)
        }
    }
}
console.log("Common number array is :"+arr)