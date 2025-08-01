import PortfolioHeader from "@/components/PortfolioHeader";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AchievementsSection />
        <CompetenciesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
};

export default Index;
