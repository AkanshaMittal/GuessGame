// ------------------------------------------------------------
// Q1.Find the average of numbers in an array
// ------------------------------------------------------------
// let marks=[85,97,44,37,76,60];
// let averageMarks=0;
// for(let i=0;i<marks.length;i++){
//     averageMarks=marks[i]+averageMarks;
// }
// console.log(Math.floor(averageMarks/marks.length));
// ------------------------------------------------------------
// Q2.values of items  after 10% offer applied
//  ------------------------------------------------------------
// let items=[250,645,300,900,50];
//  let i=0;
// for( let val of items){
//     console.log(`value of item before offer applied`,val);
//     let offer =val/10;
//       items[i]=items[i]-offer;
//      console.log("values after 10% offer applied",items[i]);
//     i++;
// }
// ------------------------------------------------
// Q3. Count the Vowels present in string with function from two different methods
// -----------------------------------------------

let stringValue = "akansha";
let count = 0;
// function CountVowels(value) {
//    for (let i = 0; i < value.length; i++) {
//         if (value[i] == 'a'||value[i] == 'e'||value[i] == 'i'||value[i] == 'o'|| value[i] == 'u') 
//             {
//             count++;
//         }}}
// function CountVowels(value) {
//     for (char of value) {
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//             count++;
//         }
//     }
// }
// CountVowels(stringValue);console.log("number of vowels in the string", count);

// ------------------------------------------------------------
// Q4. create H2 heading element with text- Hello Javascript
// ------------------------------------------------------------

let h2=document.querySelector('h2');
//  console.dir(h2);

h2.innerText= h2.innerText + " from Shraddha Khapra"  // concatenation
//  ------------------------------------------------------------
//  Q3. Create 3 divs with common className Box, Access them and add some unique text to eacgh of them
//  ------------------------------------------------------------
//   let divs=document.querySelectorAll(".box");
//   console.log(divs);
//   divs[0].innerText= '1 Div Updated Value';
//     divs[1].innerText= '1 Div Updated Value';
//       divs[2].innerText= '2 Div Updated Value';
//   ------------------------------------------------------------
//  Q3. Create 3 divs with common className Box, Access them and add some unique text to eacgh of them with for of loop
// ------------------------------------------------------------
// let divs=document.querySelectorAll(".box");
//  let idx=1;
// for (div of divs ){
//     div.innerText=`${idx} Div Updated Value`
//     idx++;
// }
// ------------------------------------------------------------
// Q4. create a div and paragraph in HTML file set an id and console its id,Class of paragraph and change the class 
// ------------------------------------------------------------
 let fetchId= document.querySelectorAll("div");
 console.log(fetchId);
 let fetchClass=document.querySelector('p');
 console.log(fetchClass.getAttribute("class"));
   fetchClass.setAttribute('class','changeclass');
// ------------------------------------------------------------
// Q4. create a button and add that button below the paragraph
// ------------------------------------------------------------
let newbtn = document.createElement("button");
newbtn.innerText = "ClickMe!!";
newbtn.style.width = "100px"; // use '=' instead of ':'
newbtn.style.height="100px";

let para = document.querySelector("p");
para.after(newbtn);
// ------------------------------------------------------------
// Q4. create a new heading and add the italic styling
// ------------------------------------------------------------
 
let newHeading= document.createElement('h1');
 newHeading.innerHTML="<i><u>This is DOM Practice Question</u></i>"
document.querySelector("body").prepend(newHeading)


  










