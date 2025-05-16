
import { useState } from "react";
import { SidebarNav } from "./SidebarNav";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div 
        className={cn(
          "fixed inset-y-0 z-50 flex w-72 flex-col bg-white transition-all duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold text-tp-blue">Teleperformance EMEA</h1>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <SidebarNav />
        </div>
      </div>
      
      <div className={cn(
        "flex flex-1 flex-col transition-all duration-300 ease-in-out",
        sidebarOpen ? "pl-72" : "pl-0"
      )}>
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            <span className="sr-only">Toggle Menu</span>
            {sidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m15 4-8 8 8 8"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M3 7h18"></path>
                <path d="M3 12h18"></path>
                <path d="M3 17h18"></path>
              </svg>
            )}
          </button>
          <div className="flex-1">
            <h2 className="text-lg font-medium">Research Visualization Dashboard</h2>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 pt-4">
          {children}
        </main>
      </div>
    </div>
  );
};
