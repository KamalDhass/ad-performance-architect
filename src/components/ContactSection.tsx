import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Phone, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "kamaldhass22@gmail.com",
      href: "mailto:kamaldhass22@gmail.com",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kamaldhass-sridharan",
      href: "https://linkedin.com/in/kamaldhass-sridharan",
      gradient: "from-accent to-accent-glow",
      external: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+33 (0)6 05 73 32 85",
      href: "tel:+33605733285",
      gradient: "from-secondary to-secondary-glow"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Let's Build</span>{" "}
            <span className="text-gradient">Growth Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm ready to apply my expertise to your brand's unique challenges. 
            <span className="text-secondary font-semibold"> Reach out to discuss</span> how we can drive your e-commerce success.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${item.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {item.label}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {item.value}
                  </p>
                  
                  {item.external && (
                    <ExternalLink className="absolute top-4 right-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" size={16} />
                  )}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Ready to Scale Your E-commerce Success?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Let's discuss how my expertise in paid media strategy can drive your business growth. 
              I'm passionate about turning data into profitable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;