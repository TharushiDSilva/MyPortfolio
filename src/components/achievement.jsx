// import React, { useState, useEffect } from 'react';
// import { Trophy, Target, Award, Star, Palette } from 'lucide-react';

// const AchievementCard = ({ achievement, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-switch images when hovered
//   useEffect(() => {
//     let interval;
//     if (isHovered && achievement.images && achievement.images.length > 1) {
//       interval = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
//       }, 1000); // Switch every 1 second
//     }
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isHovered, achievement.images]);

//   // Reset image index when hover ends
//   useEffect(() => {
//     if (!isHovered) {
//       setCurrentImageIndex(0);
//     }
//   }, [isHovered]);

//   return (
//     <div 
//       className="relative bg-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-400/50 hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer h-64"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Image on Hover */}
//       {isHovered && achievement.images && achievement.images.length > 0 && (
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={achievement.images[currentImageIndex]} 
//             alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
//             className="w-full h-full object-cover opacity-20 transition-opacity duration-300"
//             onError={(e) => {
//               e.target.style.display = 'none';
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//         </div>
//       )}
      
//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Icon and Position */}
//         <div className="flex items-start justify-between mb-4">
//           <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//             <achievement.icon className="w-6 h-6 text-white" />
//           </div>
//           {achievement.position && (
//             <div className="text-right">
//               <span className="text-pink-400 text-sm font-semibold">
//                 {achievement.position}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Title */}
//         <h4 className="text-white font-semibold mb-3 leading-tight text-lg flex-grow-0">
//           {achievement.title}
//         </h4>

//         {/* Description */}
//         <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
//           {achievement.description}
//         </p>

//         {/* Footer with Organization/Date */}
//         <div className="mt-auto">
//           {achievement.organization && (
//             <p className="text-pink-300 text-xs font-medium mb-1">
//               {achievement.organization}
//             </p>
//           )}
//           {achievement.date && (
//             <p className="text-gray-400 text-xs">
//               {achievement.date}
//             </p>
//           )}
          
//           {/* Image indicator dots */}
//           {achievement.images && achievement.images.length > 1 && isHovered && (
//             <div className="flex justify-center mt-3 space-x-1">
//               {achievement.images.map((_, imageIndex) => (
//                 <div 
//                   key={imageIndex}
//                   className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                     imageIndex === currentImageIndex ? 'bg-pink-400' : 'bg-white/30'
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const AchievementsSection = () => {
//   // Enhanced achievements data with images
//   const achievements = [
//     {
//       title: "2nd Runner Up – J'PURAXTREME Hackathon 0.1",
//       icon: Trophy,
//       position: "🥉 3rd Place",
//       description: "Secured third place in a competitive hackathon showcasing innovative solutions and technical excellence in software development.",
//       organization: "J'PURAXTREME",
//       date: "2024",
//       color: "from-amber-500 to-orange-600",
//       images: [
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/jpura1.jpg",
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/jpura2.jpg"
//       ]
//     },
//     {
//       title: "Finalist – UOJ Coders | CodeJam by CSE 2025",
//       icon: Target,
//       position: "🎯 Finalist",
//       description: "Reached the finals in a prestigious coding competition, demonstrating strong problem-solving skills and algorithmic thinking.",
//       organization: "University of Jaffna - CSE",
//       date: "2025",
//       color: "from-blue-500 to-cyan-600",
//       images: [
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/codejam1.jpg",
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/codejam2.jpg"
//       ]
//     },
//     {
//       title: "6th Place – INTECS CODERUSH 2024",
//       icon: Award,
//       position: "🏅 6th Place",
//       description: "Achieved top 10 finish in INTECS CODERUSH, competing against talented developers from across the region.",
//       organization: "INTECS",
//       date: "2024",
//       color: "from-purple-500 to-indigo-600",
//       images: [
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/coderush1.jpg",
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/coderush2.jpg"
//       ]
//     },
//     {
//       title: "Outstanding Volunteer – IEEE WIE",
//       icon: Star,
//       position: "🎖️ Outstanding",
//       description: "Recognized for exceptional volunteer service and contribution to IEEE Women in Engineering initiatives and community outreach.",
//       organization: "IEEE WIE",
//       date: "November 2024",
//       color: "from-green-500 to-emerald-600",
//       images: [
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/ieee1.jpg",
//         "${process.env.PUBLIC_URL}/portfolio_images/achievements/ieee2.jpg"
//       ]
//     },
//     {
//       title: "Final Round – InterfaceX Designathon 2025",
//       icon: Palette,
//       position: "🧩 Finalist",
//       description: "Reached the final round of InterfaceX Designathon, showcasing exceptional UI/UX design skills and creative problem-solving.",
//       organization: "ASTA",
//       date: "2025",
//       color: "from-pink-500 to-rose-600",
//       images: [
//         "${process.env.PUBLIC_URL}/portfolio_images/main1.jpg",
//         "${process.env.PUBLIC_URL}/portfolio_images/main2.jpg"
//       ]
//     }
//   ];

//   return (
//     <div className="mt-16">
//       <h3 className="text-2xl font-semibold text-pink-400 mb-8 flex items-center">
//         <Trophy className="w-6 h-6 mr-3" />
//         Key Achievements
//       </h3>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {achievements.map((achievement, index) => (
//           <AchievementCard 
//             key={index} 
//             achievement={achievement} 
//             index={index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;