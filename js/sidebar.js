export function renderSidebar(navEl, sections, activeId) {
    navEl.innerHTML = sections
        .map((section) => {
            const isActive = section.id === activeId;
            const classes = isActive
                ? "bg-[var(--primary-100)] text-[var(--text-100)]"
                : "text-[var(--text-200)] hover:bg-[var(--bg-300)] hover:text-[var(--text-100)]";
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
