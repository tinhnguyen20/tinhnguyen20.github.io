import about from "./about.js";
import experience from "./experience.js";
import projects from "./projects.js";
import hobbies from "./hobbies.js";

// Add new sections here; the nav and the page pick them up automatically.
// Each section exports { id, label, title?, render() }.
export const sections = [about, experience, projects, hobbies];
