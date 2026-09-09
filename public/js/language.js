/* ========================================
   GRAVITIC - LANGUAGE SWITCHER
======================================== */

const languageBtn = document.querySelector(".language-btn");

let currentLanguage = "en";


/* ========================================
   TRANSLATIONS
======================================== */

const translations = {

    /* ========================================
       ENGLISH
    ======================================== */

    en: {

        /* NAVBAR */

        home: "Home",
        services: "Services",
        about: "About",
        projects: "Projects",
        whyUs: "Why Us",
        contact: "Contact",

        startProject: "Start a Project",


        /* HERO */

        badge: "Digital & Software Agency",

        heroLine1: "We Build.",
        heroLine2: "We Design.",
        heroLine3: "We Grow.",

        heroDescription:
            "GRAVITIC creates modern websites, powerful software solutions, creative designs and social media strategies that help businesses grow.",

        ourServices: "Our Services",


        /* HERO STATS */

        web: "Web",
        webDesc: "Development",

        software: "Software",
        softwareDesc: "Solutions",

        creative: "Creative",
        creativeDesc: "Design",

        social: "Social",
        socialDesc: "Media",


        /* HERO CARD */

        cardTitle1: "Creative Digital",
        cardTitle2: "Solutions",

        cardDescription:
            "Technology meets creativity.",


        /* SERVICES */

        servicesSubtitle: "What We Do",

        servicesTitle1:
            "Everything your business needs",

        servicesTitle2:
            "to grow digitally.",

        servicesDescription:
            "From websites and software to branding and social media, GRAVITIC delivers complete digital solutions.",


        service1: "Web Development",

        service1Desc:
            "Modern, fast and responsive websites designed specifically for your business and customers.",


        service2: "Software Solutions",

        service2Desc:
            "Custom management systems and software solutions built around the way your company operates.",


        service3: "Social Media",

        service3Desc:
            "Content planning, account management and digital campaigns that strengthen your online presence.",


        service4: "Graphic Design",

        service4Desc:
            "Creative branding, social media designs and visual identities that make your business stand out.",

        learnMore: "Learn More",


        /* ABOUT */

        aboutSubtitle: "About GRAVITIC",

        aboutTitle1:
            "We create digital solutions",

        aboutTitle2:
            "that make an impact.",

        aboutDescription1:
            "GRAVITIC is a digital and software agency focused on creating modern websites, powerful business systems, creative visual identities and effective social media solutions.",

        aboutDescription2:
            "Our goal is simple: help businesses and individuals build a stronger digital presence through technology, creativity and smart solutions.",

        workWithUs: "Work With Us",

        aboutCard1: "Creative Thinking",

        aboutCard1Desc:
            "We combine modern design with creative ideas to build digital experiences that stand out.",

        aboutCard2: "Custom Solutions",

        aboutCard2Desc:
            "Every project is built around the client's actual needs, goals and business workflow.",

        aboutCard3: "Modern Technology",

        aboutCard3Desc:
            "We use modern tools and technologies to build fast, responsive and scalable digital products.",

        aboutCard4: "Business Growth",

        aboutCard4Desc:
            "Our work is designed to strengthen your brand, improve your digital presence and support your growth.",


        /* PROJECTS */

        projectsSubtitle: "Our Work",

        projectsTitle1:
            "Selected projects.",

        projectsTitle2:
            "Built to make an impact.",

        projectsDescription:
            "Explore some of our work across websites, software solutions, social media and creative design.",


        filterAll: "All",
        filterWebsites: "Websites",
        filterSoftware: "Software",
        filterSocial: "Social Media",
        filterDesign: "Graphic Design",


        project1Category:
            "SOFTWARE SOLUTION",

        project1Title:
            "CarRent Pro",

        project1Desc:
            "Complete vehicle rental management system with bookings, customers, fleet tracking and analytics.",


        project2Category:
            "WEB DEVELOPMENT",

        project2Title:
            "Corporate Website",

        project2Desc:
            "Modern and responsive website designed for a professional business presence.",


        project3Category:
            "SOCIAL MEDIA",

        project3Title:
            "Social Campaign",

        project3Desc:
            "Creative content and social media strategy built to increase brand visibility.",


        project4Category:
            "GRAPHIC DESIGN",

        project4Title:
            "Visual Identity",

        project4Desc:
            "Branding and visual design created to give businesses a strong and recognizable identity.",


        /* WHY US */

        whySubtitle:
            "Why GRAVITIC",

        whyTitle1:
            "More than a service.",

        whyTitle2:
            "A digital partner.",

        whyDescription:
            "We combine technology, creativity and business thinking to create digital solutions that are built around your real goals.",

        whyButton:
            "Start Your Project",


        whyCard1:
            "Creative Approach",

        whyCard1Desc:
            "Every project starts with fresh ideas and a clear understanding of your brand and goals.",


        whyCard2:
            "Modern Technology",

        whyCard2Desc:
            "We build using modern technologies to deliver fast, reliable and scalable digital solutions.",


        whyCard3:
            "Complete Solutions",

        whyCard3Desc:
            "From websites and software to branding and social media, everything works together under one vision.",


        whyCard4:
            "Growth Focused",

        whyCard4Desc:
            "We don't design just to look good. We create solutions that support your business and help it grow.",


        /* CONTACT */

        contactSubtitle:
            "Contact Us",

        contactTitle1:
            "Let's build something",

        contactTitle2:
            "great together.",

        contactDescription:
            "Have a project in mind? Tell us what you need and let's turn your idea into a modern digital solution.",


        phoneWhatsapp:
            "Phone / WhatsApp",

        email:
            "Email",

        comingSoon:
            "Coming Soon",

        workingHours:
            "Working Hours",


        formSubtitle:
            "Start a Project",

        formTitle:
            "Tell us about your project.",


        yourName:
            "Your Name",

        namePlaceholder:
            "Enter your name",


        phoneNumber:
            "Phone Number",

        emailLabel:
            "Email",

        serviceLabel:
            "Service",

        chooseService:
            "Choose a service",

        other:
            "Other",


        projectDetails:
            "Project Details",

        messagePlaceholder:
            "Tell us about your project...",


        contactMethod:
            "How would you like to contact us?",

        whatsapp:
            "WhatsApp",

        emailMethod:
            "Email",

        sendMessage:
            "Send Message",


        /* FOOTER */

        footerDescription:
            "Technology meets creativity. We build modern digital solutions designed to help brands and businesses grow.",

        quickLinks:
            "Quick Links",

        footerServices:
            "Services",

        getInTouch:
            "Get In Touch",

        chatWhatsapp:
            "Chat on WhatsApp",

        copyright:
            "© 2026 GRAVITIC. All rights reserved.",

        technologyCreativity:
            "Technology × Creativity"
    },



    /* ========================================
       ARABIC
    ======================================== */

    ar: {

        /* NAVBAR */

        home: "الرئيسية",
        services: "خدماتنا",
        about: "من نحن",
        projects: "أعمالنا",
        whyUs: "لماذا نحن",
        contact: "تواصل معنا",

        startProject: "ابدأ مشروعك",


        /* HERO */

        badge:
            "وكالة رقمية وحلول برمجية",

        heroLine1:
            "نطوّر.",

        heroLine2:
            "نصمّم.",

        heroLine3:
            "وننمي أعمالك.",

        heroDescription:
            "تقدم GRAVITIC مواقع حديثة وحلولًا برمجية قوية وتصاميم إبداعية وخدمات متكاملة لإدارة وسائل التواصل الاجتماعي تساعد أعمالك على النمو.",

        ourServices:
            "خدماتنا",


        /* HERO STATS */

        web:
            "تطوير",

        webDesc:
            "المواقع",

        software:
            "حلول",

        softwareDesc:
            "برمجية",

        creative:
            "تصميم",

        creativeDesc:
            "إبداعي",

        social:
            "إدارة",

        socialDesc:
            "السوشال ميديا",


        /* HERO CARD */

        cardTitle1:
            "حلول رقمية",

        cardTitle2:
            "إبداعية",

        cardDescription:
            "حيث تلتقي التكنولوجيا بالإبداع.",


        /* SERVICES */

        servicesSubtitle:
            "ماذا نقدم",

        servicesTitle1:
            "كل ما يحتاجه عملك",

        servicesTitle2:
            "للنمو رقميًا.",

        servicesDescription:
            "من تطوير المواقع والبرامج إلى الهوية البصرية وإدارة وسائل التواصل الاجتماعي، تقدم GRAVITIC حلولًا رقمية متكاملة.",


        service1:
            "تطوير المواقع",

        service1Desc:
            "نصمم ونطور مواقع حديثة وسريعة ومتجاوبة مع جميع الأجهزة ومخصصة لتناسب احتياجات أعمالك.",


        service2:
            "الحلول البرمجية",

        service2Desc:
            "نطور أنظمة وبرامج مخصصة للشركات والأفراد بما يتناسب مع احتياجات العمل وطريقة تشغيله.",


        service3:
            "إدارة السوشال ميديا",

        service3Desc:
            "إدارة الحسابات وتخطيط المحتوى والحملات الرقمية لتعزيز حضور علامتك التجارية على الإنترنت.",


        service4:
            "الجرافيك ديزاين",

        service4Desc:
            "تصميم الهويات البصرية والمنشورات والإعلانات بأسلوب احترافي يساعد علامتك التجارية على التميز.",

        learnMore:
            "اعرف المزيد",


        /* ABOUT */

        aboutSubtitle:
            "عن GRAVITIC",

        aboutTitle1:
            "نصنع حلولًا رقمية",

        aboutTitle2:
            "تصنع فرقًا حقيقيًا.",

        aboutDescription1:
            "GRAVITIC وكالة رقمية وبرمجية متخصصة في تطوير المواقع والأنظمة البرمجية وتصميم الهويات البصرية وتقديم حلول فعالة لوسائل التواصل الاجتماعي.",

        aboutDescription2:
            "هدفنا بسيط: مساعدة الشركات والأفراد على بناء حضور رقمي أقوى من خلال التكنولوجيا والإبداع والحلول الذكية.",

        workWithUs:
            "اعمل معنا",


        aboutCard1:
            "تفكير إبداعي",

        aboutCard1Desc:
            "نجمع بين التصميم الحديث والأفكار الإبداعية لبناء تجارب رقمية مميزة.",


        aboutCard2:
            "حلول مخصصة",

        aboutCard2Desc:
            "يتم تصميم كل مشروع بناءً على احتياجات العميل الحقيقية وأهدافه وطريقة عمله.",


        aboutCard3:
            "تقنيات حديثة",

        aboutCard3Desc:
            "نستخدم تقنيات وأدوات حديثة لبناء منتجات رقمية سريعة ومتجاوبة وقابلة للتوسع.",


        aboutCard4:
            "نمو الأعمال",

        aboutCard4Desc:
            "نصمم أعمالنا لتعزيز علامتك التجارية وتقوية حضورك الرقمي ودعم نمو مشروعك.",


        /* PROJECTS */

        projectsSubtitle:
            "أعمالنا",

        projectsTitle1:
            "مشاريع مختارة.",

        projectsTitle2:
            "صُممت لتصنع تأثيرًا.",

        projectsDescription:
            "اكتشف مجموعة من أعمالنا في تطوير المواقع والحلول البرمجية والسوشال ميديا والتصميم الإبداعي.",


        filterAll:
            "الكل",

        filterWebsites:
            "المواقع",

        filterSoftware:
            "البرمجيات",

        filterSocial:
            "السوشال ميديا",

        filterDesign:
            "التصميم",


        project1Category:
            "حل برمجي",

        project1Title:
            "CarRent Pro",

        project1Desc:
            "نظام متكامل لإدارة شركات تأجير السيارات يشمل الحجوزات والعملاء والأسطول والمتابعة والتحليلات.",


        project2Category:
            "تطوير المواقع",

        project2Title:
            "موقع شركة",

        project2Desc:
            "موقع حديث ومتجاوب مصمم لبناء حضور احترافي وقوي للشركات على الإنترنت.",


        project3Category:
            "السوشال ميديا",

        project3Title:
            "حملة سوشال ميديا",

        project3Desc:
            "محتوى إبداعي واستراتيجية رقمية مصممة لزيادة انتشار العلامة التجارية وتعزيز حضورها.",


        project4Category:
            "جرافيك ديزاين",

        project4Title:
            "هوية بصرية",

        project4Desc:
            "تصميم هوية بصرية متكاملة تمنح الشركات مظهرًا احترافيًا ومميزًا يسهل التعرف عليه.",


        /* WHY US */

        whySubtitle:
            "لماذا GRAVITIC",

        whyTitle1:
            "أكثر من مجرد خدمة.",

        whyTitle2:
            "شريكك الرقمي.",

        whyDescription:
            "نجمع بين التكنولوجيا والإبداع وفهم الأعمال لتقديم حلول رقمية مصممة حول أهدافك الحقيقية.",

        whyButton:
            "ابدأ مشروعك",


        whyCard1:
            "نهج إبداعي",

        whyCard1Desc:
            "يبدأ كل مشروع بأفكار جديدة وفهم واضح لعلامتك التجارية وأهدافك.",


        whyCard2:
            "تقنيات حديثة",

        whyCard2Desc:
            "نعتمد على تقنيات حديثة لتقديم حلول رقمية سريعة وموثوقة وقابلة للتوسع.",


        whyCard3:
            "حلول متكاملة",

        whyCard3Desc:
            "من المواقع والبرمجيات إلى التصميم والسوشال ميديا، نقدم جميع الحلول تحت رؤية واحدة.",


        whyCard4:
            "نركز على النمو",

        whyCard4Desc:
            "لا نصمم لمجرد المظهر، بل نبني حلولًا تساعد عملك على التطور والنمو.",


        /* CONTACT */

        contactSubtitle:
            "تواصل معنا",

        contactTitle1:
            "لنصنع شيئًا",

        contactTitle2:
            "رائعًا معًا.",

        contactDescription:
            "لديك مشروع أو فكرة؟ أخبرنا بما تحتاجه ودعنا نحول فكرتك إلى حل رقمي حديث واحترافي.",


        phoneWhatsapp:
            "الهاتف / واتساب",

        email:
            "البريد الإلكتروني",

        comingSoon:
            "قريبًا",

        workingHours:
            "ساعات العمل",


        formSubtitle:
            "ابدأ مشروعًا",

        formTitle:
            "أخبرنا عن مشروعك.",


        yourName:
            "الاسم",

        namePlaceholder:
            "اكتب اسمك",


        phoneNumber:
            "رقم الهاتف",

        emailLabel:
            "البريد الإلكتروني",

        serviceLabel:
            "الخدمة",

        chooseService:
            "اختر الخدمة",

        other:
            "أخرى",


        projectDetails:
            "تفاصيل المشروع",

        messagePlaceholder:
            "أخبرنا عن مشروعك وما الذي تحتاجه...",


        contactMethod:
            "كيف تفضل التواصل معنا؟",

        whatsapp:
            "واتساب",

        emailMethod:
            "البريد الإلكتروني",

        sendMessage:
            "إرسال الرسالة",


        /* FOOTER */

        footerDescription:
            "حيث تلتقي التكنولوجيا بالإبداع. نبني حلولًا رقمية حديثة تساعد العلامات التجارية والشركات على النمو.",

        quickLinks:
            "روابط سريعة",

        footerServices:
            "خدماتنا",

        getInTouch:
            "تواصل معنا",

        chatWhatsapp:
            "تواصل عبر واتساب",

        copyright:
            "© 2026 GRAVITIC. جميع الحقوق محفوظة.",

        technologyCreativity:
            "التكنولوجيا × الإبداع"
    }

};



/* ========================================
   HELPER FUNCTIONS
======================================== */

function setText(selector, text) {

    const element = document.querySelector(selector);

    if (element) {
        element.textContent = text;
    }

}


function setHTML(selector, html) {

    const element = document.querySelector(selector);

    if (element) {
        element.innerHTML = html;
    }

}



/* ========================================
   UPDATE LANGUAGE
======================================== */

function updateLanguage() {

    const t = translations[currentLanguage];


    /* ========================================
       PAGE DIRECTION
    ======================================== */

    if (currentLanguage === "ar") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.body.classList.add("rtl");

        languageBtn.textContent = "EN";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.body.classList.remove("rtl");

        languageBtn.textContent = "AR";

    }


    /* ========================================
       NAVIGATION
    ======================================== */

    const navLinks =
        document.querySelectorAll(".nav-links a");

    if (navLinks.length >= 6) {

        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.services;
        navLinks[2].textContent = t.about;
        navLinks[3].textContent = t.projects;
        navLinks[4].textContent = t.whyUs;
        navLinks[5].textContent = t.contact;

    }


    setText(
        ".nav-contact-btn",
        t.startProject
    );


    /* ========================================
       HERO
    ======================================== */

    const heroBadge =
        document.querySelector(".hero-badge");

    if (heroBadge) {

        const icon =
            heroBadge.querySelector("i");

        heroBadge.innerHTML = "";

        if (icon) {
            heroBadge.appendChild(icon);
        }

        heroBadge.append(
            document.createTextNode(
                " " + t.badge
            )
        );

    }


    setHTML(
        ".hero-content h1",
        `
        ${t.heroLine1}
        <span>${t.heroLine2}</span>
        ${t.heroLine3}
        `
    );


    setText(
        ".hero-description",
        t.heroDescription
    );


    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons .btn"
        );

    if (heroButtons.length >= 2) {

        heroButtons[0].innerHTML =
            `
            ${t.ourServices}
            <i class="fa-solid fa-arrow-right"></i>
            `;

        heroButtons[1].textContent =
            t.startProject;

    }


    /* HERO STATS */

    const stats =
        document.querySelectorAll(
            ".hero-stats .stat"
        );

    if (stats.length >= 4) {

        stats[0].querySelector("h3").textContent =
            t.web;

        stats[0].querySelector("p").textContent =
            t.webDesc;


        stats[1].querySelector("h3").textContent =
            t.software;

        stats[1].querySelector("p").textContent =
            t.softwareDesc;


        stats[2].querySelector("h3").textContent =
            t.creative;

        stats[2].querySelector("p").textContent =
            t.creativeDesc;


        stats[3].querySelector("h3").textContent =
            t.social;

        stats[3].querySelector("p").textContent =
            t.socialDesc;

    }


    setHTML(
        ".visual-content h2",
        `
        ${t.cardTitle1}
        <span>${t.cardTitle2}</span>
        `
    );


    setText(
        ".visual-content > p",
        t.cardDescription
    );


    /* ========================================
       SERVICES
    ======================================== */

    const servicesSection =
        document.querySelector("#services");

    if (servicesSection) {

        setText(
            "#services .section-subtitle",
            t.servicesSubtitle
        );


        setHTML(
            "#services .section-header h2",
            `
            ${t.servicesTitle1}
            <span>${t.servicesTitle2}</span>
            `
        );


        setText(
            "#services .section-header > p",
            t.servicesDescription
        );


        const cards =
            document.querySelectorAll(
                "#services .service-card"
            );


        const serviceData = [

            [
                t.service1,
                t.service1Desc
            ],

            [
                t.service2,
                t.service2Desc
            ],

            [
                t.service3,
                t.service3Desc
            ],

            [
                t.service4,
                t.service4Desc
            ]

        ];


        cards.forEach(
            (card, index) => {

                if (!serviceData[index]) {
                    return;
                }

                const title =
                    card.querySelector("h3");

                const description =
                    card.querySelector("p");

                const link =
                    card.querySelector("a");


                if (title) {

                    title.textContent =
                        serviceData[index][0];

                }


                if (description) {

                    description.textContent =
                        serviceData[index][1];

                }


                if (link) {

                    link.innerHTML =
                        `
                        ${t.learnMore}
                        <i class="fa-solid fa-arrow-right"></i>
                        `;

                }

            }
        );

    }


    /* ========================================
       ABOUT
    ======================================== */

    setText(
        "#about .section-subtitle",
        t.aboutSubtitle
    );


    setHTML(
        "#about .about-left h2",
        `
        ${t.aboutTitle1}
        <span>${t.aboutTitle2}</span>
        `
    );


    const aboutDescriptions =
        document.querySelectorAll(
            "#about .about-description"
        );

    if (aboutDescriptions.length >= 2) {

        aboutDescriptions[0].textContent =
            t.aboutDescription1;

        aboutDescriptions[1].textContent =
            t.aboutDescription2;

    }


    const aboutButton =
        document.querySelector(
            "#about .about-left .btn"
        );

    if (aboutButton) {

        aboutButton.innerHTML =
            `
            ${t.workWithUs}
            <i class="fa-solid fa-arrow-right"></i>
            `;

    }


    const aboutCards =
        document.querySelectorAll(
            "#about .about-card"
        );


    const aboutData = [

        [
            t.aboutCard1,
            t.aboutCard1Desc
        ],

        [
            t.aboutCard2,
            t.aboutCard2Desc
        ],

        [
            t.aboutCard3,
            t.aboutCard3Desc
        ],

        [
            t.aboutCard4,
            t.aboutCard4Desc
        ]

    ];


    aboutCards.forEach(
        (card, index) => {

            if (!aboutData[index]) {
                return;
            }


            const title =
                card.querySelector("h3");

            const description =
                card.querySelector("p");


            if (title) {

                title.textContent =
                    aboutData[index][0];

            }


            if (description) {

                description.textContent =
                    aboutData[index][1];

            }

        }
    );


    /* ========================================
       PROJECTS
    ======================================== */

    setText(
        "#projects .section-subtitle",
        t.projectsSubtitle
    );


    setHTML(
        "#projects .projects-header h2",
        `
        ${t.projectsTitle1}
        <span>${t.projectsTitle2}</span>
        `
    );


    setText(
        "#projects .projects-header > p",
        t.projectsDescription
    );


    const filterButtons =
        document.querySelectorAll(
            ".project-filter"
        );

    if (filterButtons.length >= 5) {

        filterButtons[0].textContent =
            t.filterAll;

        filterButtons[1].textContent =
            t.filterWebsites;

        filterButtons[2].textContent =
            t.filterSoftware;

        filterButtons[3].textContent =
            t.filterSocial;

        filterButtons[4].textContent =
            t.filterDesign;

    }


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    const projectData = [

        [
            t.project1Category,
            t.project1Title,
            t.project1Desc
        ],

        [
            t.project2Category,
            t.project2Title,
            t.project2Desc
        ],

        [
            t.project3Category,
            t.project3Title,
            t.project3Desc
        ],

        [
            t.project4Category,
            t.project4Title,
            t.project4Desc
        ]

    ];


    projectCards.forEach(
        (card, index) => {

            if (!projectData[index]) {
                return;
            }


            const category =
                card.querySelector(
                    ".project-category"
                );

            const title =
                card.querySelector(
                    ".project-info h3"
                );

            const description =
                card.querySelector(
                    ".project-info p"
                );


            if (category) {

                category.textContent =
                    projectData[index][0];

            }


            if (title) {

                title.textContent =
                    projectData[index][1];

            }


            if (description) {

                description.textContent =
                    projectData[index][2];

            }

        }
    );


    /* ========================================
       WHY GRAVITIC
    ======================================== */

    setText(
        "#why-us .section-subtitle",
        t.whySubtitle
    );


    setHTML(
        "#why-us .why-us-content h2",
        `
        ${t.whyTitle1}
        <span>${t.whyTitle2}</span>
        `
    );


    setText(
        "#why-us .why-us-description",
        t.whyDescription
    );


    const whyButton =
        document.querySelector(
            "#why-us .btn"
        );

    if (whyButton) {

        whyButton.innerHTML =
            `
            ${t.whyButton}
            <i class="fa-solid fa-arrow-right"></i>
            `;

    }


    const whyCards =
        document.querySelectorAll(
            "#why-us .why-card"
        );


    const whyData = [

        [
            t.whyCard1,
            t.whyCard1Desc
        ],

        [
            t.whyCard2,
            t.whyCard2Desc
        ],

        [
            t.whyCard3,
            t.whyCard3Desc
        ],

        [
            t.whyCard4,
            t.whyCard4Desc
        ]

    ];


    whyCards.forEach(
        (card, index) => {

            if (!whyData[index]) {
                return;
            }


            const title =
                card.querySelector("h3");

            const description =
                card.querySelector("p");


            if (title) {

                title.textContent =
                    whyData[index][0];

            }


            if (description) {

                description.textContent =
                    whyData[index][1];

            }

        }
    );


    /* ========================================
       CONTACT
    ======================================== */

    setText(
        "#contact .section-subtitle",
        t.contactSubtitle
    );


    setHTML(
        "#contact .contact-info h2",
        `
        ${t.contactTitle1}
        <span>${t.contactTitle2}</span>
        `
    );


    setText(
        ".contact-description",
        t.contactDescription
    );


    const contactItems =
        document.querySelectorAll(
            ".contact-item"
        );

    if (contactItems.length >= 3) {

        contactItems[0]
            .querySelector("span")
            .textContent =
            t.phoneWhatsapp;


        contactItems[1]
            .querySelector("span")
            .textContent =
            t.email;


        contactItems[1]
            .querySelector("a")
            .textContent =
            t.comingSoon;


        contactItems[2]
            .querySelector("span")
            .textContent =
            t.workingHours;

    }


    /* FORM */

    setText(
        ".form-header > span",
        t.formSubtitle
    );


    setText(
        ".form-header h3",
        t.formTitle
    );


    setText(
        'label[for="contactName"]',
        t.yourName
    );


    const contactName =
        document.getElementById(
            "contactName"
        );

    if (contactName) {

        contactName.placeholder =
            t.namePlaceholder;

    }


    setText(
        'label[for="contactPhone"]',
        t.phoneNumber
    );


    setText(
        'label[for="contactEmail"]',
        t.emailLabel
    );


    setText(
        'label[for="contactService"]',
        t.serviceLabel
    );


    const serviceSelect =
        document.getElementById(
            "contactService"
        );

    if (serviceSelect) {

        const options =
            serviceSelect.options;


        if (options.length >= 6) {

            options[0].textContent =
                t.chooseService;

            options[1].textContent =
                t.service1;

            options[2].textContent =
                t.service2;

            options[3].textContent =
                t.service3;

            options[4].textContent =
                t.service4;

            options[5].textContent =
                t.other;

        }

    }


    setText(
        'label[for="contactMessage"]',
        t.projectDetails
    );


    const contactMessage =
        document.getElementById(
            "contactMessage"
        );

    if (contactMessage) {

        contactMessage.placeholder =
            t.messagePlaceholder;

    }


    const methodLabel =
        document.querySelector(
            ".contact-methods"
        )?.parentElement
        ?.querySelector(":scope > label");


    if (methodLabel) {

        methodLabel.textContent =
            t.contactMethod;

    }


    const contactMethods =
        document.querySelectorAll(
            ".contact-method span"
        );

    if (contactMethods.length >= 2) {

        contactMethods[0].textContent =
            t.whatsapp;

        contactMethods[1].textContent =
            t.emailMethod;

    }


    const submitButton =
        document.querySelector(
            ".contact-submit"
        );

    if (submitButton) {

        submitButton.innerHTML =
            `
            ${t.sendMessage}
            <i class="fa-solid fa-paper-plane"></i>
            `;

    }


    /* ========================================
       FOOTER
    ======================================== */

    setText(
        ".footer-brand p",
        t.footerDescription
    );


    const footerColumns =
        document.querySelectorAll(
            ".footer-column"
        );


    if (footerColumns.length >= 3) {

        const quickTitle =
            footerColumns[0]
                .querySelector("h4");

        const servicesTitle =
            footerColumns[1]
                .querySelector("h4");

        const contactTitle =
            footerColumns[2]
                .querySelector("h4");


        if (quickTitle) {

            quickTitle.textContent =
                t.quickLinks;

        }


        if (servicesTitle) {

            servicesTitle.textContent =
                t.footerServices;

        }


        if (contactTitle) {

            contactTitle.textContent =
                t.getInTouch;

        }

    }


    /* FOOTER QUICK LINKS */

    const footerQuickLinks =
        document.querySelectorAll(
            ".footer-column:first-of-type ul a"
        );


    if (footerQuickLinks.length >= 6) {

        footerQuickLinks[0].textContent =
            t.home;

        footerQuickLinks[1].textContent =
            t.services;

        footerQuickLinks[2].textContent =
            t.about;

        footerQuickLinks[3].textContent =
            t.projects;

        footerQuickLinks[4].textContent =
            t.whyUs;

        footerQuickLinks[5].textContent =
            t.contact;

    }


    /* FOOTER SERVICES */

    const footerServiceLinks =
        document.querySelectorAll(
            ".footer-top .footer-column:nth-child(3) ul a"
        );


    if (footerServiceLinks.length >= 4) {

        footerServiceLinks[0].textContent =
            t.service1;

        footerServiceLinks[1].textContent =
            t.service2;

        footerServiceLinks[2].textContent =
            t.service3;

        footerServiceLinks[3].textContent =
            t.service4;

    }


    const footerWhatsapp =
        document.querySelector(
            ".footer-whatsapp"
        );

    if (footerWhatsapp) {

        footerWhatsapp.innerHTML =
            `
            <i class="fa-brands fa-whatsapp"></i>
            ${t.chatWhatsapp}
            `;

    }


    setText(
        ".footer-bottom > p:first-child",
        t.copyright
    );


    setText(
        ".footer-made",
        t.technologyCreativity
    );

}



/* ========================================
   LANGUAGE BUTTON
======================================== */

if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        () => {

            if (currentLanguage === "en") {

                currentLanguage = "ar";

            } else {

                currentLanguage = "en";

            }


            updateLanguage();

        }
    );

}



/* ========================================
   INITIALIZE WEBSITE
======================================== */

updateLanguage();