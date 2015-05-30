var args = process.argv
var numArray = args.slice(2);
var sum = 0;
for (var i = 0; i < numArray.length; i++){
    sum += parseInt(numArray[i]);
}
console.log(sum);