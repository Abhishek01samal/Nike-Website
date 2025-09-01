import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { Suspense } from "react";

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Video Background, fixed to cover entire section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/nike-bg.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast with text */}
      <div className="fixed inset-0 bg-black opacity-30 -z-5"></div>

      {/* Content with higher z-index */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left text and buttons */}
        <div className="text-white space-y-8 animate-slide-up">
          <h1 className="text-5xl lg:text-8xl font-black leading-none">
            JUST DO IT
            <span className="block gradient-text-accent text-4xl lg:text-6xl">WITH STYLE</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-lg">
            Discover our premium collection of Nike shoes engineered for peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="hero" size="hero" onClick={scrollToProducts} className="group">
              Shop Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">Watch Video</Button>
          </div>
        </div>

        {/* Right side left empty where 3D model was */}
        <div className="w-full h-[550px] flex justify-center items-center">
          {/* 3D shoe model removed — this area is intentionally left blank */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
