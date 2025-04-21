
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const HerbHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#6E59A5]">ТравоЗнание</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/catalog" className="text-gray-700 hover:text-[#7E69AB] font-medium">
              Каталог
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-[#7E69AB] font-medium">
              По свойствам
            </Link>
            <Link to="/articles" className="text-gray-700 hover:text-[#7E69AB] font-medium">
              Статьи
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#7E69AB] font-medium">
              О проекте
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Консультация
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link to="/catalog" className="text-gray-700 hover:text-[#7E69AB] font-medium">
                Каталог
              </Link>
              <Link to="/properties" className="text-gray-700 hover:text-[#7E69AB] font-medium">
                По свойствам
              </Link>
              <Link to="/articles" className="text-gray-700 hover:text-[#7E69AB] font-medium">
                Статьи
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#7E69AB] font-medium">
                О проекте
              </Link>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-full mt-2">
                Консультация
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
