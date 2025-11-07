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
let Count= 1;
while(Count<= 3){
    console.log(Count); count++ ;
}
