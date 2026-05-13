function speak(text) {
  if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.cancel();
    responsiveVoice.speak(text, 'UK English Female', {
      pitch: 1.2,
      rate: 0.85,
      volume: 1,
      onstart: function() {},
      onend: function() {}
    });
  } else {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.8;
    u.pitch = 1.1;
    u.volume = 1;
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