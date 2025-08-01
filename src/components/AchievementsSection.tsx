import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    { value: "30%", label: "CPA Reduction", target: "case-1", color: "from-primary to-primary-glow" },
    { value: "15%", label: "Conversion Rate Lift", target: "case-2", color: "from-accent to-accent-glow" },
    { value: "$100K+", label: "Monthly Budget Managed", target: "case-3", color: "from-secondary to-secondary-glow" },
    { value: "50%", label: "Team Time Saved", target: "case-4", color: "from-primary to-accent" },
  ];

  const chartData = {
    labels: ["CPA Reduction", "CVR Lift", "Time Saved"],
    datasets: [
      {
        label: "Performance Impact (%)",
        data: [30, 15, 50],
        backgroundColor: [
          "rgba(33, 150, 243, 0.8)",
          "rgba(156, 39, 176, 0.8)",
          "rgba(255, 152, 0, 0.8)",
        ],
        borderColor: [
          "rgba(33, 150, 243, 1)",
          "rgba(156, 39, 176, 1)",
          "rgba(255, 152, 0, 1)",
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: [
          "rgba(33, 150, 243, 1)",
          "rgba(156, 39, 176, 1)",
          "rgba(255, 152, 0, 1)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y" as const,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "hsl(240 10% 6%)",
        titleColor: "hsl(0 0% 98%)",
        bodyColor: "hsl(0 0% 98%)",
        borderColor: "hsl(210 100% 56%)",
        borderWidth: 1,
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: "hsl(240 4% 16%)" },
        ticks: { color: "hsl(240 5% 64%)" },
      },
      y: {
        grid: { color: "hsl(240 4% 16%)" },
        ticks: { color: "hsl(240 5% 64%)" },
      },
    },
    onClick: (_: any, elements: any[]) => {
      if (elements.length > 0) {
        const targets = ["case-1", "case-2", "case-4"];
        const targetId = targets[elements[0].index];
        scrollToCaseStudy(targetId);
      }
    },
  };

  const scrollToCaseStudy = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("highlight");
      setTimeout(() => element.classList.remove("highlight"), 2000);
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
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
            <span className="text-gradient">A Portfolio of</span>{" "}
            <span className="text-foreground">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I deliver measurable results that directly impact the bottom line. 
            <span className="text-secondary font-semibold"> Click on a metric or bar below</span> to see the full story.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.target}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => scrollToCaseStudy(achievement.target)}
              className="group glass-card p-8 rounded-2xl cursor-pointer hover-glow transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <p className="text-4xl md:text-5xl font-black text-gradient mb-2">
                  {achievement.value}
                </p>
                <p className="text-sm md:text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {achievement.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Performance Impact Visualization
          </h3>
          <div className="h-80 w-full">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;