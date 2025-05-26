
import { Code, LayoutDashboard, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <LayoutDashboard className="w-6 h-6" />,
      skills: ["React", "Tailwind CSS", "Bootstrap", "Vite"]
    },
    {
      title: "Tools & Platforms",
      icon: <Laptop className="w-6 h-6" />,
      skills: ["Git & GitHub", "VS Code", "Figma", "Chrome DevTools"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I'm learning and working with to build modern web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-4 py-2 text-gray-700 font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
