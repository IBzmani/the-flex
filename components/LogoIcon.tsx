import React from 'react';

interface LogoIconProps {
    className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <text
                x="12"
                y="16"
                fontSize="14"
                fontFamily="serif"
                fontWeight="bold"
                textAnchor="middle"
                fill="currentColor"
                stroke="none"
            >
                f
            </text>
        </svg>
    );
};

export default LogoIcon;
