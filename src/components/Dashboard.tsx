import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Calendar,
  ChevronRight,
  Star,
  MapPin
} from "lucide-react";

const Dashboard = () => {
  const userData = {
    name: "Priya Sharma",
    class: "Class 12 - Science",
    completedAssessments: 3,
    totalAssessments: 5,
    currentGoal: "Engineering Entrance Prep",
    skillProgress: 75,
    upcomingDeadlines: [
      { exam: "JEE Main", date: "2024-04-08", daysLeft: 45 },
      { exam: "BITSAT", date: "2024-05-15", daysLeft: 82 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/5 via-secondary-light/5 to-accent-light/5">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b border-border p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {userData.name}! 👋</h1>
              <p className="text-muted-foreground mt-1">{userData.class}</p>
            </div>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary text-primary-foreground shadow-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm">Assessment Progress</p>
                  <p className="text-2xl font-bold">{userData.completedAssessments}/{userData.totalAssessments}</p>
                </div>
                <Target className="h-8 w-8 text-primary-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary text-secondary-foreground shadow-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-foreground/80 text-sm">Skill Development</p>
                  <p className="text-2xl font-bold">{userData.skillProgress}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-secondary-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-success text-accent-foreground shadow-success">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-accent-foreground/80 text-sm">Mentorship Sessions</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Users className="h-8 w-8 text-accent-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Achievements</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Award className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  AI-Powered Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary-light/20 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Continue JEE Preparation</h4>
                    <Badge variant="secondary">High Priority</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your recent physics assessment, focus on Thermodynamics chapter.
                  </p>
                  <Button size="sm">
                    Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="p-4 bg-secondary-light/20 rounded-lg border border-secondary/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Explore Computer Science</h4>
                    <Badge variant="outline">New Suggestion</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your aptitude scores suggest strong potential in programming and algorithms.
                  </p>
                  <Button size="sm" variant="secondary">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Completed Physics Assessment</p>
                      <p className="text-sm text-muted-foreground">Score: 85% - Great improvement!</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Mentorship Session with Dr. Kumar</p>
                      <p className="text-sm text-muted-foreground">Discussed career paths in AI/ML</p>
                    </div>
                    <span className="text-sm text-muted-foreground">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Exams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userData.upcomingDeadlines.map((exam, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{exam.exam}</h4>
                      <Badge variant={exam.daysLeft <= 60 ? "destructive" : "secondary"} className="text-xs">
                        {exam.daysLeft} days
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{exam.date}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All Exams
                </Button>
              </CardContent>
            </Card>

            {/* Skill Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skill Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mathematics</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Physics</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Chemistry</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Skill Gap Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link to="/quiz">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Take Assessment
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Mentor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Colleges
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Career Explorer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;