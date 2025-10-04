import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Order {
  id: number;
  customer_name: string;
  total_amount: number;
  status: string;
  created_at: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch('YOUR_BACKEND_URL/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error loading orders:', error);
    }
    setLoading(false);
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('YOUR_BACKEND_URL/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
    setLoading(false);
  };

  const renderHero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-background to-cyber-purple/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0yYy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4IDgtMy41ODIgOC04LTMuNTgyLTgtOC04eiIgZmlsbD0iIzBFQTVFOSIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-primary to-cyber-purple bg-clip-text text-transparent">
            DROPKING
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Автоматизированная платформа для масштабирования вашего дропшиппинг бизнеса
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="font-orbitron bg-primary hover:bg-primary/90 animate-glow" onClick={() => setActiveSection('crm')}>
              <Icon name="Rocket" className="mr-2" />
              Начать работу
            </Button>
            <Button size="lg" variant="outline" className="font-orbitron border-primary text-primary hover:bg-primary/10">
              <Icon name="PlayCircle" className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader>
              <Icon name="Zap" className="w-12 h-12 text-cyber-blue mb-4" />
              <CardTitle className="font-orbitron">Автоматизация</CardTitle>
              <CardDescription>Полная автоматизация обработки заказов</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all">
            <CardHeader>
              <Icon name="TrendingUp" className="w-12 h-12 text-cyber-purple mb-4" />
              <CardTitle className="font-orbitron">Аналитика</CardTitle>
              <CardDescription>Глубокая аналитика продаж в реальном времени</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader>
              <Icon name="Shield" className="w-12 h-12 text-cyber-blue mb-4" />
              <CardTitle className="font-orbitron">Безопасность</CardTitle>
              <CardDescription>Защита данных на уровне банков</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );

  const renderPricing = () => (
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-orbitron text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        Тарифы и цены
      </h2>
      <p className="text-center text-muted-foreground mb-12">Выберите план для вашего бизнеса</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-2xl">Стартер</CardTitle>
            <CardDescription>Для начинающих</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₽2,990</span>
              <span className="text-muted-foreground">/месяц</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>До 100 заказов/мес</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>Базовая CRM</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>Email поддержка</span>
              </li>
            </ul>
            <Button className="w-full mt-6 font-orbitron">Выбрать план</Button>
          </CardContent>
        </Card>

        <Card className="border-primary relative overflow-hidden">
          <Badge className="absolute top-4 right-4 bg-primary">Популярный</Badge>
          <CardHeader>
            <CardTitle className="font-orbitron text-2xl">Профи</CardTitle>
            <CardDescription>Для растущего бизнеса</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₽7,990</span>
              <span className="text-muted-foreground">/месяц</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>До 1000 заказов/мес</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>Полная CRM + аналитика</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>Приоритетная поддержка</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-primary w-5 h-5" />
                <span>API интеграции</span>
              </li>
            </ul>
            <Button className="w-full mt-6 font-orbitron bg-primary animate-glow">Выбрать план</Button>
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-2xl">Энтерпрайз</CardTitle>
            <CardDescription>Для крупного бизнеса</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">₽19,990</span>
              <span className="text-muted-foreground">/месяц</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-secondary w-5 h-5" />
                <span>Безлимитные заказы</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-secondary w-5 h-5" />
                <span>Все функции + AI</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-secondary w-5 h-5" />
                <span>24/7 поддержка</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-secondary w-5 h-5" />
                <span>Персональный менеджер</span>
              </li>
            </ul>
            <Button className="w-full mt-6 font-orbitron" variant="outline">Связаться</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const renderCatalog = () => (
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-orbitron text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        Каталог товаров
      </h2>
      <p className="text-center text-muted-foreground mb-12">Тысячи проверенных поставщиков</p>

      <div className="flex gap-4 mb-8 flex-wrap">
        <Input placeholder="Поиск товаров..." className="max-w-md" />
        <Button variant="outline" onClick={loadProducts}>
          <Icon name="Search" className="mr-2" />
          Найти
        </Button>
        <Button variant="outline">
          <Icon name="Filter" className="mr-2" />
          Фильтры
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="border-primary/20 hover:border-primary/50 transition-all group">
            <div className="aspect-square bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
              <Icon name="Package" className="w-20 h-20 text-primary/50 group-hover:scale-110 transition-transform" />
            </div>
            <CardHeader>
              <CardTitle className="font-orbitron text-lg">Товар #{item}</CardTitle>
              <CardDescription>Категория: Электроника</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">₽{(item * 1000 + 990).toLocaleString()}</span>
                <Button size="sm" className="font-orbitron">
                  <Icon name="ShoppingCart" className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-2">
                <Badge variant="outline" className="text-xs">В наличии: {item * 20}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const renderCRM = () => (
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-orbitron text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        CRM Система
      </h2>
      <p className="text-center text-muted-foreground mb-12">Управление заказами и клиентами</p>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="orders" className="font-orbitron">Заказы</TabsTrigger>
          <TabsTrigger value="customers" className="font-orbitron">Клиенты</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-orbitron">Активные заказы</CardTitle>
                <CardDescription>Мониторинг и управление заказами</CardDescription>
              </div>
              <Button onClick={loadOrders}>
                <Icon name="RefreshCw" className="mr-2" />
                Обновить
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-orbitron">ID</TableHead>
                    <TableHead className="font-orbitron">Клиент</TableHead>
                    <TableHead className="font-orbitron">Сумма</TableHead>
                    <TableHead className="font-orbitron">Статус</TableHead>
                    <TableHead className="font-orbitron">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 1, customer: 'Алексей П.', amount: 35980, status: 'completed' },
                    { id: 2, customer: 'Мария И.', amount: 3990, status: 'processing' },
                    { id: 3, customer: 'Дмитрий С.', amount: 11480, status: 'pending' },
                  ].map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>₽{order.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={order.status === 'completed' ? 'default' : 'outline'}
                          className={
                            order.status === 'completed'
                              ? 'bg-green-500'
                              : order.status === 'processing'
                              ? 'bg-yellow-500'
                              : 'bg-gray-500'
                          }
                        >
                          {order.status === 'completed' ? 'Выполнен' : order.status === 'processing' ? 'В работе' : 'Ожидает'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost">
                          <Icon name="Eye" className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-orbitron">База клиентов</CardTitle>
              <CardDescription>Управление клиентской базой</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Алексей Петров', email: 'alex@example.com', orders: 12, total: 145000 },
                  { name: 'Мария Иванова', email: 'maria@example.com', orders: 8, total: 89000 },
                  { name: 'Дмитрий Сидоров', email: 'dmitry@example.com', orders: 15, total: 210000 },
                ].map((customer, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg border-primary/20 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold">
                        {customer.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{customer.orders} заказов</p>
                      <p className="text-sm text-muted-foreground">₽{customer.total.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );

  const renderFAQ = () => (
    <section className="py-20 container mx-auto px-4 max-w-4xl">
      <h2 className="font-orbitron text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        Вопросы и ответы
      </h2>
      <p className="text-center text-muted-foreground mb-12">Ответы на популярные вопросы</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-primary/20">
          <AccordionTrigger className="font-orbitron">Что такое дропшиппинг?</AccordionTrigger>
          <AccordionContent>
            Дропшиппинг - это модель бизнеса, при которой вы продаёте товары без необходимости держать их на складе. Поставщик отправляет товар напрямую клиенту.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-primary/20">
          <AccordionTrigger className="font-orbitron">Как начать работать?</AccordionTrigger>
          <AccordionContent>
            Зарегистрируйтесь на платформе, выберите тарифный план, настройте интеграции с поставщиками и начните добавлять товары в каталог.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-primary/20">
          <AccordionTrigger className="font-orbitron">Какие есть способы оплаты?</AccordionTrigger>
          <AccordionContent>
            Мы принимаем оплату банковскими картами, электронными кошельками и банковскими переводами. Все платежи защищены.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-primary/20">
          <AccordionTrigger className="font-orbitron">Есть ли пробный период?</AccordionTrigger>
          <AccordionContent>
            Да, мы предоставляем 14 дней бесплатного тестового периода на тарифе "Профи" для новых пользователей.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-primary/20">
          <AccordionTrigger className="font-orbitron">Какая комиссия платформы?</AccordionTrigger>
          <AccordionContent>
            Комиссия зависит от выбранного тарифа: Стартер - 5%, Профи - 3%, Энтерпрайз - 1.5% от суммы заказа.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );

  const renderContact = () => (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
          Контакты
        </h2>
        <p className="text-center text-muted-foreground mb-12">Свяжитесь с нами любым удобным способом</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Связаться с нами</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Телефон" />
              <textarea 
                className="w-full min-h-[100px] px-3 py-2 bg-background border border-input rounded-md"
                placeholder="Ваше сообщение"
              />
              <Button className="w-full font-orbitron">
                <Icon name="Send" className="mr-2" />
                Отправить
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-semibold">Email</p>
                    <p className="text-muted-foreground">support@dropking.pro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background font-inter">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-orbitron text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            DROPKING
          </h1>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveSection('home')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('pricing')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              Тарифы
            </button>
            <button 
              onClick={() => setActiveSection('catalog')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('crm')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              CRM
            </button>
            <button 
              onClick={() => setActiveSection('faq')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => setActiveSection('contact')} 
              className="font-orbitron text-sm hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>

          <Button className="font-orbitron">
            <Icon name="User" className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && renderHero()}
        {activeSection === 'pricing' && renderPricing()}
        {activeSection === 'catalog' && renderCatalog()}
        {activeSection === 'crm' && renderCRM()}
        {activeSection === 'faq' && renderFAQ()}
        {activeSection === 'contact' && renderContact()}
      </main>

      <footer className="border-t border-primary/20 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-orbitron text-xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                DROPKING
              </h3>
              <p className="text-muted-foreground text-sm">
                Платформа для масштабирования дропшиппинг бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-orbitron font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Функции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-orbitron font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-orbitron font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 DROPKING. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
