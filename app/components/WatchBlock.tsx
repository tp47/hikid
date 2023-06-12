"use client";

import { useState } from "react";

export default function WatchBlock() {
  const [selectedWatch, setSelectedWatch] = useState({
    color: "Черные",
    image: "blackWatch.jpg",
  });

  return (
    <section className="h-[800px] w-[1280px] bg-cover" style={{
      backgroundImage: `url('/${selectedWatch.image}')`
      }}>
      <div className="flex flex-col justify-between items-center w-full h-full">
        <h2 className="text-[#e5b1b6] text-5xl mb-4 mt-10">Наш продукт</h2>
        <div></div>
        <div className="mb-32 flex flex-row gap-12 pl-24">
          <button
            onClick={() =>
              setSelectedWatch({ color: "Черные", image: "blackWatch.jpg" })
            }
          >
            Черные
          </button>
          <button
            onClick={() =>
              setSelectedWatch({ color: "Красные", image: "redWatch.jpg" })
            }
          >
            Красные
          </button>
          <button
            onClick={() =>
              setSelectedWatch({ color: "Красные", image: "redWatch.jpg" })
            }
          >Белые</button>
        </div>
      </div>
    </section>
  );
}
