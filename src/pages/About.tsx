
import { HerbHeader } from "@/components/HerbHeader";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HerbHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-6">О проекте "ТравоЗнание"</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#6E59A5] mb-4">Наша миссия</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Проект "ТравоЗнание" создан с целью собрать и систематизировать знания о лекарственных растениях, 
            которые веками использовались в народной медицине разных стран. Мы стремимся сделать эту информацию 
            доступной, понятной и научно обоснованной.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#6E59A5] mb-4">Что вы найдёте на нашем сайте</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Подробный каталог лекарственных растений с описанием их свойств и применения</li>
            <li>Классификацию трав по лечебным свойствам и областям применения</li>
            <li>Научные статьи о фитотерапии и современных исследованиях лекарственных растений</li>
            <li>Рекомендации по сбору, сушке и хранению целебных трав</li>
            <li>Простые рецепты приготовления отваров, настоек и других препаратов</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#6E59A5] mb-4">Наша команда</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Над проектом "ТравоЗнание" работает команда энтузиастов: ботаники, фармацевты, фитотерапевты 
            и опытные травники. Мы тщательно проверяем всю публикуемую информацию и консультируемся 
            с профессионалами в области медицины.
          </p>
          
          <div className="bg-[#F2FCE2] p-4 rounded-lg border border-[#9b87f5]/20 mb-6">
            <p className="text-[#1A1F2C] italic">
              <strong>Важно:</strong> Информация на сайте носит ознакомительный характер и не заменяет 
              консультацию врача. Перед применением любых лекарственных растений проконсультируйтесь 
              со специалистом.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#6E59A5] mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-700 leading-relaxed">
            Если у вас есть вопросы, предложения или вы хотите поделиться своими знаниями о лекарственных 
            травах, пишите нам по адресу <a href="mailto:info@travoznanie.ru" className="text-[#9b87f5] hover:underline">
            info@travoznanie.ru</a> или воспользуйтесь формой обратной связи.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#6E59A5] mb-4">История проекта</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            "ТравоЗнание" начался как небольшой блог энтузиастов фитотерапии в 2018 году. Постепенно 
            проект рос, привлекая всё больше экспертов и заинтересованных читателей.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Сегодня мы продолжаем развиваться и совершенствоваться, чтобы предоставить вам максимально 
            полную и достоверную информацию о мире лекарственных растений.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
