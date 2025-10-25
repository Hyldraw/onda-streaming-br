import { Home, Search, Film, User } from "lucide-react";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe px-4 pb-4">
      <nav className="bg-background/95 backdrop-blur-lg border border-white/10 rounded-full shadow-elegant max-w-md mx-auto">
        <div className="flex justify-around items-center h-14 px-6">
          <button className="flex flex-col items-center gap-0.5 text-primary transition-all">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Início</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-muted-foreground transition-all hover:text-foreground">
            <Search className="w-5 h-5" />
            <span className="text-[10px]">Buscar</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-muted-foreground transition-all hover:text-foreground">
            <Film className="w-5 h-5" />
            <span className="text-[10px]">Minha Lista</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-muted-foreground transition-all hover:text-foreground">
            <User className="w-5 h-5" />
            <span className="text-[10px]">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
