'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function BornesRecharge() {
  const [selectedType, setSelectedType] = useState('residential')
  const [particles, setParticles] = useState([])

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

  const chargingTypes = [
    {
      id: 'residential',
      name: 'Résidentiel',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      description: 'Solutions de recharge pour particuliers',
      power: '7 à 22 kW',
      features: [
        'Installation murale ou sur pied',
        'Programmation horaire intelligente',
        'Application mobile de suivi',
        'Compatible tous véhicules électriques',
        'Garantie 3 ans constructeur'
      ]
    },
    {
      id: 'commercial',
      name: 'Entreprise',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      description: 'Bornes pour parkings d\'entreprise',
      power: '7 à 50 kW',
      features: [
        'Gestion multi-utilisateurs',
        'Système de facturation intégré',
        'Monitoring à distance',
        'Installation de 2 à 50+ bornes',
        'Maintenance préventive incluse'
      ]
    },
    {
      id: 'public',
      name: 'Public & Collectivité',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      description: 'Infrastructures de recharge publique',
      power: '22 à 150 kW',
      features: [
        'Bornes rapides DC',
        'Paiement par carte bancaire',
        'Supervision centralisée',
        'Conformité IRVE',
        'Résistant aux intempéries'
      ]
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Recharge rapide',
      description: 'Rechargez votre véhicule jusqu\'à 10x plus vite qu\'une prise domestique',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Sécurité maximale',
      description: 'Protection contre les surcharges, certification CE et IP54',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Pilotage intelligent',
      description: 'Gérez votre recharge depuis votre smartphone, programmez vos heures creuses',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Économies',
      description: 'Réduction jusqu\'à 60% du coût au kilomètre vs véhicules thermiques',
      color: 'from-green-400 to-emerald-500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Étude technique',
      description: 'Visite sur site, analyse de l\'installation électrique et dimensionnement',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Devis personnalisé',
      description: 'Proposition détaillée incluant matériel, pose et aides financières',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Pose par électricien qualifié IRVE, raccordement et mise en service',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Formation',
      description: 'Prise en main de votre borne et de l\'application mobile',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  const brands = [
    'Tesla', 'Renault', 'Peugeot', 'Volkswagen', 'BMW', 'Audi', 'Mercedes',
    'Nissan', 'Hyundai', 'Kia', 'Porsche', 'Volvo', 'Ford', 'Citroën'
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-blue-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80"
            alt="Electric vehicle charging"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Animated electric particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
          <div className="inline-block mb-6">
            <div className="relative">
              <svg className="w-28 h-28 text-cyan-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 10-12h-8z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Bornes de <span className="text-cyan-400">Recharge</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Rechargez votre véhicule électrique en toute simplicité avec nos solutions de recharge intelligentes et rapides
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Installer une borne
            </Link>
            <a 
              href="#types" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Découvrir nos bornes
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: '7-22kW', label: 'Puissance' },
              { value: '<24h', label: 'Installation' },
              { value: '3 ans', label: 'Garantie' },
              { value: '100%', label: 'Compatible' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/20 bg-white/5">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Car Brand Compatibility Section */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        Compatible avec{" "}
        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          tous les véhicules
        </span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Nos bornes fonctionnent avec toutes les marques de véhicules électriques et hybrides
      </p>
    </div>

    {/* Brand Logos Grid */}
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
        {[
          { name: "Tesla", icon: "tesla" },
          { name: "Renault", icon: "renault" },
          { name: "Peugeot", icon: "peugeot" },
          { name: "Volkswagen", icon: "volkswagen" },
          { name: "BMW", icon: "bmw" },
          { name: "Audi", icon: "audi" },
          { name: "Mercedes", icon: "mercedes" },
          { name: "Nissan", icon: "nissan" },
          { name: "Hyundai", icon: "hyundai" },
          { name: "Kia", icon: "kia" },
          { name: "Porsche", icon: "porsche" },
          { name: "Volvo", icon: "volvo" },
          { name: "Ford", icon: "ford" },
          { name: "Citroën", icon: "citroen" },
        ].map((brand, index) => (
          <div
            key={brand.name}
            className="glass p-6 rounded-2xl hover-lift border border-gray-200 bg-white group"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="relative h-16 mb-3 flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brand.icon}.svg`}
                  alt={`${brand.name} logo`}
                  className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // fallback: if an icon name ever fails, just hide the image
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
            <h3 className="text-center font-bold text-gray-700 group-hover:text-cyan-600 transition-colors">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Type 2 Info */}
     
    </div>
  </div>
</section>


      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Les <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Avantages</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
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

      {/* Types de bornes Section */}
      <section id="types" className="py-20 bg-gradient-to-br from-primary-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Charging stations"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-cyan-400">Solutions</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choisissez la borne adaptée à vos besoins
            </p>
          </div>

          {/* Type selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {chargingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl scale-105'
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
            {chargingTypes.map((type) => (
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
                        src={
                          type.id === 'residential' 
                            ? 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80'
                            : type.id === 'commercial'
                            ? 'https://images.unsplash.com/photo-1611484670691-1979ea5e8932?w=800&q=80'
                            : 'https://images.unsplash.com/photo-1617788138017-94fcb0ebf7fc?w=800&q=80'
                        }
                        alt={type.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 font-semibold">Puissance</p>
                              <p className="text-2xl font-bold text-primary-900">{type.power}</p>
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
                        {type.name}
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
                            <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
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
                          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
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

      {/* Compatibilité Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Compatible avec <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">tous les véhicules</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700">
              Nos bornes fonctionnent avec toutes les marques de véhicules électriques et hybrides
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={brand}
                  className="glass p-6 rounded-2xl hover-lift border border-gray-200 bg-white flex items-center justify-center group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="font-bold text-gray-700 group-hover:text-cyan-600 transition-colors">
                    {brand}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg">
                <span className="font-bold text-cyan-600">Type 2</span> et <span className="font-bold text-cyan-600">Type 2 Combo</span> (CCS) inclus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-transparent rounded-full translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Installation <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Simple et Rapide</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Votre borne installée en 4 étapes par nos électriciens qualifiés IRVE
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
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-grow glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-heading font-bold text-primary-900">
                        {item.title}
                      </h3>
                      <span className="text-cyan-600">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index < process.length - 1 && (
                  <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 ml-10 my-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Certification badges */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl text-center border border-gray-200 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-primary-900 mb-2">Qualification IRVE</h4>
              <p className="text-gray-600">Installateurs certifiés</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center border border-gray-200 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-primary-900 mb-2">Garantie 3 ans</h4>
              <p className="text-gray-600">Pièces et main d'œuvre</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center border border-gray-200 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-primary-900 mb-2">Aides financières</h4>
              <p className="text-gray-600">Crédit d'impôt jusqu'à 75%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 via-blue-900/95 to-purple-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
            alt="Electric charging"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Prêt à installer votre <span className="text-cyan-400">borne</span> ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Obtenez un devis gratuit en 48h et profitez des aides financières
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Demander un devis</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <a
                href="tel:+33123456789"
                className="glass border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Nous appeler
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-cyan-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Installation rapide</h3>
                <p className="text-gray-300">En moins de 24h</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-cyan-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Qualification IRVE</h3>
                <p className="text-gray-300">Électriciens certifiés</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-cyan-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Aides financières</h3>
                <p className="text-gray-300">Jusqu'à 75% de crédit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}