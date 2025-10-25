import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContentRowProps {
  title: string;
  children: React.ReactNode;
}

const ContentRow = ({ title, children }: ContentRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`row-${title}`);
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === "left" 
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold px-4">{title}</h2>
      
      <div className="relative">
        <div
          id={`row-${title}`}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
