import { Bell, Cast } from "lucide-react";

export const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="flex justify-between items-center h-14 px-4">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          StreamMax
        </h1>
        <div className="flex items-center gap-3">
          <button className="text-foreground/80 hover:text-foreground">
            <Cast className="w-5 h-5" />
          </button>
          <button className="text-foreground/80 hover:text-foreground relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
