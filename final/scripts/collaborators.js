import {collaborators} from "../data/customers.js"

// DOM references
const customersList = document.getElementById('customers-list');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');
const articleContainer = document.querySelector('.menu article');

// Function to display collaborators in **grid view**
function displayGrid() {
    articleContainer.classList.remove('list');
    articleContainer.classList.add('grid');
    customersList.innerHTML = '';

    collaborators.forEach(collab => {
        const li = document.createElement('li');
        li.classList.add('card');

        li.innerHTML = `
            <img src="${collab.photo_url}" alt="${collab.name}">
            <h3>${collab.name}</h3>
            <p class="address">${collab.address}</p>
            <p class="description">${collab.description}</p>
        `;

        customersList.appendChild(li);
    });
}


// Function to display collaborators in **list view**
function displayList() {
    articleContainer.classList.remove('grid');
    articleContainer.classList.add('list');
    customersList.innerHTML = ''; // clear existing content

    collaborators.forEach(collab => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.marginBottom = '15px';

        li.innerHTML = `
        <strong>${collab.name}</strong><br>
        <em>${collab.address}</em><br>
        <p>${collab.description}</p>
        `;
        customersList.appendChild(li);
    });
}

// Event listeners
gridBtn.addEventListener('click', displayGrid);
listBtn.addEventListener('click', displayList);

// Optional: load grid by default
displayGrid();
