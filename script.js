const buttons = document.querySelectorAll('.btn')
const inputs = document.querySelectorAll('input')

inputs.forEach(inp => {
  inp.addEventListener('input', (e) => {
    let span = e.target.nextElementSibling
    if(span && span.classList.contains('display')){
      span.classList.remove('display')
    }
  })
})

const validateEmail = (target) => {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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