import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Code, 
  Palette, 
  Brain, 
  Trophy, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  MapPin,
  Award,
  Zap,
  Target,
  Star,
  Users,
  X,
  Heart,
  Crown,
  Settings,
  PenTool,
  Mic,
  Globe
} from 'lucide-react';

const prefix = process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '';

// Volunteering Modal Component
const VolunteeringModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const volunteeringData = {
    leadership: [
      {
        title: "Event Co-Chair",
        organization: "ENGINUITY 2.0 (IEEE WIE – UOM)",
        icon: Crown,
        color: "from-purple-500 to-pink-600"
      }
    ],
    design: [
       {
        title: "Design Committee Member",
        organization: "IEEE WIE Affinity group of UOM",
        icon: PenTool,
        color: "from-pink-500 to-rose-600"
      },
      {
        title: "Design Committee Member",
        organization: "Computer Society – IEEE University of Moratuwa Student Branch",
        icon: PenTool,
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Design Committee Member",
        organization: "IEEE RAS Student Branch Chapter – University of Moratuwa",
        icon: Palette,
        color: "from-green-500 to-emerald-600"
      },
      {
        title: "Design Committee Member",
        organization: "XpertsMora'24 – IEEE Industry Applications Society – UOM",
        icon: PenTool,
        color: "from-orange-500 to-red-600"
      },
      {
        title: "Design Committee Member",
        organization: "Octwave 2.0 – IEEE Industry Applications Society – UOM",
        icon: Palette,
        color: "from-indigo-500 to-purple-600"
      }
    ],
    technical: [
      {
        title: "Delegate Handling Committee Member",
        organization: "Innovate with Ballerina 2025",
        icon: Users,
        color: "from-teal-500 to-blue-600"
      },
      {
        title: "Programme & Technical Committee Member",
        organization: "IEEE Xtreme 18.0, Mora Xtreme 9.0",
        icon: Settings,
        color: "from-cyan-500 to-teal-600"
      },
      {
        title: "Editorial Committee Member",
        organization: "IEEE TEMS Student Branch Chapter – UOM",
        icon: Mic,
        color: "from-yellow-500 to-orange-600"
      },
      {
        title: "Team Member",
        organization: "MARCOM Team (Colombo South) – AIESEC in Sri Lanka",
        icon: Globe,
        color: "from-violet-500 to-purple-600"
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Volunteering Experience</h3>
                <p className="text-gray-300 text-sm">Contributing beyond academics to tech and creative communities</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors duration-300 group"
            >
              <X className="w-5 h-5 text-gray-300 group-hover:text-red-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-pink-400" />
              <h4 className="text-xl font-semibold text-pink-400">My Volunteering Journey</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I love contributing beyond academics by supporting tech and creative communities. 
              Here are some of the volunteer roles I've enjoyed being part of! Each experience has 
              taught me valuable skills in teamwork, leadership, and community building.
            </p>
          </div>

          <div className="space-y-8">
            {/* Leadership Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h4 className="text-xl font-semibold text-yellow-400">🏅 Leadership & Event Management</h4>
              </div>
              <div className="grid gap-4">
                {volunteeringData.leadership.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h5>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Committee Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Palette className="w-6 h-6 text-pink-400" />
                <h4 className="text-xl font-semibold text-pink-400">🎨 Design Committee Roles</h4>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                {volunteeringData.design.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-400/50 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-2 group-hover:text-pink-300 transition-colors duration-300">{item.title}</h5>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical & Leadership Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-6 h-6 text-cyan-400" />
                <h4 className="text-xl font-semibold text-cyan-400">Other Membership Roles</h4>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                {volunteeringData.technical.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h5>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// AchievementCard Component
const AchievementCard = ({ achievement, index, images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-switch images when hovered
  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000); // Switch every 1 second
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images.length]);

  return (
    <div 
      className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-pink-400/50 hover:scale-105 transition-all duration-300 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      {/* Background Images - Only visible on hover */}
      {images.length > 0 && (
        <div className={`absolute inset-0 transition-all duration-900 ${isHovered ? 'opacity-800' : 'opacity-0' }`}>
          <div className="relative w-full h-full">
            {images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`${achievement.title} ${imgIndex +1 }`}
                className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-900 ${
                  imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-900'
                }`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        {/* Title */}
        <h4 className="text-white font-semibold mb-3 leading-tight text-sm sm:text-base group-hover:text-pink-200 transition-colors duration-300">
          {achievement.title}
        </h4>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {achievement.description}
        </p>

        {/* Image indicator dots - Only show when hovered and multiple images */}
        {images.length > 1 && isHovered && (
          <div className="flex justify-center mt-4 space-x-1">
            {images.map((_, imgIndex) => (
              <div
                key={imgIndex}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  imgIndex === currentImageIndex ? 'bg-pink-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVolunteeringModalOpen, setIsVolunteeringModalOpen] = useState(false);

  // Skills data with real logo image paths and fallback text
 const skillsData = [
  // Web Technologies
  { name: "HTML", logo: [`portfolio_images/html.png`], fallback: "HTML", color: "from-orange-500/30 to-yellow-500/30" },
  { name: "CSS", logo: [`portfolio_images/css.png`], fallback: "CSS", color: "from-blue-500/30 to-cyan-500/30" },
  { name: "Tailwind CSS", logo: [`portfolio_images/tailwind.png`], fallback: "TW", color: "from-cyan-400/30 to-blue-500/30" },
  { name: "Material UI", logo: [`portfolio_images/mui.png`], fallback: "MUI", color: "from-blue-600/30 to-indigo-600/30" },
  { name: "React.js", logo: [`portfolio_images/react.png`], fallback: "React", color: "from-cyan-400/30 to-blue-500/30" },
  { name: "Next.js", logo: [`portfolio_images/next.png`], fallback: "Next", color: "from-gray-600/30 to-black/30" },
  { name: "Node.js", logo: [`portfolio_images/node.png`], fallback: "Node", color: "from-black-500/30 to-black-600/30" },

  // AI & Chatbot
  { name: "Google Gemini API", logo: [`portfolio_images/gemini.png`], fallback: "Gemini", color: "from-purple-500/30 to-pink-500/30" },
  { name: "Flask", logo: [`portfolio_images/flask.png`], fallback: "Flask", color: "from-white-100/30 to-purple-800/30" },
  { name: "NLP Basics", logo: [`portfolio_images/nlp.png`], fallback: "NLP", color: "from-indigo-500/30 to-purple-600/30" },

  // Programming Languages
  { name: "C", logo: [`portfolio_images/c.png`], fallback: "C", color: "from-blue-600/30 to-blue-800/30" },
  { name: "C#", logo: [`portfolio_images/csharp.png`], fallback: "C#", color: "from-purple-600/30 to-indigo-600/30" },
  { name: "Python", logo: [`portfolio_images/python.png`], fallback: "PY", color: "from-yellow-500/30 to-green-500/30" },
  { name: "Java", logo: [`portfolio_images/java.png`], fallback: "Java", color: "from-red-600/30 to-orange-600/30" },
  { name: "JavaScript", logo: [`portfolio_images/javascript.png`], fallback: "JS", color: "from-yellow-400/30 to-orange-500/30" },
  { name: "SQL", logo: [`portfolio_images/sql.png`], fallback: "SQL", color: "from-blue-500/30 to-teal-500/30" },
  { name: "PHP", logo: [`portfolio_images/php.png`], fallback: "PHP", color: "from-black-800/30 to-black-600/30" },

  // Tools & Frameworks
  { name: "ASP.NET Core", logo: [`portfolio_images/dotnet.png`], fallback: ".NET", color: "from-purple-600/30 to-blue-600/30" },
  { name: "REST API", logo: [`portfolio_images/restapi.png`], fallback: "API", color: "from-purple-800/30 to-blue-500/30" },
  { name: "Visual Studio", logo: [`portfolio_images/visualstudio.png`], fallback: "VS", color: "from-purple-600/30 to-indigo-600/30" },
  { name: "VS Code", logo: [`portfolio_images/vscode.png`], fallback: "VSC", color: "from-blue-500/30 to-cyan-500/30" },
  { name: "GitHub", logo: [`portfolio_images/github.png`], fallback: "Git", color: "from-gray-700/30 to-black/30" },
  { name: "Postman", logo: [`portfolio_images/postman.png`], fallback: "POST", color: "from-gray-50/30 to-gray-50/30" },

  // Design
  { name: "Figma", logo: [`portfolio_images/figma.png`], fallback: "Fig", color: "from-purple-500/30 to-pink-500/30" },
  { name: "UI/UX Design", logo: [`portfolio_images/uiux.png`], fallback: "UX", color: "from-pink-500/30 to-rose-500/30" }
];

  const skillCategories = [
    {
      category: "Web Technologies",
      icon: Code,
      skills: skillsData.slice(0, 7)
    },
    {
      category: "AI & Chatbot Integration",
      icon: Brain,
      skills: skillsData.slice(7, 10)
    },
    {
      category: "Programming Languages",
      icon: Code,
      skills: skillsData.slice(10, 17)
    },
    {
      category: "Tools & Frameworks",
      icon: Zap,
      skills: skillsData.slice(17, 23)
    },
    {
      category: "Design",
      icon: Palette,
      skills: skillsData.slice(23, 25)
    }
  ];

  const allSkills = skillsData;

  // Education timeline
  const education = [
    {
      period: "2023 – Present",
      degree: "BSc.(Hons) in Information Technology",
      institution: "University of Moratuwa, Faculty of IT",
      current: true
    },
    {
      period: "2019 – 2021",
      degree: "G.C.E Advanced Level Examination",
      institution: "Lyceum International School, Nuwara Eliya",
      subjects: "Combined Mathematics, Physics, ICT"
    },
    {
      period: "2011 – 2020",
      degree: "G.C.E Ordinary Level Examination",
      institution: "N/ Good Shepherd Balika Maha Vidyalaya"
    }
  ];

  // Achievements with image arrays
  const achievements = [
    {
      title: "2nd Runner Up – J'PURAXTREME Hackathon 0.1",
      icon: Trophy,
      description: "Secured 3rd place in the J'PURAXTREME Hackathon 0.1 organized by the University of Jayawardenepura IEEE Student Branch and IEEE Computer Society",
      color: "from-amber-500 to-orange-600",
      images: [`portfolio_images/jpura1.jpg`]
    },
    {
      title: "Finalist – CodeJam by CSE 2025",
      icon: Award,
      description: "Reached as finalist in Codex a competition at the CodeJam 2025 organized by CSE, faculty of Engineering, University of Moratuwa",
      color: "from-blue-500 to-teal-600",
      images: [`portfolio_images/codejam2.jpg`, `portfolio_images/codejam.png`]
    },
    {
      title: "6th Place – INTECS CODERUSH 2024",
      icon: Award,
      description: "Secured 6th place at Coderush 2024, a competitive coding event organized by INTECS,  Faculty of Information Technology, University of Moratuwa. The awarding ceremony celebrated innovative problem-solving and technical excellence among top-performing participants.",
      color: "from-purple-500 to-indigo-600",
      images: [`portfolio_images/coderush1.jpg`]
    },
    {
      title: "Finalist – UOJ Coders",
      icon: Target,
      description: "Reached top 10 finals in coding competition",
      color: "from-blue-500 to-cyan-600",
      images: [`portfolio_images/uoj.png`]
    },
    {
      title: "Outstanding Volunteer – IEEE WIE(November 2024)",
      icon: Star,
      description: "Recognized as an Outstanding Volunteer by the IEEE WIE Student Branch Affinity Group at the University of Moratuwa for November. Honored for dedicated contributions and active involvement in promoting impactful initiatives and events within the vibrant WIE community.",
      color: "from-green-500 to-emerald-600",
      images: [`portfolio_images/wie.jpg`]
    },
    {
      title: "Final Round – InterfaceX Designathon 2025",
      icon: Palette,
      description: "Advanced to Round 2 of the InterfaceX Designathon 2025, organized by ASTA, in recognition of impressive design skills and creativity demonstrated during the initial round.",
      color: "from-pink-500 to-rose-600",
      images: [`portfolio_images/interfacex1.png`]
    },
    {
      title: "Participant – IEEE Xtreme 18.0",
      icon: Code,
      description: "Took part in global 24-hour coding challenge by IEEE",
      color: "from-blue-500 to-indigo-600",
      images: [`portfolio_images/xtreme.png`]
    },
    {
      title: "Participant – INTECS CODERUSH 2023",
      icon: Code,
      description: "Participated in university-level coding competition",
      color: "from-green-500 to-emerald-600",
      images: [`portfolio_images/coderush.png`]
    }
  ];

  // Auto-scroll skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % allSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allSkills.length]);

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % allSkills.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + allSkills.length) % allSkills.length);
  };

  return (
    <section 
      id="about" 
      className="relative py-12 sm:py-20 px-4 sm:px-6 bg-black-400 w-full"
      style={{ minHeight: '100vh' }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        {/* Introduction with Image Space */}
        <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Profile Image Space */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl border-2 border-pink-400/30 overflow-hidden">
                  <img 
                    src={`portfolio_images/main1.jpg`}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <GraduationCap className="w-8 h-8 text-pink-400" />
                      </div>
                      <p className="text-gray-400 text-sm">Your Profile Image</p>
                      <p className="text-gray-500 text-xs mt-1">Upload profile.jpg here</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500/50 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/50 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Introduction Text */}
            <div className="col-span-1 md:col-span-2 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-3 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-3 sm:mb-4">Brief Introduction</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    I am a motivated IT undergraduate with a keen interest in UI/UX design and Software Engineering. 
                    Currently studying for a BSc (Hons) in Information Technology at the Faculty of IT, University of Moratuwa, 
                    I enjoy blending creativity with technology to build meaningful user experiences and efficient systems. 
                    I'm also deeply curious about Artificial Intelligence and Data Science, and I'm eager to grow through 
                    hands-on projects and contribute to innovative, impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Education Timeline */}
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-6 sm:mb-8 flex items-center">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Education Timeline
            </h3>
            <div className="space-y-4 sm:space-y-6 w-full">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className={`bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-pink-400/50 transition-all duration-300 ${edu.current ? 'border-pink-400/30 bg-pink-500/5' : ''}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                      <span className={`text-xs sm:text-sm px-3 py-1 rounded-full w-fit ${edu.current ? 'bg-pink-500/20 text-pink-300' : 'bg-purple-500/20 text-purple-300'}`}>
                        {edu.period}
                      </span>
                      {edu.current && (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-pink-400">Current</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base leading-tight">{edu.degree}</h4>
                    <div className="flex items-start space-x-2 text-gray-300">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <p>{edu.institution}</p>
                        {edu.subjects && (
                          <p className="text-gray-400 mt-1">Subjects: {edu.subjects}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-4 sm:left-6 -bottom-2 sm:-bottom-3 w-0.5 h-4 sm:h-6 bg-gradient-to-b from-pink-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Showcase */}
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-6 sm:mb-8 flex items-center">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Skills & Technologies
            </h3>
            
            {/* Horizontal Scrolling Skills Display */}
            <div className="w-full bg-black/30 backdrop-blur-sm border border-black/10 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4 w-full">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={prevSkill}
                    className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 text-pink-400" />
                  </button>
                  <button 
                    onClick={nextSkill}
                    className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-pink-400" />
                  </button>
                </div>
              </div>
              
              {/* Horizontal Skills Slider - Responsive */}
              <div className="relative w-full overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out w-full"
                  style={{ 
                    transform: `translateX(-${currentSkillIndex * 100}px)`,
                    minWidth: `${allSkills.length * 100}px`
                  }}
                >
                  {allSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className={`flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 mr-3 sm:mr-4 rounded-xl p-2 sm:p-3 md:p-4 border transition-all duration-300 ${
                        index === currentSkillIndex 
                          ? 'border-pink-400/50 bg-pink-500/10 scale-105' 
                          : 'border-white/10 bg-white/3 hover:border-pink-400/30'
                      }`}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto shadow-lg border border-white/20`}>
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-xs font-bold text-white hidden items-center justify-center text-center leading-tight">
                          {skill.fallback}
                        </div>
                      </div>
                      <div className="text-center px-1">
                        <div className={`text-xs font-medium leading-tight ${index === currentSkillIndex ? 'text-pink-300' : 'text-white'}`}>
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="flex justify-center mt-4 space-x-1">
                {Array.from({ length: Math.min(allSkills.length, 10) }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentSkillIndex / Math.ceil(allSkills.length / 10)) === index
                        ? 'bg-pink-500' 
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Skills categories - Mobile Responsive */}
            <div className="space-y-3 sm:space-y-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white/3 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 hover:border-pink-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                    <h4 className="text-white font-medium text-sm sm:text-base">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/5 rounded-full hover:bg-pink-500/20 transition-all duration-300 group border border-white/10"
                      >
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${skill.color} rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-3 h-3 sm:w-4 sm:h-4 text-xs font-bold text-white hidden items-center justify-center text-center" style={{fontSize: '6px'}}>
                            {skill.fallback}
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 group-hover:text-pink-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section - Mobile Responsive */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-6 sm:mb-8 flex items-center">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={index}
                achievement={achievement}
                index={index}
                images={achievement.images || []}
              />
            ))}
          </div>
        </div>

        {/* Volunteering Experience Section - Mobile Responsive */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-black/3 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-400">Community Involvement</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              👥 Want to see my volunteering experiences? I've been actively involved in various committees and organizations, 
              contributing to design, technical, and leadership roles across multiple events and initiatives.
            </p>
            <button
              onClick={() => setIsVolunteeringModalOpen(true)}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-black-500 to-black-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-sm sm:text-base"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View My Volunteering Journey
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Volunteering Modal */}
      <VolunteeringModal 
        isOpen={isVolunteeringModalOpen} 
        onClose={() => setIsVolunteeringModalOpen(false)} 
      />
    </section>
  );
};

export default AboutMe;