import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science, Data Science",
      institution: "University at Buffalo, The State University of New York",
      location: "USA",
      period: "August 2023 – December 2024",
      status: "Current",
      highlights: [
        "Advanced coursework in Machine Learning and Statistical Analysis",
        "Data Mining and Big Data Technologies",
        "Applied Statistics and Predictive Modeling",
        "Research in AI/ML applications for enterprise systems"
      ],
      color: "bg-blue-100 text-blue-800"
    },
    {
      degree: "Bachelor of Engineering, Computer Science",
      institution: "R.V. College of Engineering",
      location: "India",
      period: "August 2015 – June 2019",
      status: "Completed",
      highlights: [
        "Strong foundation in Data Structures and Algorithms",
        "Software Engineering and System Design principles",
        "Database Management Systems and Web Technologies",
        "Final year project on Enterprise Application Development"
      ],
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science with ongoing specialization in data science, 
            combining theoretical knowledge with practical application
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline connection */}
              {index !== educationData.length - 1 && (
                <div className="hidden md:block absolute left-8 top-32 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start mb-6 lg:mb-0 flex-1">
                      <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center mr-6 flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 mr-3">{edu.degree}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${edu.color}`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-blue-600 mb-4">{edu.institution}</h4>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-2 sm:space-y-0 sm:space-x-6 mb-6">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-0 md:ml-22">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-yellow-600" />
                      Key Highlights
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Academic Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900">Years Undergraduate</h4>
              <p className="text-gray-600 text-sm mt-1">Computer Science Engineering</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">1.5</span>
              </div>
              <h4 className="font-semibold text-gray-900">Years Graduate</h4>
              <p className="text-gray-600 text-sm mt-1">Data Science Specialization</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">4+</span>
              </div>
              <h4 className="font-semibold text-gray-900">Years Experience</h4>
              <p className="text-gray-600 text-sm mt-1">Professional Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;