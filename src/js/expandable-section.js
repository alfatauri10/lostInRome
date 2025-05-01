function toggleStep(header) {
  const container = header.closest('.expandable-step, .step-card');
  if (!container) return;

  const arrow = header.querySelector('.step-arrow');
  const content = container.querySelector('.step-content-flex-none, .step-details');
  const willBeExpanded = !container.classList.contains('expanded');

  if(container.classList.contains('step-card')) {
    document.querySelectorAll('.step-card.expanded').forEach(openCard => {
      if(openCard !== container) {
        openCard.classList.remove('expanded');
        const otherContent = openCard.querySelector('.step-content-flex-none');
        const otherArrow = openCard.querySelector('.step-arrow');
        if(otherContent) otherContent.style.display = 'none';
        if(otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });
  }

  container.classList.toggle('expanded');
  if(content) content.style.display = willBeExpanded ? 'block' : 'none';
  if(arrow) arrow.style.transform = willBeExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
}