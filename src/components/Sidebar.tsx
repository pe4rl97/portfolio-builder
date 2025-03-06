import { MultipleComponentsData } from "../types";
import { Draggable } from "./Draggable";

interface SidebarProps {
  components: MultipleComponentsData;
}

export const Sidebar = ({ components }: SidebarProps) => {
  return (
    <aside className="grow-0 shrink-0 basis-full lg:basis-72 relative z-[10] 
      lg:sticky lg:top-0 lg:h-screen hidden lg:flex flex-col gap-4 bg-white shadow-lg"
    >
      <div className="flex flex-grow flex-col p-4 overflow-y-auto overflow-x-hidden">
        {Object.entries(components).map(([sectionType, components]) => (
          <div key={sectionType} className="mb-8">
            <h3 className="text-lg font-semibold mb-4 capitalize">
              {sectionType}
            </h3>
            {components?.map((component) => (
              <Draggable key={component.id} id={component.id}>
                <div className="mb-3 p-3 border rounded-lg cursor-move bg-gray-200 hover:bg-gray-400">
                  {component.name}
                </div>
              </Draggable>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
