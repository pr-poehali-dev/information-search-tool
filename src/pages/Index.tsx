import { useState } from "react";
import Icon from "@/components/ui/icon";

const JAPAN_IMAGES = [
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/10f0bbc7-094d-46fe-bc80-7d682d50e46a.jpg",
];

const GOLDEN_IMAGES = [
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/4b961ccf-ce27-4698-a34a-d2faeaf5112d.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/cfb85aad-47af-4f2b-b00a-9da0adb5d061.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/60e6a55a-cd24-4a03-99e8-70a0a898fb0e.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/cdb503e8-499e-4270-8246-e822c0f2b51e.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/9b1a358d-ae7e-4f42-8dcf-2c3aed4f46a4.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/031ec82c-0b4a-454e-89a1-991dd579eee1.jpg",
];

const PIRATE_IMAGES = [
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/5236c831-c7d6-4e52-bc05-850a234c1173.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/954fdbab-5dc9-43ec-97d1-85d8f1ce992b.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/abb32394-88b8-4c0b-8c05-78e5aa87d1de.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/1d129c48-fec5-4811-986f-ee0fc5a82387.jpg",
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/fdd20623-9ab0-47e9-ab0f-ef33007e5775.jpg",
];

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/99779861-cb5a-485a-b430-cc84ec62681b.jpg";

const GALLERY_IMAGES = [
  "https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/7e84753a-54b1-42da-9cdb-b80f9c4118bd.jpg",
];

function GalleryCarousel() {
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setSlide((s) => (s - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  const next = () => setSlide((s) => (s + 1) % GALLERY_IMAGES.length);
  const lbPrev = () => setLightbox((i) => i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null);
  const lbNext = () => setLightbox((i) => i !== null ? (i + 1) % GALLERY_IMAGES.length : null);

  return (
    <>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
        <img
          src={GALLERY_IMAGES[slide]}
          alt={`Фото ${slide + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setLightbox(slide)}
        />
        {GALLERY_IMAGES.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110">
              <Icon name="ChevronLeft" size={20} className="text-gray-800" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110">
              <Icon name="ChevronRight" size={20} className="text-gray-800" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {GALLERY_IMAGES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`w-2 h-2 rounded-full transition-colors ${i === slide ? "bg-white" : "bg-white/50"}`} />
              ))}
            </div>
          </>
        )}
        <div className="absolute bottom-3 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
          {slide + 1} / {GALLERY_IMAGES.length}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4" onClick={() => setLightbox(null)}>
          {GALLERY_IMAGES.length > 1 && (
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all z-10" onClick={(e) => { e.stopPropagation(); lbPrev(); }}>
              <Icon name="ChevronLeft" size={28} className="text-white" />
            </button>
          )}
          <div className="relative" style={{ maxHeight: "90vh", maxWidth: "90vw" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center">
              <Icon name="X" size={18} className="text-white" />
            </button>
            <img src={GALLERY_IMAGES[lightbox]} alt="Фото" className="rounded-2xl object-contain" style={{ maxHeight: "90vh", maxWidth: "90vw" }} />
            {GALLERY_IMAGES.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {GALLERY_IMAGES.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }} className={`w-2 h-2 rounded-full transition-colors ${i === lightbox ? "bg-white" : "bg-white/40"}`} />
                ))}
              </div>
            )}
          </div>
          {GALLERY_IMAGES.length > 1 && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all z-10" onClick={(e) => { e.stopPropagation(); lbNext(); }}>
              <Icon name="ChevronRight" size={28} className="text-white" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTrainerVideo, setShowTrainerVideo] = useState(false);
  const [pirateSlide, setPirateSlide] = useState(0);
  const [japanSlide, setJapanSlide] = useState(0);
  const [goldenSlide, setGoldenSlide] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxImg(images[index]);
  };
  const lightboxPrev = () => { const i = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; setLightboxIndex(i); setLightboxImg(lightboxImages[i]); };
  const lightboxNext = () => { const i = (lightboxIndex + 1) % lightboxImages.length; setLightboxIndex(i); setLightboxImg(lightboxImages[i]); };

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
          <a href="#schedule" className="hover:text-yellow-300 transition-colors">Расписание</a>
          <a href="#massage" className="hover:text-yellow-300 transition-colors">Массаж</a>
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
              <div
                className="rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer group"
                style={{ height: 380 }}
                onClick={() => setShowVideoModal(true)}
              >
                <video
                  src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/a0a41bf4-cfd9-46f1-b0ba-06ea7e48d285.mp4"
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
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
              <img src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/a37cf560-2025-44f9-941b-d00f19dfc78a.jpg" alt="Банный комплекс Леший" className="w-full h-52 object-cover object-top" />
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

          {/* Галерея комплекса */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <h3 className="font-black text-2xl md:text-3xl text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Фото комплекса</h3>
              <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
            </div>
            <GalleryCarousel />
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
              <div className="h-48 relative group">
                <img
                  src={PIRATE_IMAGES[pirateSlide]}
                  alt="Пиратская сауна"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(PIRATE_IMAGES, pirateSlide)}
                />
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all"
                  onClick={(e) => { e.stopPropagation(); setPirateSlide((pirateSlide - 1 + PIRATE_IMAGES.length) % PIRATE_IMAGES.length); }}
                >
                  <Icon name="ChevronLeft" size={13} className="text-gray-700" />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all"
                  onClick={(e) => { e.stopPropagation(); setPirateSlide((pirateSlide + 1) % PIRATE_IMAGES.length); }}
                >
                  <Icon name="ChevronRight" size={13} className="text-gray-700" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {PIRATE_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === pirateSlide ? "bg-white" : "bg-white/50"}`}
                      onClick={(e) => { e.stopPropagation(); setPirateSlide(i); }}
                    />
                  ))}
                </div>
              </div>
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
              <div className="h-48 relative">
                <img
                  src={JAPAN_IMAGES[japanSlide]}
                  alt="Японская сауна"
                  className="w-full h-full object-cover object-[center_40%] cursor-pointer"
                  onClick={() => openLightbox(JAPAN_IMAGES, japanSlide)}
                />
                {JAPAN_IMAGES.length > 1 && <>
                  <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all" onClick={(e) => { e.stopPropagation(); setJapanSlide((japanSlide - 1 + JAPAN_IMAGES.length) % JAPAN_IMAGES.length); }}>
                    <Icon name="ChevronLeft" size={13} className="text-gray-700" />
                  </button>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all" onClick={(e) => { e.stopPropagation(); setJapanSlide((japanSlide + 1) % JAPAN_IMAGES.length); }}>
                    <Icon name="ChevronRight" size={13} className="text-gray-700" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {JAPAN_IMAGES.map((_, i) => <button key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === japanSlide ? "bg-white" : "bg-white/50"}`} onClick={(e) => { e.stopPropagation(); setJapanSlide(i); }} />)}
                  </div>
                </>}
              </div>
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
              <div className="h-48 relative">
                <img
                  src={GOLDEN_IMAGES[goldenSlide]}
                  alt="Золотая Азия"
                  className="w-full h-full object-cover object-[center_70%] cursor-pointer"
                  onClick={() => openLightbox(GOLDEN_IMAGES, goldenSlide)}
                />
                {GOLDEN_IMAGES.length > 1 && <>
                  <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all" onClick={(e) => { e.stopPropagation(); setGoldenSlide((goldenSlide - 1 + GOLDEN_IMAGES.length) % GOLDEN_IMAGES.length); }}>
                    <Icon name="ChevronLeft" size={13} className="text-gray-700" />
                  </button>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 hover:bg-white shadow rounded-full flex items-center justify-center transition-all" onClick={(e) => { e.stopPropagation(); setGoldenSlide((goldenSlide + 1) % GOLDEN_IMAGES.length); }}>
                    <Icon name="ChevronRight" size={13} className="text-gray-700" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {GOLDEN_IMAGES.map((_, i) => <button key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === goldenSlide ? "bg-white" : "bg-white/50"}`} onClick={(e) => { e.stopPropagation(); setGoldenSlide(i); }} />)}
                  </div>
                </>}
              </div>
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

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/426dcce2-b59e-40ce-9529-a3e19cfa5cc4.jpg"
                alt="Пенная вечеринка у бассейна"
                className="w-full object-cover"
                style={{ maxHeight: 400 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                <div className="text-4xl mb-3">🎂</div>
                <h3 className="font-black text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Отпразднуйте день рождения незабываемо!</h3>
                <p className="text-white/85 text-base mb-5 max-w-2xl">
                  Пенная вечеринка у бассейна, светомузыка и дым-машина для настоящего веселья! У нас всегда лето +30° и отличное настроение — мы сделаем ваш праздник ярким и незабываемым.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["🫧 Пенная вечеринка", "🎵 Светомузыка", "💨 Дым-машина", "☀️ Всегда +30°"].map((t) => (
                    <span key={t} className="bg-white/20 backdrop-blur text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/30">{t}</span>
                  ))}
                </div>
                <a
                  href="tel:+79147926364"
                  className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Забронировать: 8 (914) 792-63-64
                </a>
              </div>
            </div>
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

          {/* Фото команды + описание */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer group"
              style={{ minHeight: 320 }}
              onClick={() => setShowTrainerVideo(true)}
            >
              <video
                src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/6c715da7-e8bf-4532-ac56-b37fb1473972.mp4"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-black text-2xl text-blue-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Светлана Вячеславовна
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Профессиональный тренер по плаванию. Занятия для детей и взрослых —
                  индивидуально и в группах, с любым уровнем подготовки.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "👶", title: "Дети с 3 лет", desc: "Обучение с нуля, безопасно и весело" },
                  { icon: "🧑", title: "Взрослые", desc: "Научим плавать в любом возрасте" },
                  { icon: "🌊", title: "Аквааэробика", desc: "Групповые занятия для здоровья и фигуры" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-blue-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
                <div className="text-sm text-gray-500 mb-4 font-medium">Записаться к тренеру</div>
                <div className="flex gap-3">
                  <a
                    href="https://t.me/+79244296477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#2AABEE] hover:bg-[#1a9bde] text-white font-bold py-3 px-4 rounded-xl transition-colors"
                  >
                    <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Telegram</span>
                  </a>
                  <a
                    href="https://wa.me/79244296477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold py-3 px-4 rounded-xl transition-colors"
                  >
                    <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+79244296477"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl transition-colors"
                  >
                    <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Max</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Расписание */}
          <div id="schedule" className="grid md:grid-cols-2 gap-8">
            {/* Взрослый аквафитнес */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🏊‍♀️</div>
                <h3 className="font-black text-2xl text-blue-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Взрослый аквафитнес
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Понедельник", times: "18:45 и 19:30" },
                  { day: "Вторник", times: "9:15" },
                  { day: "Среда", times: "18:45 и 19:30" },
                  { day: "Четверг", times: "9:15" },
                  { day: "Суббота", times: "9:30" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between bg-white rounded-2xl px-5 py-3 shadow-sm">
                    <span className="font-semibold text-blue-900">{item.day}</span>
                    <span className="text-blue-600 font-bold">{item.times}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Детское плавание */}
            <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-3xl p-8 shadow-xl border border-cyan-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🧒</div>
                <h3 className="font-black text-2xl text-blue-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Детское плавание
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Понедельник", times: "18:00" },
                  { day: "Среда", times: "18:00" },
                  { day: "Суббота", times: "8:45 и 10:15" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between bg-white rounded-2xl px-5 py-3 shadow-sm">
                    <span className="font-semibold text-blue-900">{item.day}</span>
                    <span className="text-cyan-600 font-bold">{item.times}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm border border-cyan-100">
                <div className="text-sm text-gray-500 mb-1">Записаться к Светлане Вячеславовне</div>
                <a href="tel:+79244296477" className="font-black text-lg text-blue-700 hover:text-blue-500 transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  8 (924) 429-64-77
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASSAGE */}
      <section id="massage" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Расслабление и восстановление</span>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Вьетнамский массаж
            </h2>
            <div className="w-16 h-1.5 bg-rose-400 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/files/a16c523e-cf5a-4e52-a57b-347b7bbc05a6.jpg"
                alt="Вьетнамский массаж горячими камнями"
                className="w-full h-full object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                У нас работают профессиональные вьетнамские мастера — настоящие эксперты своего дела. Массаж горячими камнями снимает напряжение, улучшает кровообращение и дарит глубокое расслабление после водных процедур.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🇻🇳</span>
                    <div className="font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Фан — лечебный массаж</div>
                  </div>
                  <div className="text-gray-500 text-sm mb-3">Магнитно-резонансная терапия · Лицензированный специалист</div>
                  <a href="tel:+79247878088" className="flex items-center gap-2 text-rose-600 hover:text-rose-500 transition-colors font-bold">
                    <Icon name="Phone" size={16} className="text-rose-500" />
                    8 (924) 787-80-88
                  </a>
                </div>

                <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">💆‍♀️</span>
                    <div className="font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Татьяна — расслабляющий и спортивный</div>
                  </div>
                  <div className="text-gray-500 text-sm mb-3">Снятие напряжения, восстановление после нагрузок</div>
                  <a href="tel:+79242372678" className="flex items-center gap-2 text-rose-600 hover:text-rose-500 transition-colors font-bold">
                    <Icon name="Phone" size={16} className="text-rose-500" />
                    8 (924) 237-26-78
                  </a>
                </div>
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
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-5 h-5 accent-blue-600 rounded cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-gray-500 leading-relaxed">
                    Я согласен(а) с{" "}
                    <button type="button" onClick={() => setShowPersonal(true)} className="text-blue-600 underline hover:text-blue-500 transition-colors">
                      обработкой персональных данных
                    </button>{" "}
                    и{" "}
                    <button type="button" onClick={() => setShowPrivacy(true)} className="text-blue-600 underline hover:text-blue-500 transition-colors">
                      политикой конфиденциальности
                    </button>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading || !agreed}
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
        <div className="mt-6 flex justify-center gap-6 text-blue-400 text-sm flex-wrap">
          <a href="#about" className="hover:text-white transition-colors">Об аквапарке</a>
          <a href="#tickets" className="hover:text-white transition-colors">Билеты</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </div>
        <div className="mt-4 flex justify-center gap-6 text-blue-500 text-xs flex-wrap">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors underline underline-offset-2">
            Политика конфиденциальности
          </button>
          <button onClick={() => setShowPersonal(true)} className="hover:text-white transition-colors underline underline-offset-2">
            Обработка персональных данных
          </button>
        </div>
        <p className="text-blue-600 text-xs mt-4">© 2024 Аквапарк ГородОК. Все права защищены.</p>
      </footer>

      {/* MODAL: Lightbox фото */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
          onClick={() => setLightboxImg(null)}
        >
          {lightboxImages.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all z-10"
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            >
              <Icon name="ChevronLeft" size={28} className="text-white" />
            </button>
          )}
          <div className="relative" style={{ maxHeight: "90vh", maxWidth: "90vw" }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={18} className="text-white" />
            </button>
            <img
              src={lightboxImg}
              alt="Фото"
              className="rounded-2xl object-contain"
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
            {lightboxImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {lightboxImages.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? "bg-white" : "bg-white/40"}`}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); setLightboxImg(lightboxImages[i]); }}
                  />
                ))}
              </div>
            )}
          </div>
          {lightboxImages.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all z-10"
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            >
              <Icon name="ChevronRight" size={28} className="text-white" />
            </button>
          )}
        </div>
      )}

      {/* MODAL: Видео тренера */}
      {showTrainerVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
          onClick={() => setShowTrainerVideo(false)}
        >
          <div
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "90vh", maxWidth: "min(90vw, calc(90vh * 9/16))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTrainerVideo(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={18} className="text-white" />
            </button>
            <video
              src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/6c715da7-e8bf-4532-ac56-b37fb1473972.mp4"
              className="block"
              style={{ maxHeight: "90vh", width: "auto" }}
              autoPlay
              muted
              controls
              playsInline
            />
          </div>
        </div>
      )}

      {/* MODAL: Видео */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "90vh", maxWidth: "min(90vw, calc(90vh * 9/16))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={18} className="text-white" />
            </button>
            <video
              src="https://cdn.poehali.dev/projects/99f157bb-932d-4e14-b01a-398ebe020b15/bucket/a0a41bf4-cfd9-46f1-b0ba-06ea7e48d285.mp4"
              className="block"
              style={{ maxHeight: "90vh", width: "auto" }}
              autoPlay
              muted
              controls
              playsInline
            />
          </div>
        </div>
      )}

      {/* MODAL: Политика конфиденциальности */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowPrivacy(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors">
              <Icon name="X" size={24} />
            </button>
            <h2 className="font-black text-2xl text-blue-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Политика конфиденциальности</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p><strong>1. Общие положения</strong><br />Настоящая политика конфиденциальности определяет порядок обработки информации о пользователях сайта Аквапарк «ГородОК» (г. Владивосток, ул. Ватутина, 4б).</p>
              <p><strong>2. Какие данные мы собираем</strong><br />Мы можем собирать следующие данные: имя, номер телефона, текст сообщения, оставленные через форму обратной связи на сайте.</p>
              <p><strong>3. Цели использования</strong><br />Данные используются исключительно для обратной связи с вами: ответа на вопросы, записи на занятия, бронирования услуг.</p>
              <p><strong>4. Передача данных третьим лицам</strong><br />Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.</p>
              <p><strong>5. Безопасность</strong><br />Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа.</p>
              <p><strong>6. Контакты</strong><br />По вопросам конфиденциальности обращайтесь по телефону: 8 (914) 792-63-64.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Обработка персональных данных */}
      {showPersonal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setShowPersonal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowPersonal(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors">
              <Icon name="X" size={24} />
            </button>
            <h2 className="font-black text-2xl text-blue-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Обработка персональных данных</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p><strong>1. Оператор данных</strong><br />Оператором персональных данных является Аквапарк «ГородОК», расположенный по адресу: г. Владивосток, ул. Ватутина, 4б.</p>
              <p><strong>2. Правовое основание</strong><br />Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006.</p>
              <p><strong>3. Состав персональных данных</strong><br />Обрабатываются следующие данные: фамилия, имя, номер телефона, содержание обращения.</p>
              <p><strong>4. Способы обработки</strong><br />Сбор, запись, хранение, уточнение, использование, удаление персональных данных. Обработка осуществляется без передачи по сети Интернет третьим лицам.</p>
              <p><strong>5. Срок хранения</strong><br />Персональные данные хранятся не дольше, чем этого требуют цели их обработки, и удаляются по достижении целей или по вашему запросу.</p>
              <p><strong>6. Права субъекта данных</strong><br />Вы вправе запросить доступ к своим данным, их исправление или удаление, направив обращение на телефон: 8 (914) 792-63-64.</p>
              <p><strong>7. Согласие</strong><br />Отправляя форму на сайте, вы даёте согласие на обработку своих персональных данных в указанных целях.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}