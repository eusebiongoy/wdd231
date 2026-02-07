import { collaborators } from "../data/customers.mjs";

const memberList = document.getElementById("customers-list");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

let viewMode = "grid"; // default view

function displayCustomers() {
    memberList.innerHTML = "";

    collaborators.forEach(member => {
        const li = document.createElement("li");

        if (viewMode === "grid") {
            li.innerHTML = `
                <img src="${member.photo_url}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.description}</p>
            `;
        } else {
            li.innerHTML = `
                <strong>${member.name}</strong><br>
                ${member.address}<br>
                <em>${member.description}</em>
            `;
        }

        memberList.appendChild(li);
    });
}

// Button events
gridbutton.addEventListener("click", () => {
    viewMode = "grid";
    display.classList.add("grid");
    display.classList.remove("list");
    displayCustomers();
});

listbutton.addEventListener("click", () => {
    viewMode = "list";
    display.classList.add("list");
    display.classList.remove("grid");
    displayCustomers();
});

// Initial load
displayCustomers();
