import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Guru Nanak Khalsa College',
      university: 'Kurukshetra University',
      year: '2nd Year (Ongoing)',
      status: 'In Progress',
    },
    {
      degree: 'Class 12',
      institution: 'Government School',
      board: 'CBSE',
      year: 'Completed',
      status: 'Completed',
    },
    {
      degree: 'Class 10',
      institution: 'Private School',
      board: 'HBSE',
      year: 'Completed',
      score: '92%',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Education & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-gray-400 text-sm mt-1">{edu.university}</p>
                      )}
                      {edu.board && (
                        <p className="text-gray-400 text-sm mt-1">Board: {edu.board}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          edu.status === 'In Progress'
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}
                      >
                        {edu.status}
                      </span>
                      <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
                    </div>
                  </div>
                  {edu.score && (
                    <div className="flex items-center gap-2 mt-3">
                      <Award size={18} className="text-cyan-400" />
                      <span className="text-gray-300">Score: <span className="text-cyan-400 font-semibold">{edu.score}</span></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-300">Years of Learning</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
            <div className="text-gray-300">Class 10 Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
