import { Button } from "@/components/ui/button";
import { BookOpen, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CareerPath AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <Link to="/dashboard">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/onboarding">
              Get Started
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;