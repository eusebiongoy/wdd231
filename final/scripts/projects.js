import { projects } from "../data/projects.mjs";

const showHere = document.querySelector("#showHere");

// Sort newest → oldest
const sortedProjects = [...projects].sort(
    (a, b) => b.start_year - a.start_year
);

displayItems(sortedProjects);

function displayItems(data) {
    data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const img = document.createElement("img");
        img.src = project.photo_urls;
        img.alt = project.project_name;

        const title = document.createElement("h3");
        title.textContent = project.project_name;

        const years = document.createElement("p");
        years.innerHTML = `<strong>${project.start_year} – ${project.end_year}</strong>`;

        card.append(img, title, years);
        showHere.appendChild(card);
    });
}
