
import { HerbHeader } from "@/components/HerbHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const herbs = [
  {
    id: 1,
    name: "Ромашка аптечная",
    latinName: "Matricaria chamomilla",
    image: "/placeholder.svg",
    description: "Эффективное противовоспалительное и антисептическое средство.",
    categories: ["успокаивающие", "противовоспалительные"]
  },
  {
    id: 2,
    name: "Мята перечная",
    latinName: "Mentha piperita",
    image: "/placeholder.svg",
    description: "Помогает при проблемах с пищеварением и нервных расстройствах.",
    categories: ["успокаивающие", "пищеварительные"]
  },
  {
    id: 3,
    name: "Шалфей лекарственный",
    latinName: "Salvia officinalis",
    image: "/placeholder.svg",
    description: "Обладает антисептическими и противовоспалительными свойствами.",
    categories: ["противовоспалительные", "антисептические"]
  },
  {
    id: 4,
    name: "Зверобой продырявленный",
    latinName: "Hypericum perforatum",
    image: "/placeholder.svg",
    description: "Природный антидепрессант с противовоспалительным действием.",
    categories: ["противовоспалительные", "тонизирующие"]
  },
  {
    id: 5,
    name: "Эхинацея пурпурная",
    latinName: "Echinacea purpurea",
    image: "/placeholder.svg",
    description: "Повышает иммунитет, помогает бороться с инфекциями.",
    categories: ["иммуномодулирующие", "противовирусные"]
  },
  {
    id: 6,
    name: "Валериана лекарственная",
    latinName: "Valeriana officinalis",
    image: "/placeholder.svg",
    description: "Оказывает седативное и снотворное действие.",
    categories: ["успокаивающие", "снотворные"]
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HerbHeader />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-[#403E43] mb-6">Каталог лекарственных трав</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Поиск по названию..." 
                  className="pl-10 border-[#D6BCFA] focus-visible:ring-[#9b87f5]"
                />
              </div>
              <Button variant="outline" className="border-[#D6BCFA] text-[#6E59A5]">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-6">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Все травы
              </TabsTrigger>
              <TabsTrigger value="alphabetical" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                По алфавиту
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Популярные
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {herbs.map((herb) => (
                  <Card key={herb.id} className="overflow-hidden border-[#D6BCFA] hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img 
                        src={herb.image} 
                        alt={herb.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#403E43]">{herb.name}</CardTitle>
                      <p className="text-sm text-gray-500 italic">{herb.latinName}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{herb.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {herb.categories.map((category, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-[#E5DEFF] text-[#6E59A5] text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#9b87f5] text-[#6E59A5]">
                        <Link to={`/herb/${herb.id}`}>Подробнее</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-[#9b87f5] text-[#6E59A5]">
                  Загрузить ещё
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="alphabetical" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                Здесь будет алфавитный указатель трав
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                Здесь будут самые популярные травы
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
