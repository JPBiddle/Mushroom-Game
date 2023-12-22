//Array of mushrooms with two of each icon//
function newgame() {
   var mushrooms = [
      "assets/images/mushroom_001.png",
      "assets/images/mushroom_001.png",
      "assets/images/mushroom_002.png",
      "assets/images/mushroom_002.png",
      "assets/images/mushroom_003.png",
      "assets/images/mushroom_003.png",
      "assets/images/mushroom_004.png",
      "assets/images/mushroom_004.png",
      "assets/images/mushroom_005.png",
      "assets/images/mushroom_005.png",
      "assets/images/mushroom_006.png",
      "assets/images/mushroom_006.png",
      "assets/images/mushroom_007.png",
      "assets/images/mushroom_007.png",
      "assets/images/mushroom_008.png",
      "assets/images/mushroom_008.png",
   ];

   //Randomise array of icons//
   mushrooms.sort(function () {
      return 0.5 - Math.random();
   });

   //Create div to hold images//
   const gamegrid = document.createElement("div");
   gamegrid.className = "gamegrid";
   document.body.appendChild(gamegrid);

   //Push images into body//
   mushrooms.forEach(function (mushroom) {
      const img = document.createElement("img");
      img.src = mushroom;
      img.height = "110";
      img.width = "110";
      img.className = "icon";
      img.addEventListener("click", flipCard);
      img.style.cursor = "pointer";
      img.draggable = false;
      gamegrid.appendChild(img);
      return;
   });
}
//flip icon when clicked//
var beenClicked = false;
var noThirdClick = false;
var firstClicked = ``;
var secondClicked = ``;

function flipCard() {
   if (noThirdClick) return;
   if (this === firstClicked) return;
   this.classList.toggle("icon");
   this.classList.toggle("revealed");
   


   //Assigning names for first and second clicked cards//
   if (!beenClicked) {
      beenClicked = true;
      firstClicked = this;
      return;
   }
   secondClicked = this;
   checkForMatch();
}

//Function to check for a match//
function checkForMatch() {
   let firstClickedData = firstClicked.src;
   let secondClickedData = secondClicked.src;
   if (firstClickedData === secondClickedData) {
      noClick();
   }
   unreveal();
   end();

   //Function to reset / unreveal icons if no match//
   function unreveal() {
      noThirdClick = true;
      setTimeout(() => {
         if (firstClicked.classList.contains("matched")) {
            noThirdClick = false;
            resetBoard();
            return;
         }
         firstClicked.classList.remove("revealed");
         firstClicked.classList.add("icon");
         secondClicked.classList.remove("revealed");
         secondClicked.classList.add("icon");
         noThirdClick = false;
         resetBoard();
      }, 400);
   }
}

function resetBoard() {
   [beenClicked, noThirdClick] = [false, false];
   [firstClicked, secondClicked] = [``, ``];
}
//Function to remove click after first icon clicked//
function noClick() {
   firstClicked.classList.add("matched");
   firstClicked.classList.remove("icon");
   firstClicked.classList.remove("revealed");
   secondClicked.classList.add("matched");
   secondClicked.classList.remove("icon");
   secondClicked.classList.remove("revealed");
   firstClicked.removeEventListener("click", flipCard);
   secondClicked.removeEventListener("click", flipCard);
}

//Remove current array of mushrooms and generates new using newgame function//
function reset() {
   const icons = document.getElementsByClassName("gamegrid");
   while (icons.length > 0) {
      icons[0].remove();
   }
   const iconsmed = document.getElementsByClassName("gamegrid-medium");
   while (iconsmed.length > 0) {
      iconsmed[0].remove();
   }
   const iconshard = document.getElementsByClassName("gamegrid-hard");
   while (iconshard.length > 0) {
      iconshard[0].remove();
   }
   newgame();
   return;
}

//Function to call modal to signal game complete//
function end() {
   let finishGame = document.querySelectorAll(".icon");
   console.log(finishGame.length);
   if (finishGame.length == 0) {
      setTimeout(function () {
         congratulations();
      }, 500);
      setTimeout(function () {
         reset();
      }, 2000);
   } else {
      return;
   }
}

//Function to remove mushroom image grid when called//

function nonewgame() {
   const icons = document.getElementsByClassName("gamegrid");
   while (icons.length > 0) {
      icons[0].remove();
   }
   const iconsmed = document.getElementsByClassName("gamegrid-medium");
   while (iconsmed.length > 0) {
      icons[0].remove();
   }
   const iconshard = document.getElementsByClassName("gamegrid-hard");
   while (iconshard.length > 0) {
      icons[0].remove();
   }
   return;
}

//Game difficulties//

//Medium difficulty//

function medium() {
   reset();
   nonewgame();
   var mushroomsmed = [
      "assets/images/medium001.png",
      "assets/images/medium001.png",
      "assets/images/medium002.png",
      "assets/images/medium002.png",
      "assets/images/medium003.png",
      "assets/images/medium003.png",
      "assets/images/medium004.png",
      "assets/images/medium004.png",
      "assets/images/medium005.png",
      "assets/images/medium005.png",
      "assets/images/medium006.png",
      "assets/images/medium006.png",
      "assets/images/medium007.png",
      "assets/images/medium007.png",
      "assets/images/medium008.png",
      "assets/images/medium008.png",
      "assets/images/medium009.png",
      "assets/images/medium009.png",
      "assets/images/medium010.png",
      "assets/images/medium010.png",
      "assets/images/medium011.png",
      "assets/images/medium011.png",
      "assets/images/medium012.png",
      "assets/images/medium012.png",
   ];

   //Randomise array of icons//
   mushroomsmed.sort(function () {
      return 0.5 - Math.random();
   });

   //Create div to hold images//
   const gamegrid = document.createElement("div");
   gamegrid.className = "gamegrid-medium";
   document.body.appendChild(gamegrid);

   //Push images into body//
   mushroomsmed.forEach(function (mushroom) {
      const img = document.createElement("img");
      img.src = mushroom;
      img.height = "110";
      img.width = "110";
      img.className = "icon";
      img.draggable = false;
      img.addEventListener("click", flipCard);
      gamegrid.appendChild(img);
      return;
   });
}

//Hard Difficulty//

function hard() {
   reset();
   nonewgame();
   var mushroomshard = [
      "assets/images/hard001.png",
      "assets/images/hard001.png",
      "assets/images/hard002.png",
      "assets/images/hard002.png",
      "assets/images/hard003.png",
      "assets/images/hard003.png",
      "assets/images/hard004.png",
      "assets/images/hard004.png",
      "assets/images/hard005.png",
      "assets/images/hard005.png",
      "assets/images/hard006.png",
      "assets/images/hard006.png",
      "assets/images/hard007.png",
      "assets/images/hard007.png",
      "assets/images/hard008.png",
      "assets/images/hard008.png",
      "assets/images/hard009.png",
      "assets/images/hard009.png",
      "assets/images/hard010.png",
      "assets/images/hard010.png",
      "assets/images/hard011.png",
      "assets/images/hard011.png",
      "assets/images/hard012.png",
      "assets/images/hard012.png",
      "assets/images/hard013.png",
      "assets/images/hard013.png",
      "assets/images/hard014.png",
      "assets/images/hard014.png",
      "assets/images/hard015.png",
      "assets/images/hard015.png",
   ];

   //Randomise array of icons//
   mushroomshard.sort(function () {
      return 0.5 - Math.random();
   });

   //Create div to hold images//
   const gamegrid = document.createElement("div");
   gamegrid.className = "gamegrid-hard";
   document.body.appendChild(gamegrid);

   //Push images into body//
   mushroomshard.forEach(function (mushroom) {
      const img = document.createElement("img");
      img.src = mushroom;
      img.height = "110";
      img.width = "110";
      img.className = "icon";
      img.draggable = false;
      img.addEventListener("click", flipCard);
      gamegrid.appendChild(img);
      return;
   });
}

//Function to change background image//
function spring() {
   document.body.style.backgroundImage = 'url("null")';
   document.body.style.backgroundImage = 'url("assets/images/spring.webp")';
}

function summer() {
   document.body.style.backgroundImage = 'url("null")';
   document.body.style.backgroundImage = 'url("assets/images/summer.webp")';
}

function autumn() {
   document.body.style.backgroundImage = 'url("null")';
   document.body.style.backgroundImage = 'url("assets/images/autumn.webp")';
}

function winter() {
   document.body.style.backgroundImage = 'url("null")';
   document.body.style.backgroundImage = 'url("assets/images/winter.webp")';
}


//Function for music to begin when window is interacted with//

var isMusicPlaying = false;

function myPlay() {
   isMusicPlaying = true;
   var audio = document.getElementById("soundtrack");
   audio.play();
}

window.onclick = () => {
   if (isMusicPlaying) return;
   myPlay();
};
//Mute function//

function mute() {
   var soundtrack = document.getElementById("soundtrack");
   soundtrack.muted = !soundtrack.muted;
}