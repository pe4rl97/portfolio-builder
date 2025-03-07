import { createContext, useContext, useState, ReactNode } from "react";
import { ComponentData, SectionsData, SectionType } from "../types";
import { components } from "../data/componentsData";
import { generateHTML } from "../utils/generator";
import { DragEndEvent } from "@dnd-kit/core";

// Define the context type
interface SectionsContextType {
  sections: SectionsData;
  setSections: React.Dispatch<React.SetStateAction<SectionsData>>;
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  previewHtml: string;
  setPreviewHtml: React.Dispatch<React.SetStateAction<string>>;
  handleComponentUpdate: (id: SectionType, newComponent: ComponentData) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleGenerate: () => void;
}

const SectionsContext = createContext<SectionsContextType | undefined>(
  undefined
);

export const SectionsProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionsData>({
    navbar: null,
    hero: null,
    about: null,
    contact: null,
    footer: null,
  });

  const [previewHtml, setPreviewHtml] = useState<string>("");
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleComponentUpdate = (
    id: SectionType,
    newComponent: ComponentData
  ) => {
    setSections((prev: SectionsData) => ({
      ...prev,
      [id]: newComponent,
    }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const sectionType = over.id as SectionType;
    const comp = components[sectionType]?.find((c) => c.id === active.id);

    if (comp && comp.type === sectionType) {
      setSections((prev) => ({ ...prev, [sectionType]: comp }));
    }
  };

  const handleGenerate = () => {
    const html = generateHTML(sections);
    setPreviewHtml(html);
    setIsPreview(true);
  };

  return (
    <SectionsContext.Provider
      value={{
        sections,
        setSections,
        isPreview,
        setIsPreview,
        previewHtml,
        setPreviewHtml,
        handleComponentUpdate,
        handleDragEnd,
        handleGenerate,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

// Custom Hook
export const useSectionsContext = () => {
  const context = useContext(SectionsContext);
  if (!context) {
    throw new Error(
      "useSectionsContext must be used within a SectionsProvider"
    );
  }
  return context;
};
