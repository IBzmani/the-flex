import React, { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
    label: string;
    icon: string;
    value: string;
    options: string[];
    onSelect: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, icon, value, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`h-9 px-3 rounded-lg border ${isOpen ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer`}
            >
                <span className="material-symbols-outlined text-[18px] text-slate-500">{icon}</span>
                <span className="whitespace-nowrap">
                    {label}: <span className="text-primary font-semibold">{value}</span>
                </span>
                <span className={`material-symbols-outlined text-[18px] text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${option === value ? 'bg-slate-50 dark:bg-slate-700/50 text-primary font-medium' : 'text-slate-600 dark:text-slate-400'}`}
                            >
                                {option}
                                {option === value && (
                                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
