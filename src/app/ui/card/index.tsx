import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode; // Permite receber um ícone como JSX/React Component
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
      <div className="text-indigo-400 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
