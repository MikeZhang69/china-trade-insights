import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Globe,
  TrendingDown,
  Coins,
  Factory,
  Car,
  Package,
  AlertTriangle,
} from "lucide-react";

const DriversSection = () => {
  const { t } = useLanguage();

  const drivers = [
    {
      icon: Globe,
      number: "01",
      title: t('strategicExport'),
      description: t('strategicExportDesc'),
      stats: [
        { region: "Africa", growth: "+25.8%", color: "text-success" },
        { region: "ASEAN", growth: "+13.4%", color: "text-success" },
        { region: "EU", growth: "+8.4%", color: "text-success" },
        { region: "USA", growth: "-20%", color: "text-destructive" },
      ],
    },
    {
      icon: TrendingDown,
      number: "02",
      title: t('weakDemand'),
      description: t('weakDemandDesc'),
      highlight: t('weakDemandHighlight'),
    },
    {
      icon: Coins,
      number: "03",
      title: t('currencyDeflation'),
      description: t('currencyDeflationDesc'),
      highlight: t('currencyHighlight'),
    },
    {
      icon: Factory,
      number: "04",
      title: t('importSubstitution'),
      description: t('importSubstitutionDesc'),
      highlight: t('importSubstitutionHighlight'),
    },
    {
      icon: Car,
      number: "05",
      title: t('highValueMfg'),
      description: t('highValueMfgDesc'),
      highlight: t('highValueMfgHighlight'),
    },
    {
      icon: Package,
      number: "06",
      title: t('structuralOvercapacity'),
      description: t('structuralOvercapacityDesc'),
      highlight: t('structuralOvercapacityHighlight'),
    },
  ];

  const DriverCard = ({
    driver,
    index,
  }: {
    driver: (typeof drivers)[0];
    index: number;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={ref}
        className="relative"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="card-gradient border border-border rounded-xl p-6 md:p-8 h-full hover:border-primary/50 transition-colors duration-300">
          {/* Number and Icon */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-4xl font-bold text-primary/20">
              {driver.number}
            </span>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <driver.icon className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            {driver.title}
          </h3>

          <p className="text-muted-foreground mb-6">{driver.description}</p>

          {/* Stats grid for first driver */}
          {driver.stats && (
            <div className="grid grid-cols-2 gap-3">
              {driver.stats.map((stat) => (
                <div
                  key={stat.region}
                  className="bg-muted/30 rounded-lg p-3 text-center"
                >
                  <p className="text-xs text-muted-foreground mb-1">
                    {stat.region}
                  </p>
                  <p className={`font-mono font-bold ${stat.color}`}>
                    {stat.growth}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Highlight for other drivers */}
          {driver.highlight && (
            <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-medium">
                {driver.highlight}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <SectionHeader
          label={t('driversLabel')}
          title={t('driversTitle')}
          description={t('driversDescription')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, index) => (
            <DriverCard key={driver.number} driver={driver} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriversSection;
