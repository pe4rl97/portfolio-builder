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

export interface SectionsData {
    [key: string]: ComponentData | null;
}

export enum Axis {
  All,
  Vertical,
  Horizontal
}