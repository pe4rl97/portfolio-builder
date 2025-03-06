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

  return `<!DOCTYPE html>
<html lang="en" class="antialiased scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${sectionsHTML}
</body>
</html>`;
};