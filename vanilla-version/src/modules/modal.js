export function initModal() {
  window.openDemoModal = () => {
    document.getElementById('demoModal').classList.add('show');
  };

  window.closeDemoModal = () => {
    document.getElementById('demoModal').classList.remove('show');
  };

  window.handleDemoSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    closeDemoModal();
    alert('Demo talebiniz alınmıştır. En kısa sürede size ulaşacağız.');
  };

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('demoModal');
    if (event.target === modal) {
      closeDemoModal();
    }
  });
}