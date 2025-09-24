import { Target, Users, Award } from 'lucide-react';


const whyUsFeatures = [
    {
      title: "Built to Deliver",
      description: "We focus on shipping production-ready solutions that solve real problems in the market today.",
      icon: Target
    },
    {
      title: "One Team, Many Disciplines",
      description: "Our diverse team combines AI expertise, blockchain development, and deep industry knowledge.",
      icon: Users
    },
    {
      title: "Driven by Adoption",
      description: "Every product we build is designed for real-world use and sustainable market adoption.",
      icon: Award
    }
  ];

export default function WhyQuari() {
    //Why Quari Labs Section
    return (
      <section id="why-us" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4 fade-up">Why Quari Labs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-up">
              What sets us apart in the competitive landscape of AI and blockchain development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 rounded-2xl bg-ql-primary/10 w-fit mx-auto mb-6">
                  <feature.icon className="h-12 w-12 text-ql-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}