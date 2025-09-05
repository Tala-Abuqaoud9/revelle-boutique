" use client";
import BigCard from "@/components/BigCard";

type Props = {
  imageSrc: string;
  description: string;
};

export default function NewInSection() {
  const cards = [
    { imageSrc: "/images/bag1.avif", description: "Elegant Handbag" },
    { imageSrc: "/images/bag2.avif", description: "Stylish Backpack" },
  ];
  return (
    <div className="flex flex-wrap justify-between gap-1 w-full">
      {cards.map((card, index) => (
          <BigCard key={index} imageSrc={card.imageSrc} title={card.description} />
      ))}
    </div>
  );
}
