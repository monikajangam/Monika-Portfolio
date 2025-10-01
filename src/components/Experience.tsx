import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Eli Lilly",
      role: "Software Engineer",
      location: "USA",
      period: "February 2025 – Present",
      achievements: [
        "Engineered Java Spring Boot microservices for distributed, low-latency transaction workflows, reducing latency 65% (2.3s → 0.8s) across 3 service zones handling 65k+ daily operations",
        "Architected scalable event-driven APIs using AWS Lambda, API Gateway, and MongoDB, processing 200k+ transactions daily with sub-second responsiveness",
        "Secured 12+ RESTful endpoints via JWT/OAuth 2.0 with tokenized MongoDB storage, eliminating session vulnerabilities and aligning with zero-trust architecture across 20+ deployments",
        "Streamlined CI/CD pipelines using Docker and GitLab, reducing deployment cycles by 40 minutes per release and enhancing reliability for 18 backend modules",
        "Migrated state management of 3 internal React.js tools to Spring Boot APIs, cutting support resolution time by 25%",
        "Resolved 15+ production incidents by analyzing Java logs, validating with Postman, and optimizing MongoDB queries, restoring service for 120k+ users",
        "Led 5 Agile sprints across 4 teams using JIRA, Git, and Postman to deliver 5 on-time, full-scope production releases"
      ],
      technologies: ["Java", "Spring Boot", "AWS Lambda", "API Gateway", "MongoDB", "JWT", "OAuth 2.0", "Docker", "GitLab", "React.js", "Postman", "JIRA"]
    },
    {
      company: "Conduent Business Services",
      role: "Software Dev. Engineer",
      location: "India",
      period: "August 2019 – June 2023",
      achievements: [
        "Architected backend automation services using Spring Boot, deploying logic across 4 internal departments and saving over 50 operational hours per month",
        "Integrated microservices using Java, JSON, and MySQL to support 10 real-time vendor platforms, improving regulatory data consistency",
        "Tuned MySQL queries and stored procedures for compliance reports, decreasing execution time from 20 to 6 seconds",
        "Designed authentication workflows with JWT, HTTPS, and hashing techniques, resolving 18 security issues during quarterly audits",
        "Programmed 15 frontend components using React.js, Bootstrap, and jQuery for 2 internal portals serving 200+ support team members",
        "Diagnosed 40 recurring production errors through Java logs analysis, API testing, and MongoDB queries"
      ],
      technologies: ["Spring Boot", "Java", "React.js", "MySQL", "MongoDB", "JWT", "Bootstrap"]
    },
    {
      company: "Dell Technologies",
      role: "Software Dev Intern",
      location: "India",
      period: "January 2019 – July 2019",
      achievements: [
        "Assembled backend modules using Spring Boot for internal asset-tracking system across 6 business units, reconciling 9,000+ inventory records",
        "Automated report generation using Java schedulers and PowerShell scripts, eliminating 56 hours of manual work per month",
        "Resolved deployment issues by analyzing Java logs and querying MySQL tables, uncovering 8 recurring root causes",
        "Documented 18+ unit test cases in JIRA and contributed to code reviews via Confluence",
        "Developed secure RESTful APIs with JWT tokens for 3 enterprise modules, supporting 100+ internal users",
        "Coded responsive interfaces using React.js and Bootstrap, reducing asset lookup time from 3.5 minutes to 90 seconds"
      ],
      technologies: ["Spring Boot", "Java", "React.js", "MySQL", "JWT", "PowerShell", "JIRA"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            5+ years of hands-on experience in enterprise software development, cloud architecture, and system optimization
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-32 w-0.5 h-24 bg-slate-200"></div>
              )}
              
              <div className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="hidden md:flex w-16 h-16 bg-slate-100 rounded-full items-center justify-center mr-6 flex-shrink-0">
                      <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                      <h4 className="text-xl font-semibold text-slate-700 mb-2">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h5 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements</h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight size={16} className="text-slate-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-slate-900 mb-4">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;