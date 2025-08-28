"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Button from "../Buttons/Button";
import Link
 from "next/link";

 type Props={
  imageSrc:string;
  title:string;
 }

export default function Card({ imageSrc, title }: Props){
  const [selectedImageIndex , setSelectedImageIndex] = useState(0);
  const [isFavorite , setIsFavorite] = useState(false);
  const colors = ["#8C1007" , "#FBBF24" , "#34D399"];
  const [selectedColor , setSelectedColor] = useState<string | null>(null);
return(
<div className="relative w-100 bg-white overflow-hidden group">
  <div className="relative h-96 w-[350px]">
    <Link href="#">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </Link>

    <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300">
      <div className="absolute top-4 right-4 z-10">
      <Heart
        className={`w-6 h-6 ${isFavorite ? "text-red-500" : "text-white"}`}
        onClick={() => setIsFavorite(!isFavorite)}
      />
  </div>
   <div className="absolute bottom-4 left-4 z-10 text-white">
    <h2 className="text-lg font-bold">Hijabi Outfit</h2>
    <div className="flex gap-2 mt-2">
      {colors.map((color) => (
        <Button
          key={color}
          label=""
          className={`w-5 h-5 rounded-full border-2 ${
            selectedColor === color ? "border-black" : "border-white"
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  </div>
    </div>
  </div>
</div>

);

}