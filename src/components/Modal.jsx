import React from 'react';

const Modal = ({ isOpen, title, message, onConfirm, onCancel, confirmLabel = "OK", cancelLabel = "Cancel" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" onClick={onCancel}></div>

            {/* Window */}
            <div className="relative retro-border p-1 min-w-[300px] max-w-md shadow-xl">
                {/* Title Bar */}
                <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center mb-4">
                    <span className="font-bold text-sm tracking-wide">{title}</span>
                    <button
                        onClick={onCancel}
                        className="bg-[#c0c0c0] text-black w-5 h-5 flex items-center justify-center text-xs font-bold border border-white border-b-black border-r-black shadow-inner active:border-gray-500"
                    >
                        X
                    </button>
                </div>

                {/* Content */}
                <div className="px-4 py-4 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4 w-full">
                        <div className="w-8 h-8 flex-shrink-0">
                            {/* Warning Icon placeholder */}
                            <svg viewBox="0 0 32 32" className="w-full h-full">
                                <path d="M16 2L30 28H2L16 2Z" fill="#ffff00" stroke="#000" strokeWidth="2" />
                                <path d="M16 10V20M16 24V26" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-black text-sm">{message}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 w-full">
                        <button
                            onClick={onConfirm}
                            className="retro-button min-w-[80px]"
                        >
                            {confirmLabel}
                        </button>
                        <button
                            onClick={onCancel}
                            className="retro-button min-w-[80px]"
                        >
                            {cancelLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
