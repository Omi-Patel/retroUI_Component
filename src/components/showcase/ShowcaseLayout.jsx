import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { fadeIn } from '../../lib/animations';

/**
 * Reusable showcase page layout with hero section
 */
export const ShowcaseLayout = ({ 
  children, 
  theme,
  title,
  description,
  previewComponents = [],
}) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.hero.bg} ${theme.hero.bgDark} z-0 rounded-2xl`}></div>
          <div className={`absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r ${theme.hero.blur} rounded-full blur-3xl`}></div>

          <div className={`relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl ${theme.hero.border}`}>
            <div className="text-center md:text-left max-w-2xl">
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${theme.primary.light}-100 dark:bg-${theme.primary.light}-900/30 text-${theme.primary.light}-700 dark:text-${theme.primary.light}-300 text-xs font-medium mb-4`}>
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.gradient}`}>
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">{title}</span>
                  <span className={`absolute bottom-1 left-0 w-full h-3 bg-${theme.primary.light}-200 dark:bg-${theme.primary.light}-800/50 -z-10 skew-x-3`}></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 bg-gradient-to-r ${theme.primary.gradient} text-white font-bold rounded-md shadow-lg hover:shadow-${theme.primary.light}-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-md border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Documentation
                </motion.button>
              </div>
            </div>

            {previewComponents.length > 0 && (
              <div className="hidden lg:block relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.hero.blur} rounded-xl blur-xl -z-10`}></div>
                <div className={`grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl ${theme.hero.border} shadow-xl`}>
                  {previewComponents.slice(0, 2).map((Preview, index) => (
                    <div key={index} className={`flex justify-center items-center p-4 bg-${index === 0 ? theme.primary.light : 'fuchsia'}-50 dark:bg-${index === 0 ? theme.primary.light : 'fuchsia'}-900/20 rounded-lg`}>
                      <Preview />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {children}
      </div>
    </div>
  );
};

export default ShowcaseLayout;

