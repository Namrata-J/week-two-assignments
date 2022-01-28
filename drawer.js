var sideBar =document.querySelector(".et_dismissible-drawer");
var closeBtn = document.querySelector(".closeBtn");
var dismissibleContainer = document.querySelector(".et_dismissible-drawer-container");
var openBtn = document.querySelector(".openBtn");
var modalCloseBtn = document.querySelector(".modal-closeBtn");
var modalDrawer = document.querySelector(".et_modal-drawer");
var modalOpenBtn = document.querySelector(".modal-OpenBtn");
var modalContainer = document.querySelector(".et_modal-drawer-container-main-section");

function openNav(){
    sideBar.style.display ="";
    sideBar.style.maxWidth = "100%";
    dismissibleContainer.style.display="grid";
    dismissibleContainer.style.gridTemplateColumns = "30% 70%";
}

function closeNav(){
    sideBar.style.display ="none";
    dismissibleContainer.style.display="grid";
    dismissibleContainer.style.gridTemplateColumns = "100%";
}
closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);

function modalCloseNav(){
    modalDrawer.style.display ="none";
}

function modalOpenNav(){
    modalDrawer.style.display="";
}

modalCloseBtn.addEventListener("click", modalCloseNav);
modalOpenBtn.addEventListener("click", modalOpenNav);
