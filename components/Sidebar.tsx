import React from 'react';

interface SidebarProps {
  onLogoClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogoClick }) => {
  return (
    <aside className="w-64 shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <div 
        className="p-6 flex items-center gap-3 cursor-pointer"
        onClick={onLogoClick}
      >
        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20">
          <span className="material-symbols-outlined">maps_home_work</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold leading-tight tracking-tight">Flex Living</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Manager Portal</p>
        </div>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto py-4">
        <NavItem icon="dashboard" label="Dashboard" />
        <NavItem icon="apartment" label="Properties" />
        <NavItem icon="star" label="Reviews" isActive />
        <NavItem icon="analytics" label="Analytics" />
        <NavItem icon="settings" label="Settings" />
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
          <div
            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdopOoHy-4RyP2nbel2_lQ9lmg-vDBQPcEMvKgFHaz_Z6--2Naac6gYmHLr4mAlzTsg7rjRB03bqoPI-2ZIvftl53_vxfMhVctaPB0Z7Ujm9o5jIZgmi6nwc1A1nK89ZjArq3gWiEeYs0zmxwn-_PQZWAxLnL541kEwEiz1rNh43PrxiCIxUM6CwIGflRvC4yKHpk0Gd8L49G0KzImx696O1YFB_2WYaI7xBjTT-vxwuIVYaGBLr97vJnk6VRViHxNLaAS-5Gotww')",
            }}
          />
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">Alex Morgan</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Manager</p>
          </div>
          <span className="material-symbols-outlined ml-auto text-slate-400 text-[20px]">
            expand_more
          </span>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  if (isActive) {
    return (
      <a
        href="#"
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-blue-400 font-semibold shadow-sm"
      >
        <span className="material-symbols-outlined text-[24px] fill-current">{icon}</span>
        <span className="text-sm">{label}</span>
      </a>
    );
  }

  return (
    <a
      href="#"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
    >
      <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default Sidebar;