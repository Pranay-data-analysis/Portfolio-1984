// Dynamic Text Typing Effect
const dynamicText = document.querySelector('.dynamic-text');
const texts = ["Student", "Aspiring Data Analyst"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isTyping = true;

function type() {
    if (isTyping && charIndex < texts[index].length) {
        // Typing animation
        currentText += texts[index].charAt(charIndex);
        charIndex++;
        dynamicText.textContent = currentText;
        setTimeout(type, 150);  // Adjust typing speed here
    } else if (isTyping && charIndex === texts[index].length) {
        // Full text displayed, pause for 1 second
        setTimeout(() => {
            // After pause, remove the text all at once
            dynamicText.textContent = ''; // Disappear the text all at once
            charIndex = 0;  // Reset charIndex for the next text
            isTyping = false;
            setTimeout(type, 500);  // Start typing the next text after a short delay
        }, 1000); // Pause for 1 second before text disappears
    } else {
        // Start typing the next text
        isTyping = true;
        index = (index + 1) % texts.length;
        currentText = '';  // Reset currentText for the new text
        setTimeout(type, 150); // Start typing the next text
    }
}

// Start the animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => type());



// Scroll Detection for Navigation Active State
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-right a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 5) {  // Reduced threshold from 3 to 5
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
