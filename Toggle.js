// create new button
// let newbtn = document.createElement("button");
//adding text in button Click Me. and styling 
// newbtn.innerText="Click Me!!";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";

//  let firstelement=document.querySelector("body");
//   console.log(firstelement);
//   firstelement.prepend(newbtn)
 // create new paragraph tag git it a class 
 //  let para= document.createElement("p");
//  para.setAttribute("class","kapraClass");  ///it override old class and styling.
//  para.innerText="kapra Text";
//  firstelement.append(para);
//para.classList.add("newKapraClass") // it give styling for both new and old class it add two class in one paragraph.
// -----------------------------------------------------------------------------
 
let togglebtn=document.querySelector("#toggle-button");
let currmode = document.querySelector("body");
 let mode="light"
 togglebtn.addEventListener("click",()=>{
    
    if(mode=="light"){
        mode="dark";
        currmode.style.backgroundColor="black";
        togglebtn.style.color="white";
        currmode.classList.add('dark');
        currmode.classList.remove('light');
    }
    else{
        mode="light";
       currmode.style.backgroundColor="white";
        togglebtn.style.color="black";
       currmode.classList.add('light');
        currmode.classList.remove('dark');
       }
    console.log("button clicked",mode)  
 })

