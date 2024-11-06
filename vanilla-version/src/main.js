import { initHero } from './modules/hero.js';
import { initSolutions } from './modules/solutions.js';
import { initModal } from './modules/modal.js';
import { initAnimations } from './modules/animations.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initSolutions();
  initModal();
  initAnimations();
});

// Global scroll function
window.scrollToSolutions = () => {
  document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' });
};