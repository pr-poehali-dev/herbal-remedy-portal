
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ТравоЗнание</h3>
            <p className="text-gray-300 text-sm">
              Ваш путеводитель в мире лекарственных трав. Проверенная информация о свойствах, применении и противопоказаниях.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white text-sm">
                  Каталог трав
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white text-sm">
                  По свойствам
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white text-sm">
                  Статьи
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Популярные травы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/herb/chamomile" className="text-gray-300 hover:text-white text-sm">
                  Ромашка
                </Link>
              </li>
              <li>
                <Link to="/herb/mint" className="text-gray-300 hover:text-white text-sm">
                  Мята
                </Link>
              </li>
              <li>
                <Link to="/herb/sage" className="text-gray-300 hover:text-white text-sm">
                  Шалфей
                </Link>
              </li>
              <li>
                <Link to="/herb/valerian" className="text-gray-300 hover:text-white text-sm">
                  Валериана
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <p className="text-gray-300 text-sm mb-2">
              Если у вас есть вопросы или предложения, свяжитесь с нами.
            </p>
            <p className="text-gray-300 text-sm">
              Email: info@travozdanie.ru
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ТравоЗнание. Вся информация на сайте носит ознакомительный характер и не является медицинской рекомендацией.
        </div>
      </div>
    </footer>
  );
};
