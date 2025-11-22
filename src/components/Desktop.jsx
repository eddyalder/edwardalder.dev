import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Modal from './Modal';
import Window from './Window';
import { fileSystem } from '../data/fileSystem';

const Desktop = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => { },
    });

    const [openWindows, setOpenWindows] = useState([]);
    const [activeWindowId, setActiveWindowId] = useState(null);

    const openModal = (title, message, onConfirm) => {
        setModalState({
            isOpen: true,
            title,
            message,
            onConfirm: () => {
                onConfirm();
                closeModal();
            },
        });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

    const handleItemClick = (item) => {
        if (item.type === 'file' && item.action === 'download') {
            setModalState({
                isOpen: true,
                title: 'Download File',
                message: `Do you want to download ${item.label}?`,
                onConfirm: () => {
                    const link = document.createElement('a');
                    link.href = item.data.file;
                    link.download = item.data.fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setModalState(prev => ({ ...prev, isOpen: false }));
                }
            });
        } else if (item.type === 'link') {
            setModalState({
                isOpen: true,
                title: `Open ${item.data.name}`,
                message: `Do you want to visit ${item.data.url}?`,
                onConfirm: () => {
                    window.open(item.data.url, '_blank');
                    setModalState(prev => ({ ...prev, isOpen: false }));
                }
            });
        } else if (item.type === 'folder' || item.type === 'text') {
            if (!openWindows.find(w => w.id === item.id)) {
                setOpenWindows([...openWindows, item]);
            }
            setActiveWindowId(item.id);
        }
    };

    const handleCloseWindow = (id) => {
        setOpenWindows(openWindows.filter(w => w.id !== id));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const renderIcons = (items, variant = 'desktop') => {
        return items.map(item => (
            <DesktopIcon
                key={item.id}
                icon={item.icon}
                label={item.label}
                variant={variant}
                onDoubleClick={() => handleItemClick(item)}
            />
        ));
    };

    return (
        <div className="w-full h-screen relative overflow-hidden flex flex-col items-start p-4">
            {/* Desktop Icons */}
            <div className="flex flex-col flex-wrap h-[calc(100vh-40px)] content-start gap-2">
                {renderIcons(fileSystem)}
            </div>

            {/* Windows */}
            {openWindows.map(item => {
                return (
                    <Window
                        key={item.id}
                        title={item.label}
                        icon={item.icon}
                        isOpen={true}
                        onClose={() => handleCloseWindow(item.id)}
                        zIndex={activeWindowId === item.id ? 10 : 1}
                        onFocus={() => setActiveWindowId(item.id)}
                    >
                        {item.type === 'folder' ? (
                            renderIcons(item.children || [], 'window')
                        ) : (
                            <textarea
                                className="w-full h-full min-h-[200px] resize-none border-none outline-none font-mono text-sm p-1"
                                value={item.content}
                                readOnly
                            />
                        )}
                    </Window>
                );
            })}

            {/* Modal */}
            <Modal
                isOpen={modalState.isOpen}
                title={modalState.title}
                message={modalState.message}
                onConfirm={modalState.onConfirm}
                onCancel={closeModal}
            />

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center px-2 shadow-[inset_0_1px_0_#fff] z-50">
                <button className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-2 border-white border-b-black border-r-black shadow-sm active:border-black active:border-b-white active:border-r-white active:shadow-none font-bold text-sm">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-sm"></div>
                    Start
                </button>

                {/* Taskbar Items */}
                <div className="flex gap-1 ml-2">
                    {openWindows.map(item => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveWindowId(item.id)}
                                className={`px-2 py-1 text-xs border-2 ${activeWindowId === item.id ? 'border-black border-b-white border-r-white bg-[#e0e0e0] shadow-inner' : 'border-white border-b-black border-r-black bg-[#c0c0c0] shadow-sm'}`}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>

                <div className="ml-auto border-2 border-gray-500 border-b-white border-r-white px-2 py-1 text-xs bg-[#c0c0c0] shadow-inner">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};

export default Desktop;
