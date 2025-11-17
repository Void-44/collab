/*alert("Hello")

var a = 5;

var b = 7;

var c = a + b;

document.writeln("The answer is " + c)*/






console.log(c);





let d = 10, e = 3, f = d + e;


console.log(f);


var r = 4, p = 8, t = r / p;

console.log(t);



var v = 7;

var l = 21;

var m = (v / 100) * 21;

console.log(m);





let fullName = "TOBE", age = 10

console.log( "My name is " + fullName + " " + "and i am " + " " + age + " " + " " + "years old" )


j = 10;
j++
console.log(j);


k = 10;
k--
console.log(k);



g = 5;
i = 10;
b = g * i;

console.log(b);


if ( m > p) {
    console.log( "yes");

} else{

    console.log("false")
}



let num1 = 10,  num2 = 15, num3 = 10; 

if (num1 <= num2 && num1 <= num3){

    console.log("YEAHHH")
}else if (num3 >= num1 && num3 >= num2){
    console.log("hiiiiiiii")
}else{
    console.log("nahhhhhh")
}


let student = "tobe"

switch (student) {
    case "obi":
        console.log("hi its me")
        break;


  case "tobe":
        console.log("hi im the one")
        break;

  case "boy":
        console.log("hi its me again")
        break;

    default:
        console.log("NOT AVAILABLE")
        break;
}


let q = 1;
while(q <= 5){
    console.log(q);
    q++
}

let o = 0;
while (o <= 10){
console.log(o)
o++
}

let K = 6
do{
    console.log(K);
    K++
}while(K <= 15);








let h=20
do{
    console.log(h);
    h++
}while(h <= 25);



for ( let J=20; J<=25; J++){
    console.log(J);
}

for( let sum=0; sum <= 20; sum++){
if (sum% 2==0){
    console.log("even")
} else if (sum % 3==0){
    console.log("odd")
} else  {
    console.log(sum);
    
}








}



let num=1
while (num<=100){
if ( num% 3===0 && num% 5===0){
    console.log("Fuzzbuzz")
}else if ( num%3===0){
    console.log("fuzz")
}else if (num %5===0){
    console.log("buzz")
}else {
    console.log(num);
    
}
num++;

}



for( let num=1; num<=100; num++){
if(num%3===0 && num%5==0){
    console.log("FUZZBUZZ")
}else if(num%3===0){
    console.log("fuzz")
}else if(num%5===o){
    console.log("buzz")
}else {
    console.log(num);
}








}

// function
function me(){
    console.log("girl");
}

me()





function numbers(A,B){
let D = A*B
console.log(D)
}
numbers(5,7)





function cal(){
    let h= document.getElementById("height").value;
let w= document.getElementById("width").value;
let area= h*w;
document.getElementById("answer").value=area;
}


function turnOn(){
document.getElementById("bulb").src = 'assets/pic_bulbon.gif'

}





function turnOff(){
document.getElementById("bulb").src = 'assets/pic_bulboff.gif'

}



function dem() {
    document.getElementById("demo").innerHTML="THANK YOU"
}


function inform() {
  const textInfo= document.getElementById("info")
  textInfo.textContent="welcome, thank you"
}


function hide(){
    document.getElementById("me").innerHTML=""
}



function show(){
    document.getElementById("me").innerHTML="VOIDKNAII"
}



function hide(){
    document.getElementById("m4").innerHTML=""
}



function show(){
    document.getElementById("m4").innerHTML="erling haaland qwertyuiopasdfghjklzxcvbnm"
}








function ti() {
    
document.querySelector("h2").style.color = "red"
document.querySelector(".hii").style="font-size; 40px"
}





/*
const human = (myName, myAge) =>{
    console.log(`myName is ${myName} and i am ${myAge} year old`)
}

// human("Chimobi", 10)*/


//array


const color = ["red", "white", "gray"]

console.log(colors, length)

console.log(colors[1]);

console.log(colors);
console.push("green")
console.log(colors);
color.pop();

console.log(color)

console.shift()
console.log(colors)

console.unshift()
console.log(color)





















