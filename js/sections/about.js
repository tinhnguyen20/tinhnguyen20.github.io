// TODO(marketability): things worth adding later to strengthen this page —
// - Link LinkedIn, and link Frontier once it's public
// - Link the mixture-of-experts tech talk if there's a recording/slides

export default {
    id: "about",
    label: "About",
    render() {
        return `
            <div class="prose">
                <p>
                    Hi, I'm Tinh. I build platforms that other engineers build on top of. For the
                    last few years at Cisco that meant the plumbing that lets teams put LLM agents
                    to work: the workflow editor, the RAG pipelines, and the GPU boxes underneath.
                </p>
                <p>
                    I got into software through MOOCs around 2009, out of plain curiosity, and
                    curiosity is still what keeps me going. The problems I care most about are
                    the ones where users actually feel the difference.
                </p>
                <p>
                    I don't think AI is going to end software engineering. The tools have always
                    changed under us. The people who stay curious and keep building are the ones
                    who stay engineers, and I plan to be one of them.
                </p>
                <p>
                    My path wasn't planned. Unity, then Accenture, then Cisco, with contract work
                    in between: finish the job, then go find the next interesting one. On mentoring,
                    most of it is showing up: regular check-ins, and making sure people know I'm in
                    their corner. One mentee I helped with a tech talk on mixture-of-experts went on
                    to lead development of a network digital twin. That one was all them, but I
                    did enjoy watching it.
                </p>
            </div>
        `;
    },
};
