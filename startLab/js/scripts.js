
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox")
const closeButton = document.querySelector("#closeButton")

//"show the dialog"  Button opens the dialog modally

openButton.addEventListener("click", () =>{
    dialogBox.showModal();
})

//"Close" Button close the dialog

closeButton.addEventListener("click", () => {
    dialogBox.close();
})