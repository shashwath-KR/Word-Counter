const char = document.querySelector('#char');
const word = document.querySelector('#word');
const counter = document.querySelector('.counter');
const head = document.querySelector('.head');
const textarea = document.querySelector('.textarea');

textarea.setAttribute('disabled', '')


word.addEventListener('click', () => {

  head.innerHTML = "Word Counter:"

  word.setAttribute('disabled', '')
  word.setAttribute('style', 'opacity: 0.6')

  char.removeAttribute('disabled')
  char.removeAttribute('style', 'opacity: 0.6')

  textarea.removeAttribute('disabled');

  let resp = textarea.value;
     resp = resp.trim();
    let counting = resp.split(" ");
    if(counting[0] === '') {
      counter.innerHTML = 0;
    } else {
    counter.innerHTML = counting.length;
    }

  const myFun = () => {
    let resp = textarea.value;
     resp = resp.trim();
    let counting = resp.split(" ");
    if(counting[0] === '') {
      counter.innerHTML = 0;
    } else {
    counter.innerHTML =  counting.length;
    }
  }
  textarea.onkeyup = myFun;
})



char.addEventListener('click', () => {

  head.innerHTML = "Character Counter:"

  char.setAttribute('disabled', '')
  char.setAttribute('style', 'opacity: 0.6')

  word.removeAttribute('disabled')
  word.removeAttribute('style', 'opacity: 0.6')

  textarea.removeAttribute('disabled')

  let res = textarea.value.length;
    counter.innerHTML = res;

  const chart = () => {
    let res = textarea.value.length;
    counter.innerHTML = res;
  }
  textarea.onkeyup = chart;
})