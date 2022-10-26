// expose.js

window.addEventListener('DOMContentLoaded', init);

// init is used to define variables after DOM loads

function init() {
  var expose = document.getElementsByClassName("expose");
  console.log(expose);        // DELETE ME |||||||||||||||||||||||||||||||||||||||||||
  var hornSelection = document.getElementById("horn-select");
  console.log("Horn Selection:" + hornSelection);
  var image = document.querySelector("[type='img']");
  console.log("image:" + image);        // DELETE ME |||||||||||||||||||||||||||||||||||||||||||
  var playButton = document.querySelector("[type='button']");
  console.log("playButton:" + playButton);      // DELETE ME |||||||||||||||||||||||||||||||||||||||||||
  var audio = document.querySelector("[type='audio']");
  console.log("audio:" + audio);      // DELETE ME |||||||||||||||||||||||||||||||||||||||||||

  // Event Listeners
  hornSelection.addEventListener('change', hornChangeEvent(selection));
  playButton.addEventListener('click', clickPlayButton());
}

//Horn Selection Changed
function hornChangeEvent(selection) {
  // Change Image & Audio Based on Selection Value
  switch (selection.target.value) {
    case 'air-horn':
      changeImage(image, assets/images/air-horn.svg); 
      changeAudio(audio, assets/assets/air-horn.mp3);
      break;
    case 'car-horn':
      changeImage(image, assets/images/car-horn.svg);
      changeAudio(audio, assets/assets/car-horn.mp3);
      break;
    case 'party-horn':
      changeImage(image, assets/images/party-horn.svg);
      changeAudio(audio, assets/assets/party-horn.mp3); 
      break;
    default:
      return;
  }
}

// Change Image Source
function changeImage(img, source) {
  img.src = source;
}

// Change Audio Source
function changeAudio(aux, source) {
  aux.src = source;
}

// Play Button is Clicked
function clickPlayButton() {

  // code to run when the event is triggered

}