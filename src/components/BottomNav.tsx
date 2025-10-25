import { Home, Search, Film, User } from "lucide-react";

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Início</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground">
          <Search className="w-6 h-6" />
          <span className="text-xs">Buscar</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground">
          <Film className="w-6 h-6" />
          <span className="text-xs">Minha Lista</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground">
          <User className="w-6 h-6" />
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </nav>
  );
};
