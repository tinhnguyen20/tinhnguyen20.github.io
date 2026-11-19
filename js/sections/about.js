// TODO(marketability): things worth adding later to strengthen this page —
// - Link LinkedIn, and link Frontier once it's public
// - Link the mixture-of-experts tech talk if there's a recording/slides
// - Add a downloadable resume (PDF) button
// - Add a contact email if you want recruiters to skip LinkedIn

const h2 = "text-xl font-semibold text-[var(--text-100)] mt-10 mb-3";
const p = "text-[var(--text-200)] leading-relaxed mb-4";
const link = "text-[var(--primary-200)] underline underline-offset-2 hover:text-[var(--primary-300)]";

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
            <p class="${p}">
                Hi, I'm Tinh. I build platforms that other engineers build on top of. For the
                last few years at Cisco that meant the plumbing that lets teams put LLM agents
                to work: the workflow editor, the RAG pipelines, and the GPU boxes underneath.
            </p>
            <div class="rounded-lg border border-[var(--accent-200)] bg-[var(--bg-200)] px-5 py-4 mb-4">
                <p class="text-[var(--text-100)] font-medium">I'm looking for my next team.</p>
                <p class="text-[var(--text-200)] text-sm mt-1">
                    Applied LLM, agent infrastructure, or platform engineering. Bay Area or remote.
                    If that's what you're hiring for, I'd like to hear about it:
                    <a class="${link}" href="https://github.com/tinhnguyen20" target="_blank" rel="noopener">github.com/tinhnguyen20</a>.
                </p>
            </div>

            <h2 class="${h2}">The project I still like explaining</h2>
            <p class="${p}">
                That's AgentOS, our in-house fork of CrewAI with a no-code workflow editor built
                on React Flow. We forked because CrewAI's abstractions ran out of room quickly.
                Delegating through a manager LLM was the hard part: with the small context windows
                models had back then, the manager often lost the plot before the crew finished
                the job. RAG support was basic and hard to customize, so we built our own. Models
                have gotten much better since, but I came away with a good sense of where agent
                frameworks bend and where they break.
            </p>
            <p class="${p}">
                Before that I worked on Colligo, an extensible backend with async task execution.
                One team could package a service function (usually Ansible configs), deploy it,
                and expose it for other teams to call without learning how it worked. Looking back,
                both projects solve the same problem: letting people build on each other's work
                without filing a ticket first.
            </p>

            <h2 class="${h2}">What I'm building right now</h2>
            <ul class="list-disc list-outside ml-5 space-y-3 mb-4">
                <li class="${p.replace("mb-4", "")}">
                    <span class="text-[var(--text-100)] font-medium">Frontier</span>: a frontend
                    for my monthly financial analysis workflow. You can screen tickers, look at
                    the efficient frontier, and compare any month with any other.
                </li>
                <li class="${p.replace("mb-4", "")}">
                    <a class="${link} font-medium" href="https://rootedbranches.app" target="_blank" rel="noopener">rootedbranches.app</a>: a family
                    tree that relatives edit together on one canvas, live over WebSockets (Yjs +
                    React Flow). Every change goes into a write-ahead event log before anything
                    else touches it. That log paid for itself the day one of my own test loops
                    deleted 21 relatives from our real family tree while I watched. All 21 are back.
                </li>
            </ul>

            <h2 class="${h2}">How I think about the work</h2>
            <p class="${p}">
                I got into software through MOOCs around 2009, out of plain curiosity, and
                curiosity is still what keeps me going. The problems I care most about are
                the ones where users actually feel the difference.
            </p>
            <p class="${p}">
                I don't think AI is going to end software engineering. The tools have always
                changed under us. The people who stay curious and keep building are the ones
                who stay engineers, and I plan to be one of them.
            </p>
            <p class="${p}">
                My path wasn't planned. Unity, then Accenture, then Cisco, with contract work
                in between: finish the job, then go find the next interesting one. On mentoring,
                most of it is showing up: regular check-ins, and making sure people know I'm in
                their corner. One mentee I helped with a tech talk on mixture-of-experts went on
                to lead development of a network digital twin. That one was all them, but I
                did enjoy watching it.
            </p>

            <h2 class="${h2}">Off the clock</h2>
            <p class="${p}">
                Most weekends involve a torque wrench, a pry bar, or a garden hose. I've done
                30+ HPDE track days since 2021 in two Miatas (Sonoma is my favorite track), and
                I do my own car maintenance, home renovation, and gardening. More on the
                Hobbies tab.
            </p>

            <p class="text-sm text-[var(--text-200)]/60 mt-10">
                Livermore, CA · B.A. Computer Science, UC Berkeley
            </p>
        `;
    },
};
