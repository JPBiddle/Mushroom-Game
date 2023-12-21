/*Modal for rules*/
/* Thank you to Youtuber WebDevSimplified for their video guide which assisted me*/
/* with building my modals - https://www.youtube.com/watch?v=MBaw_6cPmAw */


//Variables//
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
//add event listeners for rules button//
openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    });
});

//Close button on modal//

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal-game");
        closeModal(modal);
    });
});

//Open function for modal//

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

//Close function for modal//

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

//Function to be called when game won//

function congratulations() {
    const congrats = document.querySelector("#modal-congrats");
    console.log(congrats);
    congrats.classList.add("active");
    overlay.classList.add("active");
}