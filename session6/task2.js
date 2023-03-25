calculateAverage();

function calculateAverage(){
  var a = prompt("Enter 1st number :");
  var b = prompt("Enter 2nd number :");
  var c = prompt("Enter 3rd number :");
  var d = prompt("Enter 4th number :");
  var e = prompt("Enter 5th number :");

  var f = parseInt(a);
  var g = parseInt(b);
  var h = parseInt(c);
  var i = parseInt(d);
  var j = parseInt(e);
  
  var k = (f + g + h + i + j)/5;

  document.write("Average value is :"+ k);

}