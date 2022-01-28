var draggables = document.querySelectorAll(".et_d-and-d-chip");
var container = document.querySelector(".et_d-and-d-chip-inner-container");

draggables.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add("dragging");
    });
    item.addEventListener('dragend', () => {
        item.classList.remove("dragging");
    });
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('dragenter', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
});