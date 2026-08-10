"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal, fadeUp } from "@/lib/animations";

type Review = {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  initial: string;
  colorClass: string;
};

const sampleReviews: Review[] = [
  {
    id: "1",
    name: "Ramesh K.",
    date: "2 months ago",
    rating: 5,
    text: "(Sample Review) My son scored 588 in his PU board exams and cleared CET in his first attempt. The teachers at BGS treated him like their own child. We couldn't have asked for a better institution for his PCMCs stream.",
    initial: "R",
    colorClass: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "Ananya S.",
    date: "4 months ago",
    rating: 5,
    text: "(Sample Review) Excellent discipline and learning environment. The faculty stays after hours to clear doubts, which really helped my daughter in her NEET preparation. The science and computer laboratories are fully equipped.",
    initial: "A",
    colorClass: "bg-purple-100 text-purple-700",
  },
  {
    id: "3",
    name: "Srinivas Reddy",
    date: "5 months ago",
    rating: 5,
    text: "(Sample Review) We shifted our kids here for the strong academic foundation. The personal attention to students is remarkable. They also encourage sports and extracurricular activities, providing great overall development.",
    initial: "S",
    colorClass: "bg-green-100 text-green-700",
  },
  {
    id: "4",
    name: "Lakshmi M.",
    date: "6 months ago",
    rating: 5,
    text: "(Sample Review) Highly satisfied with the communication and guidance provided by the school management. The PU College academic preparation is top-notch. They seamlessly integrate competitive-exam coaching.",
    initial: "L",
    colorClass: "bg-orange-100 text-orange-700",
  },
  {
    id: "5",
    name: "Karthik Gowda",
    date: "8 months ago",
    rating: 4,
    text: "(Sample Review) A very supportive and experienced teaching staff. The commerce stream faculty is exceptional. My student's confidence has grown immensely since joining BGS.",
    initial: "K",
    colorClass: "bg-teal-100 text-teal-700",
  },
  {
    id: "6",
    name: "Priya V.",
    date: "10 months ago",
    rating: 5,
    text: "(Sample Review) The best school in Sidlaghatta. The infrastructure is premium and the focus on both academics and values is exactly what we wanted as parents. Highly recommend for PCMB.",
    initial: "P",
    colorClass: "bg-pink-100 text-pink-700",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B1A30] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(232,135,30,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              What Our Parents & Students Say
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Trusted by parents and students for academic excellence, guidance and holistic development.
            </p>

            {/* Overall Rating Summary */}
            <div className="inline-flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl font-bold text-white tracking-tight">4.7</span>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-white/70 uppercase tracking-widest">
                    Google Reviews
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/40">Based on 18+ verified ratings</p>
            </div>
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleReviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.1} direction="up">
              <div className="group h-[280px] flex flex-col bg-white rounded-[14px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(11,26,48,0.12)] transition-all duration-400 ease-out">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${review.colorClass}`}>
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-[15px] leading-tight">
                        {review.name}
                      </h3>
                      <p className="text-[13px] text-gray-500 mt-0.5">{review.date}</p>
                    </div>
                  </div>
                  {/* Google G Logo SVG */}
                  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 opacity-90">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < review.rating
                          ? "fill-[#FBBC05] text-[#FBBC05]"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-[14px] text-gray-700 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 20px;
        }
        .group:hover .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #D1D5DB;
        }
      `}} />
    </section>
  );
}
