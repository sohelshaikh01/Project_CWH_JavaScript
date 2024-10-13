// Script for creating Calculator

let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=> {

    button.addEventListener('click', (e)=> {
        let inp = document.querySelector('input');
        if(e.target.innerHTML == '=') {
            string = eval(string);
            inp.value = string;
        } 
        else if(e.target.innerHTML == "AC") {
            inp.value = "";
        } 
        else {
            console.log(e.target);
            string=string+e.target.innerHTML;
            inp.value = string;
        }
    });
});