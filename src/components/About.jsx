import { Code2, Zap, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Analytical approach to solving complex challenges",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              currently pursuing my BCA from Guru Nanak Khalsa College. I
              specialize in building modern web applications using React,
              Node.js, Express, and MongoDB.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in frontend development and API
              integration, I create responsive and user-friendly interfaces. I'm
              proficient in leveraging AI tools to enhance productivity and
              currently focused on improving my problem-solving skills through
              data structures and algorithms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My recent project,{" "}
              <span className="text-cyan-400 font-semibold">HaveaTalk</span>, is
              a full-stack real-time collaboration platform with authentication,
              chat, video calls, and screen sharing built from scratch with over
              4000+ lines of code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-linear-to-br from-cyan-500/20 to-blue-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg shadow-cyan-500/50">
                    <img
                      src="./myimage.JPEG"
                      alt="my image "
                      className="rounded-full hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 animate-bounce-slow "
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Nikhil Kamboj
                  </h3>
                  <p className="text-cyan-400">MERN Stack Developer</p>
                  <p className="text-gray-400 mt-2">Yamunanagar, Haryana</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="text-cyan-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
