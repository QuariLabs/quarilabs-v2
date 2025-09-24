import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Gamepad2, Users, Zap, Sparkles, ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Froska = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Memetic Finance",
      description: "Revolutionary approach combining viral culture with decentralized finance mechanisms"
    },
    {
      icon: Zap,
      title: "AI Mechanics",
      description: "Intelligent algorithms that adapt to community behavior and cultural trends"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governance and direction determined entirely by active community participation"
    },
    {
      icon: Trophy,
      title: "Cultural Fusion",
      description: "Bridging traditional finance with internet culture and social dynamics"
    }
  ];

  const experiments = [
    {
      title: "Viral Value Creation",
      description: "Explore how memes and cultural moments can create sustainable economic value",
      status: "Active"
    },
    {
      title: "Community Governance",
      description: "Test new models of decentralized decision-making through cultural consensus",
      status: "Research"
    },
    {
      title: "AI Culture Analysis",
      description: "Use machine learning to predict and analyze cultural trend emergence",
      status: "Development"
    },
    {
      title: "Social Token Economics",
      description: "Experiment with tokenomics that reward cultural contribution and engagement",
      status: "Design"
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "12,347", change: "+127%" },
    { label: "Cultural Events", value: "89", change: "+45%" },
    { label: "Meme Templates", value: "234", change: "+89%" },
    { label: "Governance Votes", value: "1,567", change: "+67%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Navigation */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-ql-primary transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-ql-primary/10">
                <Image className="h-10 w-10 text-ql-primary group-hover:text-white transition-colors duration-300"
                    src="/assets/Froska.png" 
                    alt="Froska" 
                    width={48} 
                    height={48} 
                    />
              </div>
              <div>
                <h1 className="text-hero">Froska</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    Experimental
                  </span>
                  <span className="text-muted-foreground">Memetic Finance Experiment</span>
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground mb-8 max-w-3xl">
              Froska is an experimental memetic finance project that explores the intersection of culture, 
              AI mechanics, and community engagement. By blending viral internet culture with sophisticated 
              financial mechanisms, we're pioneering new ways to create value through collective creativity and cultural participation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Join Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                Read Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {communityStats.map((stat, index) => (
              <Card
                key={stat.label}
                className="border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-ql-primary mb-2">{stat.value}</p>
                  <p className="font-medium mb-1">{stat.label}</p>
                  <p className="text-sm text-green-400">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Experimental Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pushing the boundaries of what's possible when culture meets finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-border/50 hover:border-ql-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-ql-primary/10 flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-ql-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiment Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="experiments">Experiments</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">The Experiment</h3>
                      <p className="text-muted-foreground mb-6">
                        Froska isn't just another DeFi protocol – it's a living experiment in how culture, 
                        technology, and economics can intersect. We're exploring whether viral cultural moments 
                        can create sustainable economic value through decentralized mechanisms.
                      </p>
                      <h3 className="text-2xl font-bold mb-6">Why Memetic Finance?</h3>
                      <p className="text-muted-foreground">
                        Memes are more than just jokes – they're cultural units that spread and evolve. 
                        By creating financial mechanisms around cultural participation, we're testing new 
                        models of value creation that reward creativity, engagement, and community building.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8">
                      <h4 className="text-xl font-semibold mb-6 text-center">Cultural Value Loop</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold">1</div>
                          <span>Community Creates Culture</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold">2</div>
                          <span>AI Analyzes Cultural Impact</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold">3</div>
                          <span>Value Generated & Distributed</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold">4</div>
                          <span>Community Grows & Evolves</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experiments" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Active Experiments</h3>
                    <p className="text-muted-foreground">
                      Ongoing research into the intersection of culture and finance
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiments.map((experiment, index) => (
                      <Card
                        key={experiment.title}
                        className="border-border/50 hover:border-ql-primary/50 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-xl font-semibold">{experiment.title}</h4>
                            <span className="px-3 py-1 bg-ql-primary/20 text-ql-primary rounded-full text-sm font-medium">
                              {experiment.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{experiment.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="community" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Community-First Approach</h3>
                    <p className="text-muted-foreground">
                      Everything we build is guided by our vibrant, creative community
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-blue-500/10 w-fit mx-auto mb-4">
                          <Users className="h-8 w-8 text-blue-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Discord Community</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Join daily discussions, share memes, and participate in governance
                        </p>
                        <Button variant="outline" size="sm">Join Discord</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-green-500/10 w-fit mx-auto mb-4">
                          <Trophy className="h-8 w-8 text-green-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Meme Contests</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Regular competitions with token rewards for the best cultural content
                        </p>
                        <Button variant="outline" size="sm">Participate</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-purple-500/10 w-fit mx-auto mb-4">
                          <Sparkles className="h-8 w-8 text-purple-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Cultural DAO</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Vote on experiments, allocate resources, and shape the future
                        </p>
                        <Button variant="outline" size="sm">Join DAO</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roadmap" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Experimental Roadmap</h3>
                    <p className="text-muted-foreground">
                      Our journey is determined by community input and experimental results
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border/50">
                      <div className="w-4 h-4 rounded-full bg-green-500" />
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold">Phase 1: Community Building</h4>
                        <p className="text-muted-foreground">Q4 2023 - Q1 2024</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                        Completed
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border/50">
                      <div className="w-4 h-4 rounded-full bg-ql-primary" />
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold">Phase 2: Memetic Mechanisms</h4>
                        <p className="text-muted-foreground">Q2 2024 - Q3 2024</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-ql-primary/20 text-ql-primary">
                        Current
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border/50">
                      <div className="w-4 h-4 rounded-full bg-muted" />
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold">Phase 3: AI Integration</h4>
                        <p className="text-muted-foreground">Q4 2024 - Q1 2025</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted/20 text-muted-foreground">
                        Planned
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border/50">
                      <div className="w-4 h-4 rounded-full bg-muted" />
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold">Phase 4: Cultural Economy</h4>
                        <p className="text-muted-foreground">Q2 2025+</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted/20 text-muted-foreground">
                        Vision
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-title mb-6">
            Join the Cultural Revolution
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the experiment that's redefining how culture and finance intersect. 
            Your creativity and participation shape the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-hero">
              Join Froska Community
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="btn-outline-hero">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Froska;