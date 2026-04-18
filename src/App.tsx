import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Circle, Hexagon, Triangle, Square, Plus, X, Rocket, Menu } from 'lucide-react';
import PricingSection from './components/PricingSection';
import ClientsSection from './components/ClientsSection';
import ScrollProgress from './components/ScrollProgress';
import WorkSection from './components/WorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Work', href: 'work' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'FAQs', href: 'faqs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section id="hero" className="relative min-h-screen">
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
          <Circle className="absolute top-20 left-20 w-24 h-24 text-[#0A1931] opacity-20 animate-float" />
          <Square className="absolute top-40 left-48 w-16 h-16 text-[#6B4CE6] opacity-15 animate-float-delayed" />
          <Plus className="absolute top-96 left-12 w-12 h-12 text-[#FFD700] opacity-10 animate-float" />
          <Triangle className="absolute bottom-32 left-36 w-20 h-20 text-[#0A1931] opacity-15 animate-float-delayed" />
          <Hexagon className="absolute top-40 right-32 w-32 h-32 text-[#FFD700] opacity-10 animate-float" />
          <Circle className="absolute top-80 right-20 w-16 h-16 text-[#6B4CE6] opacity-15 animate-float-delayed" />
          <X className="absolute bottom-48 right-40 w-12 h-12 text-[#0A1931] opacity-20 animate-float" />
          <Square className="absolute top-1/4 left-1/2 w-20 h-20 text-[#6B4CE6] opacity-10 animate-float" />
          <Plus className="absolute bottom-1/4 left-1/2 w-16 h-16 text-[#FFD700] opacity-15 animate-float-delayed" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full min-h-screen items-center pt-24 lg:pt-0">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-white">Transform Your Business</span>{' '}
                <span className="text-[#FFD700]">Through Growth</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-delayed">
                Scale your customer base with data-driven strategies and proven growth frameworks.
              </p>

              <div className="flex justify-center lg:justify-start mt-8 animate-fade-in-delayed-2">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-full text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/30 hover:scale-105 flex items-center gap-3 animate-jiggle">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block lg:pt-24">
              <div className="relative w-[280px] mx-auto aspect-[9/16] rounded-[2.5rem] border-8 border-[#1a1a1a] bg-black shadow-2xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=2b3f1c2e57d2d3f20949b0e7a2411abe925c6789&profile_id=165" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute top-0 w-1/2 h-6 bg-[#1a1a1a] left-1/2 -translate-x-1/2 rounded-b-2xl"></div>
              </div>
            </div>

            {/* Mobile Video Player */}
            <div className="lg:hidden relative w-[240px] mx-auto aspect-[9/16] rounded-[2rem] border-8 border-[#1a1a1a] bg-black shadow-2xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=2b3f1c2e57d2d3f20949b0e7a2411abe925c6789&profile_id=165" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute top-0 w-1/2 h-4 bg-[#1a1a1a] left-1/2 -translate-x-1/2 rounded-b-xl"></div>
            </div>
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