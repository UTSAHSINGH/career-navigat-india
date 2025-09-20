import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, User, BookOpen, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
    stream: "",
    location: "",
    interests: [] as string[],
  });

  const steps = [
    {
      title: "Personal Information",
      icon: User,
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your full name" 
            />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input 
              id="age" 
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              placeholder="Enter your age" 
            />
          </div>
        </div>
      )
    },
    {
      title: "Academic Details",
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <div>
            <Label>Current Class/Standard</Label>
            <Select onValueChange={(value) => setFormData({...formData, class: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">Class 11</SelectItem>
                <SelectItem value="12">Class 12</SelectItem>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Stream (if applicable)</Label>
            <Select onValueChange={(value) => setFormData({...formData, stream: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your stream" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="commerce">Commerce</SelectItem>
                <SelectItem value="arts">Arts/Humanities</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    },
    {
      title: "Location & Preferences",
      icon: MapPin,
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="location">Current Location</Label>
            <Input 
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="City, State" 
            />
          </div>
        </div>
      )
    },
    {
      title: "Interests & Aspirations",
      icon: Heart,
      content: (
        <div className="space-y-4">
          <Label>What are you interested in? (Select all that apply)</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Technology", "Medicine", "Engineering", "Business", "Arts", "Sports",
              "Research", "Teaching", "Law", "Design", "Music", "Writing"
            ].map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox 
                  id={interest}
                  checked={formData.interests.includes(interest)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData({
                        ...formData, 
                        interests: [...formData.interests, interest]
                      });
                    } else {
                      setFormData({
                        ...formData,
                        interests: formData.interests.filter(i => i !== interest)
                      });
                    }
                  }}
                />
                <Label htmlFor={interest} className="text-sm">{interest}</Label>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/10 via-secondary-light/10 to-accent-light/10 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center space-x-3 mb-4">
            {React.createElement(steps[currentStep].icon, { className: "h-6 w-6 text-primary" })}
            <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {steps[currentStep].content}
          
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button onClick={() => {
                console.log("Complete onboarding", formData);
                navigate("/quiz");
              }}>
                Complete Setup
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default OnboardingFlow;