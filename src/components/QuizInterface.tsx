import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, Clock, CheckCircle } from "lucide-react";

const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const questions = [
    {
      question: "Which activity interests you most?",
      options: [
        "Solving complex mathematical problems",
        "Creating artwork or designs",
        "Helping people with their problems",
        "Building or fixing things"
      ]
    },
    {
      question: "What type of environment do you prefer to work in?",
      options: [
        "Quiet office with individual focus",
        "Creative studio with artistic freedom",
        "Busy hospital or clinic helping patients",
        "Outdoor or workshop setting"
      ]
    },
    {
      question: "Which subject did you enjoy most in school?",
      options: [
        "Mathematics and Physics",
        "Art and Literature",
        "Biology and Chemistry",
        "Physical Education and Practical subjects"
      ]
    },
    {
      question: "How do you prefer to solve problems?",
      options: [
        "Through logical analysis and data",
        "Through creative thinking and innovation",
        "Through collaboration and discussion",
        "Through hands-on experimentation"
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
              <CardTitle className="text-2xl">Aptitude Assessment</CardTitle>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
          
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
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