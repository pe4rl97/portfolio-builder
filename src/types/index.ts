export type SectionType = 'navbar' | 'hero' | 'about' | 'contact' | 'footer';

export interface ComponentData {
  id: string;
  type: SectionType;
  name: string;
  component: string;
}

export interface MultipleComponentsData {
    [key: string]: ComponentData[] | null;
}

export type SectionsData = {
    [key in SectionType]: ComponentData | null;
};

export enum Axis {
  All,
  Vertical,
  Horizontal
}