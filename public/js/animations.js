/* ========================================
   GRAVITIC - SCROLL ANIMATIONS
======================================== */


// ========================================
// SERVICE CARDS REVEAL
// ========================================

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


serviceCards.forEach((card) => {

    serviceObserver.observe(card);

});


// ========================================
// SECTION HEADERS REVEAL
// ========================================

const sectionHeaders = document.querySelectorAll(".section-header");

sectionHeaders.forEach((header) => {

    header.style.opacity = "0";
    header.style.transform = "translateY(30px)";
    header.style.transition = "0.7s ease";

});


const headerObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.2
    }

);


sectionHeaders.forEach((header) => {

    headerObserver.observe(header);

});
/* ========================================
   NEW SECTIONS REVEAL ANIMATIONS
======================================== */

const revealElements = document.querySelectorAll(
    ".about-left, .about-card, .projects-header, .project-card, .why-us-content, .why-card, .contact-info, .contact-form-wrapper"
);


/* INITIAL STATE */

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* OBSERVER */

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


/* START OBSERVING */

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ========================================
   STAGGER EFFECT
======================================== */

document.querySelectorAll(".about-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.10}s`;

});


document.querySelectorAll(".project-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.10}s`;

});


document.querySelectorAll(".why-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.10}s`;

});