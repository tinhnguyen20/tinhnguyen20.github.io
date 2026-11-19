export default {
    id: "hobbies",
    label: "Off the clock",
    render() {
        return `
            <div class="prose">
                <p>
                    Most weekends involve a torque wrench, a pry bar, or a garden hose. I do my own
                    car maintenance, home renovation, and gardening.
                </p>
            </div>

            <h3 class="subhead">Cars &amp; HPDE</h3>
            <div class="prose">
                <p>
                    30+ track days since 2021 in two Miatas, both on slicks.
                </p>
            </div>

            <div class="timing">
                <div class="timing-cell timing-cell--wide">
                    <p class="timing-label">The cars</p>
                    <dl class="cars">
                        <div><dt>'99 Miata NB</dt><dd>Full aero, slicks</dd></div>
                        <div><dt>'21 Miata ND</dt><dd>Street-modified, slicks</dd></div>
                    </dl>
                </div>
                <div class="timing-cell">
                    <p class="timing-label">Best laps</p>
                    <table>
                        <caption class="visually-hidden">Best lap times by track</caption>
                        <tbody>
                            <tr><th scope="row">Sonoma <span class="lap-note">both cars</span></th><td class="lap">1:58</td></tr>
                            <tr><th scope="row">Thunderhill West</th><td class="lap">1:28</td></tr>
                            <tr><th scope="row">Laguna Seca</th><td class="lap">1:49</td></tr>
                            <tr><th scope="row">Buttonwillow</th><td class="lap">2:10</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="timing-cell">
                    <p class="timing-label">Favorite tracks, in order</p>
                    <ol class="track-order">
                        <li>Sonoma</li>
                        <li>Thunderhill East/West</li>
                        <li>Laguna Seca</li>
                        <li>Buttonwillow</li>
                    </ol>
                </div>
            </div>
            <p class="timing-caption">
                The two cars were built 22 years apart and run the same lap time at Sonoma, which
                tells you who the limiting factor is.
            </p>

            <dl class="notes">
                <div>
                    <dt>Home renovation</dt>
                    <dd>Mostly self-taught. Measure twice, cut once, and budget for a third trip to the hardware store.</dd>
                </div>
                <div>
                    <dt>Gardening</dt>
                    <dd>The slowest feedback loop in my life. A bad deploy shows up in minutes; a bad watering schedule shows up in three weeks.</dd>
                </div>
            </dl>
        `;
    },
};
