"use client"
import Card from "../Card";
export default function ImagesGallery() {

      const images = [
    { src: "/images/hijabi1.jpg", title: "Hijabi Outfit 1" },
    { src: "/images/hijabi2.jpg", title: "Hijabi Outfit 2" },
    { src: "/images/hijabi3.jpg", title: "Hijabi Outfit 3" },
  ];

return(
<div className="flex flex-wrap justify-center gap-4 p-4">
  {images.slice(0,4).map((img) => (
    <div className="w-1/2 sm:w-1/3 lg:w-auto" key={img.src}>
      <Card imageSrc={img.src} title={img.title} />
    </div>
  ))}
</div>
);
}
