// TODO(marketability): things worth adding later to strengthen this section —
// - Quantify more of these bullets (e.g., latency/cost reduction %, user counts over time)
// - Link project names to write-ups, demos, or repos where possible
// - Add a "Skills" badge row per job (languages/tools used) for quick scanning
// - Consider a condensed one-line "impact" summary at the top of each role

const jobs = [
    {
        role: "Technical Leader",
        company: "Cisco Systems — San Jose, CA",
        dates: "2023 — 2025",
        highlights: [
            "Developed a no-code LLM platform adopted by enterprise networking teams, powering 10+ RAG/Q&A workflows for drafting, editing, and RCA automation.",
            "Built an LLM-powered RCA agent for Kubernetes clusters using Tetragon, integrating PID lineage tools and temporal knowledge graphs to automate root cause investigation.",
            "Deployed GPU-backed LLM infrastructure on a 4-node Cisco UCS cluster (Ollama, NGINX load-balancing, Milvus, Neo4j), supporting 12+ teams daily.",
            "Mentored engineers, including guiding a tech talk on mixture-of-experts; mentee later led development of a network digital twin.",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "Cisco Systems — San Jose, CA",
        dates: "2021 — 2023",
        highlights: [
            "Built a plugin-extension platform with an event-driven architecture (Django + Celery), enabling cross-product interoperability and accelerating integration of 4 services and 10+ network functions (VPN, MFA, MPLS, Edge Compute, ACLs, routing).",
            "Built a function-chaining framework to compose and deploy modular networking services on Kubernetes, letting customers sequence capabilities with automated routing and policy enforcement for scalable, multi-tenant environments.",
            "Integrated Auth0 for OAuth2/OIDC authentication with JWT-based token management, adding RBAC and custom scopes across teams and personas.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Cisco Systems — San Jose, CA",
        dates: "2020 — 2021",
        highlights: [
            "Implemented a React-based network health dashboard with an extension marketplace, supporting UI-driven and API-based service management.",
            "Built a CLI to scaffold and manage extensions, with CI/CD-driven packaging and distribution.",
            "Developed event-driven REST APIs for networking services including VPNaaS, MPLS, and tunneling.",
            "Migrated deployments from Docker Swarm to Kubernetes using Helm and containerized stateful services, reducing downtime when loading new extensions.",
        ],
    },
    {
        role: "Test Automation Engineer",
        company: "Accenture — San Jose, CA",
        dates: "2019 — 2020",
        highlights: [
            "Developed a service to automate Google Translate regression tests across 50+ languages, previously done manually, reducing time required by 70% with an 85% success rate.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Unity — San Francisco, CA",
        dates: "2018 — 2019",
        highlights: [
            "Developed a sales dashboard helping representatives draft and provision custom license offerings for large enterprise customers using Zuora, Java, and Python.",
        ],
    },
];

export default {
    id: "experience",
    label: "Work Experience",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
        <rect x="3" y="7" width="18" height="13" rx="2"/>
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>`,
    render() {
        const items = jobs
            .map(
                (job) => `
                <li class="border-l-2 border-[var(--primary-100)] pl-4 pb-8 last:pb-0">
                    <p class="text-sm text-[var(--text-200)]/60">${job.dates}</p>
                    <p class="text-lg font-semibold text-[var(--text-100)]">${job.role}</p>
                    <p class="text-[var(--accent-100)] mb-2">${job.company}</p>
                    <ul class="list-disc list-outside ml-4 space-y-1">
                        ${job.highlights.map((point) => `<li class="text-[var(--text-200)]">${point}</li>`).join("")}
                    </ul>
                </li>
            `
            )
            .join("");

        return `
            <h1 class="text-3xl font-bold text-[var(--text-100)] mb-6">Work Experience</h1>
            <ul>${items}</ul>
        `;
    },
};
