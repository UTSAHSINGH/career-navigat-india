import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">Career Guidance for J&K Students</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Personalized
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Career Journey
            </span>
            <br />
            Starts Here
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover your perfect career path with AI-powered recommendations, 
            personalized learning, and comprehensive guidance designed specifically for students of Jammu & Kashmir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 shadow-primary" asChild>
              <Link to="/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/quiz">
                Take Free Assessment
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-300">
              <Target className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">AI Recommendations</h3>
              <p className="text-sm text-muted-foreground">Personalized career paths based on your interests and aptitude</p>
            </Card>
            
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-secondary/20 hover:shadow-secondary transition-all duration-300">
              <Users className="h-8 w-8 text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Mentor Network</h3>
              <p className="text-sm text-muted-foreground">Connect with industry professionals and successful alumni</p>
            </Card>
            
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-accent/20 hover:shadow-success transition-all duration-300">
              <Sparkles className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Skill Development</h3>
              <p className="text-sm text-muted-foreground">Identify gaps and get personalized learning recommendations</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;