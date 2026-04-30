import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente virtual de CEFRA. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI immediately
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const contents = newMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: 'Eres un asistente virtual inteligente, amable y compasivo de CEFRA (Centro de Fertilidad y Reproducción Asistida). Tu tarea es ayudar a los usuarios con información general sobre la clínica, servicios (FIV, Inseminación Artificial, etc.) y guiarles a la página de agendar cita si quieren reservar. Cuando ofrezcas o menciones agendar una cita, DEBES proporcionar siempre este enlace en formato Markdown: [Agendar Cita](/agendar). Responde de manera breve y cálida, en español.'
        }
      });

      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text as string }]);
      }
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, ha ocurrido un error de conexión.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-clinic-cta text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,173,184,0.4)] hover:scale-105 hover:bg-[#1c929a] transition-all z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Abrir asistente virtual"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-[calc(100vw-32px)] sm:w-[400px] h-[600px] max-h-[calc(100vh-32px)] bg-white dark:bg-[#001f24] rounded-2xl shadow-2xl border border-clinic-muted-1/20 dark:border-white/10 flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-clinic-cta text-white px-5 py-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold font-montserrat tracking-tight leading-tight">Asistente CEFRA</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> En línea apoyado por IA
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Layout */}
        <div className="flex-1 overflow-y-auto p-5 bg-clinic-bg/40 dark:bg-transparent space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-clinic-muted-2 text-white' : 'bg-clinic-cta/10 text-clinic-cta dark:bg-white/10 dark:text-white'}`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
              </div>
              <div 
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-clinic-dark text-white rounded-br-sm dark:bg-clinic-muted-2' 
                    : 'bg-white text-clinic-dark dark:bg-white/5 dark:text-white/90 border border-clinic-muted-1/10 dark:border-white/5 rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.role === 'model' ? (
                  <div className="markdown-body text-sm font-light">
                    <Markdown 
                      components={{
                        a({ node, href, children, ...props }) {
                          if (href && href.startsWith('/')) {
                            return (
                              <Link 
                                to={href} 
                                className="text-clinic-cta font-semibold hover:underline"
                                onClick={() => setIsOpen(false)} // Close chat when navigating
                              >
                                {children}
                              </Link>
                            );
                          }
                          return <a href={href} className="text-clinic-cta font-semibold hover:underline" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                        }
                      }}
                    >
                      {msg.text}
                    </Markdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-end gap-2 max-w-[85%] mr-auto">
              <div className="w-8 h-8 rounded-full bg-clinic-cta/10 text-clinic-cta dark:bg-white/10 dark:text-white flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white text-clinic-dark dark:bg-white/5 dark:text-white/90 border border-clinic-muted-1/10 dark:border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                <Loader2 className="w-5 h-5 animate-spin text-clinic-cta" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-[#002f35] border-t border-clinic-muted-1/10 dark:border-white/10">
          <div className="flex items-center gap-2 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className="flex-1 max-h-32 min-h-[50px] resize-none bg-clinic-bg dark:bg-[#001f24] border border-clinic-muted-1/20 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-clinic-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-clinic-cta pr-12 transition-shadow"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 bottom-2.5 p-1.5 bg-clinic-cta text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1c929a] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
