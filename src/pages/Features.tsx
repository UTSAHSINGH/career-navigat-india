import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Target, 
  Users, 
  BookOpen, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Heart,
  Map,
  Award,
  MessageSquare,
  Clock
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Career Matching",
      description: "Advanced algorithms analyze your personality, skills, and interests to recommend perfect career paths tailored for J&K opportunities.",
      benefits: ["95% accuracy rate", "Personalized recommendations", "Continuous learning"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Expert Mentorship Network",
      description: "Connect with successful professionals, alumni, and industry experts from J&K who can guide your career journey.",
      benefits: ["500+ verified mentors", "1-on-1 guidance", "Industry insights"],
      color: "secondary"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Assessments",
      description: "Multi-dimensional evaluations covering aptitude, personality, interests, and skills to build a complete profile.",
      benefits: ["25+ question categories", "Detailed reports", "Progress tracking"],
      color: "accent"
    },
    {
      icon: Map,
      title: "Regional Opportunity Mapping",
      description: "Discover career opportunities specifically available in Jammu & Kashmir, including emerging sectors and local industries.",
      benefits: ["Local job market data", "Sector-wise analysis", "Growth predictions"],
      color: "primary"
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access from any device, anywhere in J&K",
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in Hindi, Urdu, Kashmiri, and Dogri",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Your information is secure and private",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get career recommendations immediately",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your skill development journey",
      color: "accent"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI assistant available round the clock",
      color: "primary"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Complete Assessment",
      description: "Take our comprehensive 25-question evaluation covering personality, aptitude, and interests.",
      icon: Brain
    },
    {
      step: "02", 
      title: "Get Recommendations",
      description: "Receive AI-powered career suggestions tailored to J&K opportunities and your profile.",
      icon: Target
    },
    {
      step: "03",
      title: "Connect with Mentors",
      description: "Match with experienced professionals who can guide your specific career path.",
      icon: Users
    },
    {
      step: "04",
      title: "Track Progress",
      description: "Monitor your skill development and career advancement with personalized dashboards.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light/10 via-secondary-light/5 to-accent-light/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Platform Features</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need for
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                Career Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the comprehensive suite of tools and features designed to guide 
              J&K students toward fulfilling and successful careers.
            </p>
            <Button size="lg" asChild>
              <Link to="/onboarding">
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Core Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed specifically for students in Jammu & Kashmir
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className={`border-${feature.color}/20 hover:shadow-${feature.color} transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-${feature.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className={`h-5 w-5 text-${feature.color} mr-2`} />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to discover your perfect career path
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="text-center hover-lift transition-smooth">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="mb-4">{step.step}</Badge>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Additional Benefits</h2>
              <p className="text-lg text-muted-foreground">
                More reasons to choose Margdashrshan J&K
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center hover-lift transition-smooth">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-secondary-light/10 to-accent-light/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Real results from J&K students who found their path
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-bold">Aisha Khan</h3>
                      <p className="text-sm text-muted-foreground">Srinagar</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The AI recommendations helped me discover my passion for computer science. 
                    Now I'm pursuing engineering at NIT Srinagar!"
                  </p>
                  <Badge variant="secondary">Computer Science</Badge>
                </CardContent>
              </Card>

              <Card className="hover-lift transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-secondary mr-3" />
                    <div>
                      <h3 className="font-bold">Rahul Sharma</h3>
                      <p className="text-sm text-muted-foreground">Jammu</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The mentorship program connected me with industry professionals. 
                    I got placement in a top IT company through their guidance."
                  </p>
                  <Badge variant="secondary">Software Engineering</Badge>
                </CardContent>
              </Card>

              <Card className="hover-lift transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-accent mr-3" />
                    <div>
                      <h3 className="font-bold">Priya Devi</h3>
                      <p className="text-sm text-muted-foreground">Leh</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The regional opportunities feature showed me tourism management prospects in Ladakh. 
                    I'm now running a successful eco-tourism business!"
                  </p>
                  <Badge variant="secondary">Tourism Management</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of J&K students who have discovered their perfect career path 
              with our comprehensive guidance platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/onboarding">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/quiz">
                  Take Quick Quiz
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;