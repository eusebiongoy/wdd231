import { places } from "../data/discover.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementById("cards");

    places.forEach(place => {
        const card = document.createElement("article");

        const title = document.createElement("h2");
        title.textContent = place.name;

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = place.photo_url;
        img.alt = place.name;
        img.width = 300;
        img.height = 200;
        figure.appendChild(img);

        const address = document.createElement("address");
        address.textContent = place.address;

        const description = document.createElement("p");
        description.textContent = place.description;

        const button = document.createElement("button");
        button.textContent = "Learn More";

        card.append(title, figure, address, description, button);
        cards.appendChild(card);
    });
});

    const messageEl = document.getElementById("visit-message");

    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    let message = "";

    if (!lastVisit) {
        // First visit
        message = "Welcome! Let us know if you have any questions.";
  } else {
    const diffTime = now - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        message = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${diffDays} days ago.`;
    }
  }

    // Display message
    messageEl.textContent = message;

    // Store current visit
    localStorage.setItem("lastVisit", now);

