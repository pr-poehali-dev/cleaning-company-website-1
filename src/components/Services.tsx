import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Уборка квартир",
      description: "Генеральная и поддерживающая уборка жилых помещений",
      features: ["Влажная уборка", "Пылесос", "Мытье полов", "Санузел"],
      price: "от 2000 ₽",
      color: "bg-green-50 hover:bg-green-100",
    },
    {
      icon: "Building",
      title: "Уборка офисов",
      description: "Профессиональная уборка рабочих пространств",
      features: ["Рабочие места", "Переговорные", "Кухня", "Санузлы"],
      price: "от 150 ₽/м²",
      color: "bg-blue-50 hover:bg-blue-100",
    },
    {
      icon: "Wrench",
      title: "После ремонта",
      description: "Уборка строительной пыли и мусора",
      features: [
        "Пыль со всех поверхностей",
        "Мытье окон",
        "Очистка полов",
        "Вывоз мусора",
      ],
      price: "от 250 ₽/м²",
      color: "bg-orange-50 hover:bg-orange-100",
    },
    {
      icon: "Zap",
      title: "Срочная уборка",
      description: "Быстрая уборка за 2-3 часа",
      features: [
        "Готовность к приёму гостей",
        "Экспресс-уборка",
        "В день обращения",
        "Выходные и праздники",
      ],
      price: "от 3000 ₽",
      color: "bg-purple-50 hover:bg-purple-100",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Виды уборки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий вид уборки для вашего дома или офиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <div className="text-primary font-semibold text-lg">
                      {service.price}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Заказать уборку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не нашли подходящий вариант? Мы поможем подобрать идеальное решение!
          </p>
          <Button variant="outline" size="lg" className="px-8">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
