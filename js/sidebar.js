export function renderSidebar(navEl, sections, activeId) {
    navEl.innerHTML = sections
        .map((section) => {
            const isActive = section.id === activeId;
            const classes = isActive
                ? "bg-slate-800 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white";
            return `
                <a href="#${section.id}"
                   class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${classes}">
                    ${section.icon}
                    ${section.label}
                </a>
            `;
        })
        .join("");
}
