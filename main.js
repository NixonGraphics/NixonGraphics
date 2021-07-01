// selectors
const hamCont = document.querySelector(".hamCont");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const nav = document.querySelector(".nav");

// Event Listeners

 hamCont.onclick = function(){
    ham1.classList.toggle("active");
    ham2.classList.toggle("active");
    ham3.classList.toggle("active");
    nav.classList.toggle("active");
    hamCont.classList.toggle("active");
}

//counter

const number = document.querySelector(".number");
const Decrease = document.querySelector(".Decrease");
const Reset = document.querySelector(".Reset");
const Increase = document.querySelector(".Increase");


let counter = 0;

Increase.onclick = function(){
    counter++

    number.innerText = counter;
}

Decrease.onclick = function(){
    counter--

    number.innerText = counter;
}


Reset.onclick = function(){
    counter=0;
    number.innerText = counter;
}


// To do list

let addbtn = document.querySelector(".addbtn");
let input = document.querySelector(".inputfield");
let todoitemsCont = document.querySelector(".todoitemsCont");

addbtn.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    console.log(paragraph);
    todoitemsCont.appendChild(paragraph);
    input.value ='';

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration="line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        todoitemsCont.removeChild(paragraph);
    });



})


