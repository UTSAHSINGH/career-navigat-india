import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const navigate = useNavigate();

  const questions = [
    // Personality Assessment Questions
    {
      category: "Personality",
      question: "When faced with a challenging problem, you usually:",
      options: [
        "Break it down into smaller, manageable parts",
        "Brainstorm creative and unconventional solutions",
        "Seek advice and input from others",
        "Dive in immediately and learn by doing"
      ]
    },
    {
      category: "Personality",
      question: "In group projects, you typically:",
      options: [
        "Take on the leadership role naturally",
        "Contribute innovative ideas and creative solutions",
        "Ensure everyone's voice is heard and valued",
        "Focus on practical implementation and execution"
      ]
    },
    {
      category: "Personality",
      question: "Your ideal weekend activity would be:",
      options: [
        "Attending a science exhibition or tech conference",
        "Visiting art galleries or working on creative projects",
        "Volunteering for a social cause or community service",
        "Participating in outdoor adventures or sports"
      ]
    },
    {
      category: "Personality",
      question: "When making important decisions, you rely most on:",
      options: [
        "Detailed research and factual analysis",
        "Intuition and creative thinking",
        "Input from family, friends, and mentors",
        "Personal experience and practical considerations"
      ]
    },
    {
      category: "Personality",
      question: "What motivates you most in your studies?",
      options: [
        "Understanding how things work and solving complex problems",
        "Expressing yourself and creating something unique",
        "Making a positive impact on others' lives",
        "Achieving tangible results and practical outcomes"
      ]
    },
    
    // Aptitude & Interest Questions
    {
      category: "Aptitude",
      question: "Which of these activities comes most naturally to you?",
      options: [
        "Solving mathematical equations and logical puzzles",
        "Writing stories, poems, or designing graphics",
        "Understanding people's emotions and motivations",
        "Building, repairing, or working with your hands"
      ]
    },
    {
      category: "Aptitude",
      question: "In school, you excel most at:",
      options: [
        "Mathematics, Physics, and Computer Science",
        "Languages, Literature, and Arts",
        "Biology, Psychology, and Social Studies",
        "Chemistry, Engineering, and Practical subjects"
      ]
    },
    {
      category: "Aptitude",
      question: "Your friends often come to you for help with:",
      options: [
        "Academic problems and technical issues",
        "Creative projects and design ideas",
        "Personal problems and relationship advice",
        "Practical tasks and hands-on projects"
      ]
    },
    {
      category: "Career Interest",
      question: "Which work environment appeals to you most?",
      options: [
        "High-tech laboratory or research facility",
        "Creative studio or media company",
        "Hospital, school, or community center",
        "Manufacturing plant or construction site"
      ]
    },
    {
      category: "Career Interest",
      question: "Your dream job would involve:",
      options: [
        "Developing cutting-edge technology or conducting research",
        "Creating content, art, or entertainment",
        "Helping people solve problems and improve their lives",
        "Building infrastructure or manufacturing products"
      ]
    },
    
    // J&K Specific Questions
    {
      category: "Regional Interest",
      question: "Which sector in J&K interests you most for career development?",
      options: [
        "IT and Technology (Emerging tech hubs in Srinagar/Jammu)",
        "Tourism and Hospitality (Leveraging natural beauty)",
        "Agriculture and Horticulture (Apple farming, saffron cultivation)",
        "Handicrafts and Traditional Arts (Pashmina, carpets, woodwork)"
      ]
    },
    {
      category: "Regional Interest",
      question: "What attracts you most about working in J&K?",
      options: [
        "Contributing to the region's technological advancement",
        "Promoting J&K's cultural heritage globally",
        "Improving local communities and social development",
        "Developing sustainable local industries"
      ]
    },
    
    // Learning Style Questions
    {
      category: "Learning Style",
      question: "You learn best when:",
      options: [
        "Reading textbooks and researching online",
        "Watching videos and visual demonstrations",
        "Discussing concepts with peers and teachers",
        "Practicing hands-on exercises and experiments"
      ]
    },
    {
      category: "Learning Style",
      question: "When preparing for exams, you prefer to:",
      options: [
        "Create detailed study schedules and follow them strictly",
        "Use mind maps, diagrams, and visual aids",
        "Form study groups and explain concepts to others",
        "Take practice tests and work through problems"
      ]
    },
    {
      category: "Learning Style",
      question: "Your ideal classroom setting would be:",
      options: [
        "Traditional lecture with detailed explanations",
        "Interactive multimedia presentations",
        "Group discussions and collaborative activities",
        "Laboratory work and practical demonstrations"
      ]
    },
    
    // Future Aspirations
    {
      category: "Future Goals",
      question: "In 10 years, you see yourself:",
      options: [
        "Leading a tech company or research team",
        "Running a creative agency or being a recognized artist",
        "Heading a healthcare facility or educational institution",
        "Managing large-scale projects or manufacturing operations"
      ]
    },
    {
      category: "Future Goals",
      question: "Your definition of professional success is:",
      options: [
        "Making breakthrough discoveries or innovations",
        "Creating impactful and inspiring work",
        "Improving many people's quality of life",
        "Building something tangible and lasting"
      ]
    },
    {
      category: "Future Goals",
      question: "Which achievement would make you most proud?",
      options: [
        "Publishing groundbreaking research or developing new technology",
        "Winning awards for creative work or artistic expression",
        "Being recognized for community service and social impact",
        "Successfully completing major infrastructure projects"
      ]
    },
    
    // Problem-Solving & Skills
    {
      category: "Skills",
      question: "When learning a new skill, you:",
      options: [
        "Study the theory thoroughly before practicing",
        "Look for creative and innovative approaches",
        "Seek guidance from experienced mentors",
        "Jump in and learn through trial and error"
      ]
    },
    {
      category: "Skills",
      question: "Your strongest skill is:",
      options: [
        "Analytical thinking and problem-solving",
        "Creative expression and innovation",
        "Communication and empathy",
        "Practical implementation and execution"
      ]
    },
    {
      category: "Values",
      question: "What matters most to you in a career?",
      options: [
        "Intellectual challenges and continuous learning",
        "Creative freedom and self-expression",
        "Making a positive social impact",
        "Job security and practical rewards"
      ]
    },
    {
      category: "Values",
      question: "Which of these would you choose as a life motto?",
      options: [
        "Knowledge is power - keep learning and innovating",
        "Beauty and creativity make life meaningful",
        "Service to others is the highest calling",
        "Hard work and persistence lead to success"
      ]
    },
    
    // Career-Specific J&K Questions
    {
      category: "Career Path",
      question: "Which emerging career opportunity in J&K excites you most?",
      options: [
        "Software development and IT services",
        "Digital marketing for tourism and handicrafts",
        "Healthcare technology and telemedicine",
        "Sustainable agriculture and food processing"
      ]
    },
    {
      category: "Career Path",
      question: "How do you want to contribute to J&K's development?",
      options: [
        "Through technological innovation and digital transformation",
        "By promoting our culture and heritage globally",
        "Through education and community empowerment",
        "By building modern infrastructure and industries"
      ]
    },
    {
      category: "General Aptitude",
      question: "If you had to choose between these college courses, which would you pick?",
      options: [
        "Computer Science, Engineering, or Mathematics",
        "Fine Arts, Design, or Mass Communication",
        "Medicine, Psychology, or Social Work",
        "Business Management, Commerce, or Economics"
      ]
    }
  ];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setSelectedAnswer("");
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        console.log("Quiz completed", newAnswers);
        navigate("/dashboard");
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-light/10 via-primary-light/10 to-accent-light/10 p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-secondary" />
              <CardTitle className="text-2xl">Comprehensive Career Assessment</CardTitle>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium">
                {questions[currentQuestion].category}
              </span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold leading-relaxed">
              {questions[currentQuestion].question}
            </h3>
            
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            {currentQuestion === questions.length - 1 ? (
              <Button onClick={nextQuestion} disabled={!selectedAnswer}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete Assessment
              </Button>
            ) : (
              <Button onClick={nextQuestion} disabled={!selectedAnswer}>
                Next Question
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default QuizInterface;