var innerContainer = document.querySelector(".et_automated-chip-inner-container");
var subHeading = document.querySelector(".et_automated-chip-inner-container-subheading");
var chips = document.querySelector(".et_automated-chips");
var chipsInput = document.querySelector(".et_automated-chips-input");


innerContainer.addEventListener("click", () => {
    subHeading.style.position = "absolute";
    subHeading.style.top = "6px";
    subHeading.style.fontSize = "1rem";
    subHeading.style.color = "blue";
    innerContainer.style.boxShadow = "0px 2px 1px rgb(53, 66, 128)";
    subHeading.style.transition = "all 0.5s"
    chipsInput.style.marginTop = "1.5rem";
    chipsInput.style.display = "inline-block";
    chipsInput.focus();
});

chipsInput.addEventListener("blur", () => {
    chipsInput.style.display = "none";
    subHeading.style.position = "relative";
    subHeading.style.top = "0px";
    subHeading.style.fontSize = "1.2rem";
    subHeading.style.color = "rgb(133, 139, 139)";
});

chipsInput.addEventListener("keypress", (eachkeystroke) => {
       if(eachkeystroke.which === 13){
           chips.appendChild(function(){
               var chipsAppendedChild = document.createElement("div");
               chipsAppendedChild.classList.add("et_automated-chips-appended-child");
               chipsAppendedChild.addEventListener('click', chipClickHandler);

               chipsAppendedChild.append(
                   (function(){
                       var chipsAppendedChildText = document.createElement("span");
                       chipsAppendedChildText.classList.add("at_automated-chips-appended-child-text");
                       chipsAppendedChildText.innerHTML = chipsInput.value;
                       return chipsAppendedChildText;
                   })(),
                   (function(){
                       var chipsAppendedChildButton = document.createElement("span");
                       chipsAppendedChildButton.classList.add("et_automated_chips-appended-child-button");
                       chipsAppendedChildButton.innerHTML = "x";
                       return chipsAppendedChildButton;
                   })()
               );
               return chipsAppendedChild;
           }());
           chipsInput.value = "";
       }
});
function chipClickHandler(event){
    chips.removeChild(event.currentTarget);
 }
