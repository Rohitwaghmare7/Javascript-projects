var arr = [];
for(var i = 0; i < 4; i++) {
    var a = prompt("Enter a number :");
    arr.push(a);
}
console.log("Array is :"+ arr+"\n");

var a = arr.sort();


console.log("Smallest number is : "+a[0])

var b = arr.pop();
console.log("Largest number is :"+b)





