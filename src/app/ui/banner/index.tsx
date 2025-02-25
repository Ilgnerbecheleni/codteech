import Image from "next/image";

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}
import image from '/public/mundo.jpg'
export default function Banner({ imageUrl, title, subtitle }: BannerProps) {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative bg-black bg-opacity-50 p-4 rounded-md text-center z-10">
        <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
        <p className="text-white text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
