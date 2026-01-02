'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Showroom() {
  const [particles, setParticles] = useState([])
  const [selectedDay, setSelectedDay] = useState('weekday')

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 4
    }))
    setParticles(generatedParticles)
  }, [])

  const exhibits = [
    {
      title: 'Panneaux Solaires',
      description: 'Différents modèles et puissances exposés',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Bornes de Recharge',
      description: 'Testez nos bornes en conditions réelles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Carports & Pergolas',
      description: 'Maquettes et échantillons de matériaux',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Cuisines Extérieures',
      description: 'Espace démonstration grandeur nature',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Matériaux & Finitions',
      description: '200+ échantillons de couleurs et textures',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Espace Conseil',
      description: 'Bureau dédié à votre projet personnalisé',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Voir et toucher',
      description: 'Découvrez la qualité de nos produits en situation réelle',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Conseil expert',
      description: 'Échangez avec Charles et Mohamed sur votre projet',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Devis immédiat',
      description: 'Repartez avec une estimation précise de votre projet',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Visite libre',
      description: 'Prenez le temps de découvrir nos solutions à votre rythme',
      color: 'from-orange-400 to-red-500'
    }
  ]

  const schedule = {
    weekday: {
      label: 'Lundi au Vendredi',
      hours: '9h00 - 18h00',
      note: 'Ouvert sans interruption'
    },
    saturday: {
      label: 'Samedi',
      hours: '9h00 - 12h00',
      note: 'Sur rendez-vous recommandé'
    },
    sunday: {
      label: 'Dimanche',
      hours: 'Fermé',
      note: 'Rendez-vous possible sur demande'
    }
  }

  const testimonials = [
    {
      name: 'Sophie M.',
      location: 'Lavans-lès-St Claude',
      text: 'Le showroom est magnifique ! J\'ai pu voir tous les produits en vrai et toucher les matériaux. Charles m\'a conseillée pendant 2h pour mon projet de pergola.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
    },
    {
      name: 'Jean-Pierre L.',
      location: 'Saint-Claude',
      text: 'Visite très instructive. Mohamed a pris le temps de m\'expliquer toutes les options pour ma borne de recharge. Je recommande la visite avant de faire son choix.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
    },
    {
      name: 'Marie D.',
      location: 'Haut-Jura',
      text: 'Super accueil ! Le showroom permet vraiment de se projeter. J\'ai adoré l\'espace cuisine extérieure en démonstration. Visite indispensable !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
    }
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-900/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Showroom DynaMaison"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float opacity-60"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: '0 0 8px rgba(216, 180, 254, 0.6)'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
          <div className="inline-block mb-6">
            <svg className="w-28 h-28 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Notre <span className="text-purple-300">Showroom</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Découvrez nos solutions en conditions réelles dans notre espace d'exposition de 200 m²
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#reservation" 
              className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Réserver ma visite
            </Link>
            <a 
              href="#horaires" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Voir les horaires
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: '200 m²', label: 'Surface' },
              { value: '6 espaces', label: 'Zones expo' },
              { value: 'Gratuit', label: 'Visite' },
              { value: 'Sur RDV', label: 'Conseil privé' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-300 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Pourquoi <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">visiter</span> ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Nos <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Espaces</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              6 zones d'exposition pour découvrir toutes nos solutions
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibits.map((exhibit, index) => (
              <div
                key={exhibit.title}
                className="group relative overflow-hidden rounded-2xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80">
                  <Image
                    src={exhibit.image}
                    alt={exhibit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${exhibit.color} rounded-xl flex items-center justify-center text-white shadow-xl`}>
                      {exhibit.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {exhibit.title}
                    </h3>
                    <p className="text-gray-200">
                      {exhibit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horaires" className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Horaires <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">d'ouverture</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Day selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(schedule).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                      : 'glass text-primary-900 border border-gray-300 hover:border-purple-400'
                  }`}
                >
                  {schedule[day].label}
                </button>
              ))}
            </div>

            {/* Selected schedule */}
            <div className="glass p-12 rounded-3xl border border-gray-200 bg-white shadow-xl text-center">
              <div className="inline-block mb-6">
                <svg className="w-20 h-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary-900 mb-4">
                {schedule[selectedDay].label}
              </h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {schedule[selectedDay].hours}
              </div>
              <p className="text-xl text-gray-600">
                {schedule[selectedDay].note}
              </p>
            </div>

            {/* Additional info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-gray-200 bg-white text-center">
                <div className="text-purple-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Sur rendez-vous</h4>
                <p className="text-sm text-gray-600">Conseil privé disponible</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-gray-200 bg-white text-center">
                <div className="text-purple-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Appelez-nous</h4>
                <p className="text-sm text-gray-600">Pour toute information</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-gray-200 bg-white text-center">
                <div className="text-purple-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Visite libre</h4>
                <p className="text-sm text-gray-600">Sans engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Ils ont <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">visité</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Nous <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">trouver</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Map */}
              <div className="glass rounded-3xl overflow-hidden border border-gray-200 shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87445.82426634778!2d5.8636!3d46.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d0c7d3c8e2b8f%3A0x408ab2ae4bb3e90!2sLavans-l%C3%A8s-Saint-Claude!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="glass p-8 rounded-2xl border border-gray-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">Adresse</h3>
                      <p className="text-gray-700">Showroom DynaMaison</p>
                      <p className="text-gray-700">Lavans-lès-Saint-Claude</p>
                      <p className="text-gray-700">39170 Haut-Jura</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-gray-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">Parking</h3>
                      <p className="text-gray-700">Parking gratuit disponible</p>
                      <p className="text-gray-700">Accès facile</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-gray-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">Accessibilité</h3>
                      <p className="text-gray-700">Showroom accessible PMR</p>
                      <p className="text-gray-700">Plain-pied</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reservation" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-indigo-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80"
            alt="Visit our showroom"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Réservez votre <span className="text-purple-300">visite</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Découvrez nos solutions en personne et bénéficiez de conseils personnalisés
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Prendre rendez-vous</span>
              </Link>

              <a
                href="tel:+33XXXXXXXXX"
                className="glass border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appelez-nous</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-4xl font-bold text-purple-300 mb-2">Gratuit</div>
                <h3 className="font-bold mb-1">Visite & Conseil</h3>
                <p className="text-gray-300 text-sm">Sans engagement</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-4xl font-bold text-purple-300 mb-2">1h-2h</div>
                <h3 className="font-bold mb-1">Durée moyenne</h3>
                <p className="text-gray-300 text-sm">Selon vos besoins</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-4xl font-bold text-purple-300 mb-2">7j/7</div>
                <h3 className="font-bold mb-1">Sur rendez-vous</h3>
                <p className="text-gray-300 text-sm">Y compris dimanche</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}