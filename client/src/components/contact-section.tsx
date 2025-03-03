import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-[#5A31B7] mx-auto mb-8"></div>

        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-muted-foreground mb-8 text-center">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <a 
            href="mailto:afaqkpro@gmail.com" 
            className="flex items-center justify-center gap-3 w-full p-4 border rounded-md hover:bg-gray-50 transition-colors"
          >
            <span className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <span>afaqkpro@gmail.com</span>
          </a>
          
          <a 
            href="http://www.linkedin.com/in/afaqk1746" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 w-full p-4 border rounded-md hover:bg-gray-50 transition-colors"
          >
            <span className="text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            <span>Connect on LinkedIn</span>
          </a>
          
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/afaqkpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              //href="https://twitter.com"
             // target="_blank"
             // rel="noopener noreferrer"
              //className="text-foreground hover:text-primary transition-colors"
            >
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
