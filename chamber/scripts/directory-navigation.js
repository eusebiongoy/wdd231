
document.getElementById("lastModified").innerHTML = document.lastModified;

const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});
// Define an asynchronous function to fetch and display the data
async function fetchAndDisplayMembers() {
    const url = 'eusebiongoy.github.io/wdd231/chamber/data/members.json'; // The path to your JSON file
    const memberList = document.getElementById('member-list');

    try {
        // Fetch the data from the URL and wait for the response
        const response = await fetch(url);

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response body as JSON and wait for it to complete
        const members = await response.json();

        // Iterate over the member data and create DOM elements to display it
        members.forEach(member => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${member.name}</strong> - ${member.email}`;
            memberList.appendChild(li);
        });

    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Fetch problem:', error);
        memberList.innerHTML = '<li>Failed to load member data.</li>';
    }
}

// Call the function to start the process
fetchAndDisplayMembers();
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
