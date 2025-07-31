import { Twitter, Linkedin, Instagram, Facebook, Mail, GithubIcon, Code } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6 z-10">
        <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <Linkedin size={24} />
      </a>
      <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <Twitter size={24} />
      </a>
      <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <Code size={24} />
      </a>
      
      <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <Instagram size={24} />
      </a>
      <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <GithubIcon size={24} />
      </a>
      <a href="#" className="text-white hover:text-purple-300 transition-transform transform hover:scale-110">
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialMedia;
