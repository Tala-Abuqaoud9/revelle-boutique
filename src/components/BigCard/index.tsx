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
  className?:string;
 }

export default function Card({ imageSrc, title , className}: Props){
  const [selectedImageIndex , setSelectedImageIndex] = useState(0);
  const [isFavorite , setIsFavorite] = useState(false);
  const colors = ["#8C1007" , "#FBBF24" , "#34D399"];
  const [selectedColor , setSelectedColor] = useState<string | null>(null);
return(
<div className="relative w-100 bg-white overflow-hidden group">
  <div className="relative h-96 w-[710px]">
    <Link href="#">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </Link>

    <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-5 transition-opacity duration-300">
   <div className="absolute bottom-4 left-4 z-10 text-white">
    <h2 className="text-lg font-bold">Bag1</h2>
  </div>
    </div>
  </div>
</div>

);

}