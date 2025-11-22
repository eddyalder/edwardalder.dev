import React from 'react';

const DesktopIcon = ({ icon, label, onDoubleClick, variant = 'desktop' }) => {
    const isDesktop = variant === 'desktop';

    return (
        <div
            className={`flex flex-col items-center justify-center w-24 h-24 m-4 cursor-pointer hover:bg-white/20 border border-transparent hover:border-dotted hover:border-white/50 ${!isDesktop ? 'hover:bg-blue-700/20 hover:border-blue-800/50' : ''}`}
            onDoubleClick={onDoubleClick}
        >
            <div className="w-12 h-12 mb-1 flex items-center justify-center">
                {/* If icon is a string, assume it's an image URL. If it's a component, render it. */}
                {typeof icon === 'string' ? (
                    <img src={icon} alt={label} className="w-full h-full object-contain pixelated" />
                ) : (
                    icon
                )}
            </div>
            <span className={`text-center text-sm px-1 bg-transparent ${isDesktop ? 'text-white text-shadow-sm' : 'text-black'}`}>
                {label}
            </span>
            <style>{`
        .pixelated {
          image-rendering: pixelated;
        }
        .text-shadow-sm {
          text-shadow: 1px 1px 1px black;
        }
      `}</style>
        </div>
    );
};

export default DesktopIcon;
