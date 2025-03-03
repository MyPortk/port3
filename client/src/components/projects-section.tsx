import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Adventure Of Indiana Jones",
    
    description: " Developed a 3D action-adventure game in Unity, featuring third-person movement, dynamic combat mechanics, and interactive puzzles. Optimized performance using Skinned Mesh Renderers, LOD techniques to enhance FPS stability. Designed AI-driven enemy behaviors, environmental traps, and complex platforming challenges. Integrated an interactive NPC dialogue system with voice-over and subtitles to enrich player engagement",
    images: [
      "18.png",
      "0.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "19.png",



    ],
    tags: ["Unity", "Blender", "C#", "Game Design"],
    githubUrl: "https://mega.nz/folder/3cJgWBoC#_URTewGNAtJAjZDza7XfYw",
    liveUrl: "https://mega.nz/folder/3cJgWBoC#_URTewGNAtJAjZDza7XfYw",
  },
  {
    id: 2,
    title: "Time Paradox",
    description: "A sci-fi FPS game in Unity featuring time-travel-based combat, immersive environments, and dynamic enemy AI for Galactic Patrol forces. Integrated advanced shooting mechanics with varied combat behaviors to create intense, strategic firefights. multi-level environments ranging from forests and deserts to high-tech labs and futuristic bases, each with unique challenges",
    images: [
      
      
      "z1.png",
      "z2.png",
      "z7.png",
      "z3.png",
      "z4.png",
      "z5.png",
      "z6.png",
    ],
    tags: ["Unity", "Game Design", "C#"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Weather Oracle",
    description: "Weather Oracle is a simple and interactive weather web app that shows real-time weather updates and a 7-day forecast. It uses Flask (Python) and JavaScript to fetch weather data from the Open-Meteo API and displays details like temperature, wind speed, humidity, and rain chances",
    images: [
      "o1.PNG",
      "o2.PNG",
      "o3.PNG"
    ],
    tags: ["Python", "Flask", "Weather API", "HTML / CSS"],
    githubUrl: "https://github.com/afaqkpro/WeatherOracle.git",
    liveUrl: "https://github.com/afaqkpro/WeatherOracle.git",
  },
 // {
   // id: 4,
    //title: "Fitness Tracking App",
    //description: "A mobile-responsive fitness tracking application with progress charts and workout plans.",
    //images: [
    //  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000",
  //    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
   //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000"
  //  ],
   // tags: ["React Native", "Redux", "Node.js", "MongoDB"],
   // githubUrl: "https://github.com",
   // liveUrl: "https://example.com",
 // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#7C3AED] mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my projects that highlight my skills and creativity 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="carousel-container relative">
                    <Carousel>
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover scale-10 transition-transform duration-300 group-hover:scale-105"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="carousel-button carousel-prev bg-white/80 hover:bg-white/90 border-none shadow-md left-3" />
                      <CarouselNext className="carousel-button carousel-next bg-white/80 hover:bg-white/90 border-none shadow-md right-3" />
                    </Carousel>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-[#7C3AED] transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-[#7C3AED] transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}