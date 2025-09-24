import { Brain, Layers, Building, Globe } from 'lucide-react';

const focusAreaGroups = [
    {
      category: "AI & Intelligence",
      areas: ["On-Chain AI Agents", "Chatbots", "Data Management", "Cross-Chain Intelligence"],
      icon: Brain,
      color: "ql-primary"
    },
    {
      category: "Blockchain & Web3",
      areas: ["dApps", "Smart Contracts", "Identity", "Governance"],
      icon: Layers,
      color: "ql-primary-200"
    },
    {
      category: "Industries",
      areas: ["HealthTech", "FinTech", "Edutech", "EnergyTech"],
      icon: Building,
      color: "ql-primary-100"
    },
    {
      category: "Digital Platforms",
      areas: ["Gaming", "Social Platforms", "Supply Chain", "Security"],
      icon: Globe,
      color: "ql-primary"
    }
  ];

export default function FocusArea() {
    //Focus Area Section
    return (
      <section id="focus-areas" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4 fade-up">
              Our <span className="text-gradient">Focus Areas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-up">
              Building cutting-edge solutions across AI, blockchain, and key industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {focusAreaGroups.map((group, groupIndex) => (
              <div
                key={group.category}
                className="card-product fade-up"
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-${group.color}/10 mr-4`}>
                    <group.icon className={`h-6 w-6 text-${group.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="space-y-2">
                  {group.areas.map((area) => (
                    <div
                      key={area}
                      className="px-3 py-2 bg-muted/50 rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors duration-200"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}