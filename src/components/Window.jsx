import React, { useState, useRef, useEffect } from 'react';
import DesktopIcon from './DesktopIcon';

const Window = ({ title, children, onClose, isOpen, zIndex, onFocus, icon, initialWidth = 400, initialHeight = 300, hideMenu = false, hideStatus = false, noPadding = false }) => {
    const [position, setPosition] = useState(() => {
        let width, height;

        if (typeof initialWidth === 'string' && initialWidth.endsWith('%')) {
            width = window.innerWidth * (parseFloat(initialWidth) / 100);
        } else {
            width = Math.min(window.innerWidth * 0.9, initialWidth);
        }

        if (typeof initialHeight === 'string' && initialHeight.endsWith('%')) {
            height = window.innerHeight * (parseFloat(initialHeight) / 100);
        } else {
            height = initialHeight;
        }

        const offset = Math.floor(Math.random() * 40) - 20; // -20 to +20

        // If percentages are used, center exactly without random offset
        if (typeof initialWidth === 'string' && initialWidth.endsWith('%')) {
            return {
                x: (window.innerWidth - width) / 2,
                y: (window.innerHeight - height) / 2
            };
        }

        return {
            x: Math.max(0, (window.innerWidth - width) / 2 + offset),
            y: Math.max(0, (window.innerHeight - height) / 2 + offset - 100)
        };
    });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const windowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragOffset.current.x,
                    y: e.clientY - dragOffset.current.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleMouseDown = (e) => {
        if (windowRef.current) {
            const rect = windowRef.current.getBoundingClientRect();
            dragOffset.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            setIsDragging(true);
            onFocus();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={windowRef}
            className="absolute retro-border p-1 min-w-[300px] sm:min-w-[400px] max-w-[90vw] min-h-[300px] shadow-xl flex flex-col bg-[#c0c0c0]"
            style={{
                zIndex,
                left: position.x,
                top: position.y,
                width: typeof initialWidth === 'string' ? initialWidth : (position.width || 'auto'),
                height: typeof initialHeight === 'string' ? initialHeight : 'auto'
            }}
            onMouseDown={onFocus}
        >
            {/* Title Bar */}
            <div
                className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center mb-1 select-none cursor-move"
                onMouseDown={handleMouseDown}
            >
                <span className="font-bold text-sm tracking-wide flex items-center gap-2 pointer-events-none">
                    <img src={icon || "/folder.svg"} alt="" className="w-4 h-4" />
                    {title}
                </span>
                <button
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="bg-[#c0c0c0] text-black w-5 h-5 flex items-center justify-center text-xs font-bold border border-white border-b-black border-r-black shadow-inner active:border-gray-500"
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    X
                </button>
            </div>

            {/* Menu Bar (Visual only) */}
            {!hideMenu && (
                <div className="flex gap-4 px-2 py-1 text-sm mb-2 border-b border-white shadow-[0_1px_0_#808080]">
                    <span><span className="underline">F</span>ile</span>
                    <span><span className="underline">E</span>dit</span>
                    <span><span className="underline">V</span>iew</span>
                    <span><span className="underline">H</span>elp</span>
                </div>
            )}

            {/* Content Area */}
            <div className={`flex-1 bg-white border-2 border-gray-500 border-b-white border-r-white shadow-inner ${noPadding ? '' : 'p-4'} overflow-auto`} style={{ height: initialHeight }}>
                {noPadding ? children : (
                    <div className="flex flex-wrap content-start gap-2">
                        {children}
                    </div>
                )}
            </div>

            {/* Status Bar */}
            {!hideStatus && (
                <div className="mt-1 px-2 py-0.5 text-xs border-t border-gray-500 shadow-[0_1px_0_#fff]">
                    {React.Children.count(children)} object(s)
                </div>
            )}
        </div>
    );
};

export default Window;
