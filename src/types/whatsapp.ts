export interface WhatsAppButtonProps {
    variant?: 'contact' | 'full-contact' | 'icon-only';
    animation?: 'floating' | 'pulse' | 'breathing' | 'bounce' | 'none';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    phoneNumber?: string;
    message?: string;
    showIcon?: boolean;
    className?: string;
    style?: 'filled' | 'outlined' | 'minimal';
    onClick?: () => void;
    disabled?: boolean;
    'aria-label'?: string;
    scrolled?: boolean;
    mobile?: boolean;
}

export interface WhatsAppIconProps {
    variant?: 'floating' | 'pulse' | 'breathing' | 'bounce' | 'fixed';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    phoneNumber?: string;
    message?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    'aria-label'?: string;
}

export type ButtonVariant = 'contact' | 'full-contact' | 'icon-only';
export type IconVariant = 'floating' | 'pulse' | 'breathing' | 'bounce' | 'fixed';
export type AnimationType = 'floating' | 'pulse' | 'breathing' | 'bounce' | 'fixed';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonStyle = 'filled' | 'outlined' | 'minimal';
