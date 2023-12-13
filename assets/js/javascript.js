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

    //flip icon when clicked//
    // let beenClicked = false;
    // let firstClicked, secondClicked;
    let beenClicked = false;
    let firstClicked = ``;
    let secondClicked = ``;
    function flipCard() {
        this.classList.remove("icon");
        this.classList.toggle("revealed");
        this.classList.add("revealed");


        if (!beenClicked) {
            beenClicked = true;
            firstClicked = this;
            console.log(firstClicked);
            return;
        } else {

            secondClicked = this;
            beenClicked = false;
            console.log(secondClicked);
            checkForMatch();
            return;
        }
    }
    //Function to check for a match//
    function checkForMatch() {
        let firstClickedData = firstClicked.src;
        let secondClickedData = secondClicked.src;
        if (firstClickedData === secondClickedData) {
            noClick();
            return;
        }
        unreveal();

        function unreveal() {
            setTimeout(() => {
                firstClicked.classList.remove("revealed");
                firstClicked.classList.add("icon");
                secondClicked.classList.remove("revealed");
                secondClicked.classList.add("icon");
            }, 1000);
        }
    }
    //Function to remove click after clicked//
    function noClick() {
        firstClicked.removeEventListener('click', flipCard);
        secondClicked.removeEventListener('click', flipCard);
    }
};


//Remove current array of mushrooms and generates new using newgame function// 
function reset() {
    const icons = document.getElementsByClassName("gamegrid");
    while (icons.length > 0) {
        icons[0].remove();
    };
    newgame();
    return;
}

// //Function to change class of icons to reveal them//s
// //Thank you tutor Joanne for helping me solve this problem//
// function reveals(classList) {
//     classList.add("revealed");
//     classList.remove("icon");
//     setTimeout(() => {
//         classList.remove("revealed");
//         classList.add("icon");
//     }, 1000);
// }

// //Reset if not matched//
// function match() {
//     setTimeout(function () {
//         let cards = document.getElementsByClassName("revealed");
//         if (cards.length === 2 && cards[0].src === cards[1].src) {
//             cards[0].classList.add("matched");
//             cards[0].classList.remove("revealed, icon");
//             cards[1].classList.add("matched");
//             cards[1].classList.remove("revealed");
//             console.log("this is a match");
//         } else {
//             if (cards.length > 0) {
//                 cards[0].classList.remove("icon");
//                 cards[0].classList.add("revealed");
//             } else if (cards.length === 2) {
//                 cards[1].classList.add("icon");
//                 cards[1].classList.remove("revealed");
//             }
//             console.log(cards.length);


//         }

// if (document.getElementsByClassName("revealed").length > 1) {
//     if (document.getElementsByClassName("revealed")[0].innerHTML ==
//         document.getElementsByClassName("revealed")[1].innerHTML) {
//             document.getElementsByClassName("revealed")[0].this.classList.remove("icon");
//             document.getElementsByClassName("revealed")[1].this.classList.remove("icon");
//         };
//     }
//     }, 1000);
// }

// function revealmatch() {
//     reveals(this.classList);
//     match();


// }