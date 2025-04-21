
import { HerbHeader } from "@/components/HerbHeader";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const properties = [
  {
    category: "Лечебные свойства",
    items: [
      { name: "Противовоспалительные", count: 42 },
      { name: "Антибактериальные", count: 37 },
      { name: "Жаропонижающие", count: 28 },
      { name: "Отхаркивающие", count: 24 },
      { name: "Успокоительные", count: 31 },
      { name: "Тонизирующие", count: 29 },
      { name: "Кровоостанавливающие", count: 18 },
    ]
  },
  {
    category: "Область применения",
    items: [
      { name: "Дыхательная система", count: 45 },
      { name: "Нервная система", count: 38 },
      { name: "Пищеварение", count: 52 },
      { name: "Сердечно-сосудистая", count: 33 },
      { name: "Иммунитет", count: 41 },
      { name: "Кожные заболевания", count: 27 },
      { name: "Опорно-двигательная", count: 19 },
    ]
  },
  {
    category: "Сезон сбора",
    items: [
      { name: "Весна", count: 46 },
      { name: "Лето", count: 78 },
      { name: "Осень", count: 52 },
      { name: "Зима", count: 12 },
    ]
  }
];

const popularCombinations = [
  { name: "Для укрепления иммунитета", herbs: ["Эхинацея", "Шиповник", "Календула"] },
  { name: "При простуде", herbs: ["Липа", "Ромашка", "Малина"] },
  { name: "Для нервной системы", herbs: ["Мелисса", "Пустырник", "Валериана"] },
  { name: "Для пищеварения", herbs: ["Мята", "Фенхель", "Тмин"] },
  { name: "Для здоровья суставов", herbs: ["Сабельник", "Окопник", "Лопух"] },
];

export default function Properties() {
  return (
    <div className="min-h-screen flex flex-col">
      <HerbHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1F2C]">Травы по свойствам</h1>
          <p className="text-gray-600 max-w-3xl">
            Выбирайте лекарственные травы по их целебным свойствам, области применения
            или сезону сбора. Здесь вы найдете растения для решения конкретных задач оздоровления.
          </p>
        </div>

        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            className="pl-10"
            placeholder="Поиск по свойствам (например, 'противовоспалительное')"
          />
        </div>

        <Tabs defaultValue="properties" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="properties">По свойствам</TabsTrigger>
            <TabsTrigger value="combinations">Сочетания трав</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((group, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="px-3 py-1.5 text-sm cursor-pointer hover:bg-[#E5DEFF]"
                        >
                          {item.name} <span className="ml-1 text-gray-500">({item.count})</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="combinations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCombinations.map((combo, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-2 bg-[#9b87f5]"></div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-3">{combo.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {combo.herbs.map((herb, idx) => (
                        <Badge 
                          key={idx}
                          className="bg-[#F2FCE2] text-[#1A1F2C] hover:bg-[#E5DEFF]"
                        >
                          {herb}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 p-0 h-auto text-[#7E69AB]">
                      Подробнее о сочетании
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                Показать все сочетания трав
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-[#F1F0FB] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#1A1F2C]">Подбор трав по индивидуальным параметрам</h2>
          <p className="text-gray-600 mb-4">
            Заполните короткую анкету, и мы подберем лекарственные травы, подходящие именно вам,
            учитывая ваши особенности и потребности.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Индивидуальный подбор
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
