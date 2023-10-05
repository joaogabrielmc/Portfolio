// import { Text } from "../components/Text";
// import { Card } from "../components/Card";
// import { ProjectData } from "../data/Data";
// import Image1 from "../../assets/img/projects/img.svg";
// import github from "../../assets/img/projects/github.svg";
// import figma from "../../assets/img/projects/figma.svg";

// import { useCallback } from "react";
// import { Image } from "../components/Image";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// const Projects = () => {
//   const renderImage = useCallback((element: number) => {
//     switch (element) {
//       case 0:
//         return Image1;
//       case 1:
//         return Image1;
//       case 2:
//         return Image1;
//       default:
//         return "";
//     }
//   }, []);

//   return (
//     <section className="w-full h-auto flex items-center bg-darkGray">
//       <main className="w-full flex flex-col justify-center items-center gap-5">
//         {/* Tittle */}
//         <motion.div
//           variants={fadeIn("down", 0.2)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.2 }}
//           className="text-white md:text-center"
//         >
//           <h1 className="font-baimj md:text-8xl text-6xl">Projetos</h1>
//         </motion.div>
//         {/* Cards */}
//         <motion.div
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.2 }}
//           className="w-full lg:w-3/4 grid md:grid-cols-3"
//         >
//           {ProjectData.projectList.map((project, index) => (
//             <Card
//               key={index}
//               className="flex flex-col items-center bg-secondary border-b-4 border-primary h-[500px] w-[320px] rounded-lg"
//             >
//               <Image
//                 alt={project.title}
//                 className="w-[300px] p-5 "
//                 objectCover=""
//                 image={renderImage(index)}
//               />

//               <Text as="h1" className="text-white font-popp text-base">
//                 {project.title}
//               </Text>
//               <div className="p-5 font-roboto text-sm text-white">
//                 <Text as="p" className="">
//                   {project.description.slice(0, 155) + "..."}
//                 </Text>
//                 <Text as="p" className="">
//                   Tecnologias utilizadas:
//                   <span className="text-primary">
//                     {" " + project.technologies.slice(0, 155) + "..."}
//                   </span>
//                 </Text>
//               </div>
//               {/* Buttons */}
//               <div className="w-full flex items-start justify-between font-baimj p-2">
//                 <a
//                   href={project.link[0]}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="pl-2 "
//                 >
//                   <button className="text-white link-button border p-4 rounded-lg">
//                     Live Demo
//                   </button>
//                 </a>
//                 {/* sociais dos projetos */}
//                 <span className="flex gap-2 pr-3">
//                   <a
//                     href={project.link[1]}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="text-white link-button border p-1 rounded-lg flex flex-col items-center">
//                       <Image
//                         alt={project.title}
//                         className="w-8"
//                         objectCover=""
//                         image={github}
//                       />
//                       <p className="text-xs">GitHub</p>
//                     </button>
//                   </a>
//                   <a
//                     href={project.link[2]}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="text-white link-button border p-1 rounded-lg flex flex-col items-center">
//                       <Image
//                         alt={project.title}
//                         className="w-8"
//                         objectCover=""
//                         image={figma}
//                       />
//                       <p className="text-xs">GitHub</p>
//                     </button>
//                   </a>
//                   <a
//                     href={project.link[2]}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="text-white link-button border p-1 rounded-lg flex flex-col items-center">
//                       <Image
//                         alt={project.title}
//                         className="w-8"
//                         objectCover=""
//                         image={figma}
//                       />
//                       <p className="text-xs">GitHub</p>
//                     </button>
//                   </a>
//                 </span>
//               </div>
//             </Card>
//           ))}
//         </motion.div>
//       </main>
//     </section>
//   );
// };

// export default Projects;
