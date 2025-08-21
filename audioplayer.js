function toggleAudio() {
    var audio = document.getElementById('myAudio');
    audio.volume = 0.1;
    var button = document.getElementById('songSwitch')

    if (audio.paused) {
        audio.play();
        button.textContent = "Pause";
    } else {
        audio.pause()
        button.textContent = "Play";
    }
}
window.history.replaceState('', '', '/');