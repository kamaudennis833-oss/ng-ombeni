import assembly from "../assets/ngombeni-assembly.jpg";
import science from "../assets/ngombeni-science.jpg";
import sports from "../assets/ngombeni-sports.jpg";
import library from "../assets/ngombeni-library.jpg";

export const featured = { assembly, science, sports, library };

const builtIn = [
  { src: assembly, alt: "Students gathered at a bright morning assembly", cat: "Community", label: "Morning assembly" },
  { src: science, alt: "Students collaborating on a science experiment", cat: "Learning", label: "Practical learning" },
  { src: sports, alt: "Students celebrating together on the volleyball court", cat: "Sports", label: "Sport & teamwork" },
  { src: library, alt: "Students studying together in the library", cat: "Learning", label: "Library study" },
];

// Any image dropped in src/assets/gallery/ is picked up automatically.
const files = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,JPG,PNG}", { eager: true, query: "?url", import: "default" });
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const added = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const name = path.split("/").pop().replace(/\.[^.]+$/, "");
    const [cat, ...rest] = name.split("-");
    const label = cap((rest.length ? rest : [cat]).join(" "));
    return { src, alt: label, cat: cap(rest.length ? cat : "More"), label };
  });

export const photos = [...added, ...builtIn];
