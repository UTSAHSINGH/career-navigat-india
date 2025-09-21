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
  MessageCircle
} from "lucide-react";
import { useConversation } from "@11labs/react";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("Hindi");
  const [isMuted, setIsMuted] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);

  const languages = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ks", name: "Kashmiri", flag: "🏔️" },
    { code: "doi", name: "Dogri", flag: "🏔️" }
  ];

  const conversation = useConversation({
    onConnect: () => {
      console.log("Voice assistant connected");
    },
    onDisconnect: () => {
      console.log("Voice assistant disconnected");
      setIsListening(false);
    },
    onMessage: (message) => {
      console.log("Assistant message:", message);
    },
    onError: (error) => {
      console.error("Voice assistant error:", error);
      setIsListening(false);
    }
  });

  const startListening = async () => {
    if (!apiKey) {
      alert("Please enter your ElevenLabs API key first");
      return;
    }

    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start conversation with ElevenLabs
      // Note: You'll need to replace this with your actual agent ID from ElevenLabs
      await conversation.startSession({ 
        agentId: "your-agent-id-here" // Replace with actual agent ID
      });
      
      setIsListening(true);
    } catch (error) {
      console.error("Failed to start voice assistant:", error);
      alert("Failed to start voice assistant. Please check your microphone permissions and API key.");
    }
  };

  const stopListening = async () => {
    try {
      await conversation.endSession();
      setIsListening(false);
    } catch (error) {
      console.error("Failed to stop voice assistant:", error);
    }
  };

  const toggleMute = async () => {
    try {
      await conversation.setVolume({ volume: isMuted ? 1 : 0 });
      setIsMuted(!isMuted);
    } catch (error) {
      console.error("Failed to toggle mute:", error);
    }
  };

  if (showApiInput) {
    return (
      <Card className="fixed bottom-6 right-6 w-80 shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold">Voice Assistant Setup</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Enter your ElevenLabs API key to enable multilingual voice assistance.
          </p>
          <input
            type="password"
            placeholder="Enter ElevenLabs API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 border rounded-md mb-3 text-sm"
          />
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              onClick={() => {
                if (apiKey) {
                  setShowApiInput(false);
                } else {
                  alert("Please enter your API key");
                }
              }}
              disabled={!apiKey}
            >
              Continue
            </Button>
            <Button size="sm" variant="outline" onClick={() => setShowApiInput(false)}>
              Skip
            </Button>
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
          <Badge variant={isListening ? "default" : "secondary"} className="text-xs">
            {conversation.status === "connected" ? "Connected" : "Offline"}
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
              onClick={isListening ? stopListening : startListening}
              className="flex-1"
              disabled={!apiKey && !showApiInput}
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
              disabled={!conversation.status}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>

          {/* Assistant Status */}
          <div className="text-xs text-muted-foreground space-y-1">
            {isListening && (
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Listening in {currentLanguage}...
              </div>
            )}
            {conversation.isSpeaking && (
              <div className="flex items-center">
                <MessageCircle className="h-3 w-3 mr-1 text-primary" />
                Assistant is speaking...
              </div>
            )}
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

          {!apiKey && (
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setShowApiInput(true)}
              className="w-full text-xs"
            >
              Add API Key for Full Features
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;