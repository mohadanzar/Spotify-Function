let songs = [
    {
      songName: "Aaj Ki Raat",
      filePath: "songs/aaj ki raat.mp3",
      duration: "4:18",
      coverPath: "/image/1.png"
    },
    {
      songName: "Aayi Nai",
      filePath: "songs/aayi nai.mp3",
      duration: "3:57",
      coverPath: "/image/2.png"
    },
    {
      songName: "Agar Ho Tum",
      filePath: "songs/agar ho tum.mp3",
      duration: "4:32",
      coverPath: "/image/3.png"
    },
    {
      songName: "Chaleya",
      filePath: "songs/chaleya.mp3",
      duration: "3:45",
      coverPath: "/image/4.webp"
    },
    {
      songName: "Ghagra",
      filePath: "songs/ghagra.mp3",
      duration: "4:10",
      coverPath: "/image/5.png"
    },
    {
      songName: "Halki Halki Si",
      filePath: "songs/halki halki si.mp3",
      duration: "4:25",
      coverPath: "/image/6.webp"
    },
    {
      songName: "Hauli Hauli",
      filePath: "songs/hauli hauli.mp3",
      duration: "3:52",
      coverPath: "/image/7.png"
    },
    {
      songName: "Ittar",
      filePath: "songs/ittar.mp3",
      duration: "4:02",
      coverPath: "/image/8.png"
    },
    {
      songName: "Khudaya",
      filePath: "songs/khudaya.mp3",
      duration: "3:58",
      coverPath: "/image/9.webp"
    },
    {
      songName: "Kissik",
      filePath: "songs/kissik.mp3",
      duration: "4:15",
      coverPath: "/image/10.png"
    },
    {
      songName: "Mere Mehboob Mere Sanam",
      filePath: "songs/mere mehboob mere sanam.mp3",
      duration: "4:30",
      coverPath: "/image/11.webp"
    },
    {
      songName: "O Maahi",
      filePath: "songs/o maahi.mp3",
      duration: "3:40",
      coverPath: "/image/12.png"
    }
  ];
  
  let songIndex = 0;
  let audioElement = new Audio(songs[songIndex].filePath);
  let masterPlay = document.getElementById('masterPlay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let songInfo = document.getElementById('songName');
  let currentTimeElement = document.getElementById('currentTime');
  let durationElement = document.getElementById('duration');
  let playerContainer = document.querySelector('.bottomFooter');
  
  // Volume and repeat control elements
  let volumeBar = document.getElementById('volumeBar');
  let repeatBtn = document.getElementById('repeatBtn');
  let circleModeBtn = document.getElementById('circleModeBtn');
  
  // Repeat and circle play mode variables
  let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all
  let circleModeStatus = false; // false: normal, true: circle play

  function updateSongInfo() {
    songInfo.textContent = songs[songIndex].songName;
    durationElement.textContent = songs[songIndex].duration;
    audioElement.addEventListener('timeupdate', updateCurrentTime);
  }
  
  function updateCurrentTime() {
    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentSeconds = Math.floor(audioElement.currentTime % 60);
    
    currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
    
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;
  }
  
  function setupPlaylistListeners() {
    const playlistItems = document.querySelectorAll('.spotify-playlists .item');
  
    playlistItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
  
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
  
        updateSongInfo();
  
        gif.style.opacity = 1;
        playerContainer.style.display = 'block';
      });
    });
  }
  
  setupPlaylistListeners();
  
  masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
      updateSongInfo();
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
    }
  });
  
  audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    myProgressBar.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${progress}%, #ddd ${progress}%, #ddd 100%)`;
  });
  
  myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
  });
  
  // Repeat button functionality with circular mode
  repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    
    // Update repeat button icon based on mode
    switch(repeatMode) {
      case 0: 
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>'; // No repeat
        repeatBtn.classList.remove('text-green-500');
        break;
      case 1: 
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>'; // Repeat One
        repeatBtn.classList.add('text-green-500');
        break;
      case 2: 
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>'; // Repeat All
        break;
    }
  });

  // Circle mode button functionality
  circleModeBtn.addEventListener('click', () => {
    circleModeStatus = !circleModeStatus;
    
    // Toggle circle mode icon
    if (circleModeStatus) {
      circleModeBtn.innerHTML = '<i class="fas fa-circle-play"></i>';
      circleModeBtn.classList.add('text-green-500');
    } else {
      circleModeBtn.innerHTML = '<i class="far fa-circle-play"></i>';
      circleModeBtn.classList.remove('text-green-500');
    }
  });
  
  // Backward step with repeat mode consideration
  document.querySelector('.fa-backward-step').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
  
    updateSongInfo();
  
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  });
  
  // Forward step with repeat mode consideration
  document.querySelector('.fa-forward-step').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
  
    updateSongInfo();
  
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  });
  
  // Volume control
  volumeBar.addEventListener('input', () => {
    audioElement.volume = volumeBar.value / 100;
  });
  
  // Auto play next song with repeat and circle modes
  audioElement.addEventListener('ended', () => {
    if (repeatMode === 1) {
      // Repeat current song
      audioElement.currentTime = 0;
      audioElement.play();
    } else if (repeatMode === 2 || circleModeStatus) {
      // Move to next song
      songIndex = (songIndex + 1) % songs.length;
      audioElement.src = songs[songIndex].filePath;
      audioElement.play();
      updateSongInfo();
    } else {
      // Default behavior
      playerContainer.style.display = 'none';
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
    }
  });
  
  updateSongInfo();


 