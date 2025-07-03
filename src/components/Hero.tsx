import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Icon name="Home" size={64} className="mx-auto text-primary mb-4" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Чистота и уют
          <br />
          <span className="text-primary">в вашем доме</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Профессиональная уборка с душевным подходом. Мы заботимся о вашем доме
          как о своём собственном.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Записаться на уборку
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto text-primary mb-2"
            />
            <h3 className="font-semibold text-gray-900 mb-1">Быстро</h3>
            <p className="text-gray-600 text-sm">Уборка за 2-4 часа</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto text-primary mb-2"
            />
            <h3 className="font-semibold text-gray-900 mb-1">Надёжно</h3>
            <p className="text-gray-600 text-sm">Гарантия качества</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Heart"
              size={32}
              className="mx-auto text-primary mb-2"
            />
            <h3 className="font-semibold text-gray-900 mb-1">С душой</h3>
            <p className="text-gray-600 text-sm">Персональный подход</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
