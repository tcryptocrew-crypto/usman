import React, { useRef, useState } from 'react';
import { ArrowRight, X, Rocket, Menu, Phone } from 'lucide-react';
import PricingSection from './components/PricingSection';
import ClientsSection from './components/ClientsSection';
import ScrollProgress from './components/ScrollProgress';
import WorkSection from './components/WorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const navLinks = [
    { name: 'Work', href: 'work' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'FAQs', href: 'faqs' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-6 md:px-8">
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-full px-6 md:px-12 py-4 shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-2 text-[#FFD700] transition-transform duration-300 hover:scale-105"
            >
              <Rocket className="w-6 h-6" />
              <span className="font-bold text-lg">Prestige Media</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  className="relative text-white/90 hover:text-white transition-colors duration-300 group text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFC000] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="px-6 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium transition-all duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`/#${link.href}`}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="px-6 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium transition-all duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10">
          {/* Horizontal Video */}
          <div className="w-full animate-fade-in">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60" style={{ aspectRatio: '16/9' }}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=2b3f1c2e57d2d3f20949b0e7a2411abe925c6789&profile_id=165" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight animate-fade-in-delayed whitespace-nowrap">
            <span className="text-white">We Help Brands </span>
            <span className="text-[#FFD700]">Scale With Video</span>
          </h1>

          {/* CTA */}
          <div className="animate-fade-in-delayed-2">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-full text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:scale-105 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />
      
      {/* Work Section */}
      <section id="work">
        <WorkSection />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <PricingSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      {/* FAQs Section */}
      <section id="faqs">
        <FAQSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;