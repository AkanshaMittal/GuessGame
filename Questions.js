
//average of numbers in an array

// let marks=[85,97,44,37,76,60];
// let averageMarks=0;
// for(let i=0;i<marks.length;i++){
//     averageMarks=marks[i]+averageMarks;
// }
// console.log(Math.floor(averageMarks/marks.length));


//  -----------------------------------------------------------------------------
// values of items  after 10% offer applied

// let items=[250,645,300,900,50];
//  let i=0;
// for( let val of items){
//     console.log(`value of item before offer applied`,val);
//     let offer =val/10;
//       items[i]=items[i]-offer;
//      console.log("values after 10% offer applied",items[i]);
//     i++;
// }

let stringValue = "akansha";
let count = 0;
// function CountVowels(value) {
//    for (let i = 0; i < value.length; i++) {
//         if (value[i] == 'a'||value[i] == 'e'||value[i] == 'i'||value[i] == 'o'|| value[i] == 'u') 
//             {
//             count++;
//         }}}
function CountVowels(value) {
    for (char of value) {
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
}
CountVowels(stringValue);
console.log("number of vowels in the string", count);




