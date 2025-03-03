import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#5A31B7] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse"
        >
          <div className="md:order-last flex justify-center">
            <div className="w-55 h-55 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
              <img 
                src="/p10.png" 
                alt="Profile Image"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/250x250?text=Your+Image";
                }}
              />
            </div>
          </div>

          <div className="space-y-6 md:order-first">
            <p className="text-lg">
            Hi, I'm Afaq, a Unity Game Developer with over two years of experience creating immersive 3D games. I specialize in third-person gameplay, combat mechanics, and AI-driven systems, always focusing on performance and player experience. 
            Beyond game development, I have a strong foundation in cloud computing with hands-on experience in AWS and Docker. 
            </p>

            <p className="text-lg">
            I'm also proficient in Python and currently exploring AI, learning how to develop intelligent systems and automate processes. I'm passionate about building and optimizing games while solving development challenges
            </p>

            <div className="flex flex-col space-y-4">
              
              <p className="text-lg">🎓 Computer Science, B.S.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}