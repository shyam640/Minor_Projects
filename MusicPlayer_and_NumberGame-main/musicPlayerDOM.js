// Adding to dom (document object model)

let html = "";
window.onload = function () {
   // function to add multiple attributes to tags of html dom
   function setAttribute(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
 
  //document.body.innerHTML = html;
 
  // creating logo
  var logo = document.createElement("div");
  logo.setAttribute("class", "bg");
 
  var button = document.createElement("button");
  var lnk1 = document.createElement('a');
  lnk1.setAttribute('href','musicplayer.html');
  lnk1.textContent = "HacPlayer";
  lnk1.setAttribute('style','text-decoration:none;');
  button.appendChild(lnk1);
  logo.appendChild(button);

  var numberGame = document.createElement('button'); 
  var lnk = document.createElement('a');
  lnk.textContent = "Go To Number Game";
  numberGame.setAttribute('class','number-game-button')
  setAttribute(lnk,{'href':'NumberGame.html'});
  lnk.setAttribute('style','text-decoration:none;');
  numberGame.appendChild(lnk);
  logo.appendChild(numberGame);
  

  // adding logo to dom
  document.body.appendChild(logo);
 
  // creating a box for music player
  var box2 = document.createElement("div");
  box2.setAttribute("class", "box2");
  box2.setAttribute("id", "box2");
 
  var musicPlayer = document.createElement("div");
  musicPlayer.setAttribute("class", "music-player");
  box2.appendChild(musicPlayer); // Added music player div to box2
 
  var songDetails = document.createElement("div");
  songDetails.setAttribute("class", "song-details");
 
  // creating song details div's
  var currentSongImage = document.createElement("div");
  currentSongImage.setAttribute("class", "current-song-image");
  currentSongImage.setAttribute("id", "current-song-image");
  songDetails.appendChild(currentSongImage); // Added song image to song details
 
  var currentSongName = document.createElement("div");
  currentSongName.setAttribute("class", "current-song-name");
  currentSongName.setAttribute("id", "current-song-name");
  songDetails.appendChild(currentSongName); // Added song name to song details
 
  var currentSongArtist = document.createElement("div");
  currentSongArtist.setAttribute("class", "current-song-artist");
  currentSongArtist.setAttribute("id", "current-song-artist");
  songDetails.appendChild(currentSongArtist); // Added song artist to song details
 
  musicPlayer.appendChild(songDetails); // Added song details div to music player div
 
  //creating song seek line
  var songSeekLine = document.createElement("div");
  songSeekLine.setAttribute("class", "song-seek-line");
 
  var currentSongTime = document.createElement("div");
  currentSongTime.setAttribute("class", "curr-time");
  currentSongTime.setAttribute("id", "current-time");
  currentSongTime.innerText = "00:00";
  songSeekLine.appendChild(currentSongTime); // Added current song starting time
 
  var seekline = document.createElement("input");
  setAttribute(seekline, {
    type: "range",
    min: "1",
    max: "100",
    value: "0",
    class: "seek-bar",
    id: "seek-bar",
  });
  songSeekLine.appendChild(seekline); // Added seek line
 
  var currentSongduration = document.createElement("div");
  setAttribute(currentSongduration, { class: "end-time", id: "end-time" });
  songSeekLine.appendChild(currentSongduration); // Added current song end time
 
  musicPlayer.appendChild(songSeekLine); // Added music line to music player div
 
  var volumeChangeLine = document.createElement("div");
  volumeChangeLine.setAttribute("class", "volume-control");
 
  var volumeDownIcon = document.createElement("i");
  setAttribute(volumeDownIcon, { class: "fa fa-volume-down" });
  volumeChangeLine.appendChild(volumeDownIcon); // Added volume down icon
 
  var volumeSeekline = document.createElement("input");
  setAttribute(volumeSeekline, {
    type: "range",
    min: "1",
    max: "100",
    value: "60",
    class: "volume-bar",
    id: "volume-bar",
  });
  volumeChangeLine.appendChild(volumeSeekline); // Added volume seek line
 
  var volumeUpIcon = document.createElement("i");
  setAttribute(volumeUpIcon, { class: "fa fa-volume-up" });
  volumeChangeLine.appendChild(volumeUpIcon); // Added volume up icon
 
  musicPlayer.appendChild(volumeChangeLine); // Added volume line to music player
 
  // Creating song control buttons
  var songControlButtons = document.createElement("div");
  songControlButtons.setAttribute("class", "playing-buttons");
 
  var prevSongbtn = document.createElement("div");
  setAttribute(prevSongbtn, { class: "prev-song-button" });
 
  var prevSongButtonIcon = document.createElement("i");
  setAttribute(prevSongButtonIcon, {
    class: "fa fa-step-backward fa-3x",
    id: "prev-song-button",
  });
  prevSongbtn.appendChild(prevSongButtonIcon);
 
  songControlButtons.appendChild(prevSongbtn);
 
  var playpauseSongbtn = document.createElement("div");
 
  var playpauseSongButtonIcon = document.createElement("i");
  setAttribute(playpauseSongButtonIcon, {
    class: "fa fa-play-circle fa-5x",
    id: "play-pause-button",
  });
  playpauseSongbtn.appendChild(playpauseSongButtonIcon);
 
  songControlButtons.appendChild(playpauseSongbtn);
 
  var nextSongbtn = document.createElement("div");
  nextSongbtn.setAttribute("class", "next-song-button");
 
  var nextSongButtonIcon = document.createElement("i");
  setAttribute(nextSongButtonIcon, {
    class: "fa fa-step-forward fa-3x",
    id: "next-song-button",
  });
  nextSongbtn.appendChild(nextSongButtonIcon);
 
  songControlButtons.appendChild(nextSongbtn);
 
  musicPlayer.appendChild(songControlButtons); // Added song control button to music player
 
  // Adding my note 
  let text = `<p class="my-note" id="my-note">This music player is a work of pure javascript from DOM to Styling . <br> Online mode is not available now but will be available soon....</p>
              <p class="my-name" id="my-name">~ @its_shyam640</p>`;
  var box1 = document.createElement('div');
  setAttribute(box1,{'class':'box1','id':'box1'});
  box1.innerHTML = text;
  document.body.appendChild(box1);
 
 
  document.body.appendChild(box2);
 
  var box3 = document.createElement('div');
  setAttribute(box3,{'class':'box3','id':'box3'});
 
  var button1 = document.createElement('a');
  setAttribute(button1,{'class':'about-me','id':'about-me','href':'index.html','target':'_blank'});
  button1.innerHTML = "About Me";
  box3.appendChild(button1);
 
  var button2 = document.createElement('a');
  setAttribute(button2,{'class':'github','id':'github','href':'https://github.com/shyam640','target':'_blank'});
  button2.innerHTML = "Github";
  box3.appendChild(button2);
 
  var button3 = document.createElement('a');
  setAttribute(button3,{'class':'instagram','id':'instagram','href':'https://www.instagram.com/its_shyam640/','target':'_blank'});
  button3.innerHTML = "Instagram";
  box3.appendChild(button3);
 
  document.body.appendChild(box3);
 
  var beats = document.createElement("div");
  beats.setAttribute("class", "beats");
  beats.setAttribute("id", "beats");
  document.body.appendChild(beats);
  for (let index = 0; index < 20; index++) {
    let beat = document.createElement("div");
    beat.classList.add("beats" + (index + 1), "beat-bubble");
    beats.appendChild(beat);
  }
};