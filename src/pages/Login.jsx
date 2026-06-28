import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Lock, User, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication
        if (username === 'admin' && password === '1234') {
            onLogin();
            navigate('/');
        } else {
            alert('Invalid credentials. Use admin / 1234');
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f1ea] flex items-center justify-center p-4">
            <div className="bg-white max-w-md w-full rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-primary p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Coffee className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Matcha-Time Admin</h2>
                    <p className="text-primary-100 text-sm text-white/80">Welcome back! Please login to your account.</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Username</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-primary hover:text-primary-dark font-medium transition-colors">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]"
                        >
                            Sign In <ArrowRight size={18} />
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center text-sm text-gray-500">
                        Demo Credentials: <span className="font-semibold text-gray-700">admin / 1234</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
