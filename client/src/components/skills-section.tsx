import { motion } from "framer-motion";
import {
  SiUnity,
  SiBlender,
  SiPython,
  SiAmazon,
  SiDocker,
  SiMysql,
  SiGit,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";

const skills = [
  { name: "Unity", icon: SiUnity },
  { name: "Blender", icon: SiBlender },
  { name: "Python", icon: SiPython },
  { name: "AWS", icon: SiAmazon },
  { name: "Docker", icon: SiDocker },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "C#", icon: SiSharp },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <div className="w-20 h-1 bg-[#5A31B7] mx-auto mb-8"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm"
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}