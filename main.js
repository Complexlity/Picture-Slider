const sliderContainer = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-sliding')
const rightSlider = document.querySelector('.right-sliding')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const slideLength = leftSlider.querySelectorAll('div').length

let activeSlideNumber = 0;

leftSlider.style.top = `-${(slideLength - 1) * 100}vh`


downButton.addEventListener('click', () => moveSlider('down'))

upButton.addEventListener('click', () => moveSlider('up'))


const moveSlider = (direction) => {
  
  const sliderHeight = sliderContainer.clientHeight;
  
  if (direction === 'up'){
    activeSlideNumber ++;
    if (activeSlideNumber > slideLength - 1){
      activeSlideNumber = 0;
    } 
  }

  if (direction === 'down'){
    activeSlideNumber --;
    if (activeSlideNumber < 0){
      activeSlideNumber = slideLength - 1;
    } 
  }

  rightSlider.style.transform = `translateY(-${activeSlideNumber * sliderHeight}px)`
  leftSlider.style.transform = `translateY(${activeSlideNumber * sliderHeight}px)`
  
}