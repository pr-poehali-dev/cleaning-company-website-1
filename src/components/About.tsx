import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "Наши сотрудники проходят обучение и имеют опыт работы от 3 лет",
    },
    {
      icon: "Leaf",
      title: "Экологичные средства",
      description:
        "Используем только безопасные для здоровья и окружающей среды средства",
    },
    {
      icon: "CheckCircle",
      title: "Гарантия качества",
      description:
        "Если что-то не устроит — переделаем бесплатно в течение 24 часов",
    },
    {
      icon: "Clock",
      title: "Пунктуальность",
      description:
        "Всегда приезжаем вовремя и укладываемся в оговоренные сроки",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-peach-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы семейная компания, которая уже 7 лет помогает жителям города
              поддерживать чистоту и порядок в своих домах. Для нас каждый
              клиент — это часть большой семьи.
            </p>
            <p className="text-gray-600 mb-8">
              Мы понимаем, как важен для вас дом, поэтому относимся к нему с
              особой заботой и вниманием. Наша цель — не просто убрать, а
              создать атмосферу уюта и комфорта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Award" size={20} className="mr-2" />
                Наши награды
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Icon
                        name={feature.icon as any}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  7 лет
                </div>
                <div className="text-gray-600">Опыта работы</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
