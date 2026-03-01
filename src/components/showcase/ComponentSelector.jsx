import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { formatComponentName } from '../../lib/utils';

/**
 * Left sidebar component selector
 */
export const ComponentSelector = ({
  components,
  activeComponent,
  onSelect,
  theme,
}) => {
  return (
    <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className={`p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r ${theme.hero.bg} ${theme.hero.bgDark}`}>
        <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
          <Layers className={`w-5 h-5 mr-2 text-${theme.primary.light}-500`} />
          Components
        </h2>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {components.map((comp) => {
          const Icon = comp.icon;
          const isActive = activeComponent === comp.name;
          
          return (
            <motion.button
              key={comp.name}
              whileHover={{ x: 5 }}
              onClick={() => onSelect(comp.name)}
              className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                isActive
                  ? `${comp.colors.bg} border-l-4 border-${theme.primary.light}-500`
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${comp.colors.gradient} text-white`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-gray-800 dark:text-gray-200 block">
                  {formatComponentName(comp.name)}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentSelector;

