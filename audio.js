function speak(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.85;
  u.pitch = 1.2;
  u.volume = 1;
  // Force female voice
  const voices = window.speechSynthesis.getVoices();
  const female = voices.find(v =>
    v.name.includes('Female') ||
    v.name.includes('Samantha') ||
    v.name.includes('Karen') ||
    v.name.includes('Google UK English Female') ||
    v.name.includes('Microsoft Zira')
  );
  if (female) u.voice = female;
  window.speechSynthesis.speak(u);
}

// Load voices
window.speechSynthesis.onvoiceschanged = function() {
  window.speechSynthesis.getVoices();
};