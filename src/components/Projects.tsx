
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Recipe App",
      description: "A responsive web app for storing and organizing favorite recipes. Built with HTML, CSS, and JavaScript featuring local storage functionality.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that displays current conditions and forecasts. Responsive design with dark/light mode toggle.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Weather API", "CSS Grid", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React and styled with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Todo List Manager",
      description: "A feature-rich todo application with drag-and-drop functionality, categories, and progress tracking. Clean and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "CSS3", "Local Storage", "Drag & Drop API"],
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
            Here are some projects I've been working on to practice and showcase my front-end development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <Link className="w-4 h-4" />
                    Live Demo
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
