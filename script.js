// Add body styles
const bodyStyle = document.createElement('style');
bodyStyle.textContent = `
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-image: url(Background1.webp);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
        cursor: none;
        overflow-x: hidden;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: auto;
        position: relative;
    }

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.55);
        z-index: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(bodyStyle);

// Add scroll event listener for horizontal scrolling
let isScrolling = false;
let scrollTimeout;
let lastScrollTime = 0;
const SCROLL_SPEED = 1;
const SCROLL_COOLDOWN = 16; // Approximately 60fps

document.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    const currentTime = performance.now();
    if (currentTime - lastScrollTime < SCROLL_COOLDOWN) return;
    
    window.scrollBy({
        left: e.deltaY * SCROLL_SPEED,
        behavior: 'auto'
    });
    
    lastScrollTime = currentTime;
}, { passive: false });

// Add touch scroll support for mobile devices
document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    
    const currentTime = performance.now();
    if (currentTime - lastScrollTime < SCROLL_COOLDOWN) return;
    
    const touch = e.touches[0];
    const deltaX = touch.movementX || 0;
    
    window.scrollBy({
        left: -deltaX * SCROLL_SPEED,
        behavior: 'auto'
    });
    
    lastScrollTime = currentTime;
}, { passive: false });

const nav = document.createElement('nav');
nav.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    background-color:rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 50px rgba(0, 0, 0, 0.1);
    max-width: 950px;
    margin: 0 auto;
    cursor: none;
    pointer-events: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const logo = document.createElement('div');
logo.textContent = 'Rijan';
logo.style.cssText = `
    font-family: 'oswald';
    font-size: 1.5rem;
    font-weight: bold;
    color:rgb(255, 255, 255);
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
        cursor: none;
        pointer-events: auto;
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
    align-items: left;
    justify-content: center;
    height: 80vh;
    text-align: center;
    color:rgb(192, 192, 192);
    gap: 1rem;
    max-width: 950px;
    margin: 0 auto;
    cursor: default;
    pointer-events: none;
    position: relative;
    left: 0;
    transition: transform 0.3s ease;
`;

// Create centered designer titles div
const designerDiv = document.createElement('div');
designerDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 660px;
    text-align: center;
    color:rgb(192, 192, 192);
    gap: 1rem;
    min-height: 300px;
    position: relative;
`;

const titlesContainer = document.createElement('div');
titlesContainer.style.cssText = `
    display: flex;
    flex-direction: column;
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
    color: #87aee5;
    font-weight: 500;
    margin: 0;
`;

// Create titles wrapper
const titlesWrapper = document.createElement('div');
titlesWrapper.style.cssText = `
    display: flex;
    align-items: center;
    gap: 1rem;
`;

titlesWrapper.appendChild(uiuxTitle);
titlesWrapper.appendChild(separator);
titlesWrapper.appendChild(graphicTitle);

titlesContainer.appendChild(titlesWrapper);

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
    margin-left: 120px;
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
style.textContent = `    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

const words = ['Rijan Shrestha', 'Developing', 'Creativity', 'Designing'];
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
    align-items: flex-start;
    gap: 1rem;
    position: absolute;
    bottom: -150px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 40px;
    padding-left: 240px;
`;

// Create description text divs
const descriptionDiv = document.createElement('div');
descriptionDiv.style.cssText = `
    font-family: 'Fredoka';
    font-size: 16px;
    color: rgb(192, 192, 192);
    text-align: left;
    max-width: 600px;
    line-height: 1.6;
    font-weight: 400;
`;

const descriptionDiv1 = document.createElement('div');
descriptionDiv1.style.cssText = `
    font-family: 'Fredoka';
    font-size: 16px;
    color: rgb(192, 192, 192);
    text-align: left;
    max-width: 600px;
    line-height: 1.6;
    font-weight: 400;
`;

descriptionDiv.textContent = "I'm a Creative Designer and I make things work.";
descriptionDiv1.textContent = "Turning your dreams into reality.";

descriptionsContainer.appendChild(descriptionDiv);
descriptionsContainer.appendChild(descriptionDiv1);

// Create button container
const buttonContainer = document.createElement('div');
buttonContainer.style.cssText = `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    pointer-events: none;
`;

// Create download CV button
const downloadButton = document.createElement('a');
downloadButton.href = 'Rijan resume 2.pdf'; // Replace with your actual CV file path
downloadButton.download = 'Rijan resume 2.pdf';
downloadButton.textContent = 'Download CV';
downloadButton.style.cssText = `
    display: inline-block;
    padding: 12px 30px;
    background-color: transparent;
    border: 2px solid rgb(135, 174, 229);
    color: rgb(135, 174, 229);
    font-family: 'Fredoka';
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
    cursor: none;
    pointer-events: auto;
    position: relative;
    overflow: hidden;
`;

// Add hover effect to button
downloadButton.addEventListener('mouseover', () => {
    downloadButton.style.backgroundColor = 'rgb(135, 174, 229)';
    downloadButton.style.color = '#000';
    downloadButton.style.boxShadow = '0 0 20px rgba(135, 174, 229, 0.5)';
});

downloadButton.addEventListener('mouseout', () => {
    downloadButton.style.backgroundColor = 'transparent';
    downloadButton.style.color = 'rgb(135, 174, 229)';
    downloadButton.style.boxShadow = 'none';
});

buttonContainer.appendChild(downloadButton);
descriptionsContainer.appendChild(buttonContainer);
designerDiv.appendChild(descriptionsContainer);
designer_container.appendChild(designerDiv);
document.body.appendChild(designer_container);

// Create Coming Soon section
const comingSoonContainer = document.createElement('div');
comingSoonContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    backdrop-filter: blur(5px);
`;



// Create info text
const infoText = document.createElement('div');
infoText.style.cssText = `
    font-family: 'Fredoka';
    font-size: 14px;
    color: rgb(192, 192, 192);
    text-align: center;
    margin-bottom: 0.5rem;
    opacity: 0.8;
`;

// Create Coming Soon text
const comingSoonText = document.createElement('div');
comingSoonText.style.cssText = `
    font-family: 'oswald';
    font-size: 40px;
    font-weight: 800;
    color: rgb(213, 213, 213);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    z-index: 1;
    opacity: 0.8;
`;

infoText.textContent = 'Portfolio • Contact • Projects';
comingSoonText.textContent = 'Coming Soon';

comingSoonContainer.appendChild(infoText);
comingSoonContainer.appendChild(comingSoonText);
document.body.appendChild(comingSoonContainer);

// Create mouse hover effect
const mouseEffect = document.createElement('div');
mouseEffect.style.cssText = `
    position: fixed;
    width: 15px;
    height: 15px;
    background-color: rgb(135, 174, 229);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    opacity: 1;
    box-shadow: 0 0 20px rgb(135, 174, 229);
    animation: pulse 2s infinite;
`;

// Add keyframes for cursor pulse animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 20px rgb(135, 174, 229);
        }
        50% {
            transform: scale(1.2);
            box-shadow: 0 0 30px rgb(135, 174, 229);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgb(135, 174, 229);
        }
    }
`;
document.head.appendChild(cursorStyle);

document.body.appendChild(mouseEffect);

// Add mouse move event listener
let lastMoveTime = Date.now();
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    mouseEffect.style.left = e.clientX - 5 + 'px';
    mouseEffect.style.top = e.clientY - 5 + 'px';
    lastMoveTime = Date.now();
    isMoving = true;
});

// Check for idle state
setInterval(() => {
    const currentTime = Date.now();
    if (currentTime - lastMoveTime > 1000 && isMoving) { // 1 second of no movement
        isMoving = false;
        mouseEffect.style.animation = 'pulse 2s infinite';
    }
}, 100);
