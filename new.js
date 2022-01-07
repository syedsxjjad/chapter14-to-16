//alert("Syed")

// var username="Earn"
// alert(username);
// document.write(username);


// var age =20;
// alert("Your age is",age);
// console.log(age);

// var whatsLeftOver = 9 % 3;
// console.log(whatsLeftOver);

// var num1=12;
// var num=24;
// var res=num1+num
// document.write( " Result for Addition " , num1 , " to " ,  num ," = ", res);

// var num=2;
// ++num;
// document.write(num);

// var x=prompt("");
// var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
//  alert("Correct!")}
//  else{
//      document.write("Wrong");
//  }
 
// var fullName=prompt();
//  if (fullName === "Mark" + " " + "Myers") {
//      document.write("Yes")
//  }
//  else{
//     document.write("NO")
//  }


//  var x=prompt("");
//  var correctAnswer = "Vatican";
//  var score=10;
//  if (x === correctAnswer) {
//  alert("Correct!");
//  }
//  else if (x === "Rome") {
//     alert("Incorrect but close");
//     }

//  else {
//  score--;
//  alert("Wrong");

// }
// document.write(score  + "  " + userIQ);

// var weight=prompt();
// var time=prompt();

// if (weight > 300 && time < 6) {
//      alert("Come to our tryout!");
//      }
//      else {
//      alert("Come to our cookout!");
//      }


// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// alert("Welcome to " + cities[3]);


// var a=prompt("Enter Number 1");
// var b=prompt("Enter Number 2");


// if(a>b )
// {
//  document.write(a);
// }
// else if(b>a )
// {
//  document.write(b);
// }

// else{
//     document.write("Enter Correct Number")
// }


// var a=6;
// var b=4;
// var c=5;

// if(a>b && a>c || b>c ){
//     document.write(a + "," + b + "," +c)
  
// }


// else if(b>a && b>c || a>c){
//     document.write(b + "," + a + "," +c)
// }


// else if(c>a && c>b || a>b){
//     document.write(c + "," + b + "," +a)
// }



// var a=2;
// var b=4;
// var c=-1;
// var d=7;
// var e=3;

//largest Number

// if(a>b && a>c && a>d && a>e){
//     document.write(a)
// }


// else if(b>a && b>c && b>d && b>e){
//     document.write(b)
// }


// else if(c>a && c>b && c>d && c>e){
//     document.write(c)
// }


// else if(d>a && d>b && d>c && d>e){
//     document.write(d)
// }


// else if(e>a && e>b && e>c && e>d){
//     document.write(e)
// }



//  if(a>b && a>c){
//      if(b>c){
//     document.write(a + "," + b + "," +c);
//      }  
//      else{
//          document.write(a + "," + c + "," +b);
//      }
// }

//  else  if(b>a && b>c ){
//      if(a>c){
//         document.write(b + "," + a + "," +c);
//      }
//      else{
//         document.write(b + "," + c + "," +a);     
//      }
//   }

  
//  else  if(c>a && c>b){
//     if(c>b){
//         document.write(c + "," + b + "," +a);
//      }
//      else{
//         document.write(c + "," + a + "," +b);     
//      } }


///////////////-----Array-----//////////////


// var student=[];


// var student=["Syed"];

// var student=[2];

// var student=[true];

// var student=["Syed",2,"ss",5];


// var qualification=["SSC","WW","RR","QQ","AA","PP"];


// document.write(qualification);







//////-------Arrays------///////

// var student=["Syed","Salman","Sajid"];
// var score=[300,400,350];

// var totalMarks=500;
// for (let x = 0; x < student.length; x++) {
//     document.write(`Score of ${student[x]} is ${score[x]}. Percentage: ${(score[x]/totalMarks)*100} <br/>`);    
// }



//a)Add the element from the Begning;

// var color =["Red","Green","Blue","Black"];
//  var user=prompt("Chose The color");

// for (let i = 0; i < color.length; i++) {
//     if () {
        
//     }
// }

//   color.unshift(user);
//   document.write(color);



//b)Add the element from the End;
//  var color =["Red","Green","Blue","Black"];
//  var user=prompt("Chose The color");
 
//   color.push(user);
//   document.write(color);


//c)Add the element from the Begning;
// var color =["Red","Green","Blue","Black"];
// var user=prompt("Chose The First color");
// var user1=prompt("Chose The Second color");

//  color.unshift(user,user1);
//  document.write(color);



//d)Add the element from the End;
//  var color =["Red","Green","Blue","Black"];
 
//   color.shift(color);
//   document.write(color);


//e)Remove the element from the End;
//  var color =["Red","Green","Blue","Black"];
 
//   color.pop(color);
//   document.write(color);



//f)Add the element want to user;
//  var color =["Red","Green","Blue","Black"];
//  var ind=prompt("Enter index");
//  var user=prompt("Enter the Color");
//   color.splice(ind,0,user);
//   document.write(color);


//g)delete the element want to user;
//  var color =["Red","Green","Blue","Black"];
//  var ind=prompt("Enter Delete index");
//    var ss=color.splice(0,ind,ind);
//   document.write(ss);





//10)
// const sc=["s","w","q","t","a"];
//  for (let i = 0; i < 1; i++) {
//     sc.sort();        
//     document.write(`score of student ${sc}<br/>`)
// }    




//11 in complete

// var cities=["Karachi","Islamabad","Quetta","Peshawar","Rawalpindi"];
// //var sel=prompt("Enter your cities");
//  var scities=cities.slice(0,3);
//  console.log(scities);
//  document.write(scities)
// for (let x = 0; x <1; x++) {
//    cities.splice(0,0,sel);
//     document.write(`Cities List: ${cities}<br/> your selected List: ${sel}`)    
// }


//12
// var arr=["This","is","my","pen"];
//  for (let x = 0; x < 1; x++) {
//      var jn=arr.join('  ');
//     document.write(jn); 
// }
    

//13 
var dev = [];
for (let e = 0; e < 4; e++) {
    const abc = prompt();
    dev.push(abc)
}
document.write(`Device:${dev} <br> `);
dev.reverse()
document.write(`out:${dev[0]} <br> out:${dev[1]} <br> out:${dev[2]} <br>
out:${dev[3]} <br>`); 

//14 
var dev = [];
for (let e = 0; e < 4; e++) {
    const abc = prompt();
    dev.push(abc)
}
document.write(`Device:${dev} <br> `);
dev.reverse()
document.write(`out:${dev[0]} <br> out:${dev[1]} <br> out:${dev[2]} <br>
out:${dev[3]} <br>`); 




//////------Arrays And Loops------//////


///////--------------1-----------////

// var arr=[
//          ["Syed","Nov","4"],
//          ["Ss","Nov","11"]
// ]

// for (let i = 0; i < 3; i++) {
//     for (let x = 0; x < 3; x++) {
    
//         document.write(arr[i][x]+"  ");
//     }
//     document.write("<br/>");
// }



///////--------------2-----------////

// var arr=[
//     [1,3,5],
//     [3,5,1],
//     [5,1,3]
// ]

// for (let i = 0; i < arr.length ; i++) {

// for (let x = 0; x < arr.length ; x++) {
    
//         document.write(arr[i][x]+"   ");  

// }
// document.write("<br/>");
// }


///////--------------3-----------////


// for (let x =1; x <11; x++) {
//     document.write(`Your Number is: ${x} <br/>  `) ;    
// }

/////________Table_________//////


// var table = prompt("Enter A table Number");
// var length = 11;
// var i = 1;

////////_____1St Method_____//////
// document.write("Multiplication table: "+ table);
// for (let i = 1; i < length; i++) {
//     document.write("<br>"+table+" * "+i+" = " +(i * table));
// }

////////_____2nd Method_____//////

// do {
//  document.write("<br>"+i+" * "+table+" = " +(i * table));
//  i++;
// }while(i <= length);

// var num=prompt("Enter A Number for multiplication");
// for (let x = 1; x < 11; x++) {
//     const res=x*num;
//       document.write(`${num} * ${x} = ${res}`);
//}


/////////_________5_____________///////
//  var fruits=["apple","mango","banana","orange"];

//  for (let i = 0; i < fruits.length; i++) {
//      document.write(`${fruits[i]} <br/> `);
//  }
    //  for (let x = 0; x < array.length; x++) {
    //     document.write(`Element at ${indexof(i)} <br/> `);         
    //  }
 










