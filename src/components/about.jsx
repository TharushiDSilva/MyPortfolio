export default function AboutSection() {
  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Mobile Development', level: 75 },
    { name: 'Database Management', level: 85 },
    { name: 'DevOps & Deployment', level: 70 },
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and have a keen eye for design and user experience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My journey in tech started with curiosity and has evolved into a 
                love for crafting elegant, efficient solutions to complex problems. 
                I believe in writing clean, maintainable code and creating intuitive 
                user interfaces.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, mentoring junior developers, 
                or sharing knowledge with the developer community through blogs and talks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                What I Do
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Mobile App Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  API Development & Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Database Design & Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">{skill.name}</span>
                    <span className="text-pink-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">3+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">100+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}