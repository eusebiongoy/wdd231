import { projects } from "../data/projects.mjs";

const showHere = document.querySelector("#showHere");
const dialog = document.getElementById("mydialog");
const dialogTitle = dialog.querySelector("h2");
const dialogContent = dialog.querySelector("p");
const closeBtn = dialog.querySelector("button");

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

        // Click event to open dialog
        img.addEventListener("click", () => {
            dialogTitle.textContent = project.project_name;
            dialogContent.innerHTML = `<strong>Location:</strong> ${project.location}<br>
                                       <strong>Description:</strong> ${project.description}`;
            dialog.showModal();
        });

        card.append(img, title, years);
        showHere.appendChild(card);
    });
}

// Close the dialog
closeBtn.addEventListener("click", () => {
    dialog.close();
});
