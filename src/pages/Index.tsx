import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'Что вам больше нравится?',
      options: ['Работать с людьми', 'Работать с данными', 'Создавать новое', 'Решать проблемы']
    },
    {
      question: 'Какой формат работы предпочитаете?',
      options: ['Удаленно', 'В офисе', 'Гибрид', 'Командировки']
    },
    {
      question: 'Что для вас важнее?',
      options: ['Высокий доход', 'Интересные задачи', 'Стабильность', 'Рост и развитие']
    }
  ];

  const professions = [
    {
      title: 'Data Scientist',
      salary: '150-350k ₽',
      education: 'Высшее (мат/ит)',
      skills: ['Python', 'ML', 'SQL'],
      demand: 95,
      category: 'IT'
    },
    {
      title: 'UX/UI Дизайнер',
      salary: '100-250k ₽',
      education: 'Курсы/Высшее',
      skills: ['Figma', 'Research', 'Prototyping'],
      demand: 85,
      category: 'Дизайн'
    },
    {
      title: 'Product Manager',
      salary: '180-400k ₽',
      education: 'Высшее + опыт',
      skills: ['Аналитика', 'Управление', 'Коммуникации'],
      demand: 90,
      category: 'Менеджмент'
    },
    {
      title: 'DevOps Engineer',
      salary: '160-380k ₽',
      education: 'Высшее (ит)',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      demand: 92,
      category: 'IT'
    },
    {
      title: 'Контент-маркетолог',
      salary: '80-180k ₽',
      education: 'Курсы/Высшее',
      skills: ['Копирайтинг', 'SEO', 'SMM'],
      demand: 75,
      category: 'Маркетинг'
    },
    {
      title: 'Frontend Developer',
      salary: '120-300k ₽',
      education: 'Курсы/Высшее',
      skills: ['React', 'TypeScript', 'CSS'],
      demand: 88,
      category: 'IT'
    }
  ];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Compass" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Карьерный Компас
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#test" className="text-sm font-medium hover:text-primary transition-colors">Тест</a>
              <a href="#atlas" className="text-sm font-medium hover:text-primary transition-colors">Атлас профессий</a>
              <a href="#profile" className="text-sm font-medium hover:text-primary transition-colors">Кабинет</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О проекте</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary">Войти</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Найди свой путь в мире профессий
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современный сервис для выбора профессии, развития навыков и построения успешной карьеры
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg h-14 px-8">
                <Icon name="Compass" size={20} className="mr-2" />
                Пройти тест
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Атлас профессий
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: 'Target', title: 'Карьерный навигатор', desc: 'Интерактивный тест для определения направления' },
              { icon: 'BookOpen', title: 'Атлас профессий', desc: 'База данных с фильтрами по зарплате и навыкам' },
              { icon: 'Calculator', title: 'Калькулятор перехода', desc: 'Оценка времени и стоимости смены профессии' },
              { icon: 'TrendingUp', title: 'Трекер развития', desc: 'Отслеживание прогресса и достижений' }
            ].map((feature, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3">
                    <Icon name={feature.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="test" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-gradient-to-r from-primary to-secondary">Карьерный навигатор</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Пройди тест и узнай свое направление</h2>
            <p className="text-muted-foreground text-lg">Ответь на несколько вопросов и получи персональные рекомендации</p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-2xl">
                {showResult ? 'Результаты теста' : `Вопрос ${currentQuestion + 1} из ${questions.length}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!showResult ? (
                <div className="space-y-4">
                  <p className="text-xl font-medium mb-6">{questions[currentQuestion].question}</p>
                  <div className="grid gap-3">
                    {questions[currentQuestion].options.map((option, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="justify-start h-auto py-4 px-6 text-left hover:border-primary hover:bg-primary/5 transition-all"
                        onClick={() => handleAnswer(i)}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                            {i + 1}
                          </span>
                          {option}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                    <h3 className="text-2xl font-bold mb-2">Ваш профиль: Креативный аналитик</h3>
                    <p className="text-muted-foreground">Вы сочетаете творческий подход с аналитическим мышлением</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Рекомендуемые направления:</h4>
                    <div className="space-y-2">
                      {['Data Scientist', 'UX/UI Дизайнер', 'Product Manager'].map((prof, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span className="font-medium">{prof}</span>
                          <Badge className="bg-gradient-to-r from-primary to-secondary">
                            {95 - i * 5}% совпадение
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button onClick={resetTest} className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="RotateCcw" size={18} className="mr-2" />
                    Пройти тест заново
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="atlas" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-gradient-to-r from-accent to-primary">Атлас профессий</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Исследуй профессии будущего</h2>
            <p className="text-muted-foreground text-lg">Более 500 актуальных профессий с подробным описанием</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="it">IT</TabsTrigger>
              <TabsTrigger value="design">Дизайн</TabsTrigger>
              <TabsTrigger value="management">Менеджмент</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professions.map((prof, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{prof.title}</CardTitle>
                    <Badge variant="outline">{prof.category}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">{prof.salary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Образование</p>
                    <p className="font-medium">{prof.education}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ключевые навыки</p>
                    <div className="flex flex-wrap gap-2">
                      {prof.skills.map((skill, j) => (
                        <Badge key={j} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Востребованность</span>
                      <span className="font-semibold">{prof.demand}%</span>
                    </div>
                    <Progress value={prof.demand} className="h-2" />
                  </div>

                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-gradient-to-r from-secondary to-accent">Личный кабинет</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Трекер карьерного развития</h2>
            <p className="text-muted-foreground text-lg">Отслеживай свой прогресс и достигай целей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'Target', label: 'Целей поставлено', value: '12', color: 'from-primary to-secondary' },
              { icon: 'CheckCircle', label: 'Целей достигнуто', value: '8', color: 'from-secondary to-accent' },
              { icon: 'TrendingUp', label: 'Прогресс', value: '67%', color: 'from-accent to-primary' }
            ].map((stat, i) => (
              <Card key={i} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={stat.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Карта навыков</CardTitle>
              <CardDescription>Визуализация твоих компетенций</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { skill: 'Python', level: 75, color: 'from-primary to-secondary' },
                  { skill: 'Data Analysis', level: 60, color: 'from-secondary to-accent' },
                  { skill: 'Machine Learning', level: 45, color: 'from-accent to-primary' },
                  { skill: 'Communication', level: 85, color: 'from-primary to-secondary' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">О проекте Карьерный Компас</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6 space-y-6">
              <p className="text-lg leading-relaxed">
                Карьерный Компас — это проект, направленный на помощь людям в ориентировании на быстро меняющемся 
                рынке труда, выявлении востребованных профессий, развитии необходимых навыков и принятии осознанных 
                решений о своем карьерном пути.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: 'Lightbulb', title: 'Миссия', text: 'Преодолеть информационный вакуум и неопределенность в выборе профессии' },
                  { icon: 'Users', title: 'Для кого', text: 'Для всех, кто ищет свой путь в мире современных профессий' },
                  { icon: 'Rocket', title: 'Цель', text: 'Дать инструменты для самореализации и карьерного роста' },
                  { icon: 'Heart', title: 'Ценности', text: 'Открытость, достоверность данных и персональный подход' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Свяжись с нами</h2>
            <p className="text-muted-foreground text-lg">Мы всегда рады ответить на твои вопросы</p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Введите имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите, чем мы можем помочь" rows={5} />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
                {[
                  { icon: 'Mail', label: 'Email', value: 'info@career-compass.ru' },
                  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67' },
                  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Примерная, 1' }
                ].map((contact, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                      <Icon name={contact.icon as any} className="text-white" size={18} />
                    </div>
                    <p className="text-xs text-muted-foreground">{contact.label}</p>
                    <p className="text-sm font-medium">{contact.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Compass" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Карьерный Компас
              </span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'Instagram', 'Linkedin'].map((social, i) => (
                <Button key={i} size="icon" variant="outline" className="rounded-full">
                  <Icon name={social as any} size={18} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;