export default function Gallery() {
  const images = [
    {
      url: "src/images/fivesitting.facing.camera.jpg",
      caption: "Étudiants à l'Université de Cambridge"
    },
    {
      url: "src/images/Junior students in Spanish class .jpg",
      caption: "Graduation Day Celebrations"
    },
    {
      url: "src/images/Students sitting at desk next to blackboard.jpg",
      caption: "La vie sur le campus en Australie"
    },
    {
      url: "src/images/Students celebrating graduation.jpg",
      caption: "Célébrations du jour de remise des diplômes"
    },
    {
      url: "src/images/Language instructor interacting with students .jpg",
      caption: "Rencontre des étudiants internationaux"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      caption: "Séance d'orientation professionnelle"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Galerie de la réussite des étudiants</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Aperçus du parcours et des réalisations de nos étudiants à travers le monde
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages d'etudiants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Benmabrouk",
                university: "Université de Toronto",
                quote: "Syllabus a fait de mon rêve d'étudier au Canada une réalité. Leurs conseils ont été inestimables !!"
              },
              {
                name: "Leila Tilaba",
                university: "Université de Montréal",
                quote: "L'accompagnement de l'équipe tout au long de mon processus de candidature a été exceptionnel. Hautement recommandé !"
              },
              {
                name: "Zachary mestina",
                university: "University College London",
                quote: "Grâce à Syllabus, je poursuis désormais mon master dans l'université de mes rêves à Londres."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}