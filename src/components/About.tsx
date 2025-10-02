import React from 'react';
import { Code, Database, Cloud, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: "Expert in Java (Spring Boot), React.js, and Angular with 4 years of hands-on experience"
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      title: "Cloud Architecture",
      description: "Proficient in AWS services (EC2, Lambda, S3) and containerization with Docker & Kubernetes"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Design",
      description: "Skilled in PostgreSQL, MongoDB, and MySQL with optimization expertise"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Security & DevOps",
      description: "Implementation of OAuth 2.0, JWT authentication, and CI/CD automation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Profile</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated software engineer committed to delivering scalable, secure, and efficient solutions 
            that drive business success across healthcare, transportation, and enterprise domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg">
                With over 5 years of software engineering experience, I specialize in architecting backend automation 
                services and building full-stack applications that address complex business challenges. My professional 
                journey has encompassed enterprise environments where I've successfully deployed solutions across 
                multiple departments, resulting in significant operational efficiency improvements.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Graduated with Master's in Data Science at the University at Buffalo, I am expanding my 
                expertise into data-driven solutions while maintaining my strong foundation in software development. 
                I excel in Agile environments and am committed to creating secure, scalable applications using 
                cutting-edge technologies and industry best practices.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                <div className="text-3xl font-bold text-slate-800">4+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                <div className="text-3xl font-bold text-slate-800">50+</div>
                <div className="text-sm text-slate-600 font-medium">Hours Saved Monthly</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                <div className="text-3xl font-bold text-slate-800">200+</div>
                <div className="text-sm text-slate-600 font-medium">Users Supported</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-slate-600">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 ml-3">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;