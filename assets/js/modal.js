//Modal for rules//
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
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

// overlay.addEventListener("click", () => {
//     const modals = document.querySelectorAll(".modal.active");
//     if (modal == null) return;
//     modals.forEach((modal) => {
//         closeModal(modal);
//     });
// });


closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal-rules");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}


function congratulations() {
    const congrats = document.querySelector("#modal-congrats");
    console.log(congrats);
    congrats.classList.add("active");
    overlay.classList.add("active");
}
