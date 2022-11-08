const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onInputMessage, 500));
const formData = {}

function onInputMessage(evt) {
    //     const {
    // elements: { email, message }
    // } = evt.currentTarget;
    // const data = {
    //     email: email.value,
    //     message: message.value,
    // };
    
    formData[evt.target.name] = evt.target.value;
      
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
            
}
getText()
function getText() {
    const getItemData = JSON.parse(localStorage.getItem('feedback-form-state')) 
    
    if (getItemData) {
        form.email.value = getItemData.email ;
        form.message.value = getItemData.message ;
    }
    
  }
form.addEventListener("submit", onSummit);
function onSummit(evt) {
    evt.preventDefault()
         const {
    elements: { email, message }
    } = evt.currentTarget;
    const data = {
        email: email.value,
        message: message.value,
    };
    console.log(data)
    evt.currentTarget.reset();
    localStorage.clear()
    
    

  }