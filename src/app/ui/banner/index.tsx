interface BannerProps {
    imageUrl: string;
    title: string;
    subtitle: string;
  }
  
  export default function Banner({ imageUrl, title, subtitle }: BannerProps) {
    return (
      <div 
        className="bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
          <p className="text-white text-lg">{subtitle}</p>
        </div>
      </div>
    );
  }
  