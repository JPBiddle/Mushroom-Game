//Array of mushrooms with two of each icon//
function newgame() {
    var mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
        "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
        "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
        "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];

    //Randomise array of icons//
    mushrooms.sort(function () { return 0.5 - Math.random(); });

    //Create div to hold images//
    const gamegrid = document.createElement('div');
    gamegrid.className = "gamegrid";
    document.body.appendChild(gamegrid);

    //Push images into body//
    mushrooms.forEach(function (mushroom) {
        const img = document.createElement('img');
        img.src = mushroom;
        img.height = "110";
        img.width = "110";
        img.className = "icon";
        img.addEventListener("click", flipCard);
        gamegrid.appendChild(img);
        return;
    });
}
//flip icon when clicked//
let beenClicked = false;
let noThirdClick = false;
let firstClicked = ``;
let secondClicked = ``;

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
    // beenClicked = false;
    checkForMatch();
    // return;
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
            }
            firstClicked.classList.toggle("revealed");
            firstClicked.classList.toggle("icon");
            secondClicked.classList.toggle("revealed");
            secondClicked.classList.toggle("icon");
            noThirdClick = false;
            resetBoard();

        }, 1000);
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
    firstClicked.removeEventListener('click', flipCard);
    secondClicked.removeEventListener('click', flipCard);
}


//Remove current array of mushrooms and generates new using newgame function// 
function reset() {
    const icons = document.getElementsByClassName("gamegrid");
    while (icons.length > 0) {
        icons[0].remove();
    };
    newgame();
    return;
}

//Alert to signal game complete//
function end() {
    let finishGame = document.querySelectorAll(".icon");
    console.log(finishGame.length);
    if (finishGame.length == 0) {
        setTimeout(function () { alert("end"); }, 500);
        setTimeout(function () { reset(); }, 2000);
    } else {
        return;
    }
}



