const hobbies = [
    { name: "Hobby One", note: "A short note about it." },
    { name: "Hobby Two", note: "A short note about it." },
    { name: "Hobby Three", note: "A short note about it." },
];

export default {
    id: "hobbies",
    label: "Hobbies",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
        <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5 9 5 11 7 12 8.5 13 7 15 5 17.5 5 21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21Z"/>
    </svg>`,
    render() {
        const cards = hobbies
            .map(
                (h) => `
                <div class="rounded-lg border border-[var(--bg-300)] bg-[var(--bg-200)] p-5">
                    <p class="font-semibold text-[var(--text-100)]">${h.name}</p>
                    <p class="text-[var(--text-200)] text-sm mt-1">${h.note}</p>
                </div>
            `
            )
            .join("");

        return `
            <h1 class="text-3xl font-bold text-[var(--text-100)] mb-6">Hobbies</h1>
            <div class="grid sm:grid-cols-2 gap-4">${cards}</div>
        `;
    },
};
