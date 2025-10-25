import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Internship Certificate",
      issuer: "Unified Mentor",
      date: "Dec 2024",
      description:
        "Successfully completed a comprehensive web development internship focusing on frontend and real-time application development.",
      skills: [
        "React",
        "Socket.IO",
        "Frontend Development",
        "Real-time Applications",
      ],
      link: "https://drive.google.com/file/d/1SWFhaWJxk7Kc3GSSPFktoYFJ3wHtEAP1/view",
    },
    {
      title: "Frontend Technology Certificate",
      issuer: "Cutshort",
      date: "2024",
      description:
        "Certification in frontend technologies demonstrating proficiency in modern web development practices.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      link: "https://drive.google.com/drive/folders/15Hlj04fJ0Qa7pJovt23cH9V4jSEbX4ku",
    },
    {
      title: "Frontend Technology Certificate",
      issuer: "Great Learning Institute",
      date: "2024",
      description:
        "Advanced certification in frontend development covering industry-standard tools and frameworks.",
      skills: ["Web Development", "UI/UX", "Modern Frameworks"],
      link: "https://drive.google.com/drive/folders/15Hlj04fJ0Qa7pJovt23cH9V4jSEbX4ku",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Certificates & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications validating my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2"
            >
              <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 p-6 border-b border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  {
                    <a href={cert.link} target="_blank">
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  }
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-gray-400">{cert.date}</span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <p className="text-gray-300">
              <span className="text-cyan-400 font-semibold">
                Commitment to Learning:
              </span>{" "}
              Continuously updating skills through certifications and hands-on
              projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
