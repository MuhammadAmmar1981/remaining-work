console.log("hello world")

let marks = prompt("please enter your marks");

if (marks < 0 || marks > 100) {
    alert("Invalid Marks")

} else if (marks >= 90) {
    alert("Congratulations! You got A* grade.");
} else if (marks >= 80) {
    alert("Hurray! You got A+ grade");
} else if (marks >= 70) {
    alert("You got A grade");
} else if (marks >= 50) {
    alert("You got grade C")
 } else if (marks >= 30) {
    alert("You got D grade ")
 } else if (marks >= 10) {
    alert("Better luck next time")
 }
for(let i=1; i<=5; i++) {
    console.log('Count:',i);
}
let count= 1;
while(count<=3){
    console.log(Count);count++;
}
for(let i=1; i<=10; i++) {
    if (i === 5) continue
    console.log('count:', i)
}
function greet(){ console.log('Hello!');}
greet();

