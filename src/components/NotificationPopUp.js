import React, { useState, useEffect } from "react";

const NotificationPopup = ({ message, duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 right-4 bg-purple-600 text-white p-4 rounded shadow-lg transform transition-transform duration-200 ease-in-out translate-x-0">
            <div className="flex items-center">
                <span className="mr-2">{message}</span>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose();
                    }}
                    className="text-white focus:outline-none"
                >
                    &times;
                </button>
            </div>
            <div className="w-full bg-gray-300 h-1 mt-2 relative overflow-hidden">
                <div
                    className="absolute left-0 top-0 h-full bg-white"
                    style={{ animation: `shrink ${duration}ms linear forwards` }}
                ></div>
            </div>
        </div>
    );
};

export default NotificationPopup;
