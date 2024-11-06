export function initHero() {
  const createFloatingCubes = () => {
    const cubesContainer = document.getElementById('floating-cubes');
    for (let i = 0; i < 20; i++) {
      const cube = document.createElement('div');
      cube.className = 'floating-cube';
      cube.style.setProperty('--delay', `${i * 0.5}s`);
      cube.style.setProperty('--x-pos', `${Math.random() * 100}%`);
      cube.style.setProperty('--y-pos', `${Math.random() * 100}%`);
      cubesContainer.appendChild(cube);
    }
  };

  createFloatingCubes();
}