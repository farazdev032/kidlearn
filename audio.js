// KidLearn Audio System — Powered by ResponsiveVoice

function speak(text) {
  if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.cancel();
    responsiveVoice.speak(text, 'UK English Female', {
      pitch: 1.1,
      rate: 0.9,
      volume: 1
    });
  } else {
    // Fallback to browser speech
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.8;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  }
}

function stopSpeaking() {
  if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.cancel();
  } else {
    window.speechSynthesis.cancel();
  }
}