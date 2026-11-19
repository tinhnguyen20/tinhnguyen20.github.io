const hobbies = [
    {
        name: "Cars & HPDE",
        note: "30+ track days since 2021 in two Miatas: a '99 NB with full aero and a '21 ND, street-modified, both on slicks. I do my own maintenance. Favorite tracks, in order: Sonoma, Thunderhill East/West, Laguna Seca, Buttonwillow. Best laps: 1:28s at Thunderhill West, and 1:58s at Sonoma in both cars. They were built 22 years apart and run the same lap time, which tells you who the limiting factor is.",
    },
    {
        name: "Home renovation",
        note: "Mostly self-taught. Measure twice, cut once, and budget for a third trip to the hardware store.",
    },
    {
        name: "Gardening",
        note: "The slowest feedback loop in my life. A bad deploy shows up in minutes; a bad watering schedule shows up in three weeks.",
    },
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
