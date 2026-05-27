import { UserPlus, Mail, Layers, UserCircle, Key } from 'lucide-react';

// Component imports
import SignupBasic from '../../components/Signup/SignupBasic';
import SignupSocial from '../../components/Signup/SignupSocial';
import SignupMultiStep from '../../components/Signup/SignupMultiStep';
import SignupSplit from '../../components/Signup/SignupSplit';
import SignupMinimal from '../../components/Signup/SignupMinimal';

export const signupComponents = [
  {
    name: 'SignupBasic',
    component: SignupBasic,
    icon: UserPlus,
    code: `
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
  },
  {
    name: 'SignupSocial',
    component: SignupSocial,
    icon: Mail,
    code: `
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
  },
  {
    name: 'SignupMultiStep',
    component: SignupMultiStep,
    icon: Layers,
    code: `
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
  },
  {
    name: 'SignupSplit',
    component: SignupSplit,
    icon: UserCircle,
    code: `
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
  },
  {
    name: 'SignupMinimal',
    component: SignupMinimal,
    icon: Key,
    code: `
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
  },
];

export default signupComponents;
