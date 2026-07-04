import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/240c3e86-839e-42b7-9ac5-5e8f76d54c81/files/f79928c9-dc7e-40b2-8d8e-f80f36e763d9.jpg';
const CRAFTS_IMG = 'https://cdn.poehali.dev/projects/240c3e86-839e-42b7-9ac5-5e8f76d54c81/files/9cc2a792-1958-413d-a181-7e1f6d884388.jpg';

const NAV = [
  { id: 'about', label: 'Обо мне' },
  { id: 'services', label: 'Занятия' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Palette', title: 'Творчество', text: 'Рисование, лепка, аппликации и поделки, которые развивают фантазию.', color: 'bg-primary/15' },
  { icon: 'BookOpen', title: 'Развитие речи', text: 'Сказки, стихи и игры для красивой и грамотной речи малышей.', color: 'bg-secondary/25' },
  { icon: 'Music', title: 'Музыка и танцы', text: 'Весёлые песни, ритмика и утренники, где каждый ребёнок — звезда.', color: 'bg-accent/40' },
  { icon: 'Puzzle', title: 'Логика и счёт', text: 'Развивающие игры, головоломки и первые шаги в математику.', color: 'bg-primary/15' },
  { icon: 'Leaf', title: 'Познаём мир', text: 'Наблюдения за природой, эксперименты и любознательность.', color: 'bg-secondary/25' },
  { icon: 'Heart', title: 'Забота о каждом', text: 'Индивидуальный подход, тепло и внимание к каждому ребёнку.', color: 'bg-accent/40' },
];

const GALLERY = [
  { img: HERO_IMG, cap: 'Наша уютная группа' },
  { img: CRAFTS_IMG, cap: 'Работы наших ребят' },
  { img: HERO_IMG, cap: 'Утренний круг' },
  { img: CRAFTS_IMG, cap: 'Осенние поделки' },
  { img: HERO_IMG, cap: 'Игровая зона' },
  { img: CRAFTS_IMG, cap: 'Мастерская творчества' },
];

const REVIEWS = [
  { name: 'Мама Софии', text: 'Анна Викторовна — настоящий волшебник! Дочка бежит в садик с улыбкой каждое утро.', emoji: '🌸' },
  { name: 'Родители Миши', text: 'За год сын так изменился: стал общительным, рассказывает стихи. Огромное спасибо!', emoji: '⭐' },
  { name: 'Мама Кирилла', text: 'Тёплая атмосфера и забота чувствуются во всём. Спокойны за ребёнка полностью.', emoji: '💛' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xl">🐻</span>
            <span className="font-display font-bold text-lg">Анна Петрова</span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="px-4 py-2 rounded-full text-sm font-semibold hover:bg-muted transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-3 flex flex-col gap-1 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-4 py-3 rounded-2xl font-semibold hover:bg-muted">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute top-24 -left-16 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 -right-16 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm font-bold mb-6">
              <Icon name="Sparkles" size={16} /> Воспитатель высшей категории
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
              Дарю детям <span className="text-primary">тепло</span> и радость открытий
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Меня зовут Анна, я воспитатель детского сада. Создаю уютную атмосферу, где каждый малыш растёт счастливым и любознательным.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo('gallery')} className="rounded-full text-base font-bold px-8 py-3 soft-shadow">
                <Icon name="Images" size={18} className="mr-2" /> Наша галерея
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('contacts')} className="rounded-full text-base font-bold px-8 py-3 border-2">
                Связаться
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -top-6 -left-6 font-hand text-3xl text-primary rotate-[-8deg] hidden md:block z-10">с любовью к детям ✿</div>
            <img src={HERO_IMG} alt="Наша группа" className="w-full aspect-square object-cover blob-shape soft-shadow animate-float" />
            <div className="absolute -bottom-4 right-4 bg-card rounded-3xl px-5 py-3 shadow-lg flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <div className="font-display font-bold text-lg leading-none">15+ лет</div>
                <div className="text-xs text-muted-foreground">с малышами</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Обо мне</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            За плечами — педагогическое образование и более 15 лет работы с детьми дошкольного возраста. Я верю, что детство должно быть наполнено игрой, заботой и радостью. Помогаю малышам раскрыть таланты, обрести друзей и полюбить учиться.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: '15+', t: 'лет опыта' },
              { n: '200+', t: 'счастливых детей' },
              { n: '100%', t: 'заботы' },
              { n: '∞', t: 'терпения' },
            ].map((s) => (
              <div key={s.t} className="bg-card rounded-3xl p-6 soft-shadow">
                <div className="font-display font-bold text-3xl text-primary">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Наши занятия</h2>
            <p className="text-muted-foreground text-lg">Развиваемся, играя — каждый день новое приключение</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card rounded-3xl p-8 soft-shadow hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-5`}>
                  <Icon name={s.icon} size={30} className="text-foreground/70" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-hand text-3xl text-primary">моменты нашей жизни</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1">Фотогалерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-3xl soft-shadow ${i % 5 === 0 ? 'md:row-span-2' : ''}`}>
                <img src={g.img} alt={g.cap} className="w-full h-full min-h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-background font-bold">{g.cap}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Отзывы родителей</h2>
            <p className="text-muted-foreground text-lg">Их доверие — моя главная награда</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card rounded-3xl p-8 soft-shadow relative">
                <div className="text-4xl mb-4">{r.emoji}</div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">«{r.text}»</p>
                <div className="font-display font-bold">{r.name}</div>
                <div className="flex gap-1 mt-2 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Свяжитесь со мной</h2>
            <p className="text-muted-foreground text-lg">Отвечу на все вопросы о занятиях и записи в группу</p>
          </div>
          <div className="bg-card rounded-3xl p-8 soft-shadow">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ваше имя" className="w-full rounded-2xl border border-input bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="tel" placeholder="Телефон" className="w-full rounded-2xl border border-input bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
              <textarea placeholder="Ваш вопрос" rows={4} className="w-full rounded-2xl border border-input bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <Button size="lg" className="w-full rounded-full font-bold text-base py-3">
                <Icon name="Send" size={18} className="mr-2" /> Отправить сообщение
              </Button>
            </form>
            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              {[
                { icon: 'Phone', t: '+7 (900) 000-00-00' },
                { icon: 'Mail', t: 'anna@detsad.ru' },
                { icon: 'MapPin', t: 'Детский сад №7' },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-2 text-sm">
                  <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={16} className="text-primary" />
                  </span>
                  <span className="text-muted-foreground">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">🐻</span>
            <span className="font-display font-bold">Анна Петрова</span>
          </div>
          <p className="text-sm text-muted-foreground">С заботой о каждом ребёнке • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
