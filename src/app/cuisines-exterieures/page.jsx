'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function CuisinesExterieures() {
  const [selectedType, setSelectedType] = useState('complete')
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 4
    }))
    setParticles(generatedParticles)
  }, [])

  const kitchenTypes = [
    {
      id: 'complete',
      name: 'Complète',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-red-500 to-orange-600',
      description: 'Cuisine extérieure tout équipée',
      surface: '6 à 15 m²',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      features: [
        'Barbecue/plancha intégré',
        'Plan de travail en granit',
        'Évier avec eau courante',
        'Réfrigérateur extérieur',
        'Rangements et tiroirs'
      ]
    },
    {
      id: 'modulaire',
      name: 'Modulaire',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-600',
      description: 'Évolutive selon vos besoins',
      surface: '3 à 10 m²',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      features: [
        'Modules indépendants',
        'Configuration personnalisable',
        'Extension possible',
        'Installation progressive',
        'Mobilité des éléments'
      ]
    },
    {
      id: 'luxe',
      name: 'Prestige',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-600',
      description: 'Équipements haut de gamme',
      surface: '10 à 25 m²',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      features: [
        'Électroménager premium',
        'Four à pizza professionnel',
        'Cave à vin intégrée',
        'Éclairage design LED',
        'Finitions sur mesure'
      ]
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'Art de vivre',
      description: 'Cuisinez et recevez en plein air dans un cadre convivial',
      color: 'from-red-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Moments conviviaux',
      description: 'Créez des souvenirs inoubliables avec vos proches',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Saison prolongée',
      description: 'Profitez de vos espaces extérieurs du printemps à l\'automne',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Plus-value',
      description: 'Valorisez votre maison avec un espace tendance et fonctionnel',
      color: 'from-pink-400 to-rose-600'
    }
  ]

  const equipments = [
    {
      title: 'Barbecue intégré',
      description: 'Gaz, charbon ou électrique selon vos préférences',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      title: 'Plancha professionnelle',
      description: 'Cuisson saine et rapide pour tous vos aliments',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Réfrigérateur',
      description: 'Conservez vos aliments à portée de main',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Évier extérieur',
      description: 'Eau courante chaude et froide',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Four à pizza',
      description: 'Four traditionnel au bois ou à gaz',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: 'Rangements',
      description: 'Tiroirs et placards pour ustensiles',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ]

  const materials = [
    {
      name: 'Acier inoxydable',
      description: 'Résistant et facile d\'entretien',
      icon: '🔩'
    },
    {
      name: 'Pierre naturelle',
      description: 'Granit, marbre ou quartzite',
      icon: '🪨'
    },
    {
      name: 'Bois exotique',
      description: 'Teck ou ipé traité extérieur',
      icon: '🌳'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Rencontre',
      description: 'Étude de votre espace et de vos habitudes culinaires',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Design personnalisé',
      description: 'Plans détaillés et choix des matériaux et équipements',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Pose par nos équipes spécialisées avec raccordements',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Inauguration',
      description: 'Formation et première utilisation de votre cuisine',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-orange-900/85 to-red-900/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Outdoor kitchen"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating fire particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float opacity-70"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: '0 0 8px rgba(251, 146, 60, 0.8)'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
          <div className="inline-block mb-6">
            <svg className="w-28 h-28 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Cuisines <span className="text-orange-300">Extérieures</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Transformez votre jardin en espace gastronomique avec nos cuisines d'été sur mesure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Créer ma cuisine
            </Link>
            <a 
              href="#types" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Découvrir nos modèles
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: '2-4 sem.', label: 'Installation' },
              { value: '3-25 m²', label: 'Surface' },
              { value: 'Tout équipé', label: 'Électroménager' },
              { value: '100%', label: 'Sur mesure' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-300 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Les <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">Avantages</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
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

      {/* Types de cuisines avec images */}
      <section id="types" className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10"></div>
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80"
            alt="Outdoor cooking"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-orange-300">Modèles</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choisissez la cuisine extérieure adaptée à votre style de vie
            </p>
          </div>

          {/* Type selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {kitchenTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-700 text-white shadow-2xl scale-105'
                    : 'glass text-white border border-white/30 hover:border-white/60'
                }`}
              >
                <span className="text-white">{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>

          {/* Selected type details */}
          <div className="max-w-5xl mx-auto">
            {kitchenTypes.map((type) => (
              <div
                key={type.id}
                className={`transition-all duration-500 ${
                  selectedType === type.id ? 'block' : 'hidden'
                }`}
              >
                <div className="glass p-10 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Image */}
                    <div className="relative h-80 rounded-2xl overflow-hidden group">
                      <Image
                        src={type.image}
                        alt={type.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 font-semibold">Surface</p>
                              <p className="text-2xl font-bold text-primary-900">{type.surface}</p>
                            </div>
                            <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-white`}>
                              {type.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div>
                      <h3 className="text-3xl font-heading font-bold text-white mb-4">
                        Cuisine {type.name}
                      </h3>
                      <p className="text-xl text-gray-300 mb-8">
                        {type.description}
                      </p>

                      <div className="space-y-4">
                        {type.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <div className="w-6 h-6 bg-orange-300 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-red-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-gray-200 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-block bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                          Demander un devis
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipements Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Équipements <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">Disponibles</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tous les équipements pour une cuisine extérieure fonctionnelle
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((equipment, index) => (
              <div
                key={equipment.title}
                className="glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {equipment.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">
                  {equipment.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {equipment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériaux Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Matériaux <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">Premium</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Des matériaux durables résistants aux intempéries
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div
                key={material.name}
                className="glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-6">{material.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                  {material.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-100 to-transparent rounded-full translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Notre <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">Processus</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              De l'idée à la réalisation, nous vous accompagnons
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative mb-8 last:mb-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-grow glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-heading font-bold text-primary-900">
                        {item.title}
                      </h3>
                      <span className="text-orange-600">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index < process.length - 1 && (
                  <div className="w-0.5 h-8 bg-gradient-to-b from-orange-600 to-red-700 ml-10 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-orange-900/95 to-red-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80"
            alt="Outdoor kitchen gallery"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-orange-300">Réalisations</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez nos plus belles cuisines extérieures
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cuisine Complète',
                location: 'Lavans-lès-St Claude',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80'
              },
              {
                title: 'Cuisine Modulaire',
                location: 'Haut-Jura',
                image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80'
              },
              {
                title: 'Cuisine Prestige',
                location: 'Saint-Claude',
                image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl hover-lift"
              >
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-orange-300 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-orange-800/95 to-red-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80"
            alt="Outdoor dining"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Créez votre <span className="text-orange-300">cuisine de rêve</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Cuisinez et recevez en plein air avec une cuisine extérieure sur mesure
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Demander un devis</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <Link
                href="/showroom"
                className="glass border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Visiter notre showroom
              </Link>
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-orange-300 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Design personnalisé</h3>
                <p className="text-gray-300">Adapté à vos envies</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-orange-300 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Installation rapide</h3>
                <p className="text-gray-300">En 2 à 4 semaines</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-orange-300 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Garantie 10 ans</h3>
                <p className="text-gray-300">Sur toute la structure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}