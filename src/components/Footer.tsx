import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
            <img 
                src="src/images/syllabusblanc.svg" 
                alt="Logo Syllabus"
                className="h-16 w-auto" // Ajout des dimensions
              />
            </div>
            <p className="text-gray-400">
            Aider les étudiants à réaliser leur rêve d'étudier à l'étranger grâce à des conseils et un soutien personnalisés.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">University Placement</li>
              <li className="text-gray-400">Visa Assistance</li>
              <li className="text-gray-400">Career Counseling</li>
              <li className="text-gray-400">Test Preparation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>5 rue Aissa Djordjani, les Sources, BMR Algiers</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+213 54 35 46</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@syllabuseduc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Syllabus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}