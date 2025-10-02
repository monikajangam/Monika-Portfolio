import React from 'react';
import { ExternalLink, Github, Zap, Users, Database, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Habit Tracker Portal",
      description: "Full-stack habit tracking application with custom streak logic and secure user authentication, serving 3,000+ registered users with enhanced interaction quality.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Framer Motion", "JWT"],
      features: [
        "JWT-based secure authentication system",
        "Custom streak logic and habit logging",
        "Responsive design with smooth animations",
        "Real-time user statistics and progress tracking"
      ],
      impact: "400+ additional weekly sessions",
      icon: <Zap className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Inventory Management System",
      description: "Modular inventory platform using Spring Boot microservices with service discovery, centralized logging, and API Gateway for streamlined operations.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "MongoDB", "Kafka", "Prometheus", "Grafana"],
      features: [
        "Microservices architecture with service discovery",
        "Asynchronous stock updates with Kafka",
        "Role-based access control with Keycloak",
        "Real-time monitoring and alerting"
      ],
      impact: "5 distribution zones, 12 warehouse modules",
      icon: <Database className="w-6 h-6 text-green-600" />
    },
    {
      title: "DevOps-Enabled URL Shortener",
      description: "Production-ready URL shortener with sub-200ms redirect latency, handling 10,000+ daily hits with fully automated CI/CD deployment pipeline.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker", "GitHub Actions", "AWS EC2"],
      features: [
        "Sub-200ms redirect latency with Redis caching",
        "Containerized deployment with Docker",
        "Automated CI/CD pipeline via GitHub Actions",
        "Scalable architecture on AWS EC2"
      ],
      impact: "10,000+ daily hits, 100% automated deployments",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Role-Based Task Management System",
      description: "Enterprise task management system with ASP.NET Core backend, featuring comprehensive role separation and audit logging capabilities.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Identity Framework", "REST APIs"],
      features: [
        "User and admin role separation across departments",
        "Identity Framework integration",
        "Comprehensive audit logging system",
        "RESTful API architecture"
      ],
      impact: "20+ fewer error cases per sprint",
      icon: <Users className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of full-stack applications, microservices architectures, and DevOps implementations 
            that demonstrate scalable, secure, and efficient software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 font-medium">{project.impact}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Github size={16} className="mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;