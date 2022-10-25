// expose.js

window.addEventListener('DOMContentLoaded', init);

// init is used to define variables after DOM loads
function init() {
  let expose = document.getElementsByClassName("expose");
  let hornSelection = expose.getElementById("hornSelect");
  let image = expose.querySelector("[type='img']");
  let playButton = expose.querySelector("[type='button']");
  let audio = expose.querySelector("[type='audio']");
}

//Horn Selection Changed
hornSelection.addEventListener('change', function(selection) {
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
})

// Change Image Source
function changeImage(img, source) {
  img.src = source;
}

// Change Audio Source
function changeAudio(aux, source) {
  aux.src = source;
}

// Play Button is Clicked
playButton.addEventListener('click', function() {

  // code to run when the event is triggered

}) 