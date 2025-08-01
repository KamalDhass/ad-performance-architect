import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Database, Target } from "lucide-react";

const CompetenciesSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tabs = [
    {
      id: "strategy",
      label: "Media Buying",
      icon: TrendingUp,
      title: "Strategic Campaign Architecture",
      content: "I architect and manage large-scale Google & Meta Ads campaigns with a focus on e-commerce sales. This involves meticulous planning, from in-depth audience research and keyword identification to deploying sophisticated smart bidding strategies that optimize for conversion value, not just clicks. My expertise ensures that budgets, especially those exceeding $100,000 per month, are deployed with maximum efficiency and strategic foresight."
    },
    {
      id: "analysis",
      label: "Data Intelligence",
      icon: Database,
      title: "Advanced Data & Performance Intelligence",
      content: "My proficiency in SQL and BI tools allows me to move beyond platform dashboards and interface directly with raw data. This enables a deeper level of analysis, such as building custom attribution models or conducting cohort analyses to understand true customer lifetime value. By joining data from ad platforms, web analytics, and CRMs, I uncover hidden opportunities and make robust, defensible strategic decisions that drive profitability."
    },
    {
      id: "optimization",
      label: "Optimization",
      icon: Target,
      title: "Optimization & Profitability Frameworks",
      content: "I approach optimization as a continuous, scientific process. By generating data-backed hypotheses and executing structured A/B tests on creatives, copy, and landing pages, I systematically identify levers for improvement. This methodical framework for iterative testing ensures that campaigns are constantly refined to lower acquisition costs, increase conversion rates, and ultimately maximize return on ad spend."
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const ActiveIcon = activeTabData?.icon || TrendingUp;

  return (
    <section id="competencies" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
            <span className="text-foreground">Core</span>{" "}
            <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The integrated skillset I use to build and optimize 
            <span className="text-secondary font-semibold"> profitable advertising programs.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 glass-card rounded-2xl p-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <ActiveIcon size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <ActiveIcon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                  {activeTabData?.title}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeTabData?.content}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenciesSection;