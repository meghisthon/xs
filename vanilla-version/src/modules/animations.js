export function initAnimations() {
  const heroSection = document.querySelector('.hero-section');
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;

    heroSection.style.setProperty('--x-offset', `${xPos * 20}px`);
    heroSection.style.setProperty('--y-offset', `${yPos * 20}px`);
  };

  const throttledMouseMove = throttle(handleMouseMove, 100);
  window.addEventListener('mousemove', throttledMouseMove);
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}