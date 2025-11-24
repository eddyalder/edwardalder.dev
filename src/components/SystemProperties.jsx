import React, { useState } from 'react';

const SystemProperties = () => {
    const [activeTab, setActiveTab] = useState('General');

    const tabs = ['General', 'Hardware'];

    const skills = {
        Languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Java', 'Dart', 'Swift'],
        Frameworks: ['React', 'React Native', 'Flutter', 'Node.js', 'Tailwind CSS'],
        Tools: ['Git', 'Vercel', 'Vite', 'Figma', 'Jira', 'AWS']
    };

    return (
        <div className="flex flex-col h-[420px] w-full text-sm">
            {/* Tabs */}
            <div className="flex gap-1 px-2 pt-2 border-b border-gray-400">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 rounded-t-md border-t border-l border-r border-white shadow-sm -mb-[1px] z-10 ${activeTab === tab ? 'bg-[#c0c0c0] font-bold' : 'bg-[#a0a0a0] text-gray-700'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-4 bg-[#c0c0c0] border border-white border-t-0 shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#808080] overflow-y-auto max-h-[400px]">
                {activeTab === 'General' && (
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 items-start">
                            <img src="/computer_icon.png" alt="System" className="w-12 h-12" />
                            <div>
                                <h3 className="font-bold mb-2">System:</h3>
                                <p className="pl-4">Alder 2000</p>
                                <p className="pl-4">Version 2025</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2">Registered to:</h3>
                            <p className="pl-4">Edward Alder</p>
                            <p className="pl-4">Seattle, WA</p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2">Computer:</h3>
                            <p className="pl-4">Mobile Engineer</p>
                            <p className="pl-4">3+ Years Experience</p>
                        </div>
                    </div>
                )}

                {activeTab === 'Hardware' && (
                    <div className="h-full flex flex-col">
                        <div className="mb-2">Device Manager:</div>
                        <div className="flex-1 bg-white border-2 border-gray-500 border-b-white border-r-white shadow-inner p-2 overflow-auto">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="mb-2">
                                    <div className="flex items-center gap-1 font-bold">
                                        <span className="text-xs">▼</span>
                                        <img src="/computer_icon.png" alt="" className="w-4 h-4" />
                                        {category}
                                    </div>
                                    <div className="pl-6 flex flex-col">
                                        {items.map(skill => (
                                            <div key={skill} className="flex items-center gap-2 py-0.5">
                                                <div className="w-2 h-[1px] bg-gray-400"></div>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default SystemProperties;
