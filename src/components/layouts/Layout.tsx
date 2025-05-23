import React from 'react';
import AppBar from '../HeaderBar';

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="h-screen w-screen bg-layout-background-light dark:bg-layout-background-dark flex flex-col">
      {/* Fixed Top AppBar */}
      <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-layout-background-light dark:bg-layout-background-dark">
        <AppBar />
      </header>

      {/* Main content BELOW AppBar */}
      <div className="flex flex-1 pt-16 overflow-hidden relative">
        {sidebar && (
          <aside className="w-64 bg-layout-sidebar-light dark:bg-layout-sidebar-dark border-r overflow-y-auto shrink-0 h-[calc(100vh-4rem)]">
            {sidebar}
          </aside>
        )}

        <main className="flex-1 overflow-auto p-6 bg-layout-background-light dark:bg-layout-background-dark h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
