import { useState } from 'react';
import { Layers } from 'lucide-react';
import { useScrollToTop } from '../../hooks';
import { ShowcaseLayout } from './ShowcaseLayout';
import { ComponentSelector } from './ComponentSelector';
import { ComponentPreview } from './ComponentPreview';
import { ComponentGrid } from './ComponentGrid';

/**
 * Reusable component showcase page
 * Eliminates code duplication across all showcase pages
 */
export const ComponentShowcasePage = ({
  components,
  theme,
  title,
  description,
  folder,
}) => {
  const [activeComponent, setActiveComponent] = useState(components[0]?.name || '');
  const [isGridView, setIsGridView] = useState(false);

  useScrollToTop();

  const activeComp = components.find(c => c.name === activeComponent);
  const previewComponents = components.slice(0, 2).map(c => c.component);

  return (
    <ShowcaseLayout
      theme={theme}
      title={title}
      description={description}
      previewComponents={previewComponents}
    >
      {/* View Toggle */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <Layers className={`w-5 h-5 mr-2 text-${theme.primary.light}-500`} />
          {title} Collection
        </h2>
      </div>

      {isGridView ? (
        <ComponentGrid
          components={components}
          onSelectComponent={(name) => {
            setActiveComponent(name);
            setIsGridView(false);
          }}
          theme={theme}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <ComponentSelector
            components={components}
            activeComponent={activeComponent}
            onSelect={setActiveComponent}
            theme={theme}
          />

          <div className="lg:col-span-9">
            {activeComp && (
              <ComponentPreview
                component={activeComp}
                theme={theme}
                folder={folder}
              />
            )}
          </div>
        </div>
      )}
    </ShowcaseLayout>
  );
};

export default ComponentShowcasePage;

