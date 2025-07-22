import React from 'react';

export interface BannerButtonProps {
    text: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const BannerButton: React.FC<BannerButtonProps> = ({ text, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        className="mt-10 cursor-pointer flex items-center justify-center gap-4 rounded-md bg-secondary-500 px-4 py-3 text-[1.4rem] font-bold text-white shadow-md transition hover:bg-secondary-600"
    >
        <span>{text}</span>
        {children}
    </button>
);

export default BannerButton;