
import { Button } from "@/components/ui/button";
import { Code, Laptop } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 hover-scale">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <Laptop className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Hi, I'm Thota Pallavi
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Front End Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            I am a qualified Frontend Developer with a strong grasp of HTML, CSS, JavaScript, and Python, 
            complemented by hands-on experience through internship projects such as personal portfolio, 
            calculator, and interactive games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover-scale"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg transition-all duration-300 hover-scale"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
