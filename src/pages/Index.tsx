
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { HerbHeader } from "@/components/HerbHeader";
import { HerbCategories } from "@/components/HerbCategories";
import { PopularHerbs } from "@/components/PopularHerbs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2FCE2]">
      <HerbHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#403E43]">
                  Целебная сила природы в ваших руках
                </h1>
                <p className="text-lg text-gray-700">
                  Откройте для себя мир лекарственных трав, их свойства и применение для здоровья и благополучия.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#6E59A5] hover:bg-[#7E69AB] text-white">
                    <Link to="/catalog">Каталог трав</Link>
                  </Button>
                  <Button variant="outline" className="border-[#6E59A5] text-[#6E59A5]">
                    <Link to="/articles">Полезные статьи</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Лекарственные травы"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-[#403E43]">Найдите нужную траву</CardTitle>
                <CardDescription className="text-center">Введите название или выберите по свойствам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Например: мята, ромашка, шалфей..."
                    className="w-full p-3 pr-10 border rounded-md border-[#D6BCFA] focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <HerbCategories />

        {/* Popular Herbs */}
        <PopularHerbs />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
