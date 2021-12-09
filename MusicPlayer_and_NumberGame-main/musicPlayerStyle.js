// Adding css can be done by: 
  // Method 1 :- Using helper function
  //   function setProperty(elm,property){
  //      for(var key in property){
  //            elm.setProperty(elm,property[key]);
  //      }
  //   }

  // Method 2 :- Using inline css like, (Note: use this method after creating div with id box2 that is introduced below)
  //  let st = document.getElementsById('box2');
  //  st.style.color = '#011aff';

  // Method 3 :- Creating Global styles
  var styles = document.createElement('style');
  styles.innerHTML = `
  @import url("https://fonts.googleapis.com/css?family=Bungee Shade");

  body {
    color: white;
    background: rgb(69, 72, 77);
    background: linear-gradient(
      to bottom,
      rgba(69, 72, 77, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    overflow-x: hidden;
    margin: 1% auto 0 auto;
    
  }
  
  .lights span{
     width: 20px;
     height: 20px;
     border-radius: 50%;
     backface-visibility: hidden;
     position: absolute;
     animation-name: light-move;
     animation-duration: 6s;
     animation-timing-function: linear;
     animation-iteration-count: infinite;
  }
  
  @keyframes light-move{
     100%{transform: translate3d(0 0 1px) rotate(360);}
  }
  
  
  
  /* .pulse{
     stroke-dasharray: 1840;
     stroke-dashoffset: 3680;
     animation: dash 2s ease-out infinite;
     stroke: url(#strokeGradient);
  }
  
  @keyframes dash{
     to{
        stroke-dashoffset: 0;
     }
  }
  
  span{
     color: #eee;
     display: block;
     text-align: center;
     font-size: 35px;
     margin-top: 15px;
     animation: blink 300ms ease-in-out;
  }
  
  @keyframes blink{
     from{
        opacity: 0;
     }
     to{
        opacity: 1;
     }
  } */
  
  .bg {
    width: auto;
    height: auto;
    display: flex;
    justify-content: left;
    margin-left: 10px;
  }
  
  button {
    font-family: "Bungee Shade";
    font-size: 40px;
    border-radius: 6px;
    color: #fff;
    border: none;
    width: auto;
    height: auto;
    background: #1f253d;
    animation: flicker 1.5s infinite alternate;
    cursor: pointer;
    transition: 0.2s;
  }
  
  @keyframes flicker {
    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    69%,
    71%,
    100% {
      text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 9px #08e600, 0 0 12px #54e600,
        0 0 15px #00e645, 0 0 18px #087010, 0 0 21 #09ff2a;
      box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
        0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
        inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
    }
    20%,
    24%,
    70% {
      text-shadow: none;
    }
    55% {
      box-shadow: none;
    }
  }
  
  button:hover {
    animation: step-end;
    box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
      0 0 7vw 0.4vw #e50b0b, inset 0 0 3vw 0.4vw #e50b0b,
      inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
  }
  
  
  
  .box1{
    height: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 28px;
    
    padding: 50px;
    padding-left: 50px;
    box-shadow: 0 0 0.1vw 0.4vw #f9fff75e, 0 0 0.4vw 0.6vw #e97272,
    0 0 7vw 0.4vw #0bdee5, inset 0 0 3vw 0.4vw #0be57f,
    inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;;
  }
  .my-note{
    font-size: 28px;
    font-family: monospace;
    font-weight: 700;
    color: #09ff2a;
    display: flex;
  }
  .my-name{
    display: flex;
    justify-content: flex-end;
    font-family: 'Times New Roman', Times, serif;
    color: #0ff;
  }
  
  .box2 {
    box-shadow: inset 0 0 30px #fff, inset 10px 0 50px #f0f,
      inset -10px 0 50px #0ff, inset 10px 0 200px #f0f, inset -10px 0 200px #0ff,
      0 0 30px #fff, -10px 0 50px #f0f, 10px 0 50px #0ff;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 100px;
    margin-left: 30px;
    margin-right: 30px;
  }
  
  .box2:hover {
    animation: step-end;
    box-shadow: 0 0 0.1vw 0.4vw #f9fff75e, 0 0 0.4vw 0.6vw #e97272,
      0 0 7vw 0.4vw #e50b0b, inset 0 0 3vw 0.4vw #e50b0b,
      inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
  }
  
  .music-player {
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  
  .song-details {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
  
  .current-song-image {
    margin: 25px;
    height: 250px;
    width: 250px;
    background-image: url("images/music.png");
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 0.1vw 0.1vw #f9fff75e, 0 0 0.1vw 0.2vw #e97272,
      0 0 1vw 0.1vw #e50b0b, inset 0 0 1vw 0.2vw #e50b0b,
      inset 0 0 0.1vw 0.1vw #e97272, inset 0 0 0.2vw 0.1vw #fff7f7;
  }
  
  .playing-buttons {
    color: rgba(245, 245, 245, 0.589);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  
  .prev-song-button {
    padding-right: 30px;
  }
  
  .next-song-button {
    padding-left: 30px;
  }
  
  #play-pause-button:hover {
    color: white;
    cursor: pointer;
  }
  
  .prev-song-button:hover {
    cursor: pointer;
    color: white;
  }
  
  .next-song-button:hover {
    cursor: pointer;
    color: white;
  }
  
  .song-seek-line {
    width: 80%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .volume-control {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .seek-bar,
  .volume-bar {
    appearance: none;
    height: 5px;
    background: white;
    cursor: pointer;
  }
  
  .seek-bar {
    width: 600px;
  }
  
  .volume-bar {
    height: 3px;
  }
  
  .curr-time,
  .end-time {
    padding: 10px;
  }
  
  .beats{
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -5;
  }
  
  .beat-bubble{
    border-radius: 50%;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
    height: 200px;
    width: 200px;
  }
  
  .beat-bubble::after{
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%);
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%);
    border-radius: 50%;
    box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
    content: "";
    height: 180px;
    left: 10px;
    width: 180px;
  }
  
  .beats1{
    animation: BubbleFlowUpDown 25s linear infinite, BubbleFlowLeftRight 2s ease-in-out infinite alternate; 
      left: -5%;
      top: 5%;
      transform:scale(0.6);
  }
  .beats2{
    animation: BubbleFlowUpDown 20s linear infinite,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    left: 5%;
    top: 80%;
    transform: scale(0.4);
  }
  .beats3{
    animation: BubbleFlowUpDown 28s linear infinite,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    left: 10%;
    top: 40%;  
    transform: scale(0.7);
  }
  .beats4{
    animation: BubbleFlowUpDown 22s linear infinite,BubbleFlowLeftRight 3s ease-in-out infinite alternate;
    left: 20%;
    top: 0;
    transform: scale(0.3);
  }
  .beats5{
    animation: BubbleFlowUpDown 29s linear infinite,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    left: 30%;
    top: 50%;
    transform: scale(0.5);
  }
  .beats6{
    animation: BubbleFlowUpDown 21s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    left: 50%;
    top: 0%;
    transform: scale(0.8);
  }
  .beats7{
    animation: BubbleFlowUpDown 20s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    left: 65%;
    top: 70%;
    transform: scale(0.4);
  }
  .beats8{
    animation: BubbleFlowUpDown 22s linear infinite alternate-reverse,BubbleFlowLeftRight 3s ease-in-out infinite alternate;
    left: 80%;
    top: 10%;
    transform: scale(0.3);
  }
  .beats9{
    animation: BubbleFlowUpDown 29s linear infinite alternate-reverse,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    left: 90%;
    top: 50%;
    transform: scale(0.6);
  }
  .beats10{
    animation: BubbleFlowUpDown 27s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    left: 80%;
    top: 80%;
    transform: scale(0.3);
  }
  
  .beats11{
    animation: BubbleFlowUpDown 25s linear infinite, BubbleFlowLeftRight 2s ease-in-out infinite alternate; 
      right: -5%;
      bottom: 5%;
      transform:scale(0.6);
  }
  .beats12{
    animation: BubbleFlowUpDown 20s linear infinite,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    right: 5%;
    bottom: 80%;
    transform: scale(0.4);
  }
  .beats13{
    animation: BubbleFlowUpDown 28s linear infinite,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    right: 10%;
    bottom: 40%;  
    transform: scale(0.7);
  }
  .beats14{
    animation: BubbleFlowUpDown 22s linear infinite,BubbleFlowLeftRight 3s ease-in-out infinite alternate;
    right: 20%;
    bottom: 0;
    transform: scale(0.3);
  }
  .beats15{
    animation: BubbleFlowUpDown 29s linear infinite,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    right: 30%;
    bottom: 50%;
    transform: scale(0.5);
  }
  .beats16{
    animation: BubbleFlowUpDown 21s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    right: 50%;
    bottom: 0%;
    transform: scale(0.8);
  }
  .beats17{
    animation: BubbleFlowUpDown 20s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    right: 65%;
    bottom: 70%;
    transform: scale(0.4);
  }
  .beats18{
    animation: BubbleFlowUpDown 22s linear infinite alternate-reverse,BubbleFlowLeftRight 3s ease-in-out infinite alternate;
    right: 80%;
    bottom: 10%;
    transform: scale(0.3);
  }
  .beats19{
    animation: BubbleFlowUpDown 29s linear infinite alternate-reverse,BubbleFlowLeftRight 4s ease-in-out infinite alternate;
    right: 90%;
    bottom: 50%;
    transform: scale(0.6);
  }
  .beats20{
    animation: BubbleFlowUpDown 27s linear infinite alternate-reverse,BubbleFlowLeftRight 2s ease-in-out infinite alternate;
    right: 80%;
    bottom: 80%;
    transform: scale(0.3);
  }
  
  
  
  @keyframes BubbleFlowUpDown{
    0%{margin-top: 1000px;}
    100%{margin-top: -100%;}
  }
  @-webkit-keyframes BubbleFlowUpDown{
    0%{
      margin-top: 1300px;
    }
    100%{
      margin-top: -100%;
    }
  }
  
  @keyframes BubbleFlowLeftRight{
    0%{
      margin-left: 150px;
    }
    100%{
      margin-left: 1500px;
    }
  }
  @-webkit-keyframes BubbleFlowLeftRight{
    0%{
      margin-right: 0px;
    }
    100%{
      margin-right: 60px;
    }
  }
  
  
  
  .box3{
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
  
  }
  
  
  
  #about-me,#github,#instagram{
    font-family: 'Times New Roman', Times, serif;
    padding: 20px;
    font-size: 28px;
    height: auto;
    width: auto ; 
    box-shadow:  0 0 17px 3px #fcf81a,0 0 4px 2px #011aff !important;
    border-radius: 8px;
    text-decoration: none;
  }
  
  #about-me:hover,#github:hover,#instagram:hover{
    box-shadow:  0 0 10px 1px #fcf81a,0 0 2px 1px #011aff !important;
  }

  .number-game-button{
    display:flex;
    position:absolute;
    right:10px;
    background-color:transparent;
    font-family:Times;
    padding:10px
  }

  @media screen and (max-width:750px){
    .bg{
      display: block;
      padding: 10px;
      margin-bottom:100px;
    }
    button{
      margin:10px;
      display: flex;
      flex-
    }
    .box1{
      margin: 10px;
    }
  }

  @media screen and (min-width:750px){
    
    .box1{
      margin: 100px;
    }
  }
  
  
  
  `;
  document.head.appendChild(styles);