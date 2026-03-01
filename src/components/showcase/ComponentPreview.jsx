import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Copy, Check, ChevronDown, Zap, Eye } from 'lucide-react';
import { formatComponentName } from '../../lib/utils';
import { useCopyToClipboard } from '../../hooks';

/**
 * Component preview panel with code display
 */
export const ComponentPreview = ({
  component,
  theme,
  folder,
}) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [copySuccess, copyToClipboard] = useCopyToClipboard();

  const Component = component.component;
  const Icon = component.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={component.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Component Header */}
        <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${component.colors.bg}`}>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
              <div className={`p-1.5 rounded-md bg-gradient-to-r ${component.colors.gradient} text-white mr-2`}>
                <Icon className="w-5 h-5" />
              </div>
              <span>{formatComponentName(component.name)}</span>
            </h2>

            {/* Tabs */}
            <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('preview')}
                className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  activeTab === 'preview'
                    ? `${component.colors.bg} text-${theme.primary.light}-700 dark:text-${theme.primary.light}-300`
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  activeTab === 'code'
                    ? `${component.colors.bg} text-${theme.primary.light}-700 dark:text-${theme.primary.light}-300`
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Code</span>
              </button>
            </div>
          </div>
        </div>

        {/* Component Content */}
        <div className="p-6">
          {activeTab === 'preview' ? (
            <div className="flex flex-col">
              {/* Interactive Preview */}
              <div className={`flex flex-col items-center justify-center p-10 ${component.colors.bg} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Component />
                </motion.div>
              </div>

              {/* Component Info */}
              <div className={`bg-gradient-to-r ${theme.hero.bg} ${theme.hero.bgDark} rounded-lg border border-${theme.primary.light}-200 dark:border-${theme.primary.light}-800/30 overflow-hidden`}>
                <button
                  onClick={() => setExpandedInfo(!expandedInfo)}
                  className="w-full p-4 flex justify-between items-center text-left"
                >
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                    <Zap className={`w-4 h-4 text-${theme.primary.light}-500 mr-2`} />
                    Component Details & Usage Tips
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedInfo ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedInfo && (
                  <div className={`p-4 pt-0 border-t border-${theme.primary.light}-200 dark:border-${theme.primary.light}-800/30`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                          Features
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                          <li>Retro-inspired design with pixel-perfect details</li>
                          <li>Interactive hover and active states</li>
                          <li>Fully responsive and accessible</li>
                          <li>Customizable colors and sizes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                          Customization
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          This component can be easily customized by modifying the Tailwind classes. 
                          Try changing colors, sizes, or adding additional effects to match your project's design.
                        </p>
                      </div>
                    </div>

                    <div className={`mt-4 pt-4 border-t border-${theme.primary.light}-200/50 dark:border-${theme.primary.light}-800/20`}>
                      <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Installation
                      </h4>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveTab('code')}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium flex items-center gap-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Code className="w-4 h-4" />
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-10 bg-gray-800 dark:bg-gray-700 rounded-t-md flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400 ml-4">
                  components/{folder}/{component.name}.jsx
                </span>
              </div>
              <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {component.code}
                </SyntaxHighlighter>
              </div>
              <button
                onClick={() => copyToClipboard(component.code)}
                className={`absolute top-14 right-4 px-3 py-2 bg-gradient-to-r ${theme.primary.gradient} hover:opacity-90 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium`}
              >
                {copySuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ComponentPreview;

