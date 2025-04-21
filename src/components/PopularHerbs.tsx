
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const PopularHerbs = () => {
  const popularHerbs = [
    {
      id: 1,
      name: "Ромашка аптечная",
      latinName: "Matricaria chamomilla",
      description: "Обладает противовоспалительным, спазмолитическим и антисептическим действием.",
      properties: ["противовоспалительное", "успокаивающее"],
      link: "/herb/chamomile"
    },
    {
      id: 2,
      name: "Мята перечная",
      latinName: "Mentha piperita",
      description: "Помогает при расстройствах пищеварения, обладает успокаивающим действием.",
      properties: ["спазмолитическое", "тонизирующее"],
      link: "/herb/mint"
    },
    {
      id: 3,
      name: "Шалфей лекарственный",
      latinName: "Salvia officinalis",
      description: "Имеет антисептическое, противовоспалительное и вяжущее действие.",
      properties: ["антисептическое", "вяжущее"],
      link: "/herb/sage"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#403E43]">Популярные травы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularHerbs.map((herb) => (
            <Card key={herb.id} className="border-[#D6BCFA] hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 h-48 rounded-md overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={herb.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-[#403E43]">{herb.name}</CardTitle>
                <CardDescription className="italic text-sm">{herb.latinName}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{herb.description}</p>
                <div className="flex flex-wrap gap-2">
                  {herb.properties.map((property, index) => (
                    <Badge key={index} className="bg-[#F2FCE2] text-[#6E59A5] hover:bg-[#E5DEFF]">
                      {property}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#6E59A5]">
                  <Link to={herb.link}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-[#6E59A5] hover:bg-[#7E69AB] text-white">
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
