"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-cream paper-texture pt-32 pb-20">
      <div className="px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-brand-umber/60 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="prose prose-lg text-brand-umber/80 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-maroon/5">
          <p>
            Welcome to the official website of BGS Public School & PU College. By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
          </p>

          <h2 className="text-2xl font-serif font-bold text-white mt-10 mb-4">1. Use of Website</h2>
          <p>
            The content on this website is for your general information and educational use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
          </p>

          <h2 className="text-2xl font-serif font-bold text-white mt-10 mb-4">2. Intellectual Property Rights</h2>
          <p>
            This website contains material which is owned by or licensed to us, including the Sri Adichunchanagiri Shikshana Trust. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and photographs. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>
          <p>
            The official logos, crests, and emblems of BGS institutions are trademarked and may not be used without explicit written permission from the administration.
          </p>

          <h2 className="text-2xl font-serif font-bold text-white mt-10 mb-4">3. Accuracy of Information</h2>
          <p>
            While we strive to keep the information on the website up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, admission criteria, academic schedules, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2 className="text-2xl font-serif font-bold text-white mt-10 mb-4">4. Admissions and Forms</h2>
          <p>
            Submission of an admission inquiry or registration form through this website does not guarantee admission to BGS Public School & PU College. All admissions are subject to our institutional policies, available capacity, and the decision of the management.
          </p>

          <h2 className="text-2xl font-serif font-bold text-white mt-10 mb-4">5. Governing Law</h2>
          <p>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India. Any legal disputes shall be subject to the jurisdiction of the courts in Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
