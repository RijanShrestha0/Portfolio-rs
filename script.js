// Add body styles
const bodyStyle = document.createElement('style');
bodyStyle.textContent = `
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-image: url(Background.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
    }
`;
document.head.appendChild(bodyStyle);

const nav = document.createElement('nav');
nav.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color:rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    max-width: 950px;
    margin: 0 auto;
`;

const logo = document.createElement('div');
logo.textContent = 'LOGO';
logo.style.cssText = `
    font-size: 1.5rem;
    font-weight: bold;
    color: #f1f1f1;
`;

// Create menu items container
const menuItems = document.createElement('div');
menuItems.style.cssText = `
    display: flex;
    gap: 3rem;
`;

// Menu items array
const items = ['Home', 'About', 'Services', 'Work', 'Contact'];

// Create and style menu items
items.forEach(item => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item;
    link.style.cssText = `
        text-decoration: none;
        color: #f1f1f1;
        font-weight: 500;
        transition: color 0.3s ease;
    `;
    
    link.addEventListener('mouseover', () => {
        link.style.color = 'rgb(135, 174, 229)';
    });
    
    link.addEventListener('mouseout', () => {
        link.style.color = '#f1f1f1';
    });
    
    menuItems.appendChild(link);
});

nav.appendChild(logo);
nav.appendChild(menuItems);

// Add nav to body
document.body.prepend(nav);

const designer_container = document.createElement('div');
designer_container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    color:rgb(192, 192, 192);
    gap: 1rem;
    max-width: 950px;
    margin: 0 auto;
`;

// Create centered designer titles div
const designerDiv = document.createElement('div');
designerDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    text-align: center;
    color:rgb(192, 192, 192);
    gap: 1rem;
    min-height: 300px;
    position: relative;
`;

const titlesContainer = document.createElement('div');
titlesContainer.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: 180px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const uiuxTitle = document.createElement('h1');
uiuxTitle.textContent = 'UI/UX Designer';
uiuxTitle.style.cssText = `
    font-size: 25px;
    font-weight: 600;
    margin: 0;
`;

const separator = document.createElement('span');
separator.textContent = '|';
separator.style.cssText = `
    font-size: 20px;
    font-weight: 1600;
    color: rgb(0, 106, 255);
`;

const graphicTitle = document.createElement('h2');
graphicTitle.textContent = 'Graphic Designer';
graphicTitle.style.cssText = `
    font-size: 25px;
    color: rgb(135, 174, 229);
    font-weight: 500;
    margin: 0;
`;

titlesContainer.appendChild(uiuxTitle);
titlesContainer.appendChild(separator);
titlesContainer.appendChild(graphicTitle);

const glitchText = document.createElement('div');
glitchText.style.cssText = `
    font-family: oswald;
    font-size: 100px;
    font-weight: 1600;
    color: rgb(213, 213, 213);
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 80px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 50px;
    margin-left: 15px;
`;

// Create cursor element
const cursor = document.createElement('span');
cursor.style.cssText = `
    display: inline-block;
    width: 3px;
    height: 100px;
    background-color: rgb(213, 213, 213);
    margin-left: 5px;
    animation: blink 0.7s infinite;
    vertical-align: middle;
`;

// Add cursor to glitchText
glitchText.appendChild(cursor);

// Add keyframes for cursor blink animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

const words = ['Developing', 'Creativity', 'Designing'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        // Remove a character
        glitchText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Add a character
        glitchText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    // Re-add cursor after text update
    glitchText.appendChild(cursor);

    // If word is complete
    if (!isDeleting && currentCharIndex === currentWord.length) {
        // Make a pause before deleting
        setTimeout(() => {
            isDeleting = true;
        }, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        // Move to next word
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    // Set typing speed
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();

designerDiv.appendChild(titlesContainer);
designerDiv.appendChild(glitchText);

// Create container for descriptions
const descriptionsContainer = document.createElement('div');
descriptionsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: -150px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 120px;
`;

// Create description text divs
const descriptionDiv = document.createElement('div');
descriptionDiv.style.cssText = `
    font-family: 'Fredoka';
    font-size: 16px;
    color: rgb(192, 192, 192);
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
    font-weight: 400;
`;

const descriptionDiv1 = document.createElement('div');
descriptionDiv1.style.cssText = `
    font-family: 'Fredoka';
    font-size: 16px;
    color: rgb(192, 192, 192);
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
    font-weight: 400;
`;

descriptionDiv.textContent = "I'm a Creative Designer and I make things work.";
descriptionDiv1.textContent = "Turning your dreams into reality.";

descriptionsContainer.appendChild(descriptionDiv);
descriptionsContainer.appendChild(descriptionDiv1);
designerDiv.appendChild(descriptionsContainer);
designer_container.appendChild(designerDiv);
document.body.appendChild(designer_container);

