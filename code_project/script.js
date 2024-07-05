document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const sendButton = document.querySelector('.send-btn');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|eg)$/;

    function validateEmail() {
        if (!emailPattern.test(emailInput.value)) {
            errorMessage.style.display = 'block';
            wrongSound.play();
        } else {
            errorMessage.style.display = 'none';
            correctSound.play();
            alert('Email successfully sent!');
        }
    }

    emailInput.addEventListener('input', function () {
        if (emailPattern.test(emailInput.value)) {
            errorMessage.style.display = 'none';
        }
    });

    sendButton.addEventListener('click', validateEmail);

    emailInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            validateEmail();
        }
    });

// foooooor events

document.addEventListener("DOMContentLoaded", function() {
    const eventItems = document.querySelectorAll(".event-item");
    const causeItems = document.querySelectorAll(".cause-item");

    // zoom-in class on click
    function toggleZoomIn(event) {
        event.currentTarget.classList.toggle("zoom-in");
    }

    eventItems.forEach(item => {
        item.addEventListener("click", toggleZoomIn);
    });

    causeItems.forEach(item => {
        item.addEventListener("click", toggleZoomIn);
    });
});
// ........................................................
    const counters = document.querySelectorAll('.start-counter');
    counters.forEach(counter => {
        const value = +counter.getAttribute('data-to');
        const speed = +counter.getAttribute('data-speed');
        const step = value / speed;
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < value) {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = value;
            }
        };

        updateCounter();
    });


    const heroContent = document.querySelector('.hero-content-wrap');
    if (heroContent) {
        const firstImg = heroContent.querySelector('.first_img');
        const secondImg = heroContent.querySelector('img[style="display: none;"]');
        heroContent.addEventListener('click', () => {
            if (firstImg.style.display !== 'none') {
                firstImg.style.display = 'none';
                secondImg.style.display = 'block';
            } else {
                firstImg.style.display = 'block';
                secondImg.style.display = 'none';
            }
        });
    }

    const textElements = document.querySelectorAll('.entry-header h1, .entry-header h4, .entry-content p, .section-title, .milestone-title, .custom-column .icon-box, .section-heading, .section-footer a');
    const animations = ['animate-fade-in', 'animate-slide-in-left', 'animate-slide-in-right', 'animate-slide-in-bottom', 'animate-zoom-in', 'animate-rotate-in'];

    textElements.forEach((element, index) => {
        const animationClass = animations[Math.floor(Math.random() * animations.length)];
        element.classList.add(animationClass, `animate-delay-${index % 5 + 1}`);
    });
});
