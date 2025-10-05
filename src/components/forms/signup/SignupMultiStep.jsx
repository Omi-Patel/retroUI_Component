"use client";

import { useState } from "react";
import {
  UserPlus,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";

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
        <h2 className="text-2xl font-mono font-bold text-black">
          Create Account
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-2 rounded-full ${
                i + 1 === step
                  ? "bg-orange-500"
                  : i + 1 < step
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="min-h-[280px]">
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-mono font-medium text-gray-700"
              >
                Full Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-sm font-mono font-medium text-gray-700"
              >
                Email Address
              </label>
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
              <label
                htmlFor="password"
                className="block text-sm font-mono font-medium text-gray-700"
              >
                Create Password
              </label>
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
              <label
                htmlFor="confirm-password"
                className="block text-sm font-mono font-medium text-gray-700"
              >
                Confirm Password
              </label>
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
              <p className="text-sm text-gray-600 mb-4">
                Please review your information and agree to our terms.
              </p>

              <div className="flex items-start mb-4">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-2 border-black"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-orange-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-2 border-black"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 text-sm text-gray-600"
                >
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
