import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import ContentCard from "@/components/ContentCard";
import content1 from "@/assets/content-1.jpg";
import content2 from "@/assets/content-2.jpg";
import content3 from "@/assets/content-3.jpg";
import content4 from "@/assets/content-4.jpg";
import content5 from "@/assets/content-5.jpg";

const Index = () => {
  const trendingContent = [
    {
      image: content1,
      title: "Sombras da Metrópole",
      description: "Um detetive investiga crimes em uma cidade futurista repleta de segredos.",
      rating: "95%",
      year: "2024",
      duration: "8 eps"
    },
    {
      image: content2,
      title: "Promessas do Mar",
      description: "Romance e drama se entrelaçam em uma pequena vila costeira portuguesa.",
      rating: "88%",
      year: "2024",
      duration: "12 eps"
    },
    {
      image: content3,
      title: "Reino Perdido",
      description: "Uma aventura épica por terras mágicas em busca de um tesouro ancestral.",
      rating: "92%",
      year: "2024",
      duration: "2h 24min"
    },
    {
      image: content4,
      title: "Eco da Mente",
      description: "Thriller psicológico que explora os limites da realidade e da sanidade.",
      rating: "89%",
      year: "2024",
      duration: "1h 58min"
    },
    {
      image: content5,
      title: "Amigos para Sempre",
      description: "Comédia descontraída sobre um grupo de amigos vivendo aventuras urbanas.",
      rating: "91%",
      year: "2024",
      duration: "10 eps"
    }
  ];

  const seriesContent = [
    {
      image: content5,
      title: "Amigos para Sempre",
      description: "Comédia descontraída sobre um grupo de amigos vivendo aventuras urbanas.",
      rating: "91%",
      year: "2024",
      duration: "10 eps"
    },
    {
      image: content1,
      title: "Sombras da Metrópole",
      description: "Um detetive investiga crimes em uma cidade futurista repleta de segredos.",
      rating: "95%",
      year: "2024",
      duration: "8 eps"
    },
    {
      image: content2,
      title: "Promessas do Mar",
      description: "Romance e drama se entrelaçam em uma pequena vila costeira portuguesa.",
      rating: "88%",
      year: "2024",
      duration: "12 eps"
    },
    {
      image: content4,
      title: "Eco da Mente",
      description: "Thriller psicológico que explora os limites da realidade e da sanidade.",
      rating: "89%",
      year: "2024",
      duration: "1h 58min"
    },
    {
      image: content3,
      title: "Reino Perdido",
      description: "Uma aventura épica por terras mágicas em busca de um tesouro ancestral.",
      rating: "92%",
      year: "2024",
      duration: "2h 24min"
    }
  ];

  const moviesContent = [
    {
      image: content3,
      title: "Reino Perdido",
      description: "Uma aventura épica por terras mágicas em busca de um tesouro ancestral.",
      rating: "92%",
      year: "2024",
      duration: "2h 24min"
    },
    {
      image: content4,
      title: "Eco da Mente",
      description: "Thriller psicológico que explora os limites da realidade e da sanidade.",
      rating: "89%",
      year: "2024",
      duration: "1h 58min"
    },
    {
      image: content1,
      title: "Sombras da Metrópole",
      description: "Um detetive investiga crimes em uma cidade futurista repleta de segredos.",
      rating: "95%",
      year: "2024",
      duration: "8 eps"
    },
    {
      image: content2,
      title: "Promessas do Mar",
      description: "Romance e drama se entrelaçam em uma pequena vila costeira portuguesa.",
      rating: "88%",
      year: "2024",
      duration: "12 eps"
    },
    {
      image: content5,
      title: "Amigos para Sempre",
      description: "Comédia descontraída sobre um grupo de amigos vivendo aventuras urbanas.",
      rating: "91%",
      year: "2024",
      duration: "10 eps"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <Hero />
        
        <div className="space-y-12 py-12">
          <ContentRow title="Em Alta">
            {trendingContent.map((content, index) => (
              <div key={index} className="min-w-[200px] md:min-w-[250px]">
                <ContentCard {...content} />
              </div>
            ))}
          </ContentRow>

          <ContentRow title="Séries Populares">
            {seriesContent.map((content, index) => (
              <div key={index} className="min-w-[200px] md:min-w-[250px]">
                <ContentCard {...content} />
              </div>
            ))}
          </ContentRow>

          <ContentRow title="Filmes em Destaque">
            {moviesContent.map((content, index) => (
              <div key={index} className="min-w-[200px] md:min-w-[250px]">
                <ContentCard {...content} />
              </div>
            ))}
          </ContentRow>

          <ContentRow title="Novidades da Semana">
            {trendingContent.slice().reverse().map((content, index) => (
              <div key={index} className="min-w-[200px] md:min-w-[250px]">
                <ContentCard {...content} />
              </div>
            ))}
          </ContentRow>
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Navegação</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Início</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Séries</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Filmes</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Novidades</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Ajuda</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Conta</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Minha Conta</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Planos</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Configurações</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 StreamMax. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
