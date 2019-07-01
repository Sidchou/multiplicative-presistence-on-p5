let num = 0;
let record = 0
let scrollOffset = 0;

function setup() {
createCanvas(400, 400);
  background(220);
text("0 - 400", 5,10);
}

function draw() {
let stepCount = 0
stepCount = checkMult(num);
record = setRecord(record, stepCount,num);
// console.log(record + "" + digitCount)
line(num-scrollOffset,height,num-scrollOffset,height-(stepCount*20))
num++;
if (num-scrollOffset >= width){
background(220);
scrollOffset = num
  noStroke();
text(scrollOffset + " - " + Number(scrollOffset+400).toString() , 5,10);
}
}

function  checkMult(num){
let check = true
let count = 0
let digits = num.toString().split("");
while (check == true){
let result = 1;
  count++;
for (let digit of digits){
result = result * Number(digit);
}
//   print (count);
// print (result);
  digits = result.toString().split("");
  if (digits.length<=1) {check = false}
}
  return count
}

function setRecord(record, stepCount,num){
if (record < stepCount){
stroke("#FF0000")
console.log (num + " gets " + stepCount + " steps " )
createDiv(num + " gets " + stepCount + " steps ");
return stepCount
} else {
stroke(0)
return record
}
}
