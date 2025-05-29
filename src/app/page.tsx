'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const activities = [
    { name: 'Panneaux solaires', href: '/panneaux-solaires', icon: '☀️', color: 'from-yellow-400 to-orange-500' },
    { name: 'Bornes de recharge', href: '/bornes-recharge', icon: '🔌', color: 'from-blue-400 to-blue-600' },
    { name: 'Carports', href: '/carports', icon: '🚗', color: 'from-gray-400 to-gray-600' },
    { name: 'Pergolas', href: '/pergolas', icon: '🏡', color: 'from-green-400 to-green-600' },
    { name: 'Poolhouses', href: '/poolhouses', icon: '🏊', color: 'from-cyan-400 to-blue-500' },
    { name: 'Cuisines extérieures', href: '/cuisines-exterieures', icon: '👨‍🍳', color: 'from-red-400 to-orange-500' },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video/GIF Container */}
        <div className="absolute inset-0 z-0">
          {/* Replace this div with your video/gif */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 opacity-90"></div>
          {/* Uncomment and add your video/gif here:
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="/your-background-video.mp4" type="video/mp4" />
          </video>
          */}
          
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-transparent to-solar-blue/70"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/logo-dynamaison.png" 
                alt="DynaMaison Logo" 
                className="h-24 md:h-32 mx-auto mb-4"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
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
                className="bg-solar-orange hover:bg-red-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-colors duration-300 shadow-2xl"
              >
                Demander un devis gratuit
              </Link>
              <Link 
                href="#realisations" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-10 py-5 rounded-full font-bold text-lg transition-colors duration-300"
              >
                Nos réalisations
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* À propos - Stylish */}
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
              <div className="space-y-8">
                <div className="glass p-8 rounded-2xl hover-lift">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    « Conscients des enjeux environnementaux, électriciens de métier, nous sommes spécialisés dans les solutions renouvelables notamment les panneaux et ombrières photovoltaïques, ainsi que les bornes de recharges. »
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-solar-blue to-solar-green rounded-full flex items-center justify-center text-white font-bold">
                      C&M
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">Charles et Mohamed</p>
                      <p className="text-sm text-gray-600">Fondateurs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
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

      {/* Nos activités - Ultra Modern */}
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
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass p-8 rounded-2xl hover-lift group-hover:scale-105 transition-all duration-500 border border-white/20">
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${activity.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-2xl group-hover:rotate-12 transition-transform duration-300`}>
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-solar-yellow transition-colors duration-300">
                      {activity.name}
                    </h3>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-solar-orange/20 to-solar-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* Notre expertise - Glass Morphism Style */}
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
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-blue to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  ⭐
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                    Produits de qualité
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Une sélection de produits de qualité européenne pour garantir une fiabilité et une durabilité exceptionnelle de votre projet.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-green to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  🏠
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                    Proximité et disponibilité
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous déplaçons chez vous et vous accueillons dans notre showroom moderne pour découvrir nos solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-orange to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                    Analyse détaillée
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Étude complète et personnalisée pour tous types de projets : résidentiels, tertiaires, industriels ou publics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift border border-white/30 bg-white/60">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-yellow to-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  🤝
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                    Accompagnement sur mesure
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    De la conception à la réalisation, nous vous guidons à chaque étape avec expertise et passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos réalisations - Modern Gallery */}
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
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="text-white text-lg font-medium relative z-10">Installation Résidentielle</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="glass p-6 bg-white/10 border-t border-white/20">
                <h3 className="font-heading font-bold text-white mb-2 text-xl">Panneaux solaires + Pergola</h3>
                <p className="text-gray-300">Solution complète alliant énergie et confort</p>
                <div className="flex items-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                  <span className="text-sm text-gray-400">Projet terminé</span>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="text-white text-lg font-medium relative z-10">Carport Solaire</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="glass p-6 bg-white/10 border-t border-white/20">
                <h3 className="font-heading font-bold text-white mb-2 text-xl">Carport + Borne de recharge</h3>
                <p className="text-gray-300">Mobilité électrique et production d'énergie</p>
                <div className="flex items-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                  <span className="text-sm text-gray-400">Projet terminé</span>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="text-white text-lg font-medium relative z-10">Poolhouse Premium</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="glass p-6 bg-white/10 border-t border-white/20">
                <h3 className="font-heading font-bold text-white mb-2 text-xl">Poolhouse + Cuisine extérieure</h3>
                <p className="text-gray-300">Espace de vie extérieur complet</p>
                <div className="flex items-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-solar-green rounded-full"></div>
                  <span className="text-sm text-gray-400">Projet terminé</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/realisations" 
              className="group relative overflow-hidden bg-gradient-to-r from-solar-orange to-red-500 hover:from-red-500 hover:to-solar-orange text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10">Voir toutes nos réalisations</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Ultra Modern */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-blue-900 to-solar-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-solar-orange/10 via-transparent to-solar-green/10"></div>
          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
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
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link 
                href="/showroom" 
                className="glass border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Visiter notre showroom</span>
                <span className="text-solar-yellow">🏢</span>
              </Link>
            </div>
            
            {/* Contact info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-white">
              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-solar-yellow text-2xl mb-2">📍</div>
                <h3 className="font-bold mb-1">Notre localisation</h3>
                <p className="text-gray-300">Lavans-lès-St Claude, Haut-Jura</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-solar-yellow text-2xl mb-2">⚡</div>
                <h3 className="font-bold mb-1">Notre spécialité</h3>
                <p className="text-gray-300">Solutions photovoltaïques durables</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/20">
                <div className="text-solar-yellow text-2xl mb-2">🏆</div>
                <h3 className="font-bold mb-1">Notre engagement</h3>
                <p className="text-gray-300">Qualité européenne garantie</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
