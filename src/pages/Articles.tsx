
import { HerbHeader } from "@/components/HerbHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Целебные свойства мяты перечной",
      excerpt: "Узнайте о полезных свойствах мяты перечной и как её правильно применять в домашних условиях...",
      image: "/placeholder.svg",
      date: "15 сентября 2023",
      category: "Лечебные травы"
    },
    {
      id: 2,
      title: "Ромашка аптечная: применение в народной медицине",
      excerpt: "Ромашка аптечная - одно из самых популярных лекарственных растений в мире. Разбираемся в её полезных свойствах...",
      image: "/placeholder.svg",
      date: "10 сентября 2023",
      category: "Народная медицина"
    },
    {
      id: 3,
      title: "Как правильно заготавливать лекарственные травы",
      excerpt: "Основные правила сбора, сушки и хранения лекарственных растений для сохранения их целебных свойств...",
      image: "/placeholder.svg",
      date: "5 сентября 2023",
      category: "Заготовка трав"
    },
    {
      id: 4,
      title: "Чабрец: полезные свойства и противопоказания",
      excerpt: "Чабрец (тимьян) - ароматная трава с мощным лечебным действием. Изучаем его применение и возможные противопоказания...",
      image: "/placeholder.svg",
      date: "1 сентября 2023",
      category: "Лечебные травы"
    },
    {
      id: 5,
      title: "Травяные сборы для укрепления иммунитета",
      excerpt: "Подборка эффективных травяных сборов, которые помогут укрепить иммунную систему в сезон простуд...",
      image: "/placeholder.svg",
      date: "25 августа 2023",
      category: "Травяные сборы"
    },
    {
      id: 6,
      title: "Зверобой: свойства и применение",
      excerpt: "Зверобой - природный антидепрессант и не только. Рассказываем о всех полезных свойствах этого растения...",
      image: "/placeholder.svg",
      date: "20 августа 2023",
      category: "Лечебные травы"
    }
  ];

  const categories = ["Все статьи", "Лечебные травы", "Народная медицина", "Заготовка трав", "Травяные сборы"];

  return (
    <div className="min-h-screen flex flex-col">
      <HerbHeader />
      <main className="flex-1 py-12 px-4 bg-[#F1F0FB]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Статьи о лекарственных травах</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Полезные материалы о лечебных растениях, их свойствах, применении в народной медицине и правильной заготовке.
            </p>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "hover:bg-[#E5DEFF] hover:text-[#6E59A5]"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Сетка статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#7E69AB] font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={`/articles/${article.id}`} 
                    className="text-[#9b87f5] hover:text-[#6E59A5] font-medium inline-flex items-center"
                  >
                    Читать дальше
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Пагинация */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Предыдущая</Button>
              <Button variant="outline" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Следующая</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
