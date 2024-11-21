import { BookOpen, GraduationCap, FileText, Compass, Building2, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Compass className="h-12 w-12 text-blue-600" />,
      title: "Education Counseling",
      description: "Personalized guidance to help you choose the right course and university based on your academic background, interests, and career goals."
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "University Selection",
      description: "Expert assistance in selecting and applying to universities that best match your academic profile and aspirations."
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Visa Assistance",
      description: "Complete support with visa application process, documentation, and interview preparation."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Test Preparation",
      description: "Comprehensive preparation programs for IELTS, TOEFL, GRE, GMAT, and other standardized tests."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Scholarship Guidance",
      description: "Information and assistance with scholarship applications and financial aid opportunities."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-blue-600" />,
      title: "Pre-Departure Support",
      description: "Guidance on accommodation, travel arrangements, and cultural preparation for your study abroad journey."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive support for your international education journey, from counseling to pre-departure assistance.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation Initiale", description: "Consultation gratuite pour comprendre vos objectifs" },
              { step: "2", title: "Evaluation du profile", description: "Évaluer le parcours académique et les préférences" },
              { step: "3", title: "Selection d'universités", description: "Présélectionner les universités les mieux adaptées" },
              { step: "4", title: "Support d'Application ", description: "Assistance complète de selection" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}