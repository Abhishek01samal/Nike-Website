import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ShoeModel from "./ShoeModel"; // Correct path for your structure

const About = () => {
  const stats = [
    { number: "50M+", label: "Happy Customers" },
    { number: "1000+", label: "Shoe Models" },
    { number: "50+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Innovation Meets Performance
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over five decades, Nike has been at the forefront of athletic innovation, 
                creating shoes that don't just look good—they perform at the highest level.
              </p>
              <p>
                Our commitment to excellence drives us to push boundaries, explore new 
                technologies, and create footwear that empowers athletes of all levels 
                to achieve their dreams.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black gradient-text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 3D Shoe Model */}
          <div className="w-full h-[500px] flex items-center justify-center">
            <Canvas shadows camera={{ position: [1, -1.6, 6], fov: 60 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[2, 5, 5]} intensity={3} castShadow />
              <Suspense fallback={null}>
                <ShoeModel />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
