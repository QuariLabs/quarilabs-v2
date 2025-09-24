import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart, Brain, Shield, Users, ExternalLink, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Safeline = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Diagnosis Support",
      description: "Advanced machine learning models trained on medical data to assist healthcare professionals"
    },
    {
      icon: Stethoscope,
      title: "Health Analytics",
      description: "Comprehensive analysis of health patterns and risk factors for personalized care"
    },
    {
      icon: Users,
      title: "Care Access",
      description: "Expanding healthcare access through intelligent triage and remote monitoring"
    },
    {
      icon: Shield,
      title: "Medical Insights",
      description: "Evidence-based recommendations and insights to improve patient outcomes"
    }
  ];

  const applications = [
    {
      title: "Early Detection",
      description: "AI-powered screening for early identification of health conditions and risk factors",
      impact: "65% improvement in early detection rates"
    },
    {
      title: "Diagnostic Support",
      description: "Assist healthcare providers with differential diagnosis and treatment recommendations",
      impact: "92% diagnostic accuracy in pilot studies"
    },
    {
      title: "Remote Monitoring",
      description: "Continuous health monitoring with intelligent alerts for critical changes",
      impact: "40% reduction in emergency readmissions"
    },
    {
      title: "Preventive Care",
      description: "Personalized prevention strategies based on individual health profiles and risk assessment",
      impact: "78% patient engagement with preventive measures"
    }
  ];

  const healthMetrics = [
    { label: "Patients Assisted", value: "50K+", period: "Since Launch" },
    { label: "Diagnostic Accuracy", value: "94.2%", period: "Clinical Validation" },
    { label: "Healthcare Partners", value: "127", period: "Medical Institutions" },
    { label: "Response Time", value: "<3min", period: "Average Analysis" }
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
                    src="/assets/Safeline.png" 
                    alt="Safeline" 
                    width={48} 
                    height={48} 
                />
              </div>
              <div>
                <h1 className="text-hero">Safeline</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                    Development
                  </span>
                  <span className="text-muted-foreground">AI Health Assistant</span>
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground mb-8 max-w-3xl">
              Safeline is an AI-powered health assistant designed to improve diagnosis accuracy and expand 
              access to quality healthcare. By combining advanced machine learning with medical expertise, 
              we're building tools that support healthcare professionals and empower patients with better health insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Healthcare Partners
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                Clinical Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {healthMetrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-ql-primary mb-2">{metric.value}</p>
                  <p className="font-medium mb-1">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.period}</p>
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
            <h2 className="text-section-title mb-4">AI-Powered Healthcare</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging artificial intelligence to enhance medical decision-making and improve patient outcomes
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
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Healthcare Challenge</h3>
                      <p className="text-muted-foreground mb-6">
                        Healthcare systems worldwide face increasing pressure from growing patient populations, 
                        rising costs, and diagnostic complexity. Medical professionals need better tools to 
                        make accurate diagnoses quickly while expanding access to quality care.
                      </p>
                      <h3 className="text-2xl font-bold mb-6">AI-Driven Solution</h3>
                      <p className="text-muted-foreground">
                        Safeline combines medical expertise with advanced AI to create intelligent tools that 
                        support healthcare professionals in diagnosis, treatment planning, and patient monitoring. 
                        Our platform enhances human capability rather than replacing medical judgment.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl p-8">
                      <h4 className="text-xl font-semibold mb-6 text-center">AI Healthcare Pipeline</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold">1</div>
                          <span>Patient Data Analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold">2</div>
                          <span>Pattern Recognition</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold">3</div>
                          <span>Risk Assessment</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold">4</div>
                          <span>Treatment Recommendations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Clinical Applications</h3>
                    <p className="text-muted-foreground">
                      Real-world implementations improving patient outcomes across healthcare settings
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {applications.map((application, index) => (
                      <Card
                        key={application.title}
                        className="border-border/50 hover:border-ql-primary/50 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-8">
                          <h4 className="text-xl font-semibold mb-4">{application.title}</h4>
                          <p className="text-muted-foreground mb-4">{application.description}</p>
                          <div className="p-3 bg-ql-primary/10 rounded-lg">
                            <p className="text-sm font-medium text-ql-primary">{application.impact}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="research" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Clinical Research & Validation</h3>
                    <p className="text-muted-foreground">
                      Rigorous scientific validation of our AI models through clinical trials and peer review
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-blue-500/10 w-fit mx-auto mb-4">
                          <Brain className="h-8 w-8 text-blue-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Clinical Trials</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Multi-center clinical trials validating diagnostic accuracy and patient outcomes
                        </p>
                        <p className="text-2xl font-bold text-blue-500">12</p>
                        <p className="text-sm text-muted-foreground">Active Studies</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-green-500/10 w-fit mx-auto mb-4">
                          <Shield className="h-8 w-8 text-green-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Peer Review</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Published research in leading medical journals and conferences
                        </p>
                        <p className="text-2xl font-bold text-green-500">8</p>
                        <p className="text-sm text-muted-foreground">Publications</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 rounded-xl bg-purple-500/10 w-fit mx-auto mb-4">
                          <Users className="h-8 w-8 text-purple-500" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Medical Advisory</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          Leading physicians and researchers guiding development and validation
                        </p>
                        <p className="text-2xl font-bold text-purple-500">24</p>
                        <p className="text-sm text-muted-foreground">Expert Advisors</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="partnerships" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Healthcare Partnerships</h3>
                    <p className="text-muted-foreground">
                      Collaborating with leading healthcare institutions to advance AI in medicine
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="border-border/50">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-semibold mb-4">Hospital Systems</h4>
                        <p className="text-muted-foreground mb-6">
                          Partnering with major hospital networks to integrate AI-powered diagnostic tools 
                          into clinical workflows and improve patient care delivery.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 15 major hospital networks</li>
                          <li>• 200+ emergency departments</li>
                          <li>• 50+ specialty clinics</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-semibold mb-4">Research Institutions</h4>
                        <p className="text-muted-foreground mb-6">
                          Collaborating with top medical schools and research centers to advance 
                          the science of AI in healthcare and validate clinical effectiveness.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 8 medical schools</li>
                          <li>• 12 research institutes</li>
                          <li>• 6 pharmaceutical companies</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <Button className="btn-hero">
                      Become a Partner
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
            Advancing Healthcare with AI
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing healthcare through intelligent technology that supports medical professionals 
            and improves patient outcomes worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-hero">
              Healthcare Partnerships
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="btn-outline-hero">
                Clinical Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safeline;