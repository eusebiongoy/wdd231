

const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonId = event.target.id;
    const messageArea = document.getElementById('output-message');
    

    switch (buttonId) {
        case 'button1':
            messageArea.textContent = `CSE110 / CSE111  /  CSE210  /  WDD130  /  WDD131  /  WDD231`;
            break;
        case 'button2':
            messageArea.textContent = 'CSE11O /  CSE111  /  CSE210 ';
            break;
        case 'button3':
            messageArea.textContent = 'WDD130  /  WDD131  /   WDD 231 ';
            break;
        case 'button4':
            messageArea.textContent = `2.0`;
            break;
        case 'button5':
            messageArea.textContent = '2.0';
            break;
        case 'button6':
            messageArea.textContent = '2.0';
            break;
        default:
            messageArea.textContent = 'Web courses';
    }
}

// Add event listeners to the buttons
document.getElementById('button1').addEventListener('click', handleButtonClick);
document.getElementById('button2').addEventListener('click', handleButtonClick);
document.getElementById('button3').addEventListener('click', handleButtonClick);

