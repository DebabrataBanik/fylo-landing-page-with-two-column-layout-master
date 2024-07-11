const buttons = document.querySelectorAll('.btn')

const validateEmail = (target) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let el = target.parentElement.firstElementChild
  if(el.value !== '' && !el.value.match(validRegex)){
    alert(`Invalid email address`)
  }

}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    validateEmail(e.target)
  });
})