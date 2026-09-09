/* ========================================
   GRAVITIC - MAIN JAVASCRIPT
======================================== */


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("mobile-active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ========================================
// CLOSE MENU WHEN CLICKING A LINK
// ========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ========================================
// HEADER STYLE ON SCROLL
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background =
            "rgba(7, 9, 13, 0.95)";

        header.style.boxShadow =
            "0 10px 40px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "rgba(7, 9, 13, 0.75)";

        header.style.boxShadow = "none";

    }

});
/* ========================================
   PROJECT FILTER
======================================== */

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filterButton) => {

    filterButton.addEventListener("click", () => {

        // إزالة active من جميع الأزرار
        projectFilters.forEach((button) => {
            button.classList.remove("active");
        });

        // إضافة active للزر المضغوط
        filterButton.classList.add("active");

        // معرفة نوع الفلتر
        const selectedFilter = filterButton.getAttribute("data-filter");

        // فلترة المشاريع
        projectCards.forEach((card) => {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                selectedFilter === cardCategory
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);
            }

        });

    });

});
/* ========================================
   CONTACT FORM
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const service = document.getElementById("contactService").value;
        const message = document.getElementById("contactMessage").value.trim();

        const sendMethod = document.querySelector(
            'input[name="sendMethod"]:checked'
        ).value;


        /* ========================================
           MESSAGE CONTENT
        ======================================== */

        const fullMessage =
`Hello GRAVITIC,

I would like to start a project.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Project Details:
${message}`;


        /* ========================================
           WHATSAPP
        ======================================== */

        if (sendMethod === "whatsapp") {

            const whatsappNumber = "962795758195";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

            window.open(whatsappURL, "_blank");

        }


        /* ========================================
           EMAIL
        ======================================== */

        else if (sendMethod === "email") {

            const emailAddress = "gravitic.company@gmail.com";
            const subject = "New Project Request - GRAVITIC";

            const gmailURL =
                `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;

            window.open(gmailURL, "_blank");

        }

    });

}