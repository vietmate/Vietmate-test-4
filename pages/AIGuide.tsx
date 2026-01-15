import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

export default function AIGuide() {
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Xin chào! I'm your Vietmate AI guide. Ready to discover the soul of Vietnam? 🇻🇳" },
        { type: 'bot', text: "What are you looking for today? We've hand-picked some categories for you to start exploring." },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);

    useEffect(() => {
        // Initialize the Gemini chat client
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatRef.current = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: "You are a friendly and knowledgeable local travel guide for Vietnam called Vietmate. You help users plan trips, find tours, and discover local food. You are enthusiastic, polite, and love using emojis to make the conversation engaging.",
            },
        });
    }, []);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;
        
        const userText = inputValue;
        setInputValue("");
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setIsLoading(true);

        try {
            // Ensure chat is initialized
            if (!chatRef.current) {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                chatRef.current = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: "You are a friendly and knowledgeable local travel guide for Vietnam called Vietmate. You help users plan trips, find tours, and discover local food. You are enthusiastic, polite, and love using emojis to make the conversation engaging.",
                    },
                });
            }

            // Send message and handle streaming response
            const responseStream = await chatRef.current.sendMessageStream({ message: userText });
            
            // Add placeholder for bot response
            setMessages(prev => [...prev, { type: 'bot', text: "" }]);

            let fullText = "";
            for await (const chunk of responseStream) {
                const c = chunk as GenerateContentResponse;
                const text = c.text;
                if (text) {
                    fullText += text;
                    setMessages(prev => {
                        const newMessages = [...prev];
                        const lastMessage = newMessages[newMessages.length - 1];
                        if (lastMessage.type === 'bot') {
                            lastMessage.text = fullText;
                        }
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error("AI Chat Error:", error);
            setMessages(prev => [...prev, { type: 'bot', text: "Sorry, I'm having trouble connecting to the spirits of Vietnam right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 h-screen overflow-hidden flex flex-col">
       <header className="fixed top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 cursor-pointer">
                         <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined !text-xl">explore</span>
                        </div>
                        <h1 className="text-xl font-black tracking-tight text-primary uppercase">Vietmate</h1>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            AI Guide Online
                        </div>
                    </div>
                </div>
            </div>
       </header>

       <main className="pt-16 flex flex-col relative flex-1">
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center transition-all duration-700 blur-sm brightness-50" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRLjqAb1vPHwp_-KI-JUeXkkFGFNP8hNNU8UfLN8jDC0C8dUImOge6vZt-rIS9P2aLQv01zeyl8_ViZYEzHMe3rGua0-3VtPwID9TugfcJBvU3i9KuIIr8m5Em1cj7beP4-hP538JSKTOf3DHL1_X3vN_8ZVG54E7oFrCLLR3iCSAVgcGqtkMvwEb42MH3FCNc13vTxuqK81I2mUPYlU7Dn49fZDSRPykcucnvj6ujTV20WVWHxSOAGawBZKc8BGw4MfxH1lzw3eU')"}}></div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-8 relative z-10 space-y-8 scroll-smooth hide-scrollbar">
                <div className="max-w-4xl mx-auto space-y-8 pb-32">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-4 items-start ${msg.type === 'user' ? 'justify-end' : ''}`}>
                            {msg.type === 'bot' && (
                                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
                                    <span className="material-symbols-outlined !text-xl">smart_toy</span>
                                </div>
                            )}
                            <div className={`p-5 rounded-2xl shadow-xl max-w-[85%] ${msg.type === 'bot' ? 'bg-white dark:bg-slate-900 rounded-tl-none border border-slate-100 dark:border-slate-800' : 'bg-primary text-white rounded-tr-none'}`}>
                                <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Suggestion Chips (Static for demo) */}
                    {messages.length < 3 && (
                         <div className="flex flex-wrap gap-3 ml-14">
                            {['Tours', 'Transport', 'Food', 'Attractions'].map(chip => (
                                <button key={chip} className="px-6 py-3 bg-white/10 hover:bg-primary hover:text-white backdrop-blur-md border border-white/20 rounded-full text-white font-bold transition-all flex items-center gap-2 group">
                                     <span className="material-symbols-outlined !text-lg text-primary group-hover:text-white">local_activity</span> {chip}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="p-4 md:p-8 relative z-20">
                <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-2xl border border-white/40 flex items-center gap-2">
                    <div className="flex-1 flex items-center px-6 py-2">
                        <span className="material-symbols-outlined text-slate-400 mr-3">chat_bubble</span>
                        <input 
                            className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium placeholder:text-slate-400 text-slate-900 dark:text-white" 
                            placeholder="Type your travel dreams here..." 
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            disabled={isLoading}
                        />
                    </div>
                     <div className="flex gap-2">
                        <button 
                            className={`h-14 px-8 bg-primary text-white rounded-full flex items-center justify-center gap-2 hover:bg-red-700 transition-all font-black shadow-lg shadow-primary/20 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            onClick={handleSend}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                            ) : (
                                <>
                                    <span>Send</span>
                                    <span className="material-symbols-outlined !text-lg">send</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
       </main>
    </div>
  );
}