import React from 'react';
import { MapPin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white text-center lg:text-left">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Monika Jangam
                <span className="block text-3xl md:text-4xl text-slate-300 mt-3 font-light">Prabhudev</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">Software Engineer</p>
              <div className="flex items-center justify-center lg:justify-start text-slate-400 mb-8">
                <MapPin size={18} className="mr-2" />
                <span className="text-lg">Seattle, USA</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
              Experienced software engineer with 5+ years of expertise in backend and full-stack development. 
              Specialized in Java, Spring Boot, React.js, and AWS cloud technologies. 
              Proven track record of architecting scalable enterprise applications with focus on security and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <a
                href="#contact"
                className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-md font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-500 flex items-center"
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#projects"
                className="border-2 border-slate-400 hover:border-slate-300 text-slate-200 hover:text-white px-10 py-4 rounded-md font-semibold transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/Monika-Portfolio/images/profile-photo.jpg" 
                  alt="Monika Jangam Prabhudev - Software Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-500 text-center p-8" style={{display: 'none'}}>
                  <div>
                    <div className="text-6xl mb-4">👩‍💻</div>
                    <div className="text-lg font-medium">Add your photo as<br/>profile-photo.jpg</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-slate-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex justify-center opacity-60">
            <div className="w-1 h-3 bg-slate-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;