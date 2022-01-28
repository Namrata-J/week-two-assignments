var baselineBtn = document.querySelector(".baseline");
var leadingBtn = document.querySelector(".leading");
var stackedBtn = document.querySelector(".stacked");
var closeBtns = document.querySelectorAll(".closeBtn");
var baselineSnackbar = document.querySelector(".baseline-snackbar");
var leadingSnackbar = document.querySelector(".leading-snackbar");
var stackedSnackbar = document.querySelector(".stacked-snackbar");
var snackbars = document.querySelector(".snackbar");

baselineBtn.addEventListener("click", () => {
    baselineSnackbar.style.visibility = "visible";
});

leadingBtn.addEventListener("click", () => {
    leadingSnackbar.style.visibility = "visible";
});

stackedBtn.addEventListener("click", () => {
    stackedSnackbar.style.visibility = "visible";
});

closeBtns.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn1")) {
            baselineSnackbar.style.visibility = "hidden";
        }
        if (e.target.classList.contains("btn2")) {
            leadingSnackbar.style.visibility = "hidden";
        }
        if (e.target.classList.contains("btn3")) {
            stackedSnackbar.style.visibility = "hidden";
        }
    })
})