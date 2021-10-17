const slider = document.getElementById('slider');
const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.img');
const controlItems = document.querySelectorAll('.control-item');
const spans = document.querySelectorAll('.span');
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
}

function rollSlider() {
  sliderInner.style.transform = `translate(-${index * width}px)`;
  console.log('toleft: ' + `translate(-${index * width}px)`)
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
      console.log(index)
      rollSlider();
    }
  })
});

init();

window.addEventListener('resize', init);