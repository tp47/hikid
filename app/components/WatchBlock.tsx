"use client";

import { useState } from "react";

export default function WatchBlock() {
  const [selectedWatch, setSelectedWatch] = useState({
    color: "Бежевые",
    image: "bezhWatch.jpg",
  });

  return (
    <section
      className="h-[800px] w-[1280px] bg-cover"
      style={{
        backgroundImage: `url('/${selectedWatch.image}')`,
      }}
      id="products"
    >
      <div className="flex flex-col justify-start items-center w-full h-full">
        <h2 className="text-[#e5b1b6] text-5xl mb-4 mt-32">Наш продукт</h2>
        <div className="self-start ml-20 backdrop-blur-lg p-8 rounded-xl border-gray-100 border">
          <p>
            <span className="font-bold">Вес</span>
            <br />
            33,5 г
            <br />
            <span className="font-bold">Экран</span>
            <br />
            Corning® Gorilla® Glass DX+
            <br />
            <span className="font-bold">Аккумулятор</span>
            <br />
            361 мА∙ч
            <br />
            <span className="font-bold">Класс пыле-влагозащиты</span>
            <br />
            IP67
            <br />
            <span className="font-bold">Оперативная память</span>
            <br />
            4 гб
            <br />
            <span className="font-bold">Внутренняя память</span>
            <br />
            16 гб
            <br />
            <span className="font-bold">Год релиза</span>
            <br />
            2023
          </p>
        </div>
        <div className="mt-12 flex flex-row gap-12 pl-24">
          <button
            onClick={() =>
              setSelectedWatch({ color: "Бежевые", image: "bezhWatch.jpg" })
            }
          >
            Бежевые
          </button>
          <button
            onClick={() =>
              setSelectedWatch({ color: "Голубые", image: "blueWatch.jpg" })
            }
          >
            Голубые
          </button>
          <button
            onClick={() =>
              setSelectedWatch({ color: "Красные", image: "redWatch.jpg" })
            }
          >
            Красные
          </button>
        </div>
      </div>
    </section>
  );
}
