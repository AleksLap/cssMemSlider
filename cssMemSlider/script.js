const slider = document.getElementById('slider');
const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.img');
const controlItems = document.querySelectorAll('.control-item');
const spans = document.querySelectorAll('.span');
const text = document.querySelector('.text');
const words = ['I`m watching you', 'Yeh dude, really', 'True story :)', 'Сдесь могла быть ваша реклама'];
let index = 0;
let width;

function init() {
  width = slider.offsetWidth;
  sliderInner.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  })
};

function removeActiveClass() {
  spans.forEach(item => {
    item.classList.remove('span-active');
  })
};

function rollSlider() {
  sliderInner.style.transform = `translate(-${index * width}px)`;
  console.log('toleft: ' + `translate(-${index * width}px)`)
};

function hideShowText() {
  text.classList.add('hide-text');
  setTimeout(() => {
    text.innerHTML = words[index];
    text.classList.remove('hide-text');
  }, 300);
} 

controlItems.forEach(item => {
  item.addEventListener('click', function() {
    let controlInd = +this.dataset.index;
    console.log(controlInd)
    if(index === controlInd) {
      return;
    } else {
      index = controlInd;
      removeActiveClass();
      this.querySelector('.span').classList.add('span-active');
      hideShowText();
      rollSlider();
    }
  })
});

init();

window.addEventListener('resize', init);