function initSpoilers() {
  const spoilers = document.querySelectorAll('.spoiler');
  spoilers.forEach((spoiler) => {
    const content = spoiler.querySelector('div');
    spoiler.addEventListener('toggle', () => {
      if (spoiler.open) {
        console.log('[SPOILERS] Applying fadeIn animation');
        content.style.animation = 'fadeIn 0.5s forwards';
      } else {
        console.log('[SPOILERS] Applying fadeOut animation');
        content.style.animation = 'fadeOut 0.5s forwards';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initSpoilers);
initSpoilers();