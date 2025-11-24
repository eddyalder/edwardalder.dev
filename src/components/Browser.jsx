import React, { useState } from 'react';

const Browser = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [url, setUrl] = useState('https://stickyournotes.com');

    const tabs = [
        { title: 'StickYourNotes', url: 'https://stickyournotes.com' },
        { title: 'Arrow Ops', url: 'https://www.arrowops.dev' },
        { title: 'Numbit', url: 'https://www.numbit.dev/' }
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
        setUrl(tabs[index].url);
    };

    return (
        <div className="flex flex-col h-full bg-[#c0c0c0]">
            {/* Toolbar */}
            <div className="flex items-center gap-2 p-1 border-b border-gray-400">
                <div className="flex gap-1">
                    <button className="w-6 h-6 flex items-center justify-center border-2 border-white border-b-black border-r-black active:border-black active:border-b-white active:border-r-white bg-[#c0c0c0]">
                        ←
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center border-2 border-white border-b-black border-r-black active:border-black active:border-b-white active:border-r-white bg-[#c0c0c0]">
                        →
                    </button>
                </div>
                <div className="flex-1 bg-white border-2 border-gray-400 border-b-white border-r-white px-2 py-0.5 text-sm font-mono truncate">
                    {url}
                </div>
                <button
                    onClick={() => window.open(url, '_blank')}
                    className="w-6 h-6 flex items-center justify-center border-2 border-white border-b-black border-r-black active:border-black active:border-b-white active:border-r-white bg-[#c0c0c0]"
                    title="Open in New Tab"
                >
                    ↗
                </button>
            </div>

            {/* Tabs */}
            <div className="flex items-end px-1 pt-1 gap-0.5 border-b-2 border-white">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-4 py-1 text-sm rounded-t-sm border-t-2 border-l-2 border-r-2 ${activeTab === index
                            ? 'bg-[#c0c0c0] border-white border-r-black font-bold -mb-[2px] pb-1.5 z-10'
                            : 'bg-[#a0a0a0] border-white border-r-black text-gray-700 hover:bg-[#b0b0b0]'
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white border-2 border-gray-400 border-t-black border-l-black relative">
                <iframe
                    src={url}
                    title="Browser Content"
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                />
            </div>

            {/* Status Bar */}
            <div className="h-6 border-t border-gray-400 flex items-center px-2 text-xs text-gray-600">
                {tabs[activeTab].title} - Internet Explorer
            </div>
        </div>
    );
};

export default Browser;
