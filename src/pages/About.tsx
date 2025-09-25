import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  MapPin, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Globe
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "AI Research Lead",
      expertise: "Machine Learning & Career Psychology",
      location: "Srinagar, J&K"
    },
    {
      name: "Priya Sharma", 
      role: "Education Specialist",
      expertise: "Curriculum Design & Student Counseling",
      location: "Jammu, J&K"
    },
    {
      name: "Mohammad Ali",
      role: "Technology Director",
      expertise: "Full-Stack Development & EdTech",
      location: "Srinagar, J&K"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Students Guided", icon: Users },
    { number: "500+", label: "Career Paths Mapped", icon: Target },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "50+", label: "Partner Institutions", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light/10 via-secondary-light/5 to-accent-light/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">About Margdashrshan J&K</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering J&K's Future 
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                One Student at a Time
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Founded with a mission to bridge the gap between traditional education and modern career opportunities, 
              we're dedicated to helping students of Jammu & Kashmir discover their true potential.
            </p>
            <Button size="lg" asChild>
              <Link to="/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-primary/20 hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    To democratize career guidance and make world-class educational resources accessible 
                    to every student in Jammu & Kashmir, regardless of their location or background.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Personalized AI-powered career recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Region-specific opportunities and guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Multilingual support for diverse communities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:shadow-secondary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Sparkles className="h-8 w-8 text-secondary mr-3" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    To transform J&K into a hub of skilled professionals and entrepreneurs, 
                    contributing to both regional development and global innovation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Bridge rural-urban education gap
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Promote local industries and opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Foster innovation and entrepreneurship
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
              <p className="text-lg text-muted-foreground">
                Numbers that reflect our commitment to student success
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="text-center hover-lift transition-smooth">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Passionate educators and technologists working for J&K's future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-muted-foreground mb-3">{member.expertise}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of J&K students who have already started their journey 
              toward a brighter future with our AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/onboarding">
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;