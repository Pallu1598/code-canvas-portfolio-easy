
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, User } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "alex.chen.dev@email.com",
      href: "mailto:alex.chen.dev@email.com"
    },
    {
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      description: "Let's connect professionally"
    },
    {
      name: "Portfolio",
      icon: <User className="w-5 h-5" />,
      href: "#",
      description: "View my complete portfolio"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about web development!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 mb-1">{info.label}</span>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 story-link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-700">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:alex.chen.dev@email.com'}
                >
                  Send Me an Email
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Find Me Online</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-200 hover-scale group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{link.name}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Thank you for taking the time to view my portfolio!
          </p>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
