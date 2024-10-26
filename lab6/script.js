const tracks = [
    { 
        name: "Acoustic Breeze", 
        artist: "Benjamin Tissot", 
        url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3", 
        cover: "https://www.bensound.com/bensound-img/acousticbreeze.jpg" 
    },
    { 
        name: "Sunny", 
        artist: "Benjamin Tissot", 
        url: "https://www.bensound.com/bensound-music/bensound-sunny.mp3", 
        cover: "https://www.bensound.com/bensound-img/sunny.jpg" 
    },
    { 
        name: "Jazzy Frenchy", 
        artist: "Benjamin Tissot", 
        url: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3", 
        cover: "https://www.bensound.com/bensound-img/jazzyfrenchy.jpg" 
    }
];

let currentTrackIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const trackName = document.getElementById("track-name");
const artistName = document.getElementById("artist-name");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    trackName.textContent = track.name;
    artistName.textContent = track.artist;
    audio.load();
    audio.addEventListener("loadedmetadata", () => {
        durationEl.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    });
}

function playPauseTrack() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "▶";
    } else {
        audio.play();
        playPauseButton.textContent = "⏸";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

function updateProgress() {
    progressBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
}

function setProgress() {
    audio.currentTime = progressBar.value;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
}

playPauseButton.addEventListener("click", playPauseTrack);
nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);
audio.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("input", setProgress);

// Загрузка первого трека при старте
loadTrack(currentTrackIndex);
