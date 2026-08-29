// TODO(marketability): things worth adding later to strengthen this page —
// - Link out to GitHub/LinkedIn and any side projects or OSS contributions
// - Add a "Skills" section with tech badges (Python, Go, Django, Kubernetes, AWS, etc.)
// - Link the mixture-of-experts tech talk if there's a recording/slides
// - Add certifications (e.g., CKA/CKAD, AWS) if/when earned
// - Add a downloadable resume (PDF) button
// - Short testimonials/recommendations pulled from LinkedIn

export default {
    id: "about",
    label: "About Me",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>
    </svg>`,
    render() {
        return `
            <h1 class="text-3xl font-bold text-[var(--text-100)] mb-4">About Me</h1>
            <p class="text-[var(--text-200)] leading-relaxed mb-4">
                Hi, I'm Tinh — a versatile software engineer with over 6 years of experience
                building automation platforms, most recently focused on applied LLM systems.
                I've spent the last several years at Cisco designing no-code LLM tooling,
                RAG/Q&A workflows, and an LLM-powered root-cause-analysis agent for Kubernetes
                clusters, alongside the GPU infrastructure that serves it to dozens of teams.
            </p>
            <p class="text-[var(--text-200)] leading-relaxed mb-4">
                Before that, I worked across the stack on Cisco's networking platform —
                building event-driven microservices, a plugin/extension architecture, and
                Kubernetes-based deployment pipelines that let teams compose and ship modular
                network functions like VPN, MPLS, and ACLs.
            </p>
            <p class="text-[var(--text-200)] leading-relaxed">
                I'm based in Livermore, CA, and enjoy mentoring engineers along the way —
                one mentee I guided through a mixture-of-experts tech talk went on to lead
                development of a network digital twin. I hold a B.A. in Computer Science
                from UC Berkeley.
            </p>
        `;
    },
};
