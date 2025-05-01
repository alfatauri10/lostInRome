function toggleStep(header) {
  const container = header.closest('.expandable-step, .step-card');
  if (!container) return;

  const arrow = header.querySelector('.step-arrow');
  const content = container.querySelector('.step-content-flex-none, .step-details');
  const isExpanded = container.classList.contains('expanded');

  // Chiudi altre sezioni
  if(container.classList.contains('step-card')) {
    document.querySelectorAll('.step-card.expanded').forEach(otherCard => {
      if(otherCard !== container) {
        otherCard.classList.remove('expanded');
        const otherContent = otherCard.querySelector('.step-content-flex-none');
        const otherArrow = otherCard.querySelector('.step-arrow');
        if(otherContent) {
          otherContent.style.display = 'none';
          otherContent.style.removeProperty('flex'); // Reset proprietà flex
        }
        if(otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Toggle stato
  if(isExpanded) {
    container.classList.remove('expanded');
    if(content) {
      content.style.display = 'none';
      content.style.removeProperty('flex');
    }
    if(arrow) arrow.style.transform = 'rotate(0deg)';
  } else {
    container.classList.add('expanded');
    if(content) {
      content.style.display = 'flex'; // Usa flex per layout responsive
      content.style.flex = '1 1 auto';
    }
    if(arrow) arrow.style.transform = 'rotate(180deg)';
  }

  // Forza ridisegno per browser mobile
  setTimeout(() => {
    if(content) {
      content.style.overflow = 'auto';
    }
  }, 10);
}