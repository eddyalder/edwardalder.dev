import React from 'react';

const StartMenu = ({ isOpen, onClose, onOpenItem }) => {
    if (!isOpen) return null;

    const menuItems = [
        {
            label: 'Settings', icon: '/computer_icon.png', arrow: true,
            onClick: () => onOpenItem('system')
        },
        { separator: true },
        {
            label: 'Shut Down...',
            icon: '/computer_icon.png',
            onClick: () => window.location.reload()
        },
    ];

    return (
        <>
            {/* Overlay to close menu when clicking outside */}
            <div className="fixed inset-0 z-40" onClick={onClose}></div>

            <div className="absolute bottom-10 left-0 z-50 flex shadow-xl bg-[#c0c0c0]">
                {/* Sidebar */}
                <div className="w-12 bg-[#000080] text-white flex items-end justify-center pb-2 shadow-[inset_-1px_0_0_#fff] relative">
                    <span className="transform -rotate-90 whitespace-nowrap font-bold text-xl tracking-widest absolute bottom-2 left-8 origin-bottom-left">
                        ALDER <span className="font-normal">2000</span>
                    </span>
                </div>

                {/* Menu Items */}
                <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 min-w-[160px] min-h-[300px] flex flex-col">
                    {menuItems.map((item, index) => (
                        item.separator ? (
                            <div key={index} className="h-[2px] bg-gray-500 border-b border-white my-1 mx-1 mt-auto"></div>
                        ) : (
                            <button
                                key={index}
                                className="w-full flex items-center gap-2 px-2 py-1 hover:bg-[#000080] hover:text-white group text-sm text-left"
                                onClick={() => {
                                    if (item.onClick) {
                                        item.onClick();
                                        onClose();
                                    }
                                }}
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <img src={item.icon} alt="" className="w-5 h-5 object-contain" />
                                </div>
                                <span className="flex-1">
                                    <span className="underline">{item.label.charAt(0)}</span>{item.label.slice(1)}
                                </span>
                                {item.arrow && <span className="text-black group-hover:text-white">▶</span>}
                            </button>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default StartMenu;
