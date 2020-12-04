var synth = window.speechSynthesis;
var msg = new SpeechSynthesisUtterance();
msg.lang = 'he-IL';
msg.rate = 10;

export const tts = (text) => {
  if ('speechSynthesis' in window) {
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } else {
    alert("Sorry, your browser doesn't support text to speech!");
  }
}