"use client"
import React from 'react';

interface WhatsAppButtonProps {
    variant?: 'contact' | 'full-contact' | 'icon-only';
    animation?: 'floating' | 'pulse' | 'breathing' | 'none';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    phoneNumber?: string;
    message?: string;
    showIcon?: boolean;
    className?: string;
    style?: 'filled' | 'outlined' | 'minimal';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
                                                           variant = 'contact',
                                                           animation = 'floating',
                                                           size = 'md',
                                                           phoneNumber = '',
                                                           message = 'Olá! Gostaria de mais informações.',
                                                           showIcon = true,
                                                           className = '',
                                                           style = 'filled'
                                                       }) => {
    const sizeClasses = {
        sm: showIcon ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm',
        md: showIcon ? 'px-4 py-3 text-base' : 'px-6 py-3 text-base',
        lg: showIcon ? 'px-6 py-4 text-lg' : 'px-8 py-4 text-lg',
        xl: showIcon ? 'px-8 py-5 text-xl' : 'px-10 py-5 text-xl'
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-7 h-7'
    };

    const animationClasses = {
        floating: 'animate-float',
        pulse: 'animate-pulse-green',
        breathing: 'animate-breathing',
        none: ''
    };

    const styleClasses = {
        filled: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl',
        outlined: 'border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent',
        minimal: 'text-green-600 hover:text-green-700 hover:bg-green-50 bg-transparent'
    };

    const getButtonText = () => {
        switch (variant) {
            case 'full-contact':
                return 'Entre em Contato';
            case 'contact':
                return 'Contato';
            case 'icon-only':
                return '';
            default:
                return 'Contato';
        }
    };

    const handleClick = () => {
        if (phoneNumber) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    const isIconOnly = variant === 'icon-only' || !getButtonText();

    return (
        <button
            onClick={handleClick}
            className={`
        ${sizeClasses[size]}
        ${animationClasses[animation]}
        ${styleClasses[style]}
        ${isIconOnly ? 'rounded-full aspect-square flex items-center justify-center' : 'rounded-full'}
        inline-flex items-center justify-center gap-2
        font-semibold
        transform hover:scale-105
        transition-all duration-300 ease-in-out
        cursor-pointer
        group
        relative
        overflow-hidden
        focus:outline-none focus:ring-4 focus:ring-green-300
        ${className}
      `}
            aria-label={getButtonText() || 'Contato via WhatsApp'}
        >
            {/* Background pulse effect */}
            {animation === 'pulse' && (
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            )}

            {/* WhatsApp Icon */}
            {showIcon && (
                <svg
                    className={`${iconSizes[size]} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
            )}

            {/* Button Text */}
            {getButtonText() && (
                <span className="relative z-10 whitespace-nowrap">
          {getButtonText()}
        </span>
            )}

            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 group-active:animate-ping"></div>
        </button>
    );
};

export default WhatsAppButton;