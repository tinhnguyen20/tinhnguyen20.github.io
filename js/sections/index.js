import about from "./about.js";
import experience from "./experience.js";
import hobbies from "./hobbies.js";

// Add new sections here — sidebar and routing pick them up automatically.
export const sections = [about, experience, hobbies];

export const defaultSectionId = sections[0].id;

export function getSection(id) {
    return sections.find((section) => section.id === id) ?? sections.find((section) => section.id === defaultSectionId);
}
