import { sections } from "./sections/index.js";
import { site } from "./site.js";
import { icons } from "./icons.js";

const tocEl = document.getElementById("toc");
const contentEl = document.getElementById("content");
const actionsEl = document.getElementById("intro-actions");
const socialsEl = document.getElementById("socials");

// ---- Contact links, shared by the intro column and the closing section ----

function contactActions() {
    const actions = [];
    if (site.email) {
        actions.push(
            `<a class="btn btn-primary" href="mailto:${site.email}">${icons.mail()}Email me</a>`
        );
    }
    // Resume download disabled for now (see js/site.js).
    // actions.push(
    //     `<a class="btn ${site.email ? "btn-quiet" : "btn-primary"}" href="${site.resumeUrl}" download="Truong-Tinh-Nguyen-Resume-2026.pdf">${icons.download()}Resume</a>`
    // );
    return actions.join("");
}

function socialLinks() {
    const links = [
        `<li><a href="${site.github}" target="_blank" rel="noopener">${icons.github()}github.com/tinhnguyen20</a></li>`,
    ];
    if (site.email) {
        links.push(`<li><a href="mailto:${site.email}">${icons.mail()}${site.email}</a></li>`);
    }
    return links.join("");
}

// ---- Page ----

const navItems = [...sections, { id: "contact", label: "Contact" }];

tocEl.innerHTML = navItems
    .map(
        (item) => `
        <li>
            <a href="#${item.id}" data-target="${item.id}">
                <span class="toc-line" aria-hidden="true"></span>${item.label}
            </a>
        </li>`
    )
    .join("");

contentEl.innerHTML = `
    ${sections
        .map(
            (section) => `
        <section class="section" id="${section.id}" aria-labelledby="${section.id}-title">
            <h2 class="section-title" id="${section.id}-title">${section.title ?? section.label}</h2>
            ${section.render()}
        </section>`
        )
        .join("")}

    <section class="section contact" id="contact" aria-labelledby="contact-title">
        <h2 class="contact-title" id="contact-title">I'm looking for my next team.</h2>
        <p>
            Applied LLM, agent infrastructure, or platform engineering. Bay Area or remote.
            If that's what you're hiring for, I'd like to hear about it.
        </p>
        <div class="actions${site.email ? "" : " actions--mobile-only"}">${contactActions()}</div>

        <footer class="site-footer">
            <p>${site.location} · ${site.education}</p>
            <p>&copy; ${new Date().getFullYear()} ${site.name}</p>
        </footer>
    </section>
`;

actionsEl.innerHTML = contactActions();
socialsEl.innerHTML = socialLinks();

// ---- Scroll-spy: highlight the nav item for the section in view ----

const navLinks = new Map(
    [...tocEl.querySelectorAll("a")].map((a) => [a.dataset.target, a])
);

function setActive(id) {
    navLinks.forEach((link, target) => {
        if (target === id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
    });
}

const sectionEls = navItems.map((item) => document.getElementById(item.id));

function updateActive() {
    const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
        setActive(sectionEls[sectionEls.length - 1].id);
        return;
    }
    // The active section is the last one whose top has passed 35% of the viewport.
    const line = window.innerHeight * 0.35;
    let active = sectionEls[0].id;
    for (const el of sectionEls) {
        if (el.getBoundingClientRect().top <= line) active = el.id;
    }
    setActive(active);
}

let ticking = false;
window.addEventListener(
    "scroll",
    () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateActive();
            ticking = false;
        });
    },
    { passive: true }
);
window.addEventListener("resize", updateActive);

// Honor deep links (#experience etc.) now that the sections exist.
if (window.location.hash) {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
}
updateActive();
