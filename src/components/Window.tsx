import React from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  titleActions?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, children, className, noPadding, titleActions }) => {
  return (
    <div className={`bg-black border-2 border-csgirlies-pink rounded-lg shadow-lg ${className}`}>
      <div className="bg-black text-white border-b-2 border-csgirlies-pink px-4 py-1 flex items-center justify-between rounded-t-md">
        <div className="flex items-center gap-3">
          <span className="font-roboto-mono text-sm">{title}</span>
          {titleActions && (
            <div className="text-xs text-gray-300">{titleActions}</div>
          )}
        </div>
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
