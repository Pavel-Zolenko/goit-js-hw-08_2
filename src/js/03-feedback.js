const form = document.querySelector(".feedback-form");

form.addEventListener("input", onInputMessage);
function onInputMessage(ent) {
        const {
    elements: { email, message }
    } = ent.currentTarget;
    const data = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
    }