import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HaveaTalk",
      description:
        "Full-stack real-time collaboration platform with authentication, chat, video calls, and screen sharing. Built from scratch with 4000+ lines of code in 20-25 days.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Strean API & SDKs",
      ],
      liveUrl: "https://haveatalk.onrender.com",
      githubUrl: "https://github.com/nikhil-kamboj420",
      featured: true,
    },
    {
      title: "SwiftCountries",
      description:
        "React-based application displaying comprehensive country data including population, languages, and more using a public API. Features advanced search and filtering capabilities.",
      tech: ["React", "Tailwind CSS", "REST API", "Responsive Design"],
      liveUrl: "https://swiftcountries.vercel.app/",
      githubUrl: "https://github.com/nikhil-kamboj420",
      featured: true,
    },
    {
      title: "Kamboj Store",
      description:
        "E-commerce website with custom API integration and fully responsive design. Implements modern UI/UX principles for optimal shopping experience.",
      tech: [
        "HTML",
        "CSS",
        " JAVASCRIPT",
        "API Integration",
        "Responsive Design",
      ],
      liveUrl: "https://kambojstore.netlify.app",
      githubUrl: "https://github.com/nikhil-kamboj420",
      featured: false,
    },
    {
      title: "CRUD Application",
      description:
        "React application demonstrating full CRUD functionality with Axios for API communication. Clean and intuitive interface for data management.",
      tech: ["React", "Axios", "REST API"],
      liveUrl: "https://nikhil-kamboj420.github.io/React-CRUD-With-Axios/",
      githubUrl: "https://github.com/nikhil-kamboj420",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in
            full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
                  >
                    View Live Project
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
