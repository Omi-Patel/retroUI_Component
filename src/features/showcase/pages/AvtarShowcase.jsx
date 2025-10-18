"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Code, Copy, Check, Eye, Sparkles, Info, User } from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import avatar components
import {
  BasicAvatar,
  BorderAvatar,
  ShadowAvatar,
  BadgeAvatar,
  FrameAvatar,
} from "@/components/ui/avatars/Avtar";

const avatarComponents = {
  BasicAvatar: {
    component: BasicAvatar,
    title: "Basic Avatar",
    description: "Simple circular avatar with image",
    code: `import React from "react";

const BasicAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/237/150"
      alt="avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

export default BasicAvatar;`,
  },
  BorderAvatar: {
    component: BorderAvatar,
    title: "Border Avatar",
    description: "Avatar with colored border ring",
    code: `import React from "react";

const BorderAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-yellow-500 bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1005/150"
      alt="avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

export default BorderAvatar;`,
  },
  ShadowAvatar: {
    component: ShadowAvatar,
    title: "Shadow Avatar",
    description: "Avatar with retro shadow effect",
    code: `import React from "react";

const ShadowAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 shadow-[4px_4px_0px_0px_black] overflow-hidden">
    <img
      src="https://picsum.photos/id/1011/150"
      alt="avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

export default ShadowAvatar;`,
  },
  BadgeAvatar: {
    component: BadgeAvatar,
    title: "Badge Avatar",
    description: "Avatar with status badge indicator",
    code: `import React from "react";

const BadgeAvatar = () => (
  <div className="relative w-20 h-20">
    <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
      <img
        src="https://picsum.photos/id/1027/150"
        alt="avatar"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
  </div>
);

export default BadgeAvatar;`,
  },
  FrameAvatar: {
    component: FrameAvatar,
    title: "Frame Avatar",
    description: "Avatar with decorative frame border",
    code: `import React from "react";

const FrameAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_black] bg-purple-200 overflow-hidden">
    <img
      src="https://picsum.photos/id/1084/150"
      alt="avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

export default FrameAvatar;`,
  },
};

const AvtarShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicAvatar");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const activeData = avatarComponents[activeComponent];

  return (
    <DocsContent
      title="Avatar Components"
      description="User profile picture components with various styles and effects. Perfect for user interfaces, profile sections, and social features."
      badge="UI Components"
    >
      <InfoBox type="info" title="Usage">
        <p className="mb-2">
          Avatar components display user profile images. Replace the placeholder
          images with actual user photos from your backend.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(avatarComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {avatarComponents[key].title.replace(" Avatar", "")}
            </button>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                  activeTab === "preview"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </div>
                {activeTab === "preview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                  activeTab === "code"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </div>
                {activeTab === "code" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            </div>

            {activeTab === "preview" ? (
              <ComponentPreview>
                <activeData.component />
              </ComponentPreview>
            ) : (
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        {activeComponent}.jsx
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(activeData.code)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md transition-colors"
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language="jsx"
                    style={atomDark}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, borderRadius: 0 }}
                  >
                    {activeData.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      <DocsSection title="Usage" id="usage">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Basic Implementation
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Use avatars to display user profile pictures throughout your
              application:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';

function UserProfile({ user }) {
  return (
    <div className="flex items-center gap-3">
      <${activeComponent} src={user.avatar} alt={user.name} />
      <span>{user.name}</span>
    </div>
  );
}`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Customization
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Adjust size by changing width and height classes</li>
              <li>Modify border colors to match your brand</li>
              <li>Add fallback initials for users without images</li>
              <li>Implement lazy loading for better performance</li>
            </ul>
          </div>

          <InfoBox type="success" title="Best Practices">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Always provide meaningful alt text for accessibility</li>
              <li>Use consistent avatar sizes across your interface</li>
              <li>Optimize images before uploading (recommended 200x200px)</li>
              <li>Provide fallback UI for missing or broken images</li>
            </ul>
          </InfoBox>
        </div>
      </DocsSection>

      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Retro Styling",
              description: "Bold borders and shadow effects for unique look",
            },
            {
              icon: Code,
              title: "Lightweight",
              description: "Pure CSS with no JavaScript dependencies",
            },
            {
              icon: Info,
              title: "Flexible Sizes",
              description: "Easy to resize with Tailwind utility classes",
            },
            {
              icon: Eye,
              title: "Responsive",
              description: "Scales perfectly on all screen sizes",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsContent>
  );
};

export default AvtarShowcase;
