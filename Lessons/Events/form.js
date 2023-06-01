const form = document.querySelector(".js-register-form");

console.log(form);

form.addEventListener("submit", handleSubmitWithFormData);

// Работа с формой через метод form.elements

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;

  const nameInput = elements.name;
  const emailInput = elements.email;
  const passwordInput = elements.password;
  const subscription = elements.subscription.value
//   const gender = elements.gender.value

  console.log(elements);
// У метода form.elements есть атрибуты name и value (если все красиво прописано в html)
  const data = {
    [nameInput.name]: nameInput.value,
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
    subscription,
    // gender
  };
  console.log(data);
}

// Работа с формами через FormData

function handleSubmitWithFormData(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {};

    formData.forEach((value, name)=>{
        console.log(`Name: ${name}, Value: ${value}`);
        data[name] = value;
    })
    console.log(data);
}
