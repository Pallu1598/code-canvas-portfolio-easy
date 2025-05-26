
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = {
    degree: "Bachelor of Technology",
    institution: "Vignan's Institute of Information Technology",
    duration: "2022-2026"
  };

  const certifications = [
    { name: "SoloLearn - C, C++", provider: "SoloLearn" },
    { name: "Introduction to Python Essentials", provider: "Cisco" },
    { name: "Introduction to Cyber Security", provider: "Cisco" },
    { name: "Cyber Security Essentials", provider: "Cisco" },
    { name: "Foundation in Cyber Security", provider: "Coursera" },
    { name: "HTML, CSS, JavaScript and Computer Networks", provider: "Infosys Springboard" },
    { name: "Prompt Engineering Essentials", provider: "EDX" },
    { name: "Cloud Foundations", provider: "AWS Academy" },
    { name: "Cyber Security Analyst Job Simulation", provider: "TATA" },
    { name: "Web Developer Intern", provider: "Codsoft" }
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Frontend Developer with strong technical skills and passion for creating responsive web interfaces.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a qualified Frontend Developer with a strong grasp of HTML, CSS, JavaScript, and Python. 
                My technical skills are complemented by hands-on experience through internship projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am skilled in working with databases like SQL, MySQL, and MongoDB. With a passion for 
                creating clean, responsive web interfaces and a drive to continuously learn, I am eager 
                to contribute to innovative development teams.
              </p>
            </div>
            
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Education</h4>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-700">{education.degree}</h5>
                  <p className="text-gray-600">{education.institution}</p>
                  <p className="text-sm text-gray-500">{education.duration}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className="hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-600">{cert.provider}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
