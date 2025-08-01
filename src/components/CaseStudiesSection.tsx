import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, TrendingUp, Users, Zap } from "lucide-react";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const caseStudies = [
    {
      id: "case-1",
      company: "Feels",
      role: "Growth Data Analyst",
      icon: TrendingUp,
      gradient: "from-primary to-primary-glow",
      title: "Data-Driven Profitability Turnaround",
      challenge: "Inefficient Cost Per Acquisition (CPA) was eroding campaign profitability and limiting the ability to scale.",
      action: "Leveraged SQL and Google Analytics for granular data segmentation, identifying underperforming pockets. Collaborated with the creative team based on data insights, then paused ineffective campaigns and reallocated budget to proven winners.",
      result: "Achieved a 30% reduction in overall CPA, significantly increasing ROAS and enabling profitable scaling of marketing efforts.",
      highlight: "30% CPA Reduction"
    },
    {
      id: "case-2",
      company: "Snowvision",
      role: "Growth Marketer", 
      icon: Zap,
      gradient: "from-accent to-accent-glow",
      title: "Full-Funnel Conversion Optimization",
      challenge: "Paid search campaigns were driving traffic, but stagnant landing page conversion rates resulted in wasted ad spend.",
      action: "Implemented a rigorous A/B testing framework for ad creatives and landing pages. Used user behavior data to form testable hypotheses and ran controlled experiments on headlines, copy, and CTAs.",
      result: "Delivered a 15% increase in conversion rates, boosting revenue from existing traffic and improving the overall ROI of the Google Ads budget.",
      highlight: "15% CVR Increase"
    },
    {
      id: "case-3",
      company: "Freelance",
      role: "Consultant",
      icon: Building2,
      gradient: "from-secondary to-secondary-glow",
      title: "Autonomous High-Budget Campaign Management",
      challenge: "Autonomously manage complex paid media strategies and budgets exceeding $100,000/month for multiple e-commerce clients.",
      action: "Developed a sophisticated framework for client management and campaign execution, from deep-dive discovery and KPI definition to building scalable campaign structures with advanced tools like smart bidding and dynamic creative.",
      result: "Successfully managed multiple high-stakes campaigns, consistently meeting and exceeding client objectives for profitability and sales growth.",
      highlight: "$100K+ Monthly"
    },
    {
      id: "case-4", 
      company: "Accor",
      role: "Sales Analyst",
      icon: Users,
      gradient: "from-primary to-accent",
      title: "Building a Foundation of Efficiency",
      challenge: "The commercial analytics team was bogged down by manual, repetitive data pulling and reporting tasks.",
      action: "Took the initiative to design and deploy an automated workflow, using SQL and Python to automate performance reports and eliminate manual intervention.",
      result: "Freed up 50% of the team's time, transforming their capacity from reactive reporting to proactive, high-value strategic analysis.",
      highlight: "50% Time Saved"
    }
  ];

  return (
    <section id="casestudies" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-foreground">Professional</span>{" "}
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Concrete examples of how I've translated skills into 
            <span className="text-secondary font-semibold"> measurable business impact.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                id={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${study.gradient} rounded-full`}>
                      <Icon className="text-primary-foreground" size={16} />
                      <span className="text-sm font-bold text-primary-foreground">
                        {study.role} @ {study.company}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {study.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gradient mb-4">
                    {study.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      Action
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.action}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">
                      Result
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Decorative Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={60} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;