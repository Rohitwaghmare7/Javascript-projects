var arr = [];
for(var i = 0; i < 4; i++) {
    var a = prompt("Enter a string :");
    arr.push(a);
}
console.log("Array is :"+ arr+"\n");

for(var i = 0; i < arr.length; i++) {
    var b = arr[i].length
    if(b <= 5){
        arr.splice(i, 1);
    }
    
}
console.log("New array is :"+arr)




