import React, { useState } from 'react';
import { UploadCloud, Trash2, Image as ImageIcon } from 'lucide-react';

const generateDummyImages = () => {
    return Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        url: `https://picsum.photos/seed/matcha${i}/400/400`,
        title: `Gallery Image ${i + 1}`
    }));
};

const Gallery = () => {
    const [images, setImages] = useState(generateDummyImages());
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        alert('File dropped! (In a real app, this would upload the image)');
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this image?')) {
            setImages(images.filter(img => img.id !== id));
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
            
            {/* Upload Area */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                        isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                            <UploadCloud size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Upload New Images</h3>
                        <p className="text-sm text-gray-500 mb-4">Drag and drop your images here, or click to browse</p>
                        
                        <div className="pointer-events-auto">
                            <input type="file" id="galleryUpload" multiple accept="image/*" className="hidden" />
                            <label 
                                htmlFor="galleryUpload"
                                className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors cursor-pointer inline-block"
                            >
                                Browse Files
                            </label>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">Supports JPG, PNG, WEBP (Max 5MB per file)</p>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <ImageIcon size={20} className="text-primary"/> All Images <span className="text-sm font-normal text-gray-500">({images.length})</span>
                    </h2>
                </div>

                {images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {images.map((img) => (
                            <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                                <img 
                                    src={img.url} 
                                    alt={img.title} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2">
                                    <button 
                                        onClick={() => handleDelete(img.id)}
                                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-200"
                                        title="Delete Image"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <ImageIcon size={48} className="mx-auto text-gray-300 mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No images found</h3>
                        <p className="text-sm text-gray-500">Upload some images to populate your gallery.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
