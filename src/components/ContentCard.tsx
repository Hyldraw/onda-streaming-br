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
    <div className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-accent font-semibold">{rating}</span>
            <span>•</span>
            <span>{year}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="gradient-primary shadow-glow flex-1">
              <Play className="mr-1 h-3 w-3" />
              Assistir
            </Button>
            <Button size="sm" variant="secondary" className="backdrop-glass">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="backdrop-glass">
              <ThumbsUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-semibold opacity-0 group-hover:opacity-100 transition-smooth">
        {rating}
      </div>
    </div>
  );
};

export default ContentCard;
