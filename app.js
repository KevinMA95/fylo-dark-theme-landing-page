"use strict";

const inputEl = document.getElementById("emailInput");
const btnEL = document.querySelector(".btn-container-free");
const errorEl = document.querySelector(".emailError");


btnEL.addEventListener("click",()=>{
    checkValue(inputEl.value);
});

const checkValue = (val1)=>{
    if(!val1.includes("@")){
        errorEl.classList.remove("active");
    } else {
        return
    }
}
