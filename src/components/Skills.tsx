import React from 'react';
import { Code2, Database, Cloud, Wrench, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const techStack = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "Java", color: "text-orange-500" },
        { name: "JavaScript", color: "text-yellow-500" },
        { name: "TypeScript", color: "text-blue-500" },
        { name: "PHP", color: "text-purple-500" },
        { name: "Python", color: "text-green-500" },
        { name: "C#", color: "text-blue-600" }
      ]
    },
    {
      category: "Frontend Technologies",
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "HTML5", color: "text-orange-500" },
        { name: "CSS3", color: "text-blue-500" },
        { name: "Bootstrap", color: "text-purple-500" },
        { name: "jQuery", color: "text-blue-600" },
        { name: "Angular", color: "text-red-500" },
        { name: "React", color: "text-cyan-500" },
        { name: "TailwindCSS", color: "text-cyan-400" }
      ]
    },
    {
      category: "Backend & Frameworks",
      icon: <Database className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "Spring Boot", color: "text-green-500" },
        { name: "Node.js", color: "text-green-600" },
        { name: "Express.js", color: "text-gray-600" },
        { name: "Laravel", color: "text-red-500" },
        { name: "ASP.NET Core", color: "text-purple-500" }
      ]
    },
    {
      category: "Database Technologies",
      icon: <Database className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "MongoDB", color: "text-green-500" },
        { name: "MySQL", color: "text-blue-500" },
        { name: "PostgreSQL", color: "text-blue-600" },
        { name: "SQL Server", color: "text-red-500" },
        { name: "Redis", color: "text-red-600" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "AWS", color: "text-orange-500" },
        { name: "Docker", color: "text-blue-500" },
        { name: "Kubernetes", color: "text-blue-600" },
        { name: "GitHub Actions", color: "text-gray-600" },
        { name: "GitLab CI/CD", color: "text-orange-600" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Shield className="w-6 h-6 text-slate-600" />,
      technologies: [
        { name: "Git", color: "text-orange-500" },
        { name: "Postman", color: "text-orange-600" },
        { name: "JIRA", color: "text-blue-500" },
        { name: "Confluence", color: "text-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical proficiency across the full software development lifecycle, 
            from frontend frameworks to cloud architecture and DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {techStack.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-slate-900 ml-3">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Practices */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Professional Practices</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Wrench className="w-10 h-10 text-slate-600 mb-3" />
              <span className="font-semibold text-slate-900 text-sm">Agile Development</span>
              <span className="text-xs text-slate-600 mt-1">Scrum Methodology</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 text-slate-600 mb-3" />
              <span className="font-semibold text-slate-900 text-sm">Security First</span>
              <span className="text-xs text-slate-600 mt-1">OAuth 2.0, JWT</span>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-10 h-10 text-slate-600 mb-3" />
              <span className="font-semibold text-slate-900 text-sm">API Architecture</span>
              <span className="text-xs text-slate-600 mt-1">RESTful Services</span>
            </div>
            <div className="flex flex-col items-center">
              <Cloud className="w-10 h-10 text-slate-600 mb-3" />
              <span className="font-semibold text-slate-900 text-sm">Cloud Native</span>
              <span className="text-xs text-slate-600 mt-1">AWS, Containerization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;