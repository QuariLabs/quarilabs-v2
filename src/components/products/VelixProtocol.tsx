import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, TrendingUp, Shield, Coins, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VelixProtocol = () => {
  const features = [
    {
      icon: Coins,
      title: "Liquid Staking",
      description: "Stake your tokens while maintaining liquidity for DeFi opportunities"
    },
    {
      icon: TrendingUp,
      title: "Dynamic APY",
      description: "Earn competitive returns that adjust based on market conditions"
    },
    {
      icon: Shield,
      title: "MEV Capture",
      description: "Benefit from Maximal Extractable Value through smart routing"
    },
    {
      icon: Zap,
      title: "ve-token Rewards",
      description: "Enhanced voting power and governance participation rewards"
    }
  ];

  const supportedTokens = [
    { symbol: "STRK", name: "StarkNet Token", apy: "12.5%" },
    { symbol: "METIS", name: "Metis Protocol", apy: "15.2%" },
    { symbol: "ETH", name: "Ethereum", apy: "8.7%" },
    { symbol: "MATIC", name: "Polygon", apy: "11.3%" }
  ];

  const roadmapItems = [
    { phase: "Q1 2024", title: "Protocol Launch", status: "completed" },
    { phase: "Q2 2024", title: "STRK Integration", status: "completed" },
    { phase: "Q3 2024", title: "METIS Support", status: "current" },
    { phase: "Q4 2024", title: "Cross-chain Expansion", status: "upcoming" }
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
                    src="/assets/Velix.png" 
                    alt="Velix" 
                    width={48} 
                    height={48} 
                    />
              </div>
              <div>
                <h1 className="text-hero">Velix Protocol</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    Live
                  </span>
                  <span className="text-muted-foreground">Liquid Staking Protocol</span>
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground mb-8 max-w-3xl">
              Velix Protocol revolutionizes staking by offering liquid staking for tokens like STRK and METIS. 
              Earn rewards through ve-token mechanics, capture MEV opportunities, and enjoy dynamic APY rates 
              while maintaining full liquidity for your assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link href="https://velix-frontend-gl4ct0q98-velix-038f8faf.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Launch App
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for DeFi natives who want to maximize their staking rewards without sacrificing liquidity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-border/50 hover:border-ql-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-xl bg-ql-primary/10 w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-ql-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Details */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Supported Tokens</TabsTrigger>
                <TabsTrigger value="how-it-works">How it Works</TabsTrigger>
                <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">The Problem</h3>
                    <p className="text-muted-foreground mb-6">
                      Traditional staking locks up your tokens, preventing you from participating in DeFi opportunities. 
                      This creates an opportunity cost where users must choose between earning staking rewards or 
                      accessing liquidity for other yield-generating activities.
                    </p>
                    <h3 className="text-2xl font-bold mb-6">Our Solution</h3>
                    <p className="text-muted-foreground">
                      Velix Protocol eliminates this trade-off by providing liquid staking tokens that represent 
                      your staked position. These tokens can be used across DeFi while still earning staking rewards, 
                      enhanced by MEV capture and dynamic yield optimization.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-background rounded-2xl border border-border/50">
                      <h4 className="font-semibold mb-2">Total Value Locked</h4>
                      <p className="text-3xl font-bold text-ql-primary">$24.7M</p>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border/50">
                      <h4 className="font-semibold mb-2">Average APY</h4>
                      <p className="text-3xl font-bold text-ql-primary">11.8%</p>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border/50">
                      <h4 className="font-semibold mb-2">Active Stakers</h4>
                      <p className="text-3xl font-bold text-ql-primary">1,247</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tokens" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Supported Assets</h3>
                    <p className="text-muted-foreground">
                      Currently supporting major Layer 1 and Layer 2 tokens with more coming soon
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {supportedTokens.map((token) => (
                      <div key={token.symbol} className="p-6 bg-background rounded-2xl border border-border/50">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold">{token.symbol}</h4>
                            <p className="text-muted-foreground">{token.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-ql-primary">{token.apy}</p>
                            <p className="text-sm text-muted-foreground">Current APY</p>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Stake {token.symbol}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="how-it-works" className="mt-8">
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">How Velix Protocol Works</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      A simple 3-step process to start earning liquid staking rewards
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-ql-primary/10 flex items-center justify-center text-2xl font-bold text-ql-primary mx-auto mb-4">
                        1
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Deposit Tokens</h4>
                      <p className="text-muted-foreground">
                        Deposit your STRK, METIS, or other supported tokens into the Velix Protocol
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-ql-primary/10 flex items-center justify-center text-2xl font-bold text-ql-primary mx-auto mb-4">
                        2
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Receive Liquid Tokens</h4>
                      <p className="text-muted-foreground">
                        Get liquid staking tokens (vTokens) that represent your staked position
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-ql-primary/10 flex items-center justify-center text-2xl font-bold text-ql-primary mx-auto mb-4">
                        3
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Earn & Use</h4>
                      <p className="text-muted-foreground">
                        Earn staking rewards while using your vTokens in DeFi protocols
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roadmap" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Development Roadmap</h3>
                    <p className="text-muted-foreground">
                      Our journey to become the leading liquid staking protocol
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {roadmapItems.map((item, index) => (
                      <div key={item.phase} className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border/50">
                        <div className={`w-4 h-4 rounded-full ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'current' ? 'bg-ql-primary' :
                          'bg-muted'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            {item.status === 'completed' && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-muted-foreground">{item.phase}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'current' ? 'bg-ql-primary/20 text-ql-primary' :
                          'bg-muted/20 text-muted-foreground'
                        }`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-title mb-6">
            Ready to Start Liquid Staking?
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users earning rewards while maintaining liquidity with Velix Protocol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-hero">
              <Link href="https://velix-frontend-gl4ct0q98-velix-038f8faf.vercel.app/" target="_blank" rel="noopener noreferrer">
                Launch Velix Protocol
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="btn-outline-hero">
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VelixProtocol;