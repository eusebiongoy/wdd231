
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox")
const closeButton = document.querySelector("#closeButton")
const dialogBoxText = document.querySelector("#dialogBox div")

//"show the dialog"  Button opens the dialog modally

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `one Apple contains 95 calories`
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `one Orange contains 45 calories`
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `one Banana contains 105 calories`
});

//"Close" Button close the dialog

closeButton.addEventListener("click", () => {
    dialogBox.close();
})