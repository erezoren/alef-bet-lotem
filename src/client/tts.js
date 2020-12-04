export const tts = (text) => {
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance();
    msg.lang='he-IL'
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }else{
    alert("Sorry, your browser doesn't support text to speech!");
  }
}