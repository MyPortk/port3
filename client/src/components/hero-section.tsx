import { AnimatedText } from "./animated-text";
import { ParticlesBackground } from "./particles-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleResumeClick = () => {
    // Open resume in a new tab
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-16 md:pt-0 bg-background"
    >
      <ParticlesBackground />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <AnimatedText text="Hey, I'm Afaq " />
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto px-4">
            <AnimatedText text="🎮 Bringing ideas to life through innovation, technology, and design 💡 " />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8">
            <Button 
              size="lg"
              className="w-full sm:w-auto text-base font-medium px-8 py-6 h-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
              asChild
            >
              <a href="#projects" >View Projects</a>
            </Button>
            <Button 
              size="lg"
              onClick={handleResumeClick}
              className="w-full sm:w-auto text-base font-medium px-8 py-6 h-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
            >
              Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}