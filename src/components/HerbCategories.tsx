
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const HerbCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Успокаивающие",
      icon: <Heart className="h-8 w-8 text-[#9b87f5]" />,
      description: "Травы для релаксации и спокойного сна",
      link: "/category/calming"
    },
    {
      id: 2,
      title: "Иммуномодулирующие",
      icon: <Zap className="h-8 w-8 text-[#9b87f5]" />,
      description: "Травы для укрепления защитных сил организма",
      link: "/category/immune"
    },
    {
      id: 3,
      title: "Противовоспалительные",
      icon: <Leaf className="h-8 w-8 text-[#9b87f5]" />,
      description: "Травы с противовоспалительным эффектом",
      link: "/category/anti-inflammatory"
    }
  ];

  return (
    <section className="py-12 px-4 bg-[#E5DEFF]/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#403E43]">Категории лекарственных трав</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="border-[#D6BCFA] hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-center text-[#403E43]">{category.title}</CardTitle>
                <CardDescription className="text-center">{category.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pb-6">
                <Button variant="outline" className="border-[#9b87f5] text-[#6E59A5]">
                  <Link to={category.link}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-[#6E59A5] hover:bg-[#7E69AB] text-white">
            <Link to="/categories">Все категории</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
