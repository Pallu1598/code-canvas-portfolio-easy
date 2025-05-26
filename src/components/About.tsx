
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const journey = [
    {
      title: "Started Learning",
      description: "Began my coding journey with HTML and CSS, fascinated by the ability to create visual layouts."
    },
    {
      title: "JavaScript Breakthrough",
      description: "Discovered the power of JavaScript and how it brings websites to life with interactivity."
    },
    {
      title: "React Adventure",
      description: "Diving into React to build more complex and dynamic user interfaces."
    },
    {
      title: "Building Projects",
      description: "Currently working on personal projects to strengthen my skills and build a portfolio."
    }
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey into front-end development and what drives my passion for creating digital experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I discovered my passion for web development while exploring different career paths. 
                The combination of creativity, problem-solving, and continuous learning drew me to front-end development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What excites me most is the ability to transform ideas into interactive, user-friendly experiences 
                that people can actually use and enjoy. Every line of code is an opportunity to make someone's 
                digital interaction a little bit better.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm constantly learning new technologies and best practices, staying curious about emerging 
                trends in web development, and working on projects that challenge me to grow as a developer.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Learning Journey</h3>
            {journey.map((step, index) => (
              <Card 
                key={step.title}
                className="hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
