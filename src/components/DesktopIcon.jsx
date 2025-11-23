import React, { useState, useEffect } from 'react';

const DesktopIcon = ({ icon, label, onDoubleClick, variant = 'desktop' }) => {
    const isDesktop = variant === 'desktop';
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect if the device supports touch
        const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(hasTouchSupport);
    }, []);

    const handleInteraction = (e) => {
        // On touch devices, use single click/tap
        if (isTouchDevice) {
            onDoubleClick();
        }
        // On non-touch devices, the onDoubleClick handler will be used instead
    };

    return (
        <div
            className={`flex flex-col items-center justify-center w-24 h-24 m-4 cursor-pointer hover:bg-white/20 border border-transparent hover:border-dotted hover:border-white/50 ${!isDesktop ? 'hover:bg-blue-700/20 hover:border-blue-800/50' : ''}`}
            onDoubleClick={isTouchDevice ? undefined : onDoubleClick}
            onClick={isTouchDevice ? handleInteraction : undefined}
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
