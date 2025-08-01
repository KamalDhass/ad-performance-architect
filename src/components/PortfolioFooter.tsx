import { motion } from "framer-motion";

const PortfolioFooter = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground">
            &copy; 2025 Sridharan Kamaldhass. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Designed to showcase expertise for the{" "}
            <span className="text-secondary font-semibold">Senior Media Buyer</span> role.
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center pt-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;