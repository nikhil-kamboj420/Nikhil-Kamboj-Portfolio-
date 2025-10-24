import { Code, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'SASS', level: 85 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST API', level: 87 },
        { name: 'Socket.IO', level: 80 },
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Vercel', level: 88 },
        { name: 'Render', level: 85 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 90 },
        { name: 'Adaptability', level: 92 },
        { name: 'Teamwork', level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-cyan-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out hover:from-cyan-400 hover:to-blue-400"
                        style={{
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <p className="text-gray-300 mb-4">
              <span className="text-cyan-400 font-semibold">Currently Learning:</span> Data Structures & Algorithms in Java
            </p>
            <p className="text-gray-400">
              Constantly expanding my skillset and staying updated with the latest technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
