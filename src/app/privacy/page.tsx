"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-cream paper-texture pt-32 pb-20">
      <div className="px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-saffron mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-6">
            Privacy Policy
          </h1>
          <p className="text-brand-umber/60 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="prose prose-lg text-brand-umber/80 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-maroon/5">
          <p>
            BGS Public School & PU College ("we," "our," or "us") is committed to protecting the privacy and security of our students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our institution.
          </p>

          <h2 className="text-2xl font-serif font-bold text-brand-maroon mt-10 mb-4">1. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Submit admission inquiries or registration forms.</li>
            <li>Register for the Alumni network.</li>
            <li>Contact us via phone, email, or contact forms.</li>
            <li>Subscribe to our newsletters or updates.</li>
          </ul>
          <p>The personal information we collect may include names, contact details, educational background, dates of birth, and any other information you choose to provide.</p>

          <h2 className="text-2xl font-serif font-bold text-brand-maroon mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect primarily to provide, maintain, and improve our educational services. Specifically, we may use your information to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Process admission applications and enrollment.</li>
            <li>Communicate with parents and guardians regarding academic progress and institutional events.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Maintain our Alumni database and foster community engagement.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-brand-maroon mt-10 mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
          </p>

          <h2 className="text-2xl font-serif font-bold text-brand-maroon mt-10 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted affiliates, the Sri Adichunchanagiri Shikshana Trust, and educational boards as required by law.
          </p>

          <h2 className="text-2xl font-serif font-bold text-brand-maroon mt-10 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-brand-offwhite p-6 rounded-xl mt-4 border border-brand-maroon/10">
            <p className="font-semibold text-brand-maroon mb-1">BGS Public School & PU College</p>
            <p className="text-sm mb-1">Jnanankura Campus, Hanumanthapura Gate</p>
            <p className="text-sm mb-1">Sidlaghatta - 562 105, Karnataka</p>
            <p className="text-sm mt-3 font-semibold">Phone: <span className="font-normal">9742668712, 9666930918</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
