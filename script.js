
// home-----
const carousel = document.querySelector('#carouselExampleInterval');
const buttons = document.querySelectorAll('.carousel-rectangles button');
carousel.addEventListener('slide.bs.carousel', function (event) {
    const allContents = document.querySelectorAll('.home-content');
    const activeSlide = document.querySelector('.carousel-item.active .home-content');
    allContents.forEach(content => content.classList.remove('animate'));
    setTimeout(() => {
        const nextContent = event.relatedTarget.querySelector('.home-content');
        if (nextContent) {
            nextContent.classList.add('animate');
        }
    }, 500); 
});
function goToSlide(index, button) {
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
    carouselInstance.to(index); 

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
// counter
function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let current = start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / (end - start)));
    
    let timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, step);
}

// Start counters when the page loads
window.onload = () => {
    animateCounter("c1", 0, 8000, 2000);
    animateCounter("c2", 0, 810, 4000);
    animateCounter("c3", 0, 2000, 4000);
    animateCounter("c4", 0, 20, 4000);
};
// testmonial--------------
const carouselTwo = document.querySelector('#carouselTwo');
const carouselTwoInstance = new bootstrap.Carousel(carouselTwo);

const prevButtonTwo = document.getElementById('prevSlideTwo');
const nextButtonTwo = document.getElementById('nextSlideTwo');

prevButtonTwo.addEventListener('click', () => {
  carouselTwoInstance.prev();
});

nextButtonTwo.addEventListener('click', () => {
  carouselTwoInstance.next();
});


// form contact
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    if (name.value.trim() === "") {
      showError(name, "Name is required.");
      isValid = false;
    } else {
      removeError(name);
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else {
      removeError(email);
    }

    if (subject.value.trim() === "") {
      showError(subject, "Subject is required.");
      isValid = false;
    } else {
      removeError(subject);
    }

    // Message validation
    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty.");
      isValid = false;
    } else {
      removeError(message);
    }
    if (isValid) {
      showToast(); 
    }
  });
  function showError(input, message) {
    const feedback = input.nextElementSibling; 
    input.classList.add("is-invalid");
    feedback.textContent = message;
    feedback.style.display = "block"; 
  }
  function removeError(input) {
    const feedback = input.nextElementSibling;
    input.classList.remove("is-invalid");
    feedback.style.display = "none";
  }
  function showToast() {
    const toastElement = document.getElementById("successToast");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }