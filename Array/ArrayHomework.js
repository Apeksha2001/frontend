//Create a string dyanamically travaerese a array
var Array1 = [10, "ABC", "Apeksha", 30, 70];
for (var i = 0; i < Array1.length; i++) {
    console.log(Array1[i]);
}
Array1.pop();
Array1.push("10000");
Array1.pop();
Array1.push(1234);
console.log("After performing operation array is: ");
for (var i = 0; i < Array1.length; i++) {
    console.log(Array1[i]);
}
