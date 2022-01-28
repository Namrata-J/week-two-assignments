var button = document.querySelector(".toggle-button");
var badge = document.querySelector(".toggle-badge");

button.addEventListener("click", () => {
    if (badge.style.display == "inline") {
        badge.style.display = "none";
        console.log("hlo");
    }else{
        badge.style.display = "inline";
        console.log("hi");
    }
});