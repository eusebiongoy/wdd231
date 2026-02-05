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
