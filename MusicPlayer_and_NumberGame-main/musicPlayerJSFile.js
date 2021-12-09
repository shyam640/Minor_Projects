console.log("This js file included successfully !");



window.addEventListener("load", (event) => {
  let currentSongImage = document.getElementById("current-song-image");
  let currentSongName = document.getElementById("current-song-name");
  let currentSongArtist = document.getElementById("current-song-artist");

  let currentSongStartTime = document.getElementById("current-time");
  let currentSongEndTime = document.getElementById("end-time");

  let prevSongButton = document.getElementById("prev-song-button");
  let nextSongButton = document.getElementById("next-song-button");
  let playpauseButton = document.getElementById("play-pause-button");

  let seekBar = document.getElementById("seek-bar");
  let volumeBar = document.getElementById("volume-bar");

  let song_list = [
    {
      name: "khaab",
      artist: "Akhil",
      image: "images/khaab_song_image.jpg",
      path: "songs/khaab.mp3",
    },
    {
      name: "Brown Munde",
      artist: "",
      image: "images/brown_munde_image.jpg",
      path: "songs/brown_munde.mp3",
    },
    {
      name: "khairiyat Pucho",
      artist: "Arjit Singh",
      image: "images/khairiyat_song_image.jpg",
      path: "songs/khairiyat.mp3",
    },
    {
      name: "Teeji Seat",
      artist: "Kaka",
      image: "images/kala_libas_image.jpg",
      path: "songs/kala_libas.mp3",
    },
  ];

  console.log(song_list); // checking if objecet crated successfully

  let songNum = 0;
  let isCurrentlyPlayingSong = false;
  let updateTime;

  let song = document.createElement("audio");

  const CurrentMusic = (index) => {
    clearInterval(updateTime);
    resetAllValues();
    updateTime = setInterval(seekUpdate, 100);
    let i = index % song_list.length;
    if (i < 0) i = song_list.length - 1;
    if (i > song_list.length) i = 0;
    currentSongName.innerText = song_list[i].name;
    currentSongArtist.innerText = song_list[i].artist;
    currentSongImage.style.backgroundImage = "url(" + song_list[i].image + ")";
    song.src = song_list[i].path;
  };
  CurrentMusic(songNum);

  function resetAllValues() {
    song.currentTime = 0;
    volumeBar.value = 99;
  }

  playpauseButton.onclick = () => {
    startMusic();
  };

  const startMusic = () => {
    isCurrentlyPlayingSong ? pauseSong() : playSong();
  };

  nextSongButton.onclick = () => {
    nextMusic();
  };

  const nextMusic = () => {
    songNum += 1;
    CurrentMusic(songNum);
    playSong();
  };

  prevSongButton.onclick = () => {
    prevMusic();
  };

  const prevMusic = () => {
    songNum -= 1;
    CurrentMusic(songNum);
    playSong();
  };

  const playSong = () => {
    isCurrentlyPlayingSong = true;
    song.play();
    playpauseButton.classList.replace("fa-play-circle", "fa-pause-circle");
  };

  const pauseSong = () => {
    isCurrentlyPlayingSong = false;
    song.pause();
    playpauseButton.classList.replace("fa-pause-circle", "fa-play-circle");
  };

  song.addEventListener("timeupdate", () => {
    let time = song.currentTime;
    let sec = Math.floor(time % 60);
    let min = Math.floor(time / 60);
    if (sec < 10) {
      currentSongStartTime.innerText = min + ":0" + sec;
    } else if (min >= 0 && sec >= 0) {
      currentSongStartTime.innerText = min + ":" + sec;
    } else {
      currentSongStartTime.innerText = "0:00";
    }

    time = song.duration;
    sec = Math.floor(time % 60);
    min = Math.floor(time / 60);
    if (sec < 10) {
      currentSongEndTime.innerText = min + ":0" + sec;
    } else if (min >= 0 && sec >= 0) {
      currentSongEndTime.innerText = min + ":" + sec;
    } else {
      currentSongEndTime.innerText = "0:00";
    }

    if (song.currentTime === song.duration) {
      nextMusic();
    }
  });

  seekBar.onclick = () => {
    seekto = song.duration * (seekBar.value / 100);
    song.currentTime = seekto;
  };

  volumeBar.onclick = () => {
    song.volume = volumeBar.value / 100;
  };

  function seekUpdate() {
    let seektoposition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(song.duration)) {
      seektoposition = song.currentTime * (100 / song.duration);
      seekBar.value = seektoposition;
    }
  }
});


