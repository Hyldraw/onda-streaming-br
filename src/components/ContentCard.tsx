import { Play, Plus, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  rating: string;
  year: string;
  duration: string;
}

const ContentCard = ({ image, title, description, rating, year, duration }: ContentCardProps) => {
  return (
    <div className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer active:scale-95 transition-smooth snap-start">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
        <h3 className="text-sm font-bold line-clamp-2 leading-tight">{title}</h3>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-accent font-semibold text-xs">{rating}</span>
          <span>•</span>
          <span>{year}</span>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-smooth space-y-2">
          <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-2">
            <Button size="sm" className="gradient-primary shadow-glow flex-1 h-8 text-xs">
              <Play className="mr-1 h-3 w-3" />
              Assistir
            </Button>
            <Button size="sm" variant="secondary" className="backdrop-glass h-8 w-8 p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
