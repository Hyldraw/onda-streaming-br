import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Destaque principal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">Série Original</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Além do
            <span className="text-gradient"> Horizonte</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Em um futuro distante, a última esperança da humanidade embarca em uma jornada épica 
            através das estrelas. Mistério, ação e drama em cada episódio.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-smooth">
              <Play className="mr-2 h-5 w-5" />
              Assistir Agora
            </Button>
            <Button size="lg" variant="secondary" className="backdrop-glass hover:bg-secondary/80">
              <Info className="mr-2 h-5 w-5" />
              Mais Informações
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              97% Aprovação
            </span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span>3 Temporadas</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded border border-muted-foreground/30">16+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
