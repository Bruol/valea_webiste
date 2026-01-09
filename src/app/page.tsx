"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/On_The_Moon_ZQ_015.jpeg", alt: "On The Moon - Scene 1" },
  { src: "/On_The_Moon_ZQ_075.jpeg", alt: "On The Moon - Scene 2" },
  { src: "/On_The_Moon_ZQ_086.jpeg", alt: "On The Moon - Scene 3" },
  { src: "/On_The_Moon_ZW_062.jpeg", alt: "On The Moon - Scene 4" },
  { src: "/On_The_Moon_ZW_077.jpeg", alt: "On The Moon - Scene 5" },
  { src: "/On_The_Moon_ZW_087.jpeg", alt: "On The Moon - Scene 6" },
  { src: "/On_The_Moon_ZW_111kopie.jpeg", alt: "On The Moon - Scene 7" },
  { src: "/On_The_Moon_ZW_141.jpeg", alt: "On The Moon - Scene 8" },
];

const dates = [
  { date: "16.-19. März", event: "Workshops mit Schulklassen", location: "Kulturmärz Uster" },
  { date: "27. September", event: "Podiumsdiskussion", location: "Swiss Space Museum Regensdorf" },
  { date: "23. Oktober", event: "PREMIERE", location: "Zirkusquartier Zürich" },
  { date: "24./25. Oktober", event: "Vorstellungen", location: "Zirkusquartier Zürich" },
];

const team = [
  { role: "Künstlerische Leitung, Produktionsleitung", name: "Valea Völcker", link: "https://www.valeavolcker.com/aktuelles" },
  { role: "Idee & Performance", name: "Valea Völcker, Simon Thöni, Diane Gemsch", link: null },
  { role: "Sound & Performance", name: "Marquis' McGee", link: "https://www.marquismcgee.com/" },
  { role: "End-Regie", name: "Newa Grawit (Cirque de Loin)", link: "https://cirquedeloin.ch/companie/" },
  { role: "Bühnenbild", name: "Annatina Huwiler", link: "https://annatinahuwiler.ch/z-BERG" },
  { role: "Wissenschaftliche Begleitung", name: "Prof. Audrey Vorburger, Dr. Anna Mittelholz, Prof. Dr. Henner Busemann", link: null },
  { role: "Produktions-Mentoring", name: "Andrea Boll", link: "https://bollwerk-andreaboll.com/" },
  { role: "Luftakrobatik Coaching", name: "Rebekka Gather", link: "https://www.rebekkagather.com/" },
  { role: "Rigging Beratung", name: "Duncan Cown", link: null },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Company Name */}
            <a href="#" className="text-xl md:text-2xl font-serif font-normal text-white tracking-[0.15em]">
              CIE. YOUKALI
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="nav-link">Über</a>
              <a href="#gallery" className="nav-link">Galerie</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#dates" className="nav-link">Daten</a>
              <a href="#contact" className="nav-link">Kontakt</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3 bg-primary/90 backdrop-blur-md mt-4 px-4 rounded-lg">
              <a href="#about" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Über</a>
              <a href="#gallery" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
              <a href="#team" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <a href="#dates" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Daten</a>
              <a href="#contact" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/On_The_Moon_ZW_111kopie.jpeg"
            alt="CIE. YOUKALI - On The Moon"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Handwritten Title - Right Side */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 text-right">
          <h1 className="font-handwritten text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-wide">
            on the<br />moon
          </h1>
        </div>

        {/* Subtitle - Bottom Center */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-center">
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Eine Kreation der Cie. Youkali
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-6 h-6 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Über das Projekt</p>
            <h2 className="section-title">ON THE MOON</h2>
          </div>
          
          <div className="space-y-6 text-lg text-cream/80 leading-relaxed">
            <p>
              Umwoben von Geschichten, gehört er bisher nur den Träumenden und sich selbst. 
              Doch was, wenn wieder Menschen auf dem Mond landen? Wenn der Mond erobert und 
              dauerhaft bewohnt wird?
            </p>
            <p>
              ON THE MOON beschäftigt sich mit Besitz, anhand des Umgangs von Menschen mit dem Mond. 
              Drei Performer:innen und ein Musiker begeben sich auf eine bilderreiche Reise ins All 
              und erforschen zwischen Fakten und Fantasie ungewöhnliche Zukunftsutopien.
            </p>
            <p>
              Mit Luftakrobatik, Physical Theatre und Live-Sound geht das Projekt innovative Wege 
              im zeitgenössischen Zirkus: Es verbindet Wissenschaft mit Zirkus in weitgehendem Sinne 
              und lädt das Publikum zu einer spielerischen Reise ein.
            </p>
            <p className="text-cream/60 italic">
              Im Frühjahr 2025 wurde das Projekt von Migros Kulturprozent für eine Ideationsphase unterstützt. 
              Ab Juni 2026 startet die Stückkreation, in Koproduktion mit dem Zirkusquartier Zürich, 
              begleitet von Wissenschaftler:innen der ETH Zürich und der Uni Bern.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center mt-12 pt-12 border-t border-cream/10">
            <div>
              <p className="text-3xl font-serif font-bold text-accent">Ab 7</p>
              <p className="text-cream/60 text-sm">Jahren</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-accent">60</p>
              <p className="text-cream/60 text-sm">Minuten</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-accent">Theater</p>
              <p className="text-cream/60 text-sm">& Turnhallen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Teaser</p>
            <h2 className="section-title">Ideationsphase</h2>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/4iZVH2jsz0E" 
              title="ON THE MOON – Ideationsphase"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-cream/50 text-sm mt-4">© Michael Gärtner, Wetzikon TV</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Eindrücke</p>
            <h2 className="section-title">Galerie</h2>
            <p className="section-subtitle mx-auto">
              © David Schelker, Recherche-Residenz Zentralwäscherei Zürich
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className={`relative cursor-pointer group overflow-hidden rounded-lg ${
                  index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <div className={`relative ${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[4/5]'}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-cream hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-cream hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null ? (prev === 0 ? photos.length - 1 : prev - 1) : null);
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-cream hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null ? (prev === photos.length - 1 ? 0 : prev + 1) : null);
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Das Team</p>
            <h2 className="section-title">Mitwirkende</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-secondary/50 p-6 rounded-lg border border-cream/10 hover:border-accent/50 transition-all duration-300"
              >
                <p className="text-accent text-sm tracking-wider uppercase mb-2">{member.role}</p>
                {member.link ? (
                  <a 
                    href={member.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-serif text-cream hover:text-accent transition-colors"
                  >
                    {member.name}
                  </a>
                ) : (
                  <p className="text-xl font-serif text-cream">{member.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates Section */}
      <section id="dates" className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Spielplan</p>
            <h2 className="section-title">Daten 2026</h2>
          </div>
          
          <div className="space-y-4">
            {dates.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-lg border transition-all duration-300 ${
                  item.event === "PREMIERE" 
                    ? 'bg-accent/20 border-accent' 
                    : 'bg-primary/50 border-cream/10 hover:border-accent/50'
                }`}
              >
                <div className="md:w-40 flex-shrink-0">
                  <p className="text-2xl font-serif font-bold text-cream">{item.date}</p>
                </div>
                <div className="flex-grow">
                  <p className={`text-lg ${item.event === "PREMIERE" ? 'text-accent font-bold' : 'text-cream'}`}>
                    {item.event}
                  </p>
                  <p className="text-cream/60">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/On_The_Moon_ZW_087.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">Kontakt</p>
            <h2 className="section-title">Schreiben Sie uns</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif text-cream mb-4">Produktionsleitung</h3>
              <p className="text-cream/80 mb-2">Valea Völcker</p>
              <a 
                href="mailto:info@valeavolcker.com" 
                className="text-accent hover:text-accent-light transition-colors"
              >
                info@valeavolcker.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-serif text-cream mb-4">Verein Youkali</h3>
              <p className="text-cream/80">
                Cie. Youkali<br />
                Morgenstrasse 30<br />
                8620 Wetzikon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary border-t border-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-serif font-normal text-cream mb-2 tracking-[0.15em]">CIE. YOUKALI</p>
              <p className="text-cream/50 text-sm">Zeitgenössischer Zirkus</p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.youtube.com/watch?v=4iZVH2jsz0E" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.valeavolcker.com/aktuelles" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/10 text-center">
            <p className="text-cream/40 text-sm">© 2024 Cie. Youkali. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
