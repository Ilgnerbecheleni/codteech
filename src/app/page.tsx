import Image from "next/image";
import Banner from "./ui/banner";
import { Code, Database, Cloud } from "lucide-react";
import Card from "./ui/card";
export default function Home() {
  return (
<div className="flex align-middle flex-col">
<Banner 
        imageUrl="./mundo.jpg" 
        title="Bem-vindo à CodTeech" 
        subtitle="Transformando ideias em soluções tecnológicas." 
      />
      
       <main className="bg-white px-6 py-24 sm:py-32 lg:px-8">
       
      <div className="mx-auto max-w-4xl text-center">
      <h1 className=" font-semibold text-indigo-800 text-5xl">Nossos Serviços</h1>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Soluções tecnológicas para seu negócio
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
        Oferecemos desenvolvimento de software, consultoria e suporte para alavancar sua empresa com tecnologia de ponta.
      </p>
      
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Desenvolvimento Web"
          description="Criação de sites e sistemas modernos e responsivos."
          icon={<Code />}
        />
        <Card
          title="Banco de Dados"
          description="Gerenciamento e otimização de bancos de dados eficientes."
          icon={<Database />}
        />
        <Card
          title="Computação em Nuvem"
          description="Soluções escaláveis para hospedagem e infraestrutura."
          icon={<Cloud />}
        />
      </div>
    </main>
</div>
  );
}
