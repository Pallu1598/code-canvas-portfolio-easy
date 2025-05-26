import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Calculator",
      description: "An interactive calculator application with a clean user interface and standard mathematical operations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Interactive Games",
      description: "Collection of interactive web games demonstrating JavaScript programming skills and game logic.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Canvas API", "CSS3", "Game Logic"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Login & Signup Authentication System",
      description: "A secure authentication system with user registration and login functionality.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Security"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "To-Do-List App",
      description: "A task management application with add, edit, delete functionality and local storage.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Local Storage", "DOM", "CSS3"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather App",
      description: "A weather application that displays current weather conditions and forecasts.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "API Integration", "CSS", "Responsive"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some projects I've worked on to demonstrate my front-end development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-50 flex-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                  >
                    <Link className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
