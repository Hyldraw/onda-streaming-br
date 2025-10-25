import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-glass border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-gradient">StreamMax</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth">
                Início
              </a>
              <a href="#" className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth">
                Séries
              </a>
              <a href="#" className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth">
                Filmes
              </a>
              <a href="#" className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth">
                Novidades
              </a>
              <a href="#" className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth">
                Minha Lista
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar títulos..."
                className="pl-10 w-64 bg-secondary border-border focus-visible:ring-primary"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
