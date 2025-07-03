import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Записаться на уборку
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для
            уточнения деталей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={24} className="text-primary" />
                Заказать уборку
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы составим индивидуальное предложение
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Анна" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input id="address" placeholder="ул. Ленина, д. 15, кв. 42" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Тип уборки</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип уборки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Уборка квартиры</SelectItem>
                    <SelectItem value="office">Уборка офиса</SelectItem>
                    <SelectItem value="renovation">После ремонта</SelectItem>
                    <SelectItem value="urgent">Срочная уборка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь (м²)</Label>
                  <Input id="area" placeholder="45" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Желаемая дата</Label>
                  <Input id="date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Комментарии</Label>
                <Textarea
                  id="comments"
                  placeholder="Есть домашние животные, нужна уборка после вечеринки..."
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <div className="font-semibold">+7 (999) 123-45-67</div>
                      <div className="text-sm text-gray-600">
                        Звоните с 8:00 до 22:00
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <div className="font-semibold">info@cleaning.ru</div>
                      <div className="text-sm text-gray-600">
                        Ответим в течение часа
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <div className="font-semibold">г. Москва</div>
                      <div className="text-sm text-gray-600">
                        Работаем по всему городу
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <div>
                      <div className="font-semibold">
                        Ежедневно 8:00 - 22:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Выходные и праздники
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-peach-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Как мы работаем
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Заявка</div>
                      <div className="text-sm text-gray-600">
                        Оставляете заявку удобным способом
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Консультация</div>
                      <div className="text-sm text-gray-600">
                        Менеджер звонит и уточняет детали
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Уборка</div>
                      <div className="text-sm text-gray-600">
                        Приезжаем и выполняем работу
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-semibold">Результат</div>
                      <div className="text-sm text-gray-600">
                        Принимаете работу и наслаждаетесь чистотой
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
