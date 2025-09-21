import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Bot,
  Languages,
  MessageCircle,
  Database
} from "lucide-react";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("Hindi");
  const [isMuted, setIsMuted] = useState(false);
  const [showBackendNotice, setShowBackendNotice] = useState(true);

  const languages = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ks", name: "Kashmiri", flag: "🏔️" },
    { code: "doi", name: "Dogri", flag: "🏔️" }
  ];

  const handleVoiceAction = () => {
    alert("Voice Assistant requires Supabase backend integration with ElevenLabs API setup. Please connect to Supabase first to enable voice features!");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (showBackendNotice) {
    return (
      <Card className="fixed bottom-6 right-6 w-80 shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold">AI Voice Assistant</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-primary-light/10 border border-primary/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Database className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Backend Integration Required</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Connect to Supabase to enable voice features with ElevenLabs API
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-medium">Supported Languages:</p>
              <div className="flex flex-wrap gap-1">
                {languages.map((lang) => (
                  <Badge key={lang.code} variant="outline" className="text-xs">
                    {lang.flag} {lang.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                size="sm" 
                onClick={() => setShowBackendNotice(false)}
              >
                Preview UI
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowBackendNotice(false)}>
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold">AI Career Assistant</h3>
          </div>
          <Badge variant="secondary" className="text-xs">
            Demo Mode
          </Badge>
        </div>

        <div className="space-y-3">
          {/* Language Selection */}
          <div className="flex items-center space-x-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="flex-1 text-sm border rounded px-2 py-1 bg-background"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.name}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Voice Controls */}
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant={isListening ? "destructive" : "default"}
              onClick={handleVoiceAction}
              className="flex-1"
            >
              {isListening ? (
                <>
                  <MicOff className="h-4 w-4 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-2" />
                  Start Voice Chat
                </>
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>

          {/* Assistant Status */}
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center">
              <Database className="h-3 w-3 mr-1 text-muted-foreground" />
              Requires Supabase + ElevenLabs integration
            </div>
          </div>

          {/* Quick Help */}
          <div className="text-xs text-muted-foreground border-t pt-2">
            <p className="font-medium mb-1">Try saying:</p>
            <ul className="space-y-1">
              <li>• "मुझे करियर की सलाह चाहिए" (Hindi)</li>
              <li>• "Tell me about engineering"</li>
              <li>• "میں کیا پڑھ سکتا ہوں؟" (Urdu)</li>
            </ul>
          </div>

          <Button 
            size="sm" 
            variant="ghost" 
            onClick={() => setShowBackendNotice(true)}
            className="w-full text-xs"
          >
            View Setup Requirements
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;