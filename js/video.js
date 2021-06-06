var video = document.querySelector("#player1");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

// Play Button
document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.95;
  console.log(`New speed is ${video.playbackRate}`);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.95;
  console.log(`New speed is ${video.playbackRate}`);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
  console.log(`Original location ${video.currentTime}`);
  video.currentTime += 15;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log(`Current location ${video.currentTime}`);
});

// Mute
document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
  }
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function () {
  video.volume = this.value / 100;
  console.log(video.volume);
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
