import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Building,
  Globe,
  Users,
  HeadphonesIcon
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Srinagar Office",
      details: ["123 Dal Lake Road", "Srinagar, J&K 190001"],
      color: "primary"
    },
    {
      icon: Building,
      title: "Jammu Office", 
      details: ["456 Gandhi Nagar", "Jammu, J&K 180004"],
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91-1234-567-890", "+91-0987-654-321"],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["help@margdashrshan.in", "careers@margdashrshan.in"],
      color: "primary"
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqs = [
    {
      question: "How accurate are the AI career recommendations?",
      answer: "Our AI system has a 95% accuracy rate based on student feedback and career success tracking over 3 years."
    },
    {
      question: "Is the platform available in local languages?",
      answer: "Yes! We support Hindi, Urdu, Kashmiri, and Dogri languages alongside English for better accessibility."
    },
    {
      question: "How much does the career guidance cost?",
      answer: "Basic assessments are completely free. Premium mentorship and detailed reports are available at affordable rates."
    },
    {
      question: "Can rural students access all features?",
      answer: "Absolutely! Our platform works on basic smartphones and we have offline capabilities for areas with poor internet."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light/10 via-secondary-light/5 to-accent-light/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                Help You Succeed
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions about your career path? Need guidance on educational opportunities in J&K? 
              Our expert team is ready to support your journey.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-8 w-8 text-primary mr-3" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Phone className="h-8 w-8 text-secondary mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-${info.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-6 w-6 text-accent mr-2" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent-light/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <HeadphonesIcon className="h-5 w-5 text-accent mr-2" />
                      <span className="font-medium">24/7 Emergency Support</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For urgent career guidance needs, our AI assistant is available round the clock.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;