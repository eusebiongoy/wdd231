document.addEventListener("DOMContentLoaded", () => {

    const gridButton = document.getElementById("grid");
    const display = document.getElementById("customers-list");

    let viewMode = "grid";

    gridButton.addEventListener("click", () => {
        viewMode = "grid";

        display.classList.add("grid");
        display.classList.remove("list");

        displayCustomers();
    });

});
