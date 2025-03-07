import { ComponentData, SectionsData } from "../types";

export const generateHTML = (sections: SectionsData) => {
  const sectionsHTML = Object.values(sections)
    .filter(Boolean)
    .map((comp: unknown) => {
      if (comp) {
        const component = comp as ComponentData;
        return component.component;
      }
      return '';
    })
    .join('');

  // Create a DOM parser to process the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(sectionsHTML, 'text/html');

  // Remove specified attributes from all elements
  doc.querySelectorAll('[contenteditable], [style], [disabled], [tabindex]').forEach((el) => {
    el.removeAttribute('contenteditable');
    el.removeAttribute('style');
    el.removeAttribute('disabled');
    el.removeAttribute('tabindex');
  });

  const cleanedHTML = doc.body.innerHTML;

  return `<!DOCTYPE html>
<html lang="en" class="antialiased scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${cleanedHTML}
</body>
</html>`;
};
