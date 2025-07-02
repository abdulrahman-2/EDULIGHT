"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SendHorizonal, MessageCircle, X, AlertCircle } from "lucide-react";

interface Message {
  text: string;
  from: "user" | "bot" | "system";
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        text: "Hello! I'm EduLight's AI assistant. How can I help you with your learning journey today? You can ask me about courses, pricing, or any learning-related questions!",
        from: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      text: input.trim(),
      from: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setConnectionError(false);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${res.status}`
        );
      }

      const data = await res.json();
      const botMessage: Message = {
        text: data.reply,
        from: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setConnectionError(true);

      const errorMessage: Message = {
        text:
          err instanceof Error
            ? err.message
            : "Our AI service is currently unavailable. Please try again later.",
        from: "system",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl rounded-2xl border-2">
          <div className="flex items-center justify-between p-4 border-b bg-primary/5 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div>
                <h3 className="font-semibold text-lg">EduLight Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  AI-powered learning support
                </p>
              </div>
              {connectionError && (
                <AlertCircle className="w-4 h-4 text-yellow-600" />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[350px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user"
                    ? "justify-end"
                    : msg.from === "system"
                    ? "justify-center"
                    : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-3 py-2 max-w-[85%] text-sm whitespace-pre-wrap ${
                    msg.from === "user"
                      ? "bg-primary text-white"
                      : msg.from === "system"
                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <div>{msg.text}</div>
                  {msg.from !== "system" && (
                    <div
                      className={`text-xs mt-1 ${
                        msg.from === "user"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span>Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 flex gap-2 border-t bg-background rounded-b-2xl">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={loading || connectionError}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              variant="outline"
              size="icon"
              disabled={loading || !input.trim() || connectionError}
              className="shrink-0"
            >
              <SendHorizonal className="w-4 h-4" />
            </Button>
          </div>
          {connectionError && (
            <div className="px-4 pb-2 text-xs text-yellow-600">
              Connection issues detected. Responses may be delayed.
            </div>
          )}
        </Card>
      )}

      <Button
        className={`rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-shadow ${
          connectionError ? "ring-2 ring-yellow-500" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        variant="secondary"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
