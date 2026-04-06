import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/99779861-cb5a-485a-b430-cc84ec62681b.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Rubik', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="font-black text-2xl text-white drop-shadow" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          💧 АКВА<span className="text-yellow-300">ПАРК</span>
        </div>
        <div className="hidden md:flex gap-8 text-white font-semibold text-sm drop-shadow">
          <a href="#about" className="hover:text-yellow-300 transition-colors">Об аквапарке</a>
          <a href="#tickets" className="hover:text-yellow-300 transition-colors">Билеты</a>
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
            🌞 Открыто каждый день
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
                  { icon: "Waves", label: "Горок и бассейнов", value: "15+" },
                  { icon: "Users", label: "Гостей в год", value: "50 000+" },
                  { icon: "Clock", label: "Работаем", value: "с 9:00" },
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
                {["🏊 Бассейны", "🌊 Горки", "🎉 Аттракционы", "🍦 Кафе", "🅿️ Парковка"].map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
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
          💧 АКВА<span className="text-yellow-300">ПАРК</span>
        </div>
        <p className="text-blue-300 text-sm">Работаем каждый день · с 9:00 до 21:00</p>
        <div className="mt-6 flex justify-center gap-6 text-blue-400 text-sm">
          <a href="#about" className="hover:text-white transition-colors">Об аквапарке</a>
          <a href="#tickets" className="hover:text-white transition-colors">Билеты</a>
        </div>
      </footer>
    </div>
  );
}