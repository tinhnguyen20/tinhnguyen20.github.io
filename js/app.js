import { sections, defaultSectionId, getSection } from "./sections/index.js";
import { renderSidebar } from "./sidebar.js";

const navEl = document.getElementById("sidebar-nav");
const mainEl = document.getElementById("main-content");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

function currentSectionId() {
    return window.location.hash.replace("#", "") || defaultSectionId;
}

function render() {
    const activeId = currentSectionId();
    const section = getSection(activeId);
    mainEl.innerHTML = section.render();
    renderSidebar(navEl, sections, section.id);
}

window.addEventListener("hashchange", render);
render();
