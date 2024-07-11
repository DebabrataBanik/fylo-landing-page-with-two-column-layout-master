const buttons = document.querySelectorAll('.btn')

const validateEmail = (target) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const parentEl = target.parentElement
  let el = parentEl.querySelector('input[type="text"]');
  if(el.value !== '' && !el.value.match(validRegex)){
    el.classList.add('invalid')
    el.nextElementSibling.classList.add('display')
  }
  else if(el.value.match(validRegex)){
    el.classList.remove('invalid')
    el.nextElementSibling.classList.remove('display')
  }

}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    validateEmail(e.target)
  });
})