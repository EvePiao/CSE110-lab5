// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  // Load available voices
  function populateVoices() {
    voices = synth.getVoices();

    // Clear and repopulate options
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  // Some browsers (like Chrome) may load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const selectedIndex = voiceSelect.value;
    const text = textInput.value.trim();

    if (selectedIndex === "select" || !text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    // Change face image while speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}