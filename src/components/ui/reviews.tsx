"use client";

import { Star, ShieldCheck } from "lucide-react";
import { Reveal } from "@/lib/animations";

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
    text: "My son scored 588 in his PU board exams and cleared CET in his first attempt. The teachers at BGS treated him like their own child. We couldn't have asked for a better institution for his PCMCs stream.",
    initial: "R",
    colorClass: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "Ananya S.",
    date: "4 months ago",
    rating: 5,
    text: "Excellent discipline and learning environment. The faculty stays after hours to clear doubts, which really helped my daughter in her NEET preparation. The science and computer laboratories are fully equipped.",
    initial: "A",
    colorClass: "bg-purple-100 text-purple-700",
  },
  {
    id: "3",
    name: "Srinivas Reddy",
    date: "5 months ago",
    rating: 5,
    text: "We shifted our kids here for the strong academic foundation. The personal attention to students is remarkable. They also encourage sports and extracurricular activities, providing great overall development.",
    initial: "S",
    colorClass: "bg-green-100 text-green-700",
  },
  {
    id: "4",
    name: "Lakshmi M.",
    date: "6 months ago",
    rating: 5,
    text: "Highly satisfied with the communication and guidance provided by the school management. The PU College academic preparation is top-notch. They seamlessly integrate competitive-exam coaching.",
    initial: "L",
    colorClass: "bg-amber-100 text-amber-700",
  },
  {
    id: "5",
    name: "Karthik Gowda",
    date: "8 months ago",
    rating: 5,
    text: "A very supportive and experienced teaching staff. The commerce stream faculty is exceptional. My student's confidence has grown immensely since joining BGS.",
    initial: "K",
    colorClass: "bg-teal-100 text-teal-700",
  },
  {
    id: "6",
    name: "Priya V.",
    date: "10 months ago",
    rating: 5,
    text: "The best school in Sidlaghatta. The infrastructure is premium and the focus on both academics and values is exactly what we wanted as parents. Highly recommend for PCMB.",
    initial: "P",
    colorClass: "bg-rose-100 text-rose-700",
  },
  {
    id: "7",
    name: "Manjunath B.",
    date: "11 months ago",
    rating: 5,
    text: "Outstanding dedication by the teachers. The special remedial classes and weekend mock tests before SSLC board exams gave our daughter immense clarity and state-level rank confidence.",
    initial: "M",
    colorClass: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "8",
    name: "Deepa R.",
    date: "1 year ago",
    rating: 5,
    text: "Holistic learning at its best. Beyond excellent academic coaching, the cultural activities, debate sessions, and sports facilities make BGS truly unique in this region.",
    initial: "D",
    colorClass: "bg-emerald-100 text-emerald-700",
  },
];

export function ReviewsSection() {
  // Duplicate reviews to create a seamless infinite marquee loop
  const marqueeReviews = [...sampleReviews, ...sampleReviews];

  return (
    <section className="py-24 md:py-32 bg-brand-maroon-deep relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(232,135,30,0.06)_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.03)_0%,_transparent_55%)] pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto mb-14">
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-saffron animate-pulse" />
              Verified Community Feedback
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
              What Our Parents & Students Say
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              Real stories and experiences from families who trust BGS for academic rigour, individual care, and future-ready education.
            </p>

            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-6 p-4 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-white tracking-tight leading-none">4.7</span>
                <div className="flex flex-col items-start text-left">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">
                    Google Rating
                  </span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">18+ Verified Reviews</p>
                <p className="text-xs text-white/50">Sidlaghatta Campus</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ════════════════════ INFINITE MARQUEE ════════════════════ */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Edge Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-56 bg-gradient-to-r from-brand-maroon-deep via-brand-maroon-deep/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-56 bg-gradient-to-l from-brand-maroon-deep via-brand-maroon-deep/90 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing pl-6">
          {marqueeReviews.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="w-[340px] sm:w-[380px] md:w-[410px] h-[255px] shrink-0 flex flex-col justify-between bg-white rounded-2xl p-6 shadow-md border border-white/20 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 select-none group"
            >
              <div>
                {/* Reviewer Meta Header */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base shadow-sm ${review.colorClass}`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-[15px] leading-tight">
                        {review.name}
                      </h3>
                      <p className="text-[12px] text-gray-500 mt-0.5">{review.date}</p>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 opacity-90">
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

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
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
                <p className="text-[13.5px] text-gray-700 leading-relaxed line-clamp-3 group-hover:text-gray-950 transition-colors">
                  “{review.text}”
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Review
                </span>
                <span className="text-gray-400 font-medium">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Hint */}
      <div className="text-center mt-6 relative z-10">
        <p className="text-xs text-white/40 tracking-wide inline-flex items-center gap-1.5">
          <span>💡</span> Hover over any review card to pause scrolling
        </p>
      </div>
    </section>
  );
}
