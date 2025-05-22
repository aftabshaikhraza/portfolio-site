// Toggle icons on click between icon and label
document.querySelectorAll('.tech-item').forEach(icon => {
  icon.addEventListener('click', () => {
    const iconElement = icon.querySelector('i');
    const techName = icon.querySelector('.tech-label')?.textContent || 'Unknown';

    if (iconElement) {
      icon.innerHTML = `<span>${techName}</span>`;
    } else {
      const faClass = getIconClass(techName);
      icon.innerHTML = `<i class="${faClass}"></i>`;
    }
  });
});

// Utility: Map tech name → FontAwesome class
function getIconClass(name) {
  const map = {
    'Python': 'fab fa-python',
    'Scikit-learn': 'fas fa-chart-line',
    'PCA': 'fas fa-compress-arrows-alt',
    'PyTorch': 'fas fa-fire',
    'TensorFlow': 'fas fa-brain',
    'Twilio': 'fas fa-sms',
    'Web Scraping': 'fas fa-spider',
    'BERT': 'fas fa-robot',
    'HuggingFace': 'fas fa-smile-beam'
  };
  return map[name] || 'fas fa-question';
}