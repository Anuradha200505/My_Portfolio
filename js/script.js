/* ==========================================================================
   PRODUCTION READY INTERACTIVE ENGINE SCRIPT (COMPACT PERFORMANCE LOGISTICS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const main = document.getElementById("mainContent");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.classList.add("loader-exit");

        setTimeout(() => {

            loader.remove();

            document.body.style.overflow = "auto";

            main.classList.add("show");

        },1200);

    },1100);

});






// ==========================================
// 2. AOS ANIMATION SYSTEM TRIGGER
// ==========================================

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        once: true,
        mirror: false,
        disable: "mobile"
    });

}

/* ==========================================
   LOADER EXIT + AOS REFRESH
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const main = document.getElementById("mainContent");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.classList.add("loader-exit");

        setTimeout(() => {

            loader.style.display = "none";

            document.body.style.overflow = "auto";

            if(main){
                main.classList.add("show");
            }

            /* Loader remove aanadhuku apram
               AOS animations start aagum */

            if(typeof AOS !== "undefined"){

                AOS.refresh();
                AOS.refreshHard();

            }

        },7);

    },1800);

});

    // ==========================================
    // 3. NAVBAR BACKDROP GLASS BLUR MATRIX CONTROL
    // ==========================================
    const navbar = document.querySelector(".custom-navbar");
    
    function checkNavbarScroll() {
        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    if (navbar) {
        window.addEventListener("scroll", checkNavbarScroll);
        checkNavbarScroll(); // Initial active state verification execution
    }

    // ==========================================
    // 4. SMART NAVBAR LINK SCROLL-SPY MONITOR
    // ==========================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

    function scrollSpyEngine() {
        const currentScrollY = window.scrollY;

        sections.forEach((currentSection) => {
            const sectionHeight = currentSection.offsetHeight;
            const sectionTop = currentSection.offsetTop - 120; // Structural offset layout factor
            const sectionId = currentSection.getAttribute("id");

            if (currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", scrollSpyEngine);

    // ==========================================
    // 5. HERO INTERACTION RIGHT ORBIT DOT MATRIX
    // ==========================================
    const heroPaginationDots = document.querySelectorAll(".dots-wrapper .dot");
    
    heroPaginationDots.forEach((individualDot, index) => {
        individualDot.addEventListener("click", function () {
            heroPaginationDots.forEach(d => d.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ==========================================
    // 6. SCROLL TO TOP UTILITY ACTION BUTTON
    // ==========================================
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==========================================
    // 7. RESPONSIVE MOBILE NAV AUTO COLLAPSER
    // ==========================================
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); // Mimic clean target trigger initialization
            }
        });
    });
});


const words = [
    "Software Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Frontend Developer",
    "Problem Solver",
    "Tech Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("changing-text");

function typeEffect() {

    if (!textElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        textElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        textElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});



