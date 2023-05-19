console.clear();

Splitting();

function changeTextColor(element) {
  element.style.color = 'yellow';

  setTimeout(function() {
    element.style.color = 'palevioletred'; // Revert to original color
  }, 500); // Adjust the delay (in milliseconds) as desired
}

const header = document.querySelector('.sticky-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  const section1 = document.getElementById('work__top');
  const section1OffsetTop = section1.offsetTop;
  if (currentScroll < section1OffsetTop-80) {
    header.classList.remove('visible');
    return;
  }
  
  header.classList.add('visible');

  lastScroll = currentScroll;
});