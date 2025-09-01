import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["Air Max", "Air Jordan", "Blazer", "Pegasus", "React", "Zoom"],
    },
    {
      title: "Sports",
      links: ["Running", "Basketball", "Football", "Training", "Skateboarding", "Golf"],
    }
    // Add other sections here if needed
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-background text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold gradient-text-primary mb-6">{section.title}</h3>
              <div className="space-y-3">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-center md:text-left">
            © 2024 Nike, Inc. All Rights Reserved
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
