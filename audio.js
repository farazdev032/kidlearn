function speak(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.8;
  u.pitch = 1.1;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener('click', function(e) {

    const letterCard = e.target.closest('.letter-card');
    if (letterCard) {
      const upper = letterCard.querySelector('.upper');
      const lower = letterCard.querySelector('.lower');
      if (upper && lower) {
        speak(upper.textContent.trim() + '. ' + lower.textContent.replace(/[^\w\s]/gu, '').trim());
      }
      return;
    }

    const wordCard = e.target.closest('.word-card');
    if (wordCard) {
      const word = wordCard.querySelector('.wc-word');
      if (word) speak(word.textContent.trim());
      return;
    }

    const target = e.target.closest('[data-speak]');
    if (target) {
      speak(target.getAttribute('data-speak'));
      return;
    }

  });

});