import Link from "next/link";

import WatchBlock from "./components/WatchBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <header className="fixed top-0 z-10 w-full backdrop-blur-lg">
        <nav className="flex flex-row justify-between h-24 items-center text-black  w-[1280px] mx-auto">
          <div>
            <Link href="/" className="text-3xl">
              <span>Hi</span>
              <span className="font-bold">Kid</span>
            </Link>
          </div>
          <div className="">
            <ul className="flex flex-row justify-end gap-20">
              <li>
                <a href="#main">Главная</a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#products">Наши продукты</a>
              </li>
              <li>
                <a href="#contacts">Связь с нами</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="h-[1000px] bg-[url('/figures.jpg')] w-full bg-no-repeat bg-cover pt-24">
        <div className="h-full w-full flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-7xl">HiKid</h2>
            <span className="text-gray-700">Важно быть рядом</span>
          </div>
          <a
            href="#about"
            className="w-60 h-12 block bg-gradient-to-br from-yellow-100 to-pink-300 text-black rounded-full text-center pt-2"
          >
            Узнать больше
          </a>
        </div>
      </section>

      <section
        id="about"
        className="w-[1280px] flex flex-row justify-between items-center my-20"
      >
        <div className="">
          <img src="/family.jpg" alt="Семья" />
        </div>
        <div className="basis-1/2 grow-0 shrink-0">
          <h2 className="text-[#e5b1b6] text-5xl mb-4">
            Безопасность - главное
          </h2>
          <p>
            Детская безопасность – важнейшая часть воспитания ребенка. Однако не
            каждый родитель задумывается о психологической безопасности и
            комфорте ребёнка. Часто родители даже не подозревают о проблемах и
            переживаниях своих детей: отношения в школе, с друзьями,
            времяпровождение.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="w-[1280px] flex flex-row justify-between items-center my-20"
      >
        <div className="">
          <h2 className="text-[#e5b1b6] text-5xl mb-4">Что такое HiKid</h2>
          <p>
            Умные часы HiKid разработаны именно для того, чтобы  вовремя
            выявлять подобные проблемы, помочь  ребёнку справиться с ними и
            привлечь внимание родителей.   
          </p>
        </div>
        <div className="basis-1/2 grow-0 shrink-0">
          <p>
            Уникальной особенностью HiKid, является встроенный персонаж на
            основе нейросети ChatGPT, который сможет общаться с ребёнком,
            интересоваться его настроением, психическом состоянии и даже дать
            совет.  В свою очередь при выявлении серьезных проблем, информация о
            них будет отображена в приложении, установленном на смартфонах
            родителей.
          </p>
        </div>
      </section>

      <WatchBlock />

      <section className="h-[800px] w-[1280px] bg-[url(/gradient.jpg)]">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <h2 className="text-[#e5b1b6] text-5xl mb-4 mt-10">Возможности HiKid</h2>
        </div>
      </section>

      <section className="h-[593px] w-[1280px] bg-[url(/map.png)]">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <h2 className="text-white text-5xl mb-4 mt-10">Связь с нами</h2>
          <div className="w-[500px] flex flex-col gap-6 justify-start mb-20">
            <div className="w-full">
              <input className="w-full p-3 rounded-xl" type="text" placeholder="Email" />
            </div>
            <div className="flex flex-row justify-center items-center gap-8">
              <input className="w-full p-3 rounded-xl" type="text" placeholder="Компания" />
              <input className="w-full p-3 rounded-xl" type="text" placeholder="Подразделение" />
            </div>
            <div>
              <textarea rows={5} className="w-full p-3 rounded-xl" placeholder="Сообщение"></textarea>
            </div>
            <div className="flex flex-row justify-center">
              <button className="p-4 block rounded-full bg-[#b4c8c5] hover:bg-green-200">Отправить</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
