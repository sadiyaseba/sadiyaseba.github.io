import { animate, stagger, inView } from "motion";

// ========== Initialize Lucide Icons ==========
if (window.lucide) {
    window.lucide.createIcons();
}

// ========== Hero Animations (Immediate) ==========
const heroImage = document.querySelector(".hero__image");
const heroContentChildren = document.querySelectorAll(".hero__container .hero__content > *");

if (heroImage) {
    animate(
        heroImage,
        { opacity: [0, 1], scale: [0.8, 1], y: [50, 0] },
        { duration: 1, easing: [0.17, 0.55, 0.55, 1] }
    );
}

if (heroContentChildren.length > 0) {
    animate(
        heroContentChildren,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, delay: stagger(0.15, { start: 0.3 }), easing: "ease-out" }
    );
}

// ========== Universal Section Reveal ==========
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
    inView(section, ({ target }) => {
        animate(
            target,
            { opacity: [0, 1], y: [40, 0] },
            { duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
        );
        return () => animate(target, { opacity: 0, y: 40 }, { duration: 0.3 }); // Optional: out animation
    }, { margin: "0px 0px -100px 0px" });
});

// ========== About Section Transition ==========
inView("#about .about__container", ({ target }) => {
    const text = target.querySelector(".about__content");
    const catchyHeading = target.querySelector(".hobbies__title-catchy");
    const hobbies = target.querySelectorAll(".hobby-card");

    animate(
        text,
        { opacity: [0, 1], x: [-30, 0] },
        { duration: 0.8, easing: "ease-out" }
    );

    if (catchyHeading) {
        animate(
            catchyHeading,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: 0.2, easing: "ease-out" }
        );
    }

    animate(
        hobbies,
        { opacity: [0, 1], x: [30, 0] },
        { duration: 0.6, delay: stagger(0.15, { start: 0.4 }), easing: "ease-out" }
    );
});

// ========== Education Cards - Stagger Up ==========
const educationCards = document.querySelectorAll(".education-card");
inView(".education-timeline", () => {
    animate(
        educationCards,
        { opacity: [0, 1], y: [50, 0] },
        { duration: 0.7, delay: stagger(0.2), easing: "ease-out" }
    );
});

// ========== Skill Groups - Stagger Scale ==========
const skillGroups = document.querySelectorAll(".skill-group");
inView(".skills-grid-modern", () => {
    animate(
        skillGroups,
        { opacity: [0, 1], scale: [0.9, 1], y: [30, 0] },
        { duration: 0.6, delay: stagger(0.12), easing: "ease-out" }
    );
});

// ========== Project Cards - Stagger & Fade ==========
const projectCards = document.querySelectorAll(".project-card");
inView(".projects-grid", () => {
    animate(
        projectCards,
        { opacity: [0, 1], y: [60, 0], scale: [0.98, 1] },
        { duration: 0.8, delay: stagger(0.2), easing: [0.17, 0.55, 0.55, 1] }
    );
});

// ========== Research Section Reveal ==========
inView("#research .research__container", ({ target }) => {
    const card = target.querySelector(".research-card");
    animate(
        card,
        { opacity: [0, 1], scale: [0.9, 1], y: [50, 0] },
        { duration: 0.8, delay: 0.2, easing: [0.17, 0.55, 0.55, 1] }
    );
});

// ========== Contact Section Reveal ==========
inView(".contact", ({ target }) => {
    const children = target.querySelectorAll("h2, p, .btn, .contact__socials");
    animate(
        children,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: stagger(0.15), easing: "ease-out" }
    );
});

// ========== Header Scroll Effect ==========
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = "rgba(15, 10, 10, 0.95)";
            header.style.backdropFilter = "blur(20px)";
            header.style.padding = "10px 48px";
            header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.background = "rgba(15, 10, 10, 0.85)";
            header.style.backdropFilter = "blur(16px)";
            header.style.padding = "0 48px";
            header.style.boxShadow = "none";
        }
    }
});

// ========== Smooth hover micro-interactions ==========
const interactiveElements = document.querySelectorAll(".btn, .social-link, .skill-pill, .project-card");
interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => animate(el, { scale: 1.03 }, { duration: 0.2 }));
    el.addEventListener("mouseleave", () => animate(el, { scale: 1 }, { duration: 0.2 }));
});
