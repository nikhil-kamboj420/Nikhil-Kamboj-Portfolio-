import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['MERN Stack Developer', 'Frontend Specialist', 'React Enthusiast', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="inline-block animate-bounce-slow">Hi, I'm</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                Nikhil Kamboj
              </span>
            </h1>
            <div className="h-12 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-semibold">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up">
            Building scalable web applications with React, Node.js, Express, and MongoDB.
            Passionate about creating seamless user experiences and solving complex problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            <a
              href="#contact"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-16 animate-slide-up">
            <a
              href="https://github.com/nikhil-kamboj420"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-kamboj-632a8b350/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:kambojnikhil44@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
            <a
              href="tel:8813965378"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Phone size={28} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-block animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ChevronDown size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
