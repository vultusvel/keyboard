const k = document.querySelectorAll('.keyboard');
let symbol = {
    ' ' : 'space',
    'Enter' : 'enter',
    'Control' : 'ctrl',
    'Alt' : 'alt'
}

function t11(event) {
    let key = event.key
    console.log(key);
    if ( symbol[key] != undefined){
        key = symbol[key];
    }
    for ( let item of k){
        item.classList.remove("active");
    }
   
    let button = document.querySelector(`.keyboard[data="${key}"]`);
    button.classList.add('active');
    console.log(button)
}

document.querySelector('.in').onkeydown = t11;

let area = document.querySelector('.in')

let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  area.value = ''
  for ( let item of k){
    item.classList.remove("active");
}
})

area.addEventListener('input', () => {
  let value = area.value
  localStorage.setItem('area', value);
})
let res = localStorage.getItem('area')
area.value = res