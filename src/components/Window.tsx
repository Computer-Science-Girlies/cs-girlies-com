import React from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Window: React.FC<WindowProps> = ({ title, children, className, noPadding }) => {
  return (
    <div className={`bg-black border-2 border-csgirlies-pink rounded-lg shadow-lg ${className}`}>
      <div className="bg-csgirlies-pink text-black px-4 py-1 flex items-center justify-between rounded-t-md">
        <span className="font-roboto-mono text-sm">{title}</span>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
          <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
          <div className="w-3 h-3 rounded-full bg-csgirlies-pink-light"></div>
        </div>
      </div>
      <div className={noPadding ? '' : 'p-4'}>
        {children}
      </div>
    </div>
  );
};

export default Window;
