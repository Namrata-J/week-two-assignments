var container = document.querySelector(".et_short-header-container");
var header = document.querySelector(".et_short-header");
var elementsToBeChanged = document.querySelector(".change");

container.addEventListener("scroll", () => {
    if (container.scrollTop > 0) {
        header.style.width = "20%";
        elementsToBeChanged.style.display = "none";
        header.style.borderBottomRightRadius = "3rem";
        header.style.transition = "width 2s";
    } else {
        header.style.width = "100%";
        elementsToBeChanged.style.display = "";
        header.style.borderBottomRightRadius = "0";
    }

});