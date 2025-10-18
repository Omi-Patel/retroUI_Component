import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DocsContent({
  title,
  description,
  badge,
  showBackButton = false,
  children,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 sm:p-8 lg:p-12"
    >
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      )}

      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
        {badge && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {/* Main Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </div>
    </motion.div>
  );
}

// Section Component for organizing content
export function DocsSection({ title, description, children, id }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

// Component Preview Box
export function ComponentPreview({
  children,
  title,
  description,
  className = "",
}) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900">
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          {title && (
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      <div
        className={`p-8 flex items-center justify-center min-h-[200px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

// Code Block Component
export function CodeBlock({ code, language = "jsx", title }) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      {title && (
        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
            {title}
          </p>
        </div>
      )}
      <div className="bg-gray-900 dark:bg-black p-6 overflow-x-auto">
        <pre className="text-sm">
          <code className="text-gray-100">{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Info Box Component
export function InfoBox({ type = "info", title, children }) {
  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-900 dark:text-blue-100",
      icon: "💡",
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-900 dark:text-yellow-100",
      icon: "⚠️",
    },
    success: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-900 dark:text-green-100",
      icon: "✅",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-900 dark:text-red-100",
      icon: "❌",
    },
  };

  const style = styles[type];

  return (
    <div className={`my-6 rounded-lg border ${style.border} ${style.bg} p-4`}>
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">{style.icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.text} mb-1`}>{title}</h4>
          )}
          <div className={`text-sm ${style.text}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
