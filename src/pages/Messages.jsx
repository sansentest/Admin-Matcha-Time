import React, { useState } from 'react';
import { Search, Send, User, Clock, CheckCircle2 } from 'lucide-react';

const dummyMessages = [
    {
        id: 1,
        sender: 'Sokha N.',
        email: 'sokha.n@example.com',
        preview: 'Do you offer bulk orders for corporate events?',
        fullMessage: 'Hi Matcha-Time team,\n\nI am organizing a corporate event next Friday and we are expecting about 50 guests. Do you offer bulk orders for your signature iced matcha lattes? If so, what would the pricing be? \n\nThanks,\nSokha',
        time: '10:30 AM',
        date: 'Today',
        unread: true,
    },
    {
        id: 2,
        sender: 'Minea K.',
        email: 'minea.k@example.com',
        preview: 'Feedback on the new Strawberry Matcha',
        fullMessage: 'Hello!\n\nJust wanted to say that the new Strawberry Matcha is absolutely delicious! It has the perfect balance of sweetness and matcha flavor. Keep up the good work!\n\nBest,\nMinea',
        time: 'Yesterday',
        date: 'Oct 23, 2024',
        unread: false,
    },
    {
        id: 3,
        sender: 'Rath T.',
        email: 'rath.t@example.com',
        preview: 'Question about opening hours during holidays',
        fullMessage: 'Hi there, are you guys open during the upcoming Water Festival? I would love to drop by with my family.',
        time: 'Oct 22',
        date: 'Oct 22, 2024',
        unread: false,
    },
];

const Messages = () => {
    const [messages, setMessages] = useState(dummyMessages);
    const [activeMessageId, setActiveMessageId] = useState(1);
    const [replyText, setReplyText] = useState('');

    const activeMessage = messages.find(m => m.id === activeMessageId);

    const handleSelectMessage = (id) => {
        setActiveMessageId(id);
        // Mark as read
        setMessages(messages.map(m => m.id === id ? { ...m, unread: false } : m));
    };

    const handleSendReply = () => {
        if (!replyText.trim()) return;
        alert(`Reply sent to ${activeMessage.sender}!\nMessage: ${replyText}`);
        setReplyText('');
    };

    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-120px)] flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Customer Messages</h1>
            
            <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
                
                {/* Left Sidebar - Message List */}
                <div className="w-full md:w-80 border-r border-gray-100 flex flex-col h-[400px] md:h-full">
                    {/* Search */}
                    <div className="p-4 border-b border-gray-100">
                        <div className="relative">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search messages..." 
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                            />
                        </div>
                    </div>
                    
                    {/* List */}
                    <div className="flex-1 overflow-y-auto">
                        {messages.map((msg) => (
                            <button
                                key={msg.id}
                                onClick={() => handleSelectMessage(msg.id)}
                                className={`w-full text-left p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                                    activeMessageId === msg.id ? 'bg-primary/5 border-l-4 border-primary' : 'border-l-4 border-transparent'
                                }`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className={`text-sm font-medium ${msg.unread ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                                        {msg.sender}
                                    </h3>
                                    <span className="text-xs text-gray-400">{msg.time}</span>
                                </div>
                                <p className={`text-xs line-clamp-2 ${msg.unread ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                                    {msg.preview}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content - Active Message */}
                <div className="flex-1 flex flex-col h-[500px] md:h-full bg-gray-50/30">
                    {activeMessage ? (
                        <>
                            {/* Message Header */}
                            <div className="p-6 border-b border-gray-100 bg-white">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">{activeMessage.sender}</h2>
                                            <p className="text-sm text-gray-500">{activeMessage.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                                        <Clock size={14} />
                                        {activeMessage.date} at {activeMessage.time}
                                    </div>
                                </div>
                            </div>

                            {/* Message Body */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                                        {activeMessage.fullMessage}
                                    </p>
                                </div>
                            </div>

                            {/* Reply Area */}
                            <div className="p-6 bg-white border-t border-gray-100">
                                <h3 className="text-sm font-bold text-gray-900 mb-3">Reply to {activeMessage.sender}</h3>
                                <div className="relative">
                                    <textarea 
                                        rows="4"
                                        placeholder="Type your reply here..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                    ></textarea>
                                    <div className="absolute bottom-3 right-3">
                                        <button 
                                            onClick={handleSendReply}
                                            disabled={!replyText.trim()}
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send size={16} /> Send Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                            <CheckCircle2 size={48} className="mb-4 text-gray-300" />
                            <p className="text-lg font-medium text-gray-500">You're all caught up!</p>
                            <p className="text-sm mt-1">Select a message from the list to read.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Messages;
