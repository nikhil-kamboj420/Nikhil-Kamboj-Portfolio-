import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Unified Mentor',
      type: 'Remote',
      period: 'Nov 2024 - Dec 2024',
      description: 'Gained hands-on experience in frontend and real-time application development.',
      responsibilities: [
        'Built a responsive portfolio website to showcase skills and projects',
        'Developed a real-time chat application using Socket.IO',
        'Implemented backend support via AI tools',
        'Enhanced frontend development skills through practical projects',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0 group hover:border-cyan-500 transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
