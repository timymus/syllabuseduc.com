import { ArrowRight, GlobeIcon, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("src/images/Students celebrating graduation.jpg")'
        }}
        >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Go further, <br />Go farthr, <br />Study Abroad!</h1>
          <p className="text-xl md:text-2xl mb-8">Des conseils d'experts pour vos rêves d'éducation internationale</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            En savoir plus
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi nous choisir</h2>
            <p className="mt-4 text-xl text-gray-600">Nous rendons votre séjour d'études à l'étranger fluide et réussi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GlobeIcon className="h-12 w-12 text-blue-600" />,
                title: "Réseau Mondial",
                description: "Partenariats avec les meilleures universités du monde"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-blue-600" />,
                title: "Conseils d'expert",
                description: "Conseil personnalisé par un conseiller expérimenté"
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Réussite des etudiants",
                description: "Antécédents prouvés de placements réussis"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "232+", label: "Etudiants placés" },
              { number: "32+", label: "Universités partenairess" },
              { number: "11+", label: "Pays" },
              { number: "92%", label: "Taux de réussite" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à commencer votre voyage ?</h2>
          <p className="text-xl text-gray-600 mb-8">Laissez-nous vous aider à atteindre vos objectifs en matière d'éducation internationale</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}