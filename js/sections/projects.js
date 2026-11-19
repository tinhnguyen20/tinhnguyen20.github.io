import { icons } from "../icons.js";

const groups = [
    {
        label: "At Cisco",
        projects: [
            {
                name: "AgentOS",
                body: [
                    "Our in-house fork of CrewAI with a no-code workflow editor built on React Flow. We forked because CrewAI's abstractions ran out of room quickly. Delegating through a manager LLM was the hard part: with the small context windows models had back then, the manager often lost the plot before the crew finished the job. RAG support was basic and hard to customize, so we built our own.",
                    "Under the hood it grew into a modular multi-agent orchestration framework: RAG pipelines and temporal knowledge graphs for context, plus tracing, retry/backoff, and execution guards to keep multi-agent workflows reliable on a constrained A100 cluster. Teams used it for RCA, log analysis, provisioning, and documentation workflows.",
                    "Models have gotten much better since, but I came away with a good sense of where agent frameworks bend and where they break.",
                ],
                tags: ["CrewAI", "React Flow", "RAG", "Knowledge graphs", "LLM agents"],
            },
            {
                name: "Colligo",
                body: [
                    "A plugin-extension platform with an event-driven backend (Django + Celery) for cross-product interoperability. One team could package a service function (usually Ansible configs), deploy it, and expose it for other teams to call without learning how it worked. It sped up the integration of 4 services and 10+ network functions: VPN, MFA, MPLS, edge compute, ACLs, and routing.",
                    "Looking back, AgentOS and Colligo solve the same problem: letting people build on each other's work without filing a ticket first.",
                ],
                tags: ["Django", "Celery", "Event-driven", "Ansible"],
            },
        ],
    },
    {
        label: "On my own time",
        projects: [
            {
                name: "rootedbranches.app",
                url: "https://rootedbranches.app",
                status: "Live",
                body: [
                    "A family tree that relatives edit together on one canvas, live over WebSockets. Every change goes into a write-ahead event log before anything else touches it.",
                    "That log paid for itself the day one of my own test loops deleted 21 relatives from our real family tree while I watched. All 21 are back.",
                ],
                tags: ["Yjs", "React Flow", "WebSockets"],
            },
            {
                name: "Frontier",
                status: "In progress",
                body: [
                    "A frontend for my monthly financial analysis workflow. You can screen tickers, look at the efficient frontier, and compare any month with any other.",
                ],
                tags: [],
            },
        ],
    },
];

const tagList = (tags) =>
    tags.length ? `<ul class="tags" aria-label="Technologies">${tags.map((t) => `<li>${t}</li>`).join("")}</ul>` : "";

const title = (p) =>
    p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.name}${icons.arrowUpRight("arrow")}<span class="visually-hidden"> (opens in a new tab)</span></a>`
        : p.name;

export default {
    id: "projects",
    label: "Projects",
    render() {
        return groups
            .map(
                (group) => `
                <h3 class="group-label">${group.label}</h3>
                <ul class="rows">
                    ${group.projects
                        .map(
                            (p) => `
                        <li class="row row--flush">
                            <div class="row-body">
                                <h4 class="row-title">${title(p)}${p.status ? ` <span class="status">· ${p.status}</span>` : ""}</h4>
                                ${p.body.map((para) => `<p>${para}</p>`).join("")}
                                ${tagList(p.tags)}
                            </div>
                        </li>`
                        )
                        .join("")}
                </ul>`
            )
            .join("");
    },
};
