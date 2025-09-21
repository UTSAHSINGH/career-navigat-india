import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  GraduationCap,
  MapPin,
  Heart,
  Target,
  Sparkles,
  CheckCircle,
  User,
  BookOpen,
  Globe,
  Brain
} from "lucide-react";

const EnhancedOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    stream: "",
    state: "",
    district: "",
    interests: [] as string[],
    goals: [] as string[],
    preferredLanguage: "Hindi"
  });
  const navigate = useNavigate();

  const steps = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Let's get to know you better",
      icon: User,
      color: "primary"
    },
    {
      id: "academic",
      title: "Academic Background",
      description: "Tell us about your current studies",
      icon: GraduationCap,
      color: "secondary"
    },
    {
      id: "location",
      title: "Location & Language",
      description: "Help us personalize your experience",
      icon: MapPin,
      color: "accent"
    },
    {
      id: "interests",
      title: "Interests & Goals",
      description: "What excites you about your future?",
      icon: Heart,
      color: "primary"
    },
    {
      id: "complete",
      title: "All Set!",
      description: "Your personalized journey begins now",
      icon: CheckCircle,
      color: "accent"
    }
  ];

  const classes = [
    "Class 9", "Class 10", "Class 11", "Class 12", 
    "1st Year College", "2nd Year College", "3rd Year College", "Final Year College",
    "Graduate", "Post Graduate"
  ];

  const streams = [
    "Science (PCM)", "Science (PCB)", "Commerce", "Arts/Humanities", 
    "Engineering", "Medical", "Business", "Computer Science", "Other"
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Jammu and Kashmir", "Ladakh", "Delhi", "Puducherry"
  ];

  const interests = [
    "Technology & Programming", "Healthcare & Medicine", "Business & Finance",
    "Arts & Design", "Science & Research", "Teaching & Education",
    "Sports & Fitness", "Music & Entertainment", "Social Work", "Engineering",
    "Law & Governance", "Agriculture", "Aviation", "Journalism", "Photography"
  ];

  const goals = [
    "Get into top engineering college", "Pursue medical career", "Start my own business",
    "Work in multinational company", "Become a teacher", "Study abroad",
    "Government job preparation", "Research & development", "Creative career",
    "Social impact work"
  ];

  const languages = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ks", name: "Kashmiri", flag: "🏔️" },
    { code: "doi", name: "Dogri", flag: "🏔️" }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/quiz");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <User className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-2">Welcome to CareerPath AI</h2>
              <p className="text-muted-foreground">Let's start with some basic information about you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="transition-smooth hover-lift"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="transition-smooth hover-lift"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-2">Academic Information</h2>
              <p className="text-muted-foreground">Help us understand your educational background</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  Current Class/Level
                </Label>
                <Select value={formData.class} onValueChange={(value) => setFormData(prev => ({ ...prev, class: value }))}>
                  <SelectTrigger className="transition-smooth hover-lift">
                    <SelectValue placeholder="Select your class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-secondary" />
                  Stream/Field
                </Label>
                <Select value={formData.stream} onValueChange={(value) => setFormData(prev => ({ ...prev, stream: value }))}>
                  <SelectTrigger className="transition-smooth hover-lift">
                    <SelectValue placeholder="Select your stream" />
                  </SelectTrigger>
                  <SelectContent>
                    {streams.map((stream) => (
                      <SelectItem key={stream} value={stream}>{stream}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-2">Location & Language</h2>
              <p className="text-muted-foreground">Help us provide localized recommendations</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    State
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                    <SelectTrigger className="transition-smooth hover-lift">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="district" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    District/City
                  </Label>
                  <Input
                    id="district"
                    placeholder="Enter your district or city"
                    value={formData.district}
                    onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                    className="transition-smooth hover-lift"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-accent" />
                  Preferred Language
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={formData.preferredLanguage === lang.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFormData(prev => ({ ...prev, preferredLanguage: lang.name }))}
                      className="justify-start transition-smooth hover-lift"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-2">Interests & Goals</h2>
              <p className="text-muted-foreground">What drives your passion for learning?</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-lg font-medium">
                  <Heart className="h-5 w-5 text-primary" />
                  What interests you? (Select multiple)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestToggle(interest)}
                      />
                      <Label 
                        htmlFor={interest} 
                        className="text-sm cursor-pointer transition-smooth hover:text-primary"
                      >
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-lg font-medium">
                  <Target className="h-5 w-5 text-secondary" />
                  Career Goals (Select multiple)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goals.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.goals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <Label 
                        htmlFor={goal} 
                        className="text-sm cursor-pointer transition-smooth hover:text-secondary"
                      >
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-8 animate-scale-in">
            <div className="w-24 h-24 bg-gradient-success rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Welcome to Your Journey!</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your personalized career path is ready. Let's discover your potential with our AI-powered assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="hover-lift transition-smooth border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Assessment</h3>
                  <p className="text-sm text-muted-foreground">AI-powered quiz tailored to your profile</p>
                </CardContent>
              </Card>

              <Card className="hover-lift transition-smooth border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Personalized Guidance</h3>
                  <p className="text-sm text-muted-foreground">Recommendations based on your interests</p>
                </CardContent>
              </Card>

              <Card className="hover-lift transition-smooth border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Future Ready</h3>
                  <p className="text-sm text-muted-foreground">Skills and pathways for tomorrow</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/5 via-secondary-light/5 to-accent-light/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Setup Your Profile</h1>
            <Badge variant="secondary" className="px-3 py-1">
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>
          
          <Progress value={progress} className="h-3 mb-4" />
          
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-smooth
                    ${isActive ? `bg-gradient-${step.color} text-white` : 
                      isCompleted ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`text-xs text-center font-medium max-w-20 ${
                    isActive ? 'text-primary' : isCompleted ? 'text-accent' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-${steps[currentStep].color} mr-2`}></div>
              <CardTitle className="text-xl">{steps[currentStep].title}</CardTitle>
            </div>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            {renderStepContent()}
            
            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-border mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="transition-smooth hover-lift"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                className="transition-smooth hover-lift"
                disabled={
                  (currentStep === 0 && (!formData.name || !formData.email)) ||
                  (currentStep === 1 && (!formData.class || !formData.stream)) ||
                  (currentStep === 2 && (!formData.state || !formData.district))
                }
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    Start Assessment
                    <Sparkles className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedOnboarding;