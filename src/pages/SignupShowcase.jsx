"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  ChevronDown,
  Zap,
  Layers,
  Grid,
  ArrowRight,
  Star,
  Eye,
  Sparkles,
  UserPlus,
  Mail,
  Key,
  UserCircle,
} from "lucide-react";

// Import signup components
import SignupBasic from "../components/Signup/SignupBasic";
import SignupSocial from "../components/Signup/SignupSocial";
import SignupMultiStep from "../components/Signup/SignupMultiStep";
import SignupSplit from "../components/Signup/SignupSplit";
import SignupMinimal from "../components/Signup/SignupMinimal";

const signupComponents = {
  SignupBasic: `
import React from "react";
import { UserPlus, Mail, Lock } from 'lucide-react';

const SignupBasic = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">Create Account</h2>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-mono font-medium text-gray-700">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserPlus className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
              placeholder="John Doe"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-mono font-medium text-gray-700">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all"
          >
            Sign Up
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <a href="#" className="ml-1 font-medium text-purple-600 hover:underline">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignupBasic;
  `,
  SignupSocial: `
import React from "react";
import { Mail, Lock, Github, Twitter } from 'lucide-react';

const SignupSocial = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-teal-50 to-cyan-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">Join Our Community</h2>
      
      <div className="space-y-3 mb-6">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-mono border-2 border-black shadow-[4px_4px_0px_0px_teal-500] hover:shadow-[6px_6px_0px_0px_teal-500] hover:translate-y-[-2px] transition-all">
          <Github className="h-5 w-5" />
          <span>Sign up with GitHub</span>
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-400 text-white font-mono border-2 border-black shadow-[4px_4px_0px_0px_teal-500] hover:shadow-[6px_6px_0px_0px_teal-500] hover:translate-y-[-2px] transition-all">
          <Twitter className="h-5 w-5" />
          <span>Sign up with Twitter</span>
        </button>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-black"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gradient-to-br from-teal-50 to-cyan-100 text-gray-800 font-mono">
            Or continue with
          </span>
        </div>
      </div>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_teal-500] focus:shadow-[6px_6px_0px_0px_teal-500] transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-mono font-medium text-gray-700">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_teal-500] focus:shadow-[6px_6px_0px_0px_teal-500] transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all"
          >
            Create Account
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">By signing up, you agree to our</span>
        <a href="#" className="ml-1 font-medium text-teal-600 hover:underline">
          Terms & Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default SignupSocial;
  `,
  SignupMultiStep: `
import React, { useState } from "react";
import { UserPlus, Mail, Lock, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const SignupMultiStep = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  
  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };
  
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-amber-50 to-orange-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-mono font-bold text-black">Create Account</h2>
        <div className="flex items-center gap-1">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={\`w-8 h-2 rounded-full \${
                i + 1 === step
                  ? "bg-orange-500"
                  : i + 1 < step
                  ? "bg-green-500"
                  : "bg-gray-300"
              }\`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="min-h-[280px]">
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-mono font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserPlus className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_orange-500] focus:shadow-[6px_6px_0px_0px_orange-500] transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_orange-500] focus:shadow-[6px_6px_0px_0px_orange-500] transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-mono font-medium text-gray-700">Create Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_orange-500] focus:shadow-[6px_6px_0px_0px_orange-500] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm font-mono font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="confirm-password"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_orange-500] focus:shadow-[6px_6px_0px_0px_orange-500] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <div className="p-4 border-2 border-black bg-white rounded-md">
              <h3 className="font-mono font-bold mb-2">Almost there!</h3>
              <p className="text-sm text-gray-600 mb-4">Please review your information and agree to our terms.</p>
              
              <div className="flex items-start mb-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-2 border-black"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-orange-600 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-2 border-black"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                  Subscribe to our newsletter for updates and offers
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-white text-gray-800 font-mono border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <div></div>
        )}
        
        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-orange-500 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all flex items-center gap-1"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all flex items-center gap-1"
          >
            Complete
            <Check className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SignupMultiStep;
  `,
  SignupSplit: `
import React from "react";
import { Mail, Lock, ArrowRight } from 'lucide-react';

const SignupSplit = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out overflow-hidden">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-mono font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-white/90 mb-6">Create an account and get access to all features for 30 days. No credit card required.</p>
        <ul className="space-y-2">
          {["Premium Content Access", "Member-only Resources", "Community Support", "Regular Updates"].map((feature, i) => (
            <li key={i} className="flex items-center text-white">
              <div className="mr-2 w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="w-full md:w-1/2 bg-white p-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-mono font-bold mb-6 text-gray-800">Create Your Account</h3>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_purple-500] focus:shadow-[6px_6px_0px_0px_purple-500] transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-mono font-medium text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_purple-500] focus:shadow-[6px_6px_0px_0px_purple-500] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 border-2 border-black"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-1"
              >
                <span>Sign Up</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>
            <a href="#" className="ml-1 font-medium text-purple-600 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSplit;
  `,
  SignupMinimal: `
import React from "react";

const SignupMinimal = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">Join Us</h2>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full py-2 px-3 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
            placeholder="you@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-mono font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
            placeholder="••••••••"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white font-mono font-bold border-2 border-black hover:bg-gray-800 transition-colors"
          >
            Create Account
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <a href="#" className="ml-1 font-medium text-black hover:underline">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignupMinimal;
  `,
};

const SignupShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("SignupBasic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const signupIcons = {
    SignupBasic: <UserPlus className="w-5 h-5" />,
    SignupSocial: <Mail className="w-5 h-5" />,
    SignupMultiStep: <Layers className="w-5 h-5" />,
    SignupSplit: <UserCircle className="w-5 h-5" />,
    SignupMinimal: <Key className="w-5 h-5" />,
  };

  const signupColors = {
    SignupBasic: "from-purple-400 to-indigo-500",
    SignupSocial: "from-teal-400 to-emerald-500",
    SignupMultiStep: "from-amber-400 to-orange-500",
    SignupSplit: "from-fuchsia-400 to-purple-500",
    SignupMinimal: "from-gray-400 to-gray-500",
  };

  const signupBgs = {
    SignupBasic:
      "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/30",
    SignupSocial:
      "bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/30",
    SignupMultiStep:
      "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30",
    SignupSplit:
      "bg-gradient-to-br from-fuchsia-50 to-purple-100 dark:from-fuchsia-900/20 dark:to-purple-900/30",
    SignupMinimal:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "SignupBasic":
        return <SignupBasic />;
      case "SignupSocial":
        return <SignupSocial />;
      case "SignupMultiStep":
        return <SignupMultiStep />;
      case "SignupSplit":
        return <SignupSplit />;
      case "SignupMinimal":
        return <SignupMinimal />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section - More Unique */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Signup</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic signup forms for your modern web
                applications. Bring the charm of retro aesthetics to your
                authentication UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-md shadow-lg hover:shadow-purple-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-800/30 shadow-xl">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-3/4 h-4 mt-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-1/2 h-3 mt-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-full h-8 mt-4 bg-purple-500 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col justify-between">
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-indigo-500 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-purple-500" />
            Signup Collection
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-md ${
                !isGridView
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Layers className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-md ${
                isGridView
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(signupComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${signupBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="scale-75">
                    {renderComponent(componentName)}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${signupColors[componentName]} text-white mr-2`}
                      >
                        {signupIcons[componentName]}
                      </div>
                      {componentName.replace(/([A-Z])/g, " $1").trim()}
                    </h3>

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        4.9
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setActiveComponent(componentName);
                        setIsGridView(false);
                      }}
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(signupComponents[componentName])
                      }
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Detail View
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            {/* Component Selector - Left Side */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-purple-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(signupComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${signupBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${signupColors[componentName]} text-white`}
                    >
                      {signupIcons[componentName]}
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 block">
                        {componentName.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Component Display - Right Side */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeComponent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Component Header */}
                  <div
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${signupBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${signupColors[activeComponent]} text-white mr-2`}
                        >
                          {signupIcons[activeComponent]}
                        </div>
                        <span>
                          {activeComponent.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </h2>

                      {/* Tabs */}
                      <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <button
                          onClick={() => setActiveTab("preview")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "preview"
                              ? `bg-gradient-to-r ${signupBgs[activeComponent]} text-purple-700 dark:text-purple-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("code")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "code"
                              ? `bg-gradient-to-r ${signupBgs[activeComponent]} text-purple-700 dark:text-purple-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
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
                    {activeTab === "preview" ? (
                      <div className="flex flex-col">
                        {/* Interactive Preview */}
                        <div
                          className={`flex flex-col items-center justify-center p-10 ${signupBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {renderComponent(activeComponent)}
                          </motion.div>
                        </div>

                        {/* Component Info */}
                        <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-purple-500 mr-2" />
                              Component Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-purple-200 dark:border-purple-800/30">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Features
                                  </h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                      Retro-inspired design with pixel-perfect
                                      details
                                    </li>
                                    <li>Bold borders and shadow effects</li>
                                    <li>Fully responsive and accessible</li>
                                    <li>Customizable colors and layouts</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This component can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or adding additional effects
                                    to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-purple-200/50 dark:border-purple-800/20">
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Installation
                                </h4>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => {
                                      setActiveTab("code");
                                    }}
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
                            components/Signup/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {signupComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(signupComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupShowcase;
