import React, { useState } from 'react';
import { Save, LayoutTemplate, Type, Image as ImageIcon, Palette, Settings } from 'lucide-react';

const CMS = ({ activeTab = 'hero' }) => {
    // Hero & Header State
    const [brandTitle, setBrandTitle] = useState('Matcha-Time');
    const [heroTitle, setHeroTitle] = useState('Fresh Matcha For Every Mood');
    const [heroDesc, setHeroDesc] = useState('Experience healthy and refreshing drinks inspired by modern cafe culture. Crafted with premium ingredients and natural flavors.');
    const [heroBg, setHeroBg] = useState('');
    const [heroImage, setHeroImage] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        alert('Content saved successfully! (In a real app, this would save to database/localStorage)');
    };

    const getPageTitle = () => {
        switch (activeTab) {
            case 'hero': return 'Header & Hero Page';
            case 'about': return 'About Us';
            case 'testimonial': return 'Testimonials';
            case 'visit': return 'Visit Our Shop';
            case 'footer': return 'Footer Settings';
            default: return 'Content Management';
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    {getPageTitle()}
                </h1>
                <button 
                    onClick={handleSave} 
                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm"
                >
                    <Save size={18} /> Save Changes
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                
                {activeTab === 'hero' && (
                    <form className="space-y-8" onSubmit={handleSave}>
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <Type size={16} className="text-primary"/> Brand Identity
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Brand Title (Navbar)</label>
                                <input 
                                    type="text" 
                                    value={brandTitle}
                                    onChange={(e) => setBrandTitle(e.target.value)}
                                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>

                        {/* Hero Text Content */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <LayoutTemplate size={16} className="text-primary"/> Hero Text
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Main Title</label>
                                <input 
                                    type="text" 
                                    value={heroTitle}
                                    onChange={(e) => setHeroTitle(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                                <textarea 
                                    value={heroDesc}
                                    onChange={(e) => setHeroDesc(e.target.value)}
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>

                        {/* Hero Media Content */}
                        <div className="space-y-6 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <ImageIcon size={16} className="text-primary"/> Hero Media & Colors
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Background Image/Color */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Hero Background (Image)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors flex flex-col items-center justify-center h-32 bg-gray-50">
                                        <input type="file" accept="image/*" className="hidden" id="heroBgUpload" />
                                        <label htmlFor="heroBgUpload" className="cursor-pointer flex flex-col items-center">
                                            <Palette size={24} className="text-gray-400 mb-2" />
                                            <span className="text-sm font-medium text-primary hover:underline">Upload Background</span>
                                            <span className="text-xs text-gray-500 mt-1">Leave empty for solid color</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Main Hero Image */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Main Hero Image (e.g. Drink Cup)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors flex flex-col items-center justify-center h-32 bg-gray-50">
                                        <input type="file" accept="image/*" className="hidden" id="heroImgUpload" />
                                        <label htmlFor="heroImgUpload" className="cursor-pointer flex flex-col items-center">
                                            <ImageIcon size={24} className="text-gray-400 mb-2" />
                                            <span className="text-sm font-medium text-primary hover:underline">Upload Image</span>
                                            <span className="text-xs text-gray-500 mt-1">Transparent PNG recommended</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                )}

                {activeTab === 'about' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage the "About Us" section story and images.</p>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                                <input 
                                    type="text" 
                                    defaultValue="Our Story"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">About Description</label>
                                <textarea 
                                    rows="5"
                                    defaultValue="We started Matcha-Time with a simple mission: to bring the finest quality matcha to our community. Every leaf is carefully selected and every drink is handcrafted with passion."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">About Image</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors flex flex-col items-center justify-center h-32 bg-gray-50">
                                    <input type="file" accept="image/*" className="hidden" id="aboutImgUpload" />
                                    <label htmlFor="aboutImgUpload" className="cursor-pointer flex flex-col items-center">
                                        <ImageIcon size={24} className="text-gray-400 mb-2" />
                                        <span className="text-sm font-medium text-primary hover:underline">Upload Image</span>
                                        <span className="text-xs text-gray-500 mt-1">Recommended size: 600x400px</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                )}

                {activeTab === 'footer' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage your store's contact information and address here.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    type="text" 
                                    defaultValue="+855 12 345 678"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    defaultValue="hello@matchatime.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <input 
                                    type="text" 
                                    defaultValue="Street 2004, Phnom Penh, Cambodia"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                    </form>
                )}

                {activeTab === 'testimonial' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage the customer feedback displayed in the "What Our Guests Say" section.</p>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                                <input 
                                    type="text" 
                                    defaultValue="Sophal Kim"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Review</label>
                                <textarea 
                                    rows="4"
                                    defaultValue="The Iced Caffè Latte here is absolutely phenomenal! The atmosphere is cozy, and the service is fast and friendly."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                    </form>
                )}

                {activeTab === 'visit' && (
                    <form className="space-y-6" onSubmit={handleSave}>
                        <p className="text-gray-500 text-sm">Manage the "Visit Our Shop" section including location and operating hours.</p>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                                <textarea 
                                    rows="2"
                                    defaultValue="St. 214, Boeung Prolit, Prampi Makara, Phnom Penh"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                                <input 
                                    type="text" 
                                    defaultValue="Monday - Saturday: 9:00 AM - 5:00 PM"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                                <input 
                                    type="text" 
                                    defaultValue="+855 12 345 678"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Map Embed URL (Optional)</label>
                                <input 
                                    type="text" 
                                    placeholder="Paste Google Maps iframe link here..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CMS;
