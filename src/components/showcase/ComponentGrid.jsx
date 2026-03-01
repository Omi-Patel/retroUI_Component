import { motion } from 'framer-motion';
import { Copy, Star } from 'lucide-react';
import { formatComponentName } from '../../lib/utils';
import { useCopyToClipboard } from '../../hooks';

/**
 * Grid view for components
 */
export const ComponentGrid = ({
  components,
  onSelectComponent,
  theme,
}) => {
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {components.map((comp) => {
        const Component = comp.component;
        const Icon = comp.icon;
        
        return (
          <motion.div
            key={comp.name}
            whileHover={{ y: -5 }}
            className={`${comp.colors.bg} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
          >
            <div className="p-6 flex flex-col items-center justify-center min-h-[200px] overflow-x-auto">
              <Component />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                  <div className={`p-1.5 rounded-md bg-gradient-to-r ${comp.colors.gradient} text-white mr-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {formatComponentName(comp.name)}
                </h3>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">4.8</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => onSelectComponent(comp.name)}
                  className={`text-sm font-medium text-${theme.primary.light}-600 dark:text-${theme.primary.light}-400 hover:text-${theme.primary.light}-700 dark:hover:text-${theme.primary.light}-300 transition-colors`}
                >
                  View Details
                </button>

                <button
                  onClick={() => copyToClipboard(comp.code)}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ComponentGrid;

