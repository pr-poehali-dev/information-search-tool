import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/99779861-cb5a-485a-b430-cc84ec62681b.jpg";

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Rubik', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="font-black text-2xl text-white drop-shadow" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          💧 <span className="text-yellow-300">ГородОК</span>
        </div>
        <div className="hidden md:flex gap-8 text-white font-semibold text-sm drop-shadow">
          <a href="#about" className="hover:text-yellow-300 transition-colors">Об аквапарке</a>
          <a href="#saunas" className="hover:text-yellow-300 transition-colors">Парилки</a>
          <a href="#private-saunas" className="hover:text-yellow-300 transition-colors">Сауны</a>
          <a href="#trainer" className="hover:text-yellow-300 transition-colors">Тренер</a>
          <a href="#tickets" className="hover:text-yellow-300 transition-colors">Билеты</a>
          <a href="#contacts" className="hover:text-yellow-300 transition-colors">Контакты</a>
          <a href="#feedback" className="hover:text-yellow-300 transition-colors">Связаться</a>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-5 py-2 rounded-full text-sm transition-all hover:scale-105 shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Купить билет
        </button>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0077b6 0%, #00b4d8 40%, #90e0ef 80%, #caf0f8 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />

        {/* волны */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z" fill="white" />
          </svg>
        </div>

        {/* брызги */}
        <div className="absolute top-20 left-10 text-6xl opacity-40 animate-bounce" style={{ animationDuration: "3s" }}>💦</div>
        <div className="absolute top-32 right-16 text-4xl opacity-30 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>🌊</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-30 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>💧</div>

        <div className="relative z-10 px-6 max-w-4xl">
          <div className="inline-block bg-yellow-400 text-blue-900 font-bold text-sm px-4 py-1 rounded-full mb-6 shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            🌞 Работаем круглосуточно · Дети до 22:00
          </div>
          <h1
            className="font-black text-white leading-tight mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              textShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            МОРЕ ВЕСЕЛЬЯ
            <br />
            <span className="text-yellow-300">ЖДЁТ ТЕБЯ!</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Аттракционы, горки и бассейны для всей семьи.<br />
            Незабываемые впечатления каждый день!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-2xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth" })}
            >
              Купить билет
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg px-10 py-4 rounded-full transition-all hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Добро пожаловать</span>
            <h2 className="font-black text-4xl md:text-5xl text-blue-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Об аквапарке
            </h2>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: 380 }}>
                <img src={HERO_IMAGE} alt="Аквапарк" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Наш аквапарк — это место, где смех и брызги никогда не заканчиваются.
                Современные аттракционы, безопасные зоны для детей и уютные зоны отдыха
                для взрослых ждут вас каждый день.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: "Waves", label: "Водных горок", value: "4" },
                  { icon: "Users", label: "Гостей в год", value: "50 000+" },
                  { icon: "Clock", label: "Работаем", value: "24/7" },
                  { icon: "Star", label: "Рейтинг гостей", value: "4.9 ★" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100"
                  >
                    <div className="text-blue-500 mb-2">
                      <Icon name={item.icon} fallback="Star" size={22} />
                    </div>
                    <div className="font-black text-2xl text-blue-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["🏊 Бассейны", "🌊 Горки", "🎉 Аттракционы", "🍦 Кафе", "🧖 Парилки", "🅿️ Парковка"].map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAUNAS */}
      <section id="saunas" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Омолаживающие процедуры</span>
            <h2 className="font-black text-4xl md:text-5xl text-orange-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              3 парилки на дровах
            </h2>
            <div className="w-16 h-1.5 bg-orange-400 rounded-full mx-auto mt-5" />
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">Настоящий жар, природные ароматы и полное расслабление для тела и души</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Леший */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-1 hover:scale-[1.01] transform duration-300">
              <div className="h-3 bg-gradient-to-r from-green-600 to-emerald-500" />
              <div className="p-8">
                <div className="text-5xl mb-5">🌲</div>
                <h3 className="font-black text-2xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Леший</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Русская баня на дровах с берёзовыми вениками и хвойным ароматом.
                  Жар до 90°C, пар лёгкий и чистый — как в настоящем лесу.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["🔥 До 90°C", "🌿 Берёзовый веник", "🌲 Хвойный аромат"].map((t) => (
                    <span key={t} className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Хамам */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-1 hover:scale-[1.01] transform duration-300">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="p-8">
                <div className="text-5xl mb-5">🫧</div>
                <h3 className="font-black text-2xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Хамам</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Турецкая баня с влажным паром и мраморным теплом. Мягко очищает кожу,
                  снимает усталость и дарит ощущение невесомости.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["💧 Влажный пар", "🪨 Мраморный прогрев", "✨ Очищение кожи"].map((t) => (
                    <span key={t} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Соляная */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-1 hover:scale-[1.01] transform duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-400 to-yellow-400" />
              <div className="p-8">
                <div className="text-5xl mb-5">🧂</div>
                <h3 className="font-black text-2xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Соляная</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Парилка с гималайской солью. Насыщает воздух минералами,
                  укрепляет иммунитет и оздоравливает органы дыхания.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["🧘 Дыхание", "💛 Минералы", "🛡️ Иммунитет"].map((t) => (
                    <span key={t} className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE SAUNAS */}
      <section id="private-saunas" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Для особых случаев</span>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Тематические сауны
            </h2>
            <div className="w-16 h-1.5 bg-purple-400 rounded-full mx-auto mt-5" />
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">3 индивидуальные сауны — идеальное место для тематических дней рождения и праздников в кругу близких</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {/* Пиратская */}
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/4b961ccf-ce27-4698-a34a-d2faeaf5112d.jpg)` }} />
              <div className="p-7">
                <div className="text-4xl mb-3">🏴‍☠️</div>
                <h3 className="font-black text-xl text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Пиратская</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Деревянный декор, морская атмосфера и настоящий пиратский дух. Детский праздник, который запомнится навсегда!</p>
                <div className="flex flex-wrap gap-2">
                  {["🎉 День рождения", "👦 Для детей", "🌊 Морская тема"].map((t) => (
                    <span key={t} className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Японская */}
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-cover bg-center bg-[center_40%]" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/4b961ccf-ce27-4698-a34a-d2faeaf5112d.jpg)` }} />
              <div className="p-7">
                <div className="text-4xl mb-3">⛩️</div>
                <h3 className="font-black text-xl text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Японская</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Бамбук, камень и минимализм. Атмосфера японской бани офуро — гармония и умиротворение для взрослых.</p>
                <div className="flex flex-wrap gap-2">
                  {["🎉 День рождения", "🧘 Медитация", "🎋 Восточный стиль"].map((t) => (
                    <span key={t} className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Золотая Азия */}
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-cover bg-center bg-[center_70%]" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/4b961ccf-ce27-4698-a34a-d2faeaf5112d.jpg)` }} />
              <div className="p-7">
                <div className="text-4xl mb-3">🏮</div>
                <h3 className="font-black text-xl text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Золотая Азия</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Роскошный декор в золотых тонах, восточные мотивы и атмосфера праздника. Для торжеств, которые хочется запомнить.</p>
                <div className="flex flex-wrap gap-2">
                  {["🎉 День рождения", "✨ Роскошь", "🥂 Торжество"].map((t) => (
                    <span key={t} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
            <div className="text-4xl mb-4">🎂</div>
            <h3 className="font-black text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Отпразднуйте день рождения незабываемо!</h3>
            <p className="text-white/80 text-lg mb-6">Забронируйте тематическую сауну для своего праздника — мы сделаем всё, чтобы было весело</p>
            <a
              href="tel:+79147926364"
              className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Забронировать: 8 (914) 792-63-64
            </a>
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section id="trainer" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Профессиональное обучение</span>
            <h2 className="font-black text-4xl md:text-5xl text-blue-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Обучение плаванию
            </h2>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <img
                src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/c3bd307a-122c-4d91-9283-d8ccafe7c621.jpg"
                alt="Тренер по плаванию"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-black text-2xl text-blue-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Профессиональный тренер
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  В нашем комплексе работает опытный тренер по плаванию. Занятия проводятся
                  индивидуально и в группах — для детей и взрослых, с любым уровнем подготовки.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: "👶", title: "Дети с 3 лет", desc: "Обучение с нуля, безопасно и весело" },
                  { icon: "🧑", title: "Взрослые", desc: "Научим плавать в любом возрасте" },
                  { icon: "🌊", title: "Аквааэробика", desc: "Групповые занятия для здоровья и фигуры" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-blue-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</div>
                      <div className="text-gray-500 text-sm mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                <div className="text-sm text-gray-500 mb-2 font-medium">Записаться к тренеру</div>
                <a
                  href="tel:+79244296477"
                  className="flex items-center gap-3 text-blue-700 hover:text-blue-500 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={18} className="text-blue-600" />
                  </div>
                  <span className="font-black text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    8 (924) 429-64-77
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)", marginTop: -2 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* TICKETS */}
      <section
        id="tickets"
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Доступные цены</span>
            <h2 className="font-black text-4xl md:text-5xl text-white mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Билеты
            </h2>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5" />
            <p className="text-white/80 mt-4">Целый день незабываемых впечатлений</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Детский */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">👦</div>
              <h3 className="font-black text-xl text-blue-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Детский билет</h3>
              <p className="text-gray-500 text-sm mb-6">До 12 лет</p>
              <div className="font-black text-5xl text-blue-600 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>500 ₽</div>
              <p className="text-gray-400 text-sm mb-8">весь день</p>
              <ul className="text-left space-y-3 mb-8 text-gray-600">
                {["Все горки", "Детский бассейн", "Аттракционы", "Зона отдыха"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-2xl transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Купить
              </button>
            </div>

            {/* Взрослый */}
            <div
              className="rounded-3xl p-8 text-center shadow-2xl hover:scale-105 transition-transform relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #003f88, #0077b6)" }}
            >
              <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                Популярный
              </div>
              <div className="text-5xl mb-4">🧑</div>
              <h3 className="font-black text-xl text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Взрослый билет</h3>
              <p className="text-blue-300 text-sm mb-6">От 13 лет</p>
              <div className="font-black text-5xl text-yellow-300 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>700 ₽</div>
              <p className="text-blue-300 text-sm mb-8">весь день</p>
              <ul className="text-left space-y-3 mb-8 text-blue-100">
                {["Все горки", "Взрослый бассейн", "Все аттракционы", "Зона отдыха", "Шезлонг"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 rounded-2xl transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Купить
              </button>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-16">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Как нас найти</span>
            <h2 className="font-black text-4xl md:text-5xl text-blue-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Контакты
            </h2>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-blue-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Адрес</h3>
              <p className="text-gray-600 leading-relaxed">г. Владивосток<br />ул. Ватутина, 4б</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-blue-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Режим работы</h3>
              <p className="text-gray-600 leading-relaxed">Круглосуточно<br /><span className="text-blue-500 font-medium">Дети — до 22:00</span></p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-cyan-600" />
              </div>
              <h3 className="font-bold text-blue-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Телефон</h3>
              <a href="tel:+79147926364" className="text-blue-600 font-semibold text-lg hover:text-blue-500 transition-colors leading-relaxed block">
                8 (914) 792-63-64
              </a>
            </div>
          </div>

          {/* Карта */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=131.900&spn=0.02,0.02&l=map&pt=131.9,43.104,pm2blm~131.900,43.104,pm2blm&text=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA%2C+%D1%83%D0%BB.+%D0%92%D0%B0%D1%82%D1%83%D1%82%D0%B8%D0%BD%D0%B0+4%D0%B1&z=16"
              width="100%"
              height="360"
              frameBorder="0"
              allowFullScreen
              title="Карта аквапарка ГородОК"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section id="feedback" className="py-24 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Свяжитесь с нами</span>
            <h2 className="font-black text-4xl text-blue-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Обратная связь
            </h2>
            <div className="w-16 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5" />
            <p className="text-gray-500 mt-4">Ответим в течение дня</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-blue-100">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-black text-2xl text-blue-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Сообщение отправлено!</h3>
                <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  className="mt-6 text-blue-600 font-semibold underline text-sm"
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Номер телефона *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Ваш вопрос или пожелание..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 disabled:opacity-70 disabled:scale-100 shadow-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" size={20} className="animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} />
                      Отправить
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🌊</div>
          <h2 className="font-black text-3xl md:text-4xl text-blue-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Готов нырнуть в море радости?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Приходи с семьёй и друзьями — мы ждём вас каждый день с 9:00 до 21:00
          </p>
          <button
            className="text-white font-bold text-xl px-14 py-5 rounded-full transition-all hover:scale-105 shadow-2xl"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background: "linear-gradient(135deg, #0077b6, #00b4d8)",
            }}
          >
            Купить билет сейчас
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #03045e, #0077b6)" }}
      >
        <div className="font-black text-2xl text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          💧 <span className="text-yellow-300">ГородОК</span>
        </div>
        <p className="text-blue-300 text-sm mt-1">Аквапарк · г. Владивосток, ул. Ватутина, 4б</p>
        <p className="text-blue-400 text-sm mt-1">Работаем каждый день · с 9:00 до 21:00</p>
        <div className="mt-6 flex justify-center gap-6 text-blue-400 text-sm">
          <a href="#about" className="hover:text-white transition-colors">Об аквапарке</a>
          <a href="#tickets" className="hover:text-white transition-colors">Билеты</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </div>
      </footer>
    </div>
  );
}