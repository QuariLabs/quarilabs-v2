import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Brain, Filter, TrendingUp, Activity, ExternalLink, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AlphaAlith = () => {
  const features = [
    {
      icon: Filter,
      title: "Noise Filtering",
      description: "Advanced algorithms filter out market noise to surface meaningful signals"
    },
    {
      icon: TrendingUp,
      title: "Pattern Detection",
      description: "Machine learning identifies complex patterns across multiple blockchain networks"
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Live monitoring and analysis of on-chain activities and transactions"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Convert raw blockchain data into strategic intelligence for better decisions"
    }
  ];

  const useCases = [
    {
      title: "DeFi Portfolio Management",
      description: "Optimize yield farming strategies with intelligent position sizing and risk analysis"
    },
    {
      title: "Trading Signal Generation",
      description: "Generate high-confidence trading signals based on on-chain flow analysis"
    },
    {
      title: "Risk Assessment",
      description: "Evaluate protocol safety and smart contract risk through comprehensive analysis"
    },
    {
      title: "Market Intelligence",
      description: "Track whale movements, institutional flows, and emerging trends across chains"
    }
  ];

  const metrics = [
    { label: "Data Points Processed", value: "2.1B+", subtext: "Daily" },
    { label: "Accuracy Rate", value: "94.7%", subtext: "Pattern Recognition" },
    { label: "Networks Monitored", value: "15+", subtext: "Blockchain Networks" },
    { label: "Response Time", value: "<100ms", subtext: "Average Query" }
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
                    src="/assets/Alpha.png" 
                    alt="Alpha Alith" 
                    width={48} 
                    height={48} 
                    />
              </div>
              <div>
                <h1 className="text-hero">Alpha Alith</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    Beta
                  </span>
                  <span className="text-muted-foreground">AI Intelligence Layer</span>
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground mb-8 max-w-3xl">
              Alpha Alith is an advanced AI intelligence layer that transforms blockchain data chaos into 
              actionable insights. By filtering noise, detecting patterns, and delivering real-time analytics, 
              it empowers traders, developers, and institutions to make informed decisions in the fast-moving crypto landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Request Beta Access
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-ql-primary mb-2">{metric.value}</p>
                  <p className="font-medium mb-1">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.subtext}</p>
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
            <h2 className="text-section-title mb-4">AI-Powered Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge machine learning algorithms designed specifically for blockchain data analysis
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

      {/* Product Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="api">API Access</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
                      <p className="text-muted-foreground mb-6">
                        Blockchain networks generate massive amounts of data every second. Traditional analysis tools 
                        struggle to separate meaningful signals from noise, leaving traders and institutions making 
                        decisions based on incomplete or misleading information.
                      </p>
                      <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                      <p className="text-muted-foreground">
                        Alpha Alith uses advanced AI to process multi-dimensional blockchain data, identifying 
                        patterns that would be impossible for humans to detect. Our algorithms continuously learn 
                        and adapt to new market conditions, ensuring insights remain relevant and accurate.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-ql-primary/10 to-ql-primary-200/10 rounded-2xl p-8">
                      <h4 className="text-xl font-semibold mb-6 text-center">AI Processing Pipeline</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-ql-primary/20 flex items-center justify-center text-sm font-bold">1</div>
                          <span>Data Ingestion from 15+ Networks</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-ql-primary/20 flex items-center justify-center text-sm font-bold">2</div>
                          <span>Real-time Noise Filtering</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-ql-primary/20 flex items-center justify-center text-sm font-bold">3</div>
                          <span>Pattern Recognition & Analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-ql-primary/20 flex items-center justify-center text-sm font-bold">4</div>
                          <span>Actionable Intelligence Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="use-cases" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Powered by AI, Built for Results</h3>
                    <p className="text-muted-foreground">
                      See how Alpha Alith transforms blockchain data into competitive advantages
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                      <Card
                        key={useCase.title}
                        className="border-border/50 hover:border-ql-primary/50 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8">
                          <h4 className="text-xl font-semibold mb-4">{useCase.title}</h4>
                          <p className="text-muted-foreground">{useCase.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technology" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Advanced AI Architecture</h3>
                    <p className="text-muted-foreground">
                      Built on cutting-edge machine learning and blockchain infrastructure
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-blue-500/10 w-fit mx-auto mb-4">
                          <Brain className="h-8 w-8 text-blue-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Neural Networks</h4>
                        <p className="text-muted-foreground text-sm">
                          Deep learning models trained on terabytes of historical blockchain data
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-green-500/10 w-fit mx-auto mb-4">
                          <Activity className="h-8 w-8 text-green-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Real-time Processing</h4>
                        <p className="text-muted-foreground text-sm">
                          Sub-second response times with continuous learning capabilities
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-purple-500/10 w-fit mx-auto mb-4">
                          <BarChart3 className="h-8 w-8 text-purple-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Multi-Chain Analysis</h4>
                        <p className="text-muted-foreground text-sm">
                          Cross-chain correlation analysis for comprehensive market understanding
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="api" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Developer-First API</h3>
                    <p className="text-muted-foreground">
                      Integrate Alpha Alith's intelligence into your applications with our comprehensive API
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-2xl border border-border/50 p-8">
                    <h4 className="text-lg font-semibold mb-4">API Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-2">Real-time Endpoints</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Access live market intelligence and pattern analysis
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3 text-sm font-mono">
                          GET /api/v1/insights/real-time
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Historical Analysis</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Query historical patterns and trends
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3 text-sm font-mono">
                          GET /api/v1/patterns/historical
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Risk Assessment</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Evaluate protocol and position risks
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3 text-sm font-mono">
                          POST /api/v1/risk/analyze
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Custom Alerts</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Set up intelligent notifications
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3 text-sm font-mono">
                          POST /api/v1/alerts/create
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="btn-hero">
                      Get API Access
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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
            Ready to Harness AI Intelligence?
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the beta program and start making data-driven decisions with Alpha Alith's advanced AI insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-hero">
              Request Beta Access
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="btn-outline-hero">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlphaAlith;