import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Destaque principal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex items-end px-4 pb-6">
        <div className="max-w-lg space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-xs font-semibold text-primary">Série Original</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight">
            Além do
            <span className="text-gradient"> Horizonte</span>
          </h1>

          <p className="text-sm text-muted-foreground line-clamp-2">
            Em um futuro distante, a última esperança da humanidade embarca em uma jornada épica 
            através das estrelas.
          </p>

          <div className="flex gap-3">
            <Button size="sm" className="gradient-primary shadow-glow">
              <Play className="mr-1 h-4 w-4" />
              Assistir
            </Button>
            <Button size="sm" variant="secondary" className="backdrop-glass">
              <Info className="mr-1 h-4 w-4" />
              Info
            </Button>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              97%
            </span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span>3 Temp.</span>
            <span>•</span>
            <span className="px-1.5 py-0.5 rounded border border-muted-foreground/30">16+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
