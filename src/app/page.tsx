'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4
    }))
    setParticles(generatedParticles)
  }, [])
  
  const activities = [
    { 
      name: 'Panneaux solaires', 
      href: '/panneaux-solaires', 
      color: 'from-yellow-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      description: 'Production d\'énergie solaire'
    },
    { 
      name: 'Bornes de recharge', 
      href: '/bornes-recharge', 
      color: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
      description: 'Mobilité électrique'
    },
    { 
      name: 'Carports', 
      href: '/carports', 
      color: 'from-gray-400 to-gray-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      description: 'Protection véhicules'
    },
    { 
      name: 'Pergolas', 
      href: '/pergolas', 
      color: 'from-green-400 to-green-600',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      description: 'Espaces de vie extérieurs'
    },
    { 
      name: 'Poolhouses', 
      href: '/poolhouses', 
      color: 'from-cyan-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      description: 'Confort piscine'
    },
    { 
      name: 'Cuisines extérieures', 
      href: '/cuisines-exterieures', 
      color: 'from-red-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      description: 'Art culinaire extérieur'
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Real Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
            alt="Solar panels installation" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-blue-900/70 to-primary-900/80"></div>
        </div>
        
        {/* Floating particles effect */}
        {particles.length > 0 && (
          <div className="absolute inset-0 z-20">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-solar-yellow/40 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: '0 0 10px rgba(251, 191, 36, 0.6)'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white animate-fade-in">
              DynaMaison
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl md:text-3xl font-medium mb-6 text-solar-yellow">
              Solutions photovoltaïques et aménagements extérieurs
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-100 leading-relaxed">
              Électriciens de métier spécialisés dans les solutions renouvelables et les aménagements extérieurs durables dans le Haut-Jura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-solar-orange to-red-500 hover:from-red-500 hover:to-solar-orange text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
              <Link 
                href="#realisations" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
              >
                Nos réalisations
              </Link>
            </div>
          </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* À propos - With Real Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-solar-blue/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
                À propos de <span className="gradient-text">DynaMaison</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative h-96 rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Notre équipe"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-solar-blue to-solar-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                      C&M
                    </div>
                    <div className="text-white">
                      <p className="font-semibold text-lg">Charles et Mohamed</p>
                      <p className="text-sm text-gray-200">Fondateurs - Électriciens qualifiés</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    « Conscients des enjeux environnementaux, électriciens de métier, nous sommes spécialisés dans les solutions renouvelables notamment les panneaux et ombrières photovoltaïques, ainsi que les bornes de recharges. »
                  </p>
                </div>

                <div className="bg-gradient-to-r from-solar-blue to-primary-900 text-white p-8 rounded-2xl hover-lift">
                  <h3 className="text-2xl font-heading font-bold mb-4">Notre Vision</h3>
                  <p className="text-lg leading-relaxed">
                    « Chaque projet est différent et nécessite une analyse complète des besoins de chacun »
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-solar-green to-green-600 text-white p-8 rounded-2xl hover-lift">
                  <h3 className="text-2xl font-heading font-bold mb-4">Notre Origine</h3>
                  <p className="leading-relaxed">
                    Parc naturel régional du Haut-Jura, Lavans-lès-St Claude
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos activités - With Real Images */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-solar-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-solar-green rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-solar-yellow">Activités</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Link
                key={activity.name}
                href={activity.href}
                className="group relative overflow-hidden rounded-2xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Background */}
                <div className="relative h-80">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300`}></div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-solar-yellow transition-colors duration-300 mb-2">
                      {activity.name}
                    </h3>
                    <p className="text-gray-200 text-sm">{activity.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise - With Real Images */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-solar-blue/20 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-solar-green/20 to-transparent rounded-full translate-y-36 translate-x-36"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
              Notre <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60 group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
                  alt="Qualité européenne"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-solar-blue to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl">
                    ⭐
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                Produits de qualité
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Une sélection de produits de qualité européenne pour garantir une fiabilité et une durabilité exceptionnelle de votre projet.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60 group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Proximité"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-solar-green to-green-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl">
                    🏠
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                Proximité et disponibilité
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nous nous déplaçons chez vous et vous accueillons dans notre showroom moderne pour découvrir nos solutions.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60 group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Analyse détaillée"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-solar-orange to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl">
                    📊
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                Analyse détaillée
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Étude complète et personnalisée pour tous types de projets : résidentiels, tertiaires, industriels ou publics.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60 group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Accompagnement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-solar-yellow to-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-xl">
                    🤝
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                Accompagnement sur mesure
              </h3>
              <p className="text-gray-700 leading-relaxed">
                De la conception à la réalisation, nous vous guidons à chaque étape avec expertise et passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos réalisations - Real Project Images */}
      <section id="realisations" className="py-20 bg-gradient-to-br from-gray-900 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-orange rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-solar-green rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Nos <span className="text-solar-yellow">Réalisations</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos plus belles réalisations dans le Haut-Jura
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  alt="Installation résidentielle"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass p-4 rounded-xl border border-white/20 bg-white/10">
                    <h3 className="font-heading font-bold text-white mb-2 text-xl">Panneaux solaires + Pergola</h3>
                    <p className="text-gray-200 text-sm mb-3">Solution complète alliant énergie et confort</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                      <span className="text-xs text-gray-300">Projet terminé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80"
                  alt="Carport solaire"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass p-4 rounded-xl border border-white/20 bg-white/10">
                    <h3 className="font-heading font-bold text-white mb-2 text-xl">Carport + Borne de recharge</h3>
                    <p className="text-gray-200 text-sm mb-3">Mobilité électrique et production d&apos;énergie</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                      <span className="text-xs text-gray-300">Projet terminé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                  alt="Poolhouse premium"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass p-4 rounded-xl border border-white/20 bg-white/10">
                    <h3 className="font-heading font-bold text-white mb-2 text-xl">Poolhouse + Cuisine extérieure</h3>
                    <p className="text-gray-200 text-sm mb-3">Espace de vie extérieur complet</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                      <span className="text-xs text-gray-300">Projet terminé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/showroom" 
              className="group relative overflow-hidden bg-gradient-to-r from-solar-orange to-red-500 hover:from-red-500 hover:to-solar-orange text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <span className="relative z-10">Voir toutes nos réalisations</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - With Background Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80"
            alt="Contactez-nous"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-blue-900/90 to-primary-900/95"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Prêt à concrétiser votre <span className="text-solar-yellow">projet</span> ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-solar-orange to-solar-yellow mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Contactez-nous pour une étude personnalisée et découvrez nos solutions sur mesure dans notre showroom moderne
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-solar-orange to-red-500 hover:from-red-500 hover:to-solar-orange text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Nous contacter</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              
              <Link 
                href="/showroom" 
                className="glass border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Visiter notre showroom</span>
              </Link>
            </div>
            
            {/* Contact info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-white">
              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-solar-yellow text-3xl mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1 text-lg">Notre localisation</h3>
                <p className="text-gray-300">Lavans-lès-St Claude, Haut-Jura</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-solar-yellow text-3xl mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1 text-lg">Notre spécialité</h3>
                <p className="text-gray-300">Solutions photovoltaïques durables</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-solar-yellow text-3xl mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1 text-lg">Notre engagement</h3>
                <p className="text-gray-300">Qualité européenne garantie</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}