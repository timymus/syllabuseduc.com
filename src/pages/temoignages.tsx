import React from 'react';




const Temoignages = () => {
  const testimonials = [
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
    },
    {
        name: "Ferroudja Dilmi",
        university: "Université de Toronto",
        quote: "Syllabus a fait de mon rêve d'étudier au Canada une réalité. Leurs conseils ont été inestimables !!"
      },
      {
        name: "Maryam omar",
        university: "Université de Montréal",
        quote: "L'accompagnement de l'équipe tout au long de mon processus de candidature a été exceptionnel. Hautement recommandé !"
      },
      {
        name: "Aicha Brahim",
        university: "University College London",
        quote: "Grâce à Syllabus, je poursuis désormais mon master dans l'université de mes rêves à Londres."
      }

    
  ];

    return (
        <div className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Témoignages d'etudiants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
    )
};

export default Temoignages;