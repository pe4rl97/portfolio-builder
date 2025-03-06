// src/App.tsx
import { DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
// import DraggableStory from "./components/draggable/DraggableStory";
import { components } from "./data/componentsData";
import { SectionsData, SectionType } from "./types";
import { generateHTML } from "./utils/generator";
import DraggableStory from "./components/draggable-story/DraggableStory";

const App = () => {
  const [sections, setSections] = useState<SectionsData>({
    navbar: null,
    hero: null,
    about: null,
    contact: null,
    footer: null,
  });
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const sectionType = over.id as SectionType;
    // Find the component from our data based on section type and the dragged component's id
    const comp = components[sectionType]?.find((c) => c.id === active.id);

    if (comp && comp.type === sectionType) {
      setSections((prev) => ({ ...prev, [sectionType]: comp }));
    }
  };

  const handleGenerate = () => {
    const html = generateHTML(sections);
    setPreviewHtml(html);
  };

  const handleDownloadHTML = (html: string) => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.html";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DraggableStory
        components={components}
        sections={sections}
        previewHtml={previewHtml}
        handleDragEnd={handleDragEnd}
      />
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Generate HTML
        </button>
      </div>
      {previewHtml && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-4/5 h-4/5">
            <iframe srcDoc={previewHtml} className="w-full h-full" title="Preview" />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setPreviewHtml("")}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Close
              </button>
              <button
                onClick={() => handleDownloadHTML(previewHtml)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Download HTML
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
