"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X, Check, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getConsent,
  setConsent,
  initVisitorTracking,
  COOKIE_KEYS,
  getCookie,
} from "@/lib/cookies";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if consent has already been given
    const consent = getConsent();

    if (!consent.type) {
      // Delay showing banner slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (consent.analytics) {
      // If user previously accepted analytics cookies, activate tracking cookies
      initVisitorTracking();
    }

    const handleOpenPreferences = () => {
      const current = getConsent();
      setAnalyticsEnabled(current.analytics);
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () =>
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleAcceptAll = () => {
    setConsent("all", true);
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent("essential", false);
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    setConsent("custom", analyticsEnabled);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[120] max-w-md w-auto"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl border border-brand-maroon/15 text-brand-umber relative overflow-hidden">
            {/* Top accent strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-maroon via-brand-saffron to-brand-maroon" />

            {/* Close button */}
            <button
              onClick={handleEssentialOnly}
              className="absolute top-3.5 right-3.5 p-1.5 text-gray-400 hover:text-brand-maroon hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              title="Close & Accept Essential Only"
              aria-label="Close cookie consent banner"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-maroon/10 text-brand-maroon flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-brand-saffron" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-brand-maroon leading-tight">
                  Cookie & Privacy Choices
                </h3>
                <p className="text-[11px] font-medium text-brand-umber/60 uppercase tracking-wider">
                  BGS Public School
                </p>
              </div>
            </div>

            {/* Description */}
            {!showPreferences ? (
              <>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  We use cookies to improve your experience on our website, remember your preferences, and maintain secure session data.
                  Read our{" "}
                  <Link
                    href="/privacy"
                    className="text-brand-maroon font-semibold underline hover:text-brand-saffron transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 py-2.5 px-4 bg-brand-maroon hover:bg-brand-maroon-deep text-white text-xs font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5 text-brand-saffron" />
                    Accept All
                  </button>

                  <button
                    onClick={handleEssentialOnly}
                    className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-brand-umber text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Essential Only
                  </button>

                  <button
                    onClick={() => setShowPreferences(true)}
                    className="p-2.5 text-gray-500 hover:text-brand-maroon hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                    title="Customize cookie preferences"
                  >
                    <Settings2 className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              /* Detailed preferences drawer */
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3 pt-1"
              >
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs">
                  <div>
                    <span className="font-semibold text-brand-umber block">Strictly Essential</span>
                    <span className="text-[10px] text-gray-500">Security, session, and basic navigation</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-maroon uppercase bg-brand-maroon/10 px-2 py-0.5 rounded">
                    Required
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs">
                  <div>
                    <span className="font-semibold text-brand-umber block">Analytics & Performance</span>
                    <span className="text-[10px] text-gray-500">Helps us understand page usage, visits, and visitor flow</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-maroon"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-xs text-gray-500 hover:text-brand-maroon underline cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSaveCustom}
                    className="py-2 px-4 bg-brand-maroon text-white text-xs font-semibold rounded-xl hover:bg-brand-maroon-deep transition-colors cursor-pointer"
                  >
                    Save Preferences
                  </button>
                </div>
              </motion.div>
            )}

            {/* Footer lock note */}
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-saffron" />
                Active Cookie Control Enabled
              </span>
              <Link href="/privacy" className="hover:text-brand-maroon underline">
                Privacy
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
