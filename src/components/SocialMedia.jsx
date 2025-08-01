// import { Twitter, Linkedin, Instagram, Facebook, Mail, GithubIcon, Code } from 'lucide-react';

// const SocialMedia = () => {
//   return (
//     <div className="flex justify-center space-x-6 mt-6 z-10">
//         <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <Linkedin size={24} />
//       </a>
//       <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <Twitter size={24} />
//       </a>
//       <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <Code size={24} />
//       </a>

//       <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <Instagram size={24} />
//       </a>
//       <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <GithubIcon size={24} />
//       </a>
//       <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
//         <Mail size={24} />
//       </a>
//     </div>
//   );
// };

// export default SocialMedia;
import React from "react";
import { Github, Linkedin, Twitter, Instagram, Code2 } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/TharushiDSilva",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/tharushii",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-blue-300",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Code2,
      href: "https://www.hackerrank.com/profile/Tharushi_D",
      label: "Hacckerrank",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <div className="flex space-x-4 justify-center mt-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-300 hover:scale-110 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
