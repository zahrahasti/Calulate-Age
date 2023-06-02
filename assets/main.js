"use strict";

const textYear = document.querySelector(".text-year");
const textMonth = document.querySelector(".text-month");
const textDay = document.querySelector(".text-day");
// GET time
const dateNow = new Date();
const getYearNow = dateNow.getFullYear();
const getMonthNow = dateNow.getMonth()
const mapError = new Map([
	['date', 'Must be a valid date.'],
	['month', 'Must be a valid month.'],
	['past', 'Must be in the past.'],
	['empty', 'Value is required.'],
]);

// Calc Yeaars months and days between two days;
function calcAge(diffDate){
    const years = Math.floor(diffDate / 365);
    const month = Math.floor((diffDate % 365) / 30);
    const day = Math.floor((diffDate % 365) % 30);
    textDay.textContent = day
    textMonth.textContent = month
    textYear.textContent =years;
}


const messegeError = document.querySelectorAll(".error-messege");
const formEl = document.querySelector(".form");
const inputsValue = [...formEl.querySelectorAll("input")];

function checkInputValue(value, key, num, error) {
  if (value > num) {
    messegeError[key].textContent = error;
    messegeError[key].classList.add("error");
  } else {
    messegeError[key].classList.remove("error");}
}
 
function returnNumberInInput(el) {
  return +el.value;
}

inputsValue.map((input) => {
  input.addEventListener("input", function(e) {
    checkInputValue(
      returnNumberInInput(inputsValue[0]),0,31,mapError.get("date"));
    checkInputValue(returnNumberInInput(inputsValue[1]),1,12,mapError.get("month"));
    checkInputValue(returnNumberInInput(inputsValue[2]),2,getYearNow,mapError.get("past"));
    if (+inputsValue[2].value >= getYearNow)
      checkInputValue(
        returnNumberInInput(inputsValue[1]),1,getMonthNow,mapError.get("past"));
      
      // select input active and go to next.
    const id=+this.dataset.id;
    const length=+this.value.length;
    if(id<=2&& length === +this.maxLength)document.querySelector(`[data-id="${id+1}"]`)?.focus();
  
  });
});
    formEl.addEventListener("submit", function(e) {
        e.preventDefault();
   
        let emptyInputId = inputsValue
          .filter((input) => input.value === "")
          .map((input) => input.dataset.id);
         
        if (emptyInputId) {
          emptyInputId.forEach((id) => {
            const showErrorMessage=document.querySelector(`[data-order="${id}"]`)
            showErrorMessage.classList.add("error");
            showErrorMessage.textContent = mapError.get("empty");
          });
        }
        if (!emptyInputId.length) {
          const formData=new FormData(this)
          const stringDate=[...formData.values()].map(value=>value.padStart(2,"0")).join("-");
           const datePast = new Date(stringDate);
            // differne beteween two date
          const diffDate =(dateNow.getTime() - datePast.getTime())/86400000;

          //IF there is differnce between two date do this:
          if(diffDate>=0){
            inputsValue.map(input=>input.value="")
            calcAge(diffDate)}
        }
      
      });


