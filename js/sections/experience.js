// TODO(marketability): things worth adding later to strengthen this section —
// - Quantify more of these bullets (e.g., latency/cost reduction %, user counts over time)
// - Link project names to write-ups, demos, or repos where possible
// - Consider a condensed one-line "impact" summary at the top of each role

const jobs = [
    {
        role: "Technical Leader",
        company: "Cisco Systems",
        location: "San Jose, CA",
        dates: "2023 — 2025",
        highlights: [
            "Architected and led development of a no-code LLM platform (AgentOS) used across multiple engineering teams for RCA, log analysis, provisioning, and documentation workflows.",
            "Designed a modular multi-agent orchestration framework using React Flow, integrating RAG pipelines (vector DB) and temporal knowledge graphs to improve contextual reasoning and task execution.",
            "Built scalable LLM orchestration infrastructure with tracing, retry/backoff strategies, and execution guards, improving reliability of multi-agent workflows under constrained GPU resources (A100 cluster).",
            "Deployed GPU-backed LLM infrastructure on a 4-node Cisco UCS cluster (Ollama, NGINX load-balancing, Milvus, Neo4j), supporting 12+ teams daily.",
            "Co-developed an LLM-powered RCA system leveraging eBPF (Tetragon) telemetry and temporal graphs to automate incident investigation with end-to-end lineage tracking.",
            "Mentored engineers, including guiding a tech talk on mixture-of-experts; mentee later led development of a network digital twin.",
        ],
        tags: ["LLM agents", "RAG", "React Flow", "Knowledge graphs", "eBPF / Tetragon", "Ollama", "Milvus", "Neo4j"],
    },
    {
        role: "Senior Software Engineer",
        company: "Cisco Systems",
        location: "San Jose, CA",
        dates: "2021 — 2023",
        highlights: [
            "Built a plugin-extension platform with an event-driven architecture (Django + Celery), enabling cross-product interoperability and accelerating integration of 4 services and 10+ network functions (VPN, MFA, MPLS, Edge Compute, ACLs, routing).",
            "Built a function-chaining framework to compose and deploy modular networking services on Kubernetes, letting customers sequence capabilities with automated routing and policy enforcement for scalable, multi-tenant environments.",
            "Integrated Auth0 for OAuth2/OIDC authentication with JWT-based token management, adding RBAC and custom scopes across teams and personas.",
        ],
        tags: ["Django", "Celery", "Kubernetes", "Auth0", "OAuth2/OIDC"],
    },
    {
        role: "Software Engineer",
        company: "Cisco Systems",
        location: "San Jose, CA",
        dates: "2020 — 2021",
        highlights: [
            "Implemented a React-based network health dashboard with an extension marketplace, supporting UI-driven and API-based service management.",
            "Built a CLI to scaffold and manage extensions, with CI/CD-driven packaging and distribution.",
            "Developed event-driven REST APIs for networking services including VPNaaS, MPLS, and tunneling.",
            "Migrated deployments from Docker Swarm to Kubernetes using Helm and containerized stateful services, reducing downtime when loading new extensions.",
        ],
        tags: ["React", "REST APIs", "Kubernetes", "Helm", "CI/CD"],
    },
    {
        role: "Test Automation Engineer",
        company: "Accenture",
        location: "San Jose, CA",
        dates: "2019 — 2020",
        highlights: [
            "Reduced manual QA effort by 70% by automating 85% of regression tests, implementing resilient retry and backoff mechanisms to improve reliability for asynchronous mobile and speech-processing workflows.",
        ],
        tags: [],
    },
    {
        role: "Software Engineer",
        company: "Unity",
        location: "San Francisco, CA",
        dates: "2018 — 2019",
        highlights: [
            "Developed an internal tool for enterprise licensing, streamlining deal configuration and provisioning workflows through Zuora integrations (Java, Python).",
        ],
        tags: ["Zuora", "Java", "Python"],
    },
];

const tagList = (tags) =>
    tags.length ? `<ul class="tags" aria-label="Technologies">${tags.map((t) => `<li>${t}</li>`).join("")}</ul>` : "";

export default {
    id: "experience",
    label: "Experience",
    render() {
        const rows = jobs
            .map(
                (job) => `
                <li class="row">
                    <p class="row-meta"><time>${job.dates}</time></p>
                    <div class="row-body">
                        <h3 class="row-title">${job.role} <span class="org">· ${job.company}</span></h3>
                        <p class="row-sub">${job.location}</p>
                        <ul>${job.highlights.map((point) => `<li>${point}</li>`).join("")}</ul>
                        ${tagList(job.tags)}
                    </div>
                </li>`
            )
            .join("");

        return `<ol class="rows">${rows}</ol>`;
    },
};
