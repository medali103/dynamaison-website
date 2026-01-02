'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function PanneauxSolaires() {
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

  const solarTypes = [
    {
      id: 'residential',
      name: 'Résidentiel',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      description: 'Solutions photovoltaïques pour votre maison',
      power: '3 à 9 kWc',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      features: [
        'Installation sur toiture ou au sol',
        'Dimensionnement personnalisé',
        'Accompagnement aux aides et subventions',
        'Garantie constructeur 25 ans'
      ]
    },
    {
      id: 'commercial',
      name: 'Tertiaire & Industriel',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      description: 'Solutions pour entreprises et bâtiments professionnels',
      power: '36 à 250 kWc',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
      features: [
        'Grandes installations photovoltaïques',
        'Ombrières de parking solaires',
        'Autoconsommation collective',
        'Maintenance et suivi de production'
      ]
    },
    {
      id: 'agricultural',
      name: 'Agricole',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      description: 'Solutions adaptées aux bâtiments agricoles',
      power: '36 à 500 kWc',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
      features: [
        'Hangars et bâtiments agricoles',
        'Solutions sur toitures existantes',
        'Revenu complémentaire durable',
        'Expertise en milieu rural'
      ]
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Économies d\'énergie',
      description: 'Réduisez vos factures d\'électricité jusqu\'à 70% grâce à l\'autoconsommation',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Écologique',
      description: 'Contribuez à la transition énergétique et réduisez votre empreinte carbone',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Valorisation',
      description: 'Augmentez la valeur de votre bien immobilier de manière durable',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Autonomie',
      description: 'Devenez producteur de votre propre énergie verte et locale',
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Étude personnalisée',
      description: 'Analyse de votre consommation, orientation, et surface disponible',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Conception sur mesure',
      description: 'Dimensionnement optimal et choix des équipements adaptés',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Pose professionnelle par nos électriciens qualifiés',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Mise en service',
      description: 'Raccordement, configuration et formation à l\'utilisation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: '05',
      title: 'Suivi & maintenance',
      description: 'Accompagnement continu et maintenance préventive',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  const technicalSpecs = [
    { label: 'Puissance', value: 'De 3 kWc à 100+ kWc' },
    { label: 'Panneaux', value: 'Monocristallins européens' },
    { label: 'Rendement', value: 'Jusqu\'à 22%' },
    { label: 'Garantie production', value: '90% à 25 ans' },
    { label: 'Onduleurs', value: 'Européens certifiés' },
    { label: 'Garantie équipements', value: '10 à 25 ans' }
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-yellow-900/85 to-orange-900/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
            alt="Solar panels on roof"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating sun rays particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: '0 0 10px rgba(253, 224, 71, 0.8)'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
          <div className="inline-block mb-6">
            <svg className="w-28 h-28 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Panneaux <span className="text-yellow-400">Solaires</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Transformez l'énergie du soleil en économies durables avec nos solutions photovoltaïques de qualité européenne
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <a 
              href="#types" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Découvrir nos solutions
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: '25 ans', label: 'Garantie' },
              { value: '70%', label: 'Économies' },
              { value: '22%', label: 'Rendement' },
              { value: 'RGE', label: 'Certifié' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/20 bg-white/5">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages - Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Pourquoi choisir le <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">solaire</span> ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
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

      {/* Types de solutions avec images */}
      <section id="types" className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10"></div>
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"
            alt="Solar farm"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-yellow-400">Solutions</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des installations photovoltaïques adaptées à tous les besoins
            </p>
          </div>

          {/* Type selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solarTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-2xl scale-105'
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
            {solarTypes.map((type) => (
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
                            <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                          Obtenir un devis personnalisé
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

      {/* Notre processus */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Notre <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Processus</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              De l'étude à la mise en service, un accompagnement complet et professionnel
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
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
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
                  <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-600 ml-10 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spécifications techniques avec image de fond */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-blue-900/95 to-orange-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80"
            alt="Solar panels closeup"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Spécifications <span className="text-yellow-400">Techniques</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="glass p-8 rounded-2xl hover-lift border border-white/20 bg-white/5 backdrop-blur-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                        {spec.label}
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {spec.value}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality badges */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl text-center border border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="text-4xl mb-3">
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">Qualité Européenne</h4>
                <p className="text-gray-300 text-sm">Panneaux et onduleurs certifiés</p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center border border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="text-4xl mb-3">
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">Garantie Constructeur</h4>
                <p className="text-gray-300 text-sm">Jusqu'à 25 ans de garantie</p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center border border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="text-4xl mb-3">
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">Certification RGE</h4>
                <p className="text-gray-300 text-sm">Éligible aux aides d'État</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Questions <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Fréquentes</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Quelle est la durée de vie d'une installation photovoltaïque ?",
                a: "Les panneaux solaires ont une durée de vie de 30 à 40 ans minimum. Nos panneaux sont garantis 25 ans avec un rendement d'au moins 90% de leur capacité initiale."
              },
              {
                q: "Puis-je bénéficier d'aides financières ?",
                a: "Oui ! En tant qu'installateur RGE, nous vous accompagnons dans vos démarches pour bénéficier des aides de l'État, de la prime à l'autoconsommation et des tarifs de rachat avantageux."
              },
              {
                q: "Combien de temps dure une installation ?",
                a: "Une installation résidentielle classique se réalise en 2 à 3 jours. Les délais varient selon la taille du projet et les spécificités techniques."
              },
              {
                q: "Les panneaux fonctionnent-ils par temps nuageux ?",
                a: "Oui, les panneaux photovoltaïques produisent de l'électricité même par temps couvert, bien que le rendement soit réduit. Le Haut-Jura bénéficie d'un ensoleillement suffisant pour une production optimale."
              },
              {
                q: "Faut-il une autorisation pour installer des panneaux solaires ?",
                a: "Dans la plupart des cas, une déclaration préalable de travaux suffit. Nous nous chargeons de toutes les démarches administratives pour vous."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover-lift border border-gray-200 bg-white"
              >
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-4 flex items-start">
                  <span className="text-orange-600 mr-3 flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-red-900/90 to-orange-900/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80"
            alt="Solar panels sunset"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Prêt à passer à l'<span className="text-yellow-400">énergie solaire</span> ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Obtenez une étude personnalisée gratuite et découvrez votre potentiel d'économies
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
                <div className="text-yellow-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Appelez-nous</h3>
                <p className="text-gray-300">Pour un conseil personnalisé</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-yellow-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Visitez-nous</h3>
                <p className="text-gray-300">Showroom à Lavans-lès-St Claude</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-yellow-400 text-2xl mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Devis rapide</h3>
                <p className="text-gray-300">Réponse sous 48h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}