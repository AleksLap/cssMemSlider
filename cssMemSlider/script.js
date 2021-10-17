const slider = document.getElementById('slider');
const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.img');
const controlItems = document.querySelectorAll('.control-item');

function init() {
  const width = slider.offsetWidth;
  sliderInner.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  })
  console.log(width)
}

init();

window.addEventListener('resize', init);